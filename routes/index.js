// Main routes

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to Phoenix Survey!' });
};

exports.account = function(req, res){
  res.render('account', { title: 'Your Accont' });
};