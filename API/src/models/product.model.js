const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema (
    {
        name: {
            type: String
        },
        stock: {
            type: Number
        },
        path: {
            type: String
        },
        price:{
            type: Number
        },
        create_date:{
            type: Date
        },
        invoices:{
            type:[String]
        },
        idmotherproduct:{
            type: String
        },
        idclient:{
            type: String
        }
    },
);

module.exports = mongoose.model('Product', ProductSchema);