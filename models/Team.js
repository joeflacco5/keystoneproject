var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team Model
 * ==========
 */

var Team = new keystone.List('Team', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Team.add({
	name: { type: String, required: true, initial: true },
	url: { type: String, required: true, index: true, initial: true },
	players: { type: Types.Relationship, ref: 'Player', many: true },
	image: { type: Types.CloudinaryImage, publicId: 'slug' },
	division: { type: Types.Relationship, ref: 'Division', many: true },
});


Team.defaultColumns = 'name, players, url, division ';
Team.register();
