var express = require('express');
var router = express.Router();

let {
  insert,
  findDb
} = require('../lib/mongodb.js')

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
})

router.get('/insertgoods', async (req, res) => {
  let query = req.query;
  let data = await insert('hotgoodslist', [query]);
  res.send(data);
});


router.get('/findgoods', async (req, res) => {
  let { page, find, qty } = req.query;
  let data = await findDb('hotgoodslist', find, page*1, qty*1);
  res.send(data);
});


router.get('/findshops', async (req, res) => {
  let { page, find, qty } = req.query;
  let data = await findDb('shopslist', find, page*1, qty*1);
  res.send(data);
});

router.get('/findbbs', async (req, res) => {
  let { page, find, qty } = req.query;
  let data = await findDb('bbslist', find, page*1, qty*1);
  res.send(data);
});


module.exports = router;
