let fs = require('fs');

const FILE_NAME = './repo/movies.json';

let moviesRepo = {
  get: function(resolve,reject){
      fs.readFile(FILE_NAME,function(err,data){
        if(err){
          reject(err);
        }
        else{
          console.log(JSON.parse(data));
          resolve(JSON.parse(data));
        }
      })
  }
}

module.exports = moviesRepo;