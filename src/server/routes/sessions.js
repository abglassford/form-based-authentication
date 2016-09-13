var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sessions', result: undefined });
});

router.get('/set', function(req, res, next) {
  req.session.user = { username: 'myname', id: '11' };
  var result = JSON.stringify(req.session);

  res.render('index', { title: 'Sessions', result: result });
});

router.get('/get-username', (req, res, next) => {
  var result = req.session.user ? req.session.user.username : null;
  res.render('index', {title: 'Sessions', result: result})
})

router.get('/get-id', (req, res, next) => {
  var result = req.session.user ? req.session.user.id : null;
  res.render('index', {title: 'Sessions', result: result})
})

router.get('/clear', (req, res, next) => {
  req.session = null;
  var result = req.session;
  res.render('index', {title: 'Sessions', result: result})
})

module.exports = router;
