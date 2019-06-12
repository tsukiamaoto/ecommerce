const express = require('express');
const assert = require('assert');
const router = express.Router();

const Cart = require('../models/cart');
const Product = require('../models/product');

// get all products from this shopcart
router.get('/',function(req,res) {
  if(!req.session.cart) { 
    res.json({ products: [] });
  }

  const cart = new Cart(req.session.cart);
  const products = cart.products();
  res.json({ products: products});
  
})

// add one product to cart
router.get('/:productId', function(req,res) {
  const productId = req.params.productId;
  const cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    assert.equal(null,err);
    cart.add(product, productId);
    req.session.cart = cart;
    res.json({success: true});
  })
})

module.exports = router;