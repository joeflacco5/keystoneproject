var keystone = require('keystone');
var Types = keystone.Field.Types;

// Position Model

var Position = new keystone.List('Position', {
  map: {name: 'name'},
  autokey: { path: 'slug', from: 'name', unique: true }
});

Position.add({
  name: { type: String, required: true, initial: true },
  players: { type: Types.Relationship, required: true, initial: true },
});

Position.defaultColumns = 'name, players';
Position.register();
