const router = require("express").Router();
const product = require("./products");

router.get('/', (req, res) => {
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('pages/about');
})
router.get('/contact', (req, res) => {
    res.render('pages/contact');
})

router.use('/',product);
module.exports = router;