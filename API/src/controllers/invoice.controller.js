const Invoice = require('../models/invoice.model');
const Product = require('../models/product.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    if(!res._headerSent) {
        var l = []
        const start = Date.now();
        for(var p in req.body.products){
            Product.findById(_id=p)
                .then(products => {
                    res.send(products);
                    l.push(p);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred when finding products."
                    })
                })
        };
        const invoiceCreate = new Invoice(
            {
                client: req.body.client,
                issue_date: start,
                paid: req.body.paid,
                pay_date: req.body.pay_date,
                price: req.body.price,
                products: l
            }
        );

        invoiceCreate.save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send(
                    {
                        message: err.message,
                    }
                )
            });
    }
};

// get all 
exports.findAll = (req, res) => {
    if(!res._headerSent) {
        Invoice.find()
            .then(invoices => {
                res.send(invoices);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding invoice."
                })
            })
    }
};

// Get User by Id
exports.findById = (req, res) => {
    if(!res._headerSent) {
        Invoice.findById(_id = req.params.id)
            .then(invoice => {
                res.send(invoice);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding invoice."
                })
            })
    }
};

// Update User by Id
exports.updateById = (req, res) => {
    if(!res._headerSent) {
        pp = req.body.products;
        for(var p in pp){
            Product.findById(_id=p)
                .then(products => {
                    res.send(products);
                })
                .catch(err => {
                    pp.remove(p);
                    res.status(500).send({
                        message: err.message || "Some error occurred when finding products."
                    })
                    //req.body.products[p].remove();
                })
        };
        req.body.products = pp; 
        Invoice.findByIdAndUpdate(req.params.id, req.body)
            .then(invoice => {
                res.send(invoice);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and updating invoice."
                })
            })
    }
};

// Delete User by Id
exports.deleteByID = (req, res) => {
    if(!res._headerSent) {
        Invoice.findByIdAndDelete(req.params.id)
            .then(invoice => {
                res.send(invoice);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting invoice."
                })
            })
    }
};

// Delete All User
exports.deleteAllInvoices = (req, res) => {
    if(!res._headerSent) {
        Invoice.remove()
            .then(invoice => {
                res.send(invoice);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting all invoice."
                })
            })
    }
};