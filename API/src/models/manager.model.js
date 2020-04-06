const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManagerSchema = new Schema(
    {
        firstname:{
            type: String
        },
        lastname:{
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        telephone: {
            type: String,
            required: true,
        }
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Manager', ManagerSchema);
