const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakersModel = require("./../models/Sneaker");


router.get('/prod-add', (req, res, next) => {
    res.render('products_add.hbs');
})


router.post('/prod-add', (req, res, next) => {
    // const {name, ref, size, description, price, category} = req.body
    SneakersModel.create(req.body)
    .then(() => {
        res.redirect('/sneakers/collection')
    })
    .catch(err => console.log(err))
})

router.get('/prod-manage', (req, res, next) => {
   
    SneakersModel.find()
    .then((dbRes) => {
        res.render('products_manage.hbs', {sneakers: dbRes})
    })
    .catch(next);

})




module.exports = router;