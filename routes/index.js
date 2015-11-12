var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('home');
});

router.get('/app/users',function(req, res){
  res.json([{"firstName":"Ram", "lastName": "Kumar"}, {"firstName":"Rakesh", "lastName": "Roshan"}]);
});

module.exports = router;
