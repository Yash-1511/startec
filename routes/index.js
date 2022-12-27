const router = require("express").Router();
const Category = require("../models/category");
const Product = require("../models/product")
router.get('/', (req, res) => {
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('pages/about');
})
router.get('/contact', (req, res) => {
    res.render('pages/contact');
})

router.get('/products', (req, res) => {
    res.render('products/products');
})

router.get('/products/:category', async (req, res) => {
    try {
        const slug = req.params.category;
        const category = await Category.findOne({
            slug:slug,
        })
        // console.log(category)
        const product = await Product.find({
            brand:category
        }).populate({
            path: "brand",
            select: "name isActive slug"
        })
        console.log(product)
        res.render('products/categoryproduct.ejs',{
            product,"categoryname":category.name
        })
    } catch (error) {
        console.log(error);
    }
})
router.get("/products/:category/product/:products",async(req,res)=>{
    try{
        const categoryslug = req.params.category;
        const productslug = req.params.products;
        const productDoc = await Product.findOne({
            slug:productslug,
        }).populate({
            path:"brand"
        })
        res.render("products/singleproduct.ejs",{
            productDoc
        })
    }catch(error){
        console.log(error);
    }
})

// router.get('/products/:category/:slug', (req, res) => {
//     res.render('products/categoryproduct.ejs')
// })
module.exports = router;