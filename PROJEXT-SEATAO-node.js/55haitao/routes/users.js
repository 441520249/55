var express = require('express');
var router = express.Router();


router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
})

let { findDb, insert } = require('../lib/mongodb.js');

router.post('/login', async function (req, res) {
  let { uid, upsw } = req.body
  let data = await findDb('users', { uid, upsw }, 0, 0);
  if (data.length) {
    res.send({ status: 200, msg: "登录成功" })
  } else {
    res.send({ status: 400, msg: "账号或密码错误" })
  }
});

router.post('/register', async function (req, res) {
  let { uid, upsw } = req.body
  let data = await insert('users', [{ uid, upsw }]);
  res.send({ status: 200, msg: "插入成功", data })
});

module.exports = router;
