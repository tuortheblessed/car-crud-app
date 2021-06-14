const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true }
}, {
    collection: 'cars'
});

module.exports = mongoose.model('Car', carSchema)