var keystone = require('keystone');
var Types = keystone.Field.Types;

// Position Model

var Positions = new keystone.List('Positions', {
  map: { name: 'position' },
  autokey: { path: 'slug', from: 'position', unique: true },
});

Positions.add({
  position: { type: String, required: true, initial: true },
  players: { type: Types.Relationship, ref: 'Player', many: true },
});

Positions.defaultColumns = 'name, players';
Positions.register();
