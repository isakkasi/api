const router = require('express').Router();
const userController = require('../controllers/userController');
const questionController = require('../controllers/questionController');
const courseController = require('../controllers/courseController');
const ataController = require('../controllers/ataController');
const typeController = require('../controllers/typeController');
const dashboardController = require('../controllers/dashboardController');
const examController = require('../controllers/examController');
const seedController = require('../controllers/seedController');
const pdfController = require('../controllers/pdfController');

router.use('/user', userController);
router.use('/question', questionController);
router.use('/course', courseController);
router.use('/ata', ataController);
router.use('/type', typeController);
router.use('/dashboard', dashboardController);
router.use('/exam', examController);
// router.use('/seed', seedController);
router.use('/pdf', pdfController);



module.exports = router;
