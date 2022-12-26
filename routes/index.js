const router = require("express").Router();

router.get('/',(req,res)=>{
    res.render('index');
})
router.get('/about',(req,res)=>{
    res.render('pages/about');
})
router.get('/contact',(req,res)=>{
    res.render('pages/contact');
})

router.get('/products',(req,res)=>{
    res.render('products/products');
})
module.exports = router;