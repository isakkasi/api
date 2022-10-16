const router = require('express').Router();
const {createTemplate} = require ('../addOns/pdfCreator/create-template')



router.post('/', async (req, res) => {
    try {
        // Calling the template render func with dynamic data
    const result = await createTemplate(req.body);
  
    // Setting up the response headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=export.pdf`);
  
    // Streaming our resulting pdf back to the user
    result.pipe(res);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

module.exports = router;
