const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guardsMiddleware');
const { preload } = require('../middlewares/preloadMiddleware');
const examService = require('../services/examService');
const examHistoryService = require('../services/examHistoryService');
const { errorMapper } = require('../util/errorMapper');

router.get('/', async (req, res) => {
    try {
        let result = await examService.getAll(req.query.where);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

// router.post("/", isAuth(), async (req, res) => {
router.post('/', async (req, res) => {
    try {
        const result = await examService.create(req.body);
        await examHistoryService.create({
            _examId: result._id,
            dateTime: Date.now(),
            action: 'create',
            currentValue: JSON.stringify(result),
            actionBy: req.user._id,
        });
        console.log('Exam created.');
        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.get('/:id', preload(examService), (req, res) => {
    res.json(res.locals.item);
});

// router.put("/:id", preload(examService), isOwner(), async (req, res) => {
router.put('/:id', preload(examService), async (req, res) => {
    console.log(req.body);
    try {
        const result = await examService.updateById(res.locals.item, req.body);
        await examHistoryService.create({
            _examId: result._id,
            dateTime: Date.now(),
            action: 'edit',
            currentValue: JSON.stringify(result),
            actionBy: req.user._id,
        });
        console.log('Exam edited.');

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Request error' });
    }
});

// router.delete("/:id", isAuth(), isOwner(), async (req, res) => {
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await examService.deleteById(id);
        await examHistoryService.create({
            _examId: result._id,
            dateTime: Date.now(),
            action: 'delete',
            currentValue: JSON.stringify(result),
            actionBy: req.user._id,
        });
        console.log('Exam deleted.');

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: `Item ${id} not found` });
    }
});

router.get('/:id/history', async (req, res) => {
    try {
        let result = await examService.getHistory(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

module.exports = router;
