const express = require ('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.render('index',{ title : 'primera_pagina'});
});

router.get('/contact',(req,res)=>{
    res.render('contact',{title:'Contact page'})
})
module.exports = router;