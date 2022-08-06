const router = require('express').Router();

// const { isAuth, isOwner } = require("../middlewares/guardsMiddleware");
// const { preload } = require("../middlewares/preloadMiddleware");
// const questionService = require("../services/questionService");
// const questionHistoryService = require('../services/questionHistoryService')
// const { errorMapper } = require("../util/errorMapper");
const userService = require('../services/userService');
const { users, ata, courses, questions, comments, userDetails, roles } = require('../config/seedData');
const ataService = require('../services/ataService');
const questionService = require('../services/questionService');
const questionHistoryService = require('../services/questionHistoryService');
const courseService = require('../services/courseService');

router.get('/', async (req, res) => {
    try {
        await Promise.all(users().map((x) => userService.register(x.username, x.password)));
        const usersArr = await userService.getAll();
        const usersId = usersArr.map((x) => x._id);

        await Promise.all(ata().map((x) => ataService.create(x)));
        const ataArr = await ataService.getAll();
        const ataId = ataArr.map((x) => x._id);

        const result = await Promise.all(questions(ataId, usersId).map((x) => questionService.create(x)));
        await Promise.all(
            result.map((x) => {
                questionHistoryService.create({
                    _questionId: x._id,
                    dateTime: Date.now(),
                    action: 'create',
                    currentValue: JSON.stringify(x),
                    actionBy: x.author,
                });
                console.log('Question created.');
            })
        );
        const questionArr = await questionService.getAll();
        // const questionId = questionArr.map((x) => x._id);

        await Promise.all(comments(questionArr, usersId).map((x) => questionService.createComment(x.questionId._id, x)));

        await Promise.all(userDetails(usersId).map((x) => userService.updateUserDetails(x.userId, x)));
        await Promise.all(roles().map((x) => userService.createUserRoles(x)));
        await Promise.all(courses().map((x) => courseService.create(x)));

        res.json('Data seeded');
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

module.exports = router;
