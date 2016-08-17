var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CharacterSchema = new Schema({
	name: { type: String},
	allegiance: { type: String},
	description: { type: String},
	actor: { type: String},
	link: { type: String},
	img: { type: String},
});

module.exports = mongoose.model('Character', CharacterSchema);