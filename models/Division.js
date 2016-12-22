var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Division Model
 * ==========
 */

var Division = new keystone.List('Division', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});
Division.add({
	name: { type: String, required: true, initial: true },
  teams: { type: Types.Relationship, ref: 'Team', many: true },
});

Division.defaultColumns = 'name, teams';
Division.register();
