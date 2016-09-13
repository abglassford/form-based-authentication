var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cookies', result: undefined });
});

router.get('/set', function(req, res, next) {
  const setCookie = req.query.cookie || 'cookie';
  const setRating = req.query.rating || 5;

  res.cookie(setCookie, setRating);

  var result = JSON.stringify(req.cookies);
  res.render('index', { title: 'Cookie', result: result });
});

router.get('/clear', (req, res, next) => {
  for (var cookie in req.cookies) {
    res.clearCookie(cookie)
  }
  res.render('index', {title: 'Cookie', result: JSON.stringify(req.cookies)})
})

router.get('/set-secret', function(req, res, next) {
 res.cookie('chocolate chip', 5, {signed: true})

 var result = JSON.stringify(req.signedCookies)
 res.render('index', {title: 'Cookies', result})
});

module.exports = router;
