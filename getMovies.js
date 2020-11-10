let express = require('express');
let router = express.Router();
let moviesRepo = require('../repo/movieRepo');

router.get('/', function(req,res,next){
  console.log("Inside / path");
  moviesRepo.get(function(data){
    res.status(200).json({
      "status": 200,
      "statusText":"OK",
      "message":"All movies retrieved",
      "data":data
    });
  }, function(err){
     next(err);
  });
});

module.exports = router;