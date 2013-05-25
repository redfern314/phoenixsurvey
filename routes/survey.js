// Survey routes

var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

exports.submit = function(req, res){
  // log a response from a user

  var surveyid = req.params.id;
  var response = req.params.response;
  Survey.findOne({_id: surveyid}, function (err, db_survey) {
    if (err || !db_survey) {
      res.render('failure',{title:'Survey does not exist'});
    } else {
      // if survey is active
      if (db_survey.active) {
        var oldresponse = req.session.surveys[surveyid];
        if (oldresponse) {
          db_survey.responses[oldresponse]--;
        }
        db_survey.responses[response]++;
        req.session.surveys[surveyid] = response;

        res.render('success',{title:'Response submitted successfully'});
      } else {
        res.render('failure',{title:'Survey no longer active'});
      }
    }
  });
};

exports.generate = function(req, res) {
  // generate a set of links for the user to embed in an email
  var surveyid = req.params.id;
  res.send('survey '+surveyid+' generated');
}