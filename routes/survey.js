// Survey routes

var mongoose = require('mongoose');
var Surveys = mongoose.model('Surveys');

exports.submit = function(req, res){
  // log a response from a user
  
  var surveyid = req.params.id;
  var response = req.params.response;
  // if survey is active
  if (req.session.surveys[surveyid]) {
    // (old response)--
    // (new response)++
  } else {
    // (new response)++
  }
  req.session.surveys[surveyid] = response;
};

exports.generate = function(req, res) {
  // generate a set of links for the user to embed in an email
}