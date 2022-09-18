const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/DemoDB')
	.then(res => console.log('connected'))
	.catch(err => console.log('err'));

const sdModel = mongoose.model('studentdetails', {
	studentFirstName: String,
	collegeName: String,
	location: String
});

module.exports = sdModel;