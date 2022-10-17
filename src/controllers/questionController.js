const router = require("express").Router();

const { isAuth, isOwner } = require("../middlewares/guardsMiddleware");
const { preload } = require("../middlewares/preloadMiddleware");
const questionService = require("../services/questionService");
const questionHistoryService = require('../services/questionHistoryService')
const { errorMapper } = require("../util/errorMapper");

router.get("/", async (req, res) => {
    try {
        let result = await questionService.getAll(req.query.where)
        res.json(result);
        // console.log(result);
        // res.json(await questionService.getAll(req.query.where)); --------- use this for normal operation
    } catch (err) {
        res.status(400).json({ message: "Bad request" });
    }
});

// router.post("/", isAuth(), async (req, res) => {
router.post("/", async (req, res) => {
    // console.log(req.body);
    try {
        const result = await questionService.create(req.body);
        await questionHistoryService.create({
            _questionId: result._id,
            dateTime: Date.now(),
            action: 'create',
            currentValue: JSON.stringify(result),
            actionBy: req.user._id,
        })
        console.log("Question created.");
        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.get("/:id", preload(questionService), (req, res) => {
    res.json(res.locals.item);
});

// router.put("/:id", preload(questionService), isOwner(), async (req, res) => {
router.put("/:id", preload(questionService), async (req, res) => {
    console.log(req.body);
    try {
        const result = await questionService.updateById(res.locals.item, req.body);
        await questionHistoryService.create({
            _questionId: result._id,
            dateTime: Date.now(),
            action: 'edit',
            currentValue: JSON.stringify(result),
            actionBy: req.user._id,
        })
        console.log("Question edited.");

        res.json(result);
        console.log(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Request error" });
    }
});

// router.delete("/:id", isAuth(), isOwner(), async (req, res) => {
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await questionService.deleteById(id);
        await questionHistoryService.create({
            _questionId: result._id,
            dateTime: Date.now(),
            action: 'delete',
            currentValue: JSON.stringify(result),
            actionBy: req.user._id,
        })
        console.log("Question deleted.");

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: `Item ${id} not found` });
    }
});

router.get("/:id/comments", async (req, res) => {
    // let id = req.params.id;
    try {
        let result = await questionService.getAllComments(req.params.id)
        res.json(result);
        // console.log(result);
        // res.json(await questionService.getAll(req.query.where)); --------- use this for normal operation
    } catch (err) {
        res.status(400).json({ message: "Bad request" });
    }
});

router.post("/:id/comments", async (req, res) => {
    console.log(req.params.id);
    try {
        const result = await questionService.createComment(req.params.id, req.body);
        // await questionHistoryService.create({
        //     _questionId: result._id,
        //     dateTime: Date.now(),
        //     action: 'create',
        //     currentValue: JSON.stringify(result),
        //     actionBy: req.user._id,
        // })
        console.log("Comment Created.");
        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.delete('/:commentId/comments', async (req, res) => {
     try {
        const result  = await questionService.deleteComment(req.params.commentId);
        console.log('Comment deleted');
        res.json(result)
     } catch (err) {
        console.log(err);
        res.status(400).json({message: err})
     }
})

router.get("/:id/history", async (req, res) => {
    // let id = req.params.id;
    try {
        let result = await questionService.getHistory(req.params.id)
        res.json(result);
        // console.log(result);
        // res.json(await questionService.getAll(req.query.where)); --------- use this for normal operation
    } catch (err) {
        res.status(400).json({ message: "Bad request" });
    }
});


module.exports = router;
