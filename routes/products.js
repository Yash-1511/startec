const router = require('express').Router();
const Product = require("../models/product");
const Category = require("../models/category");

router.get('/category', (req, res) => {
    res.render('products/category');
})

router.get('/category/:category', async (req, res) => {
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
            product,"categoryname":category?.name
        })
    } catch (error) {
        console.log(error);
    }
})
router.get("/products/:product",async(req,res)=>{
    try{
        const productslug = req.params.product;
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

module.exports = router;
