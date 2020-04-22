const mongoose = require('mongoose');
const Product = require('../models/product.model');
const Invoice = require('../models/invoice.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    if(!res._headerSent) {
        Invoice.findOne({name: req.body.name})
            .select("products.name")
            .lean()
            .then(result => {
                const startDate = Date.now();
                const productCreate = new Product(
                    {
                        name: req.body.name,
                        stock: req.body.stock,
                        path: req.body.path,
                        price: req.body.price,
                        create_date: startDate,
                        invoices: {}
                    });

                productCreate.save()
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

            })
            .catch(err => {
                res.status(500).send(
                    {
                        message: "Manager doesn't exist."
                    }
                )}
            )
    }
};

// get all users
exports.findAll = (req, res) => {
    if(!res.headersSent) {
        Product.find()
            .then(products => {
                res.send(products);
            })
            .catch(err => {
                console.log("res", res);
                res.status(500).send({
                    message: err.message || "Some error occurred when finding products."
                });
            })
    }
};

// Get User by Id
exports.findById = (req, res) => {
    if(!res.headersSent) {
        Product.findById(_id = req.params.id)
            .then(product => {
                res.send(product);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding products."
                })
            })
    }
};

// Update User by Id
exports.updateById = (req, res) => {
    if(!res.headersSent) {
        Product.findByIdAndUpdate(req.params.id, req.body)
            .then(products => {
                res.send(products);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and updating product."
                })
            })
    }
};

// Delete product by Id
exports.deleteByID = (req, res) => {
    if(!res.headersSent) {
        Product.findByIdAndDelete(req.params.id)
            .then(products => {
                res.send(products);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting product."
                })
            })
    }
};

// Delete All products
exports.deleteAllproducts = (req, res) => {
    if(!res.headersSent) {
        Product.remove()
            .then(products => {
                res.send(products);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting all products."
                })
            })
    }
};