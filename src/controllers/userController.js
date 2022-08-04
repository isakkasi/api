//Refractured

const { auth } = require('../middlewares/authMiddleware');
const { cors } = require('../middlewares/corsMiddleware');
const { isAuth } = require('../middlewares/guardsMiddleware');
const userService = require('../services/userService');

const router = require('express').Router();

router.get('/list', async (req, res) => {
    try {
        const result = await userService.getAll();
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

router.get('/details/:id?', async (req, res) => {
    try {
        const result = await userService.getUserDetails(req.params.id);
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});


router.post('/details', async (req, res) => {
    try {
        const result = await userService.createUserDetails(req.body);
        console.log(result);
        res.status(201).json(result);
    } catch (err) {
        console.log();
        res.status(400).json({ message: err.message });
    }
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { username, password, role } = req.body;

    try {
        const result = await userService.register(username, password, role);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await userService.login(username, password);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

router.get('/logout', cors(), auth(), (req, res) => {
    userService.logout(req.user.token);
    res.status(204).end();
});

router.post('/role', async (req, res) => {
    try {
        const result = await userService.createUserRoles(req.body)
        res.status(204).json(result)
        
    } catch (err) {
        console.log(err);
        res.status(200).json({message: err})
    }
})

router.post('/role/:role', async (req, res) => {
    const role = req.params.role;
    try {
        const result = await userService.editUserRoles(role, req.body)
        res.status(204).json(result)
        
    } catch (err) {
        console.log(err);
        res.status(200).json({message: err})
    }
})

router.get('/role/:role', async (req, res) => {
    const role = req.params.role;
    try {
        const result = await userService.getRoleConfiguration(role);
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

router.put('/details/:userId', async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    console.log(req.body);
    try {
        const result = await userService.updateUserDetails(userId, req.body);
        console.log(result);
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
