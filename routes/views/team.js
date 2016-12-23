var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'nfl'; // to set currently selected item in the header nav.
	locals.data = {
    teams: [],
  };

	// Load all teams.
	view.on('init', function (next) {
    var q = keystone.list('Team').model.find().populate('players');

		q.exec(function (err, results) {
			locals.data.teams = results;
			next(err)
		});
	})
	// Render the view
	view.render('team');
};


/* model.find().populate('players')

    q.exec(function (err, results) {
      locals.data.teams = results;
      next(err)
    }) */
