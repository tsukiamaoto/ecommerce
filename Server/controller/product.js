const express = require('express');
const assert = require('assert');
const router = express.Router();

const Product = require('../models/product')

// GET all products from mongoDB 
router.get('/', function(req, res) {
  console.log('get all products');
  Product.find({} , function(err, products) {
    assert.equal(null, err);
    console.log('get data from mongoDB successfully');
    res.json({ products: products })
  });
});

// query one product by productId from mongoDB
router.get('/:productId', function(req, res) {
  console.log('query one product by id');
  const productId = req.params.productId;
  console.log(productId)
  Product.findById( productId, function(err, product) {
    assert.equal(null, err);
    console.log('query one product from mongoDB successfully');
    res.json({ product: product });
  });
});

// query one product by title from mongoDB
router.post('/', function(req, res) {
  const search = req.body.q;
  console.log('query one product by title')
  Product.find({'title': {'$regex': search, '$options': 'i'}}, function(err, product) {
    console.log('query one product')
    res.json({ products: product});
  });
});

// create a new product to save to mongoDB
router.post('/create', function(req, res) {
  const product = new Product({ ...req.body});
  console.log('create one product');
  Product.create(product, function(err) {
    assert.equal(null, err);
    console.log('create product successfully!');
    res.json({ success: true });
  });
});

// update product by productId from mongoDb
router.put('/:productId', function(req, res) {
  const productId = req.params.productId;
  const product = { ...req.body }
  console.log('update product')
  Product.findByIdAndUpdate(productId, product, function(err) {
    assert.equal(null,err);
    console.log('update product successfully!');
    res.json({ success: true });
  });
});

// delete product by productId from mongoDB
router.delete('/:productId', function(req, res) {
  const productId = req.params.productId;
  console.log('delete one product by productId');
  Product.findByIdAndRemove(productId, function(err) {
    assert.equal(null, err);
    console.log('delete product by Id');
    res.json({ success: true });
  });
});

module.exports = router;