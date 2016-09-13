var express = require('express');
var router = express.Router();
var md5 = require('md5');
var bcrypt = require('bcryptjs')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Encryption', result: undefined });
});

router.get('/md5', (req, res, next) => {
  var hashed = md5('password');
  res.render('index', {title: 'Encryption', result: hashed });
});

router.get('/salt', (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  res.render('index', {title: 'Encryption', result: salt});
});

router.get('/hash', (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync("password", salt);
  res.render('index', {title: 'Encryption', result: hash});
});

router.get('/compare', (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync("B4c0/\/", salt);
  var compare = bcrypt.compareSync("B4c0/\/", hash);
  res.render('index', {title: 'Encryption', result: compare});
})

module.exports = router;
