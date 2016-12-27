var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

// Set Locals
  locals.section = 'divisions';
  locals.data = {
    divisions: []
};

// Load all divisions
  view.on('init', function (next) {
    var q = keystone.list('Division').model.find().populate('teams');
  q.exec(function (err, results) {
    locals.data.divisions = results;
    next(err)
  })
});

  view.render('divisions');
};
