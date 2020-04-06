const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema (
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        role: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            required: true,
            minlength: 4,
            maxlength: 128
        },
        admin: {
            type: Boolean
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('Account', AccountSchema);
