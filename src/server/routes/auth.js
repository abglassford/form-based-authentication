var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var userInfo = [
  { name: 'Tony Stark', username: 'tony.stark', password: process.env.TONY_PASS }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auth', result: undefined });
});

router.get('/find-by-username', (req, res, next) => {
  var userName = req.query.username
  var result = userInfo.filter((user) => {
    if (user.username === userName) {
      return user
    }
  })
  res.render('index', {title: 'Auth', result: JSON.stringify(result[0])})
})

router.get('/verify-password', (req, res, next) => {
  var userName = req.query.username;
  var userPassword = req.query.password;
  var authUser = userInfo.filter((user) => {
    return user.username === userName
  })
  console.log(authUser);
    bcrypt.compare(userPassword, authUser[0].password, (err, pass) => {
      if (pass) {
        res.render('index', {title: 'Auth', result: JSON.stringify(authUser[0])})
      } else {
        res.render('index', {title: 'Auth', result: 'Invalid Credentials'})
      }
    })
  })

module.exports = router;
