var keystone = require('keystone');
exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'logos';
  locals.data = {
    logos: [],
  };

  // Load all logos
  view.on('init', function (next) {

    var q = keystone.list('Logos').model.find();

    q.exec(function (err, results) {
      locals.data.logos = results;
      next(err)
    });
  })

  view.render('logos');
};
