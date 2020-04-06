const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema (
    {
        client: {
            type: String,
        },
        issue_date: {
            type: Date,
        },
        paid: {
            type: Boolean
        },
        pay_date:{
            type: Date
        },
        create_date:{
            type:Date
        },
        price:{
            type: Number
        },
        products:{
            type:[String]
        }
    },
);

module.exports = mongoose.model('Invoivce', InvoiceSchema);