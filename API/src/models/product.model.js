const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema (
    {
        name: {
            type: String,
        },
        stock: {
            type: Number,
        },
        path: {
            type: String
        },
        price:{
            type: Date
        },
        create_date:{
            type:Date
        },
        price:{
            type: Number
        },
        invoices:{
            type:[String]
        }
    },
);

module.exports = mongoose.model('Product', ProductSchema);