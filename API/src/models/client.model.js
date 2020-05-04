const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema (
    {
        lastname: {
            type: String,
        },
        firstname: {
            type: String,
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
        },
        create_date:{
            type:Date
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('Client', ClientSchema);