var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Social Model
 * ==========
 */

var Social = new keystone.List('Social', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Social.add({
	name: { type: String, required: true, initial: true },
	socialNetwork: { type: Types.Select, options: 'Facebook, Twitter, LinkedIn, YouTube', default: 'Facebook', index: true },
	url: { type: String, required: true, index: true, initial: true },
});

Social.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Social.defaultColumns = 'name,  socialNetwork, url';
Social.register();
