var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Social Model
 * ==========
 */

var Team = new keystone.List('Team', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Team.add({
	name: { type: String, required: true, initial: true },
	team: { type: Types.Select, options: 'Baltimore Ravens, Carolina Panthers', default: 'Baltimore Ravens', index: true },
	url: { type: String, required: true, index: true, initial: true },
});

Team.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Team.defaultColumns = 'name, team, url';
Team.register();
