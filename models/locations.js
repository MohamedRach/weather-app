const mongoose = require('mongoose');
const schema = mongoose.Schema;

const locationsSchema = new schema({
    location: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Locations = mongoose.model('locations', locationsSchema);

module.exports = Locations;