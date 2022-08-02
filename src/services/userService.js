//Refractured


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const UserDetails = require('../models/UserDetails');
const UserRoles = require('../models/UserRoles');

const blacklist = new Set();

const JWT_SECRET = 'secret-word-for-signing-the-jwt';

exports.getAll = async () => await User.find({});

exports.getUserDetails = async (id) => await UserDetails.findOne({ userId: id });

exports.updateUserDetails = async (id, data) => await UserDetails.findOneAndUpdate({userId: id}, data)

exports.createUserDetails = async ({ userId, fullName, email, role, dateOfBirth, placeOfBirth }) =>
    await UserDetails.create({
        userId: userId,
        fullName: fullName,
        email: email,
        role: role,
        dateOfBirth: dateOfBirth,
        placeOfBirth: placeOfBirth,
    });

exports.register = async (username, password, role) => {
    // check if username is taken
    const usernameTaken = await User.findOne({ username: username });
    
    if (usernameTaken) {
        throw new Error('Username is taken');
    }
    
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // store user
    const user = await User.create({ username: username, password: hashedPassword, role: role });
    await UserDetails.create({userId: user._id})

    return createSession(user);
};

exports.login = async (username, password) => {
    // check if user exists
    const user = await User.findOne({ username: username });

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    // verify password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return createSession(user);
};

exports.logout = (token) => {
    blacklist.add(token);
    // console.log(blacklist);
};

exports.validateToken = (token) => {
    if (blacklist.has(token)) {
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(token, JWT_SECRET);
};

function createSession(user) {
    const payload = {
        username: user.username,
        _id: user._id,
        role: user.role
    };

    const accessToken = jwt.sign(payload, JWT_SECRET);

    return {
        username: user.username,
        accessToken,
        _id: user._id,
        role: user.role,
    };
}

exports.editUserRoles = (role, configuration) => UserRoles.findByIdAndUpdate({ role: role }, configuration);
exports.createUserRoles = (configuration) => UserRoles.create(configuration);
exports.getRoleConfiguration = (role) => UserRoles.findOne({role: role});