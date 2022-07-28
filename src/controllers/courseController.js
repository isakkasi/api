const router = require("express").Router();

const { isAuth, isOwner } = require("../middlewares/guardsMiddleware");
const { preload } = require("../middlewares/preloadMiddleware");
const courseService = require("../services/courseService");
const { errorMapper } = require("../util/errorMapper");

router.get("/", async (req, res) => {
    try {
        let result = await courseService.getAll(req.query.where)
        res.json(result);
        // console.log(result);
        // res.json(await courseService.getAll(req.query.where)); --------- use this for normal operation
    } catch (err) {
        res.status(400).json({ message: "Bad request" });
    }
});

// router.post("/", isAuth(), async (req, res) => {
router.post("/", async (req, res) => {
    // console.log(req.body);
    try {
        const result = await courseService.create(req.body);
        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.get("/:id", preload(courseService), (req, res) => {
    res.json(res.locals.item);
});

// router.put("/:id", preload(courseService), isOwner(), async (req, res) => {
router.put("/:id", preload(courseService), async (req, res) => {
    try {
        const result = await courseService.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Request error" });
    }
});

// router.delete("/:id", isAuth(), isOwner(), async (req, res) => {
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await courseService.deleteById(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: `Item ${id} not found` });
    }
});

module.exports = router;
