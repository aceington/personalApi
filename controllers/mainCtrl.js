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
  },
  getHobbiesType : function(req,res){
    var results = [];
    for (key in user.hobbies){
      if (user.hobbies[key].type === req.params.type){
        results.push({hobbies: user.hobbies[key]});
      }
    }
    res.send(results);
  },
  getFamily : function(req,res){
    res.json({family: user.family})
  },
  getFamilyGender : function(req,res){
    var famGender = [];
    for (key in user.family){
      if (user.family[key].gender === req.params.gender){
        famGender.push({familyMember: user.family[key]});
      }
    }
    res.send(famGender);
  },
  
}
