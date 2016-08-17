var Character = require('../models/character');
var mongoose = require('mongoose');

module.exports = {

	getAllCharacters: function(req,res){
		Character.find({}, function(err, characters){
			if(err)
				res.send(err);

			if(!characters){
				res.send('No characters found!');
			}else{
				res.json({
					success: true,
					data: characters
				});
			}
		});
	},

	getCharacterDetails: function(req,res){
		var name = req.params.name
		Character.findOne({ name: name },function(err, character) {
			if(err)
				res.send(err);

			if(!user){
				res.send('Character not found!');
			}else{
				res.json({
					success: true,
					data: character
				});
			}
		});
	}
}