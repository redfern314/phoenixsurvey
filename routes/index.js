// Main routes

var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to Phoenix Survey!' });
};

exports.account = function(req, res){
  res.render('account', { title: 'Your Accont' });
};