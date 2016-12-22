var keystone = require('keystone');


/**
 * Player Model
 * ==========
 */

var Player = new keystone.List('Player', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Player.add({
	name: { type: String, required: true, initial: true },
});

Player.relationship({ path: 'teams', ref: 'Team', refPath: 'players' });


Player.defaultColumns = 'name, team';
Player.register();
