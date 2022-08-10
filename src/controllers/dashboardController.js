const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guardsMiddleware');
const { preload } = require('../middlewares/preloadMiddleware');
const dashboardService = require('../services/dashboardService');
const { errorMapper } = require('../util/errorMapper');

router.get('/', async (req, res) => {
    let result = {};
    try {
        result.questions = await dashboardService.questionsCount();
        result.ata = await dashboardService.ataCount();
        result.courses = await dashboardService.coursesCount();
        result.users = await dashboardService.usersCount();
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

module.exports = router;
