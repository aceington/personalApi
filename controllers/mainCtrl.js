var user = require('../user.js');
// console.log(user.hobbies);
module.exports = {
  getName : function(req,res){
    res.json({name: user.name})
  },
  getLocation : function(req,res){
    res.json({location: user.location})
  },
  getOccupations : function(req,res){
    res.json({occupations: user.occupations})
  },
  getLatestJob : function(req,res){
    var latestJob = user.occupations.slice(-1);
    res.json({latestJob});
  },
  getHobbies : function(req,res){
    res.json({hobbies: user.hobbies})
  }
}
// module.exports ={
//   getName:
// }


// function getName(user){
//   return user.location;
// };
//
// function getName(user){
//   return user.occupations;
// };
//
// function getName(user){
//   return user.hobbies;
// };
