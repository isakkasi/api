//Refractured

const { auth } = require('../middlewares/authMiddleware');
const { cors } = require('../middlewares/corsMiddleware');
const { isAuth } = require('../middlewares/guardsMiddleware');
const userService = require('../services/userService');

const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await userService.register(username, password);
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

module.exports = router;
