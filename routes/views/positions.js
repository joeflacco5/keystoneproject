var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals

  locals.section = 'depth';
  locals.data = {
    positions: []
};

 // Load all positions
  view.on('init', function (next) {

   var q = keystone.list('Positions').model.find().populate('players');

   q.exec(function (err, results) {
     locals.data.positions = results;
     next(err)
   })

 });
  view.render('positions');
}
