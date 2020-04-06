const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GolfSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        id_manager: {
            type: String,
            required: true,
            unique: true,
        }
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Golf', GolfSchema, "golf");
