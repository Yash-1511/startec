require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const setupDB = require('./utils/db');
const app = express();
const port = process.env.PORT;
setupDB();
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set('layout', 'layout')
app.set("view engine", "ejs");
app.use('/uploads', express.static('uploads'));

//routes config
const indexRouter = require("./routes/index");
const adminRouter = require('./adminjs/index.ts');

app.use("/admin",adminRouter);
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/", indexRouter);  

app.listen(port,()=>{
    console.log(`Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`);
})