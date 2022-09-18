const express = require('express');
const Router = express.Router();
const sdModel = require('./model');

Router.get('/getDetails', async (req, res) => {
	try {
		const result = await sdModel.find({});
		res.send(result);
	} catch (e) {
		res.send('some error occured');
	}
});

module.exports = Router;