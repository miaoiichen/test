var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/www/index.html");
});

module.exports = router;
