var charCtrl = require('../controllers/characterController');

module.exports = function(router,app){
	router.get('/characters', charCtrl.getAllCharacters);
	router.get('/characters/:name', charCtrl.getCharacterDetails)
}