var keystone = require('keystone');
var Types = keystone.Field.Types;

// Logos

var Logos = new keystone.List('Logos', {
  map: { name: 'name' },
  autokey: { path: 'slug', from: 'name', unique: true },
});

Logos.add({
  name: { type: String, required: true, intial: true },
  image: { type: Types.CloudinaryImage, publicId: 'slug' },
});


Logos.register();
