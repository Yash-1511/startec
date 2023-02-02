const router = require("express").Router();
const product = require("./products");
const Blog = require("../models/blog")
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/about', (req, res) => {
    res.render('pages/about');
})
router.get('/contact', (req, res) => {
    res.render('pages/contact');
})

router.get('/blogs',async (req,res)=>{
    try{
        const allblogs = await Blog.find({});
        res.render('blogs/blog',{allblogs});
    }
    catch(err){
        res.send('something went wrong');
    }
})
router.get('/blogs/:blog',async (req,res)=>{
    try{
        const slug = req.params.blog;
        const blog = await Blog.findOne({
            slug
        })
        res.render('blogs/singleblog',{blog})
    }catch(err){
        res.send('something went wrong')
    }
})
router.use('/',product);
module.exports = router;