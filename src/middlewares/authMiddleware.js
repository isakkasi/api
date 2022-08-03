//Refractured

const { validateToken } = require("../services/userService");

exports.auth = () => (req, res, next) => {
    
    const token = req.headers["x-authorization"];
    // console.log(req.headers);
    
    if (token && token !== 'undefined') {
        try {
            const payload = validateToken(token);
            
            req.user = {
                username: payload.username,
                _id: payload._id,
                token,
            };
            console.log('Request from: ' + req.user.username);
        } catch (err) {
            console.error(err);
            return res.status(401).json({ message: "Invalid access token. Please log in" });
        }
    }

    next();
};
