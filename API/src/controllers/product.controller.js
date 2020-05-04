const mongoose = require('mongoose');
const Product = require('../models/product.model');
const Invoice = require('../models/invoice.model');
const bcrypt = require('bcrypt');
const fs = require('fs');

function addProductToInvoice( idinvoice, idproduct){
    Invoice.findById(_id=idinvoice).then(invoice => {
        invoice.products.push(idproduct);

        Invoice.findByIdAndUpdate( {_id:invoice._id}, {products:invoice.products})
            .then(product =>{
                // res.send(data);
            })
            .catch(err =>{
                res.status(500).send({
                    message:err.message || "Some error occured when finding manager."
            })
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred when finding products."
        })
    })   
}

function removeProductToInvoice( idinvoice, idproduct){
    Invoice.findById(_id=idinvoice).then(invoice => {
        for(var product in invoice.products){

            if(idproduct == invoice.products[product]){
                delete invoice.products[product]
            }
        }
        //products.invoices.push(idinvoice);

        Invoice.findByIdAndUpdate( {_id:invoice._id}, {products:invoice.products})
            .then(product =>{
                // res.send(data);
            })
            .catch(err =>{
                res.status(500).send({
                    message:err.message || "Some error occured when finding manager."
            })
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred when finding products."
        })
    }) 
}

exports.create = (req, res) => {
    if(!res._headerSent) {
        const startDate = Date.now();
        const productCreate = new Product(
            {
                name: req.body.name,
                stock: req.body.stock,
                path: req.body.path,
                price: req.body.price,
                create_date: startDate,
                invoices: req.body.invoices
            });

            productCreate.save()
            .then(data => {
                var img = productCreate._id + ".png";
                var destination = '..\\IHM\\public\\IMG\\products' + img;

                //var path_acces = req.body.path;

                fs.copyFile(req.body.path, destination, (error) =>{
                    if(error){

                       console.log(error); 
                    }
                    });

                req.body.path = "\\IMG\\products\\" + img;
                productCreate.image =  req.body.path;
                req.params.id = productCreate._id ;
                this.updateById(req, res);
                res.send(data);
                for(var idinvoice in req.body.invoices){
                   // console.log(req.body.products[idproduct]);
                    addProductToInvoice(req.body.invoices[idinvoice], productCreate._id);

                };
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

// get all products
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

// Get product by Id
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

// Update product by Id
exports.updateById = (req, res) => {
    if(!res.headersSent) {
        for(idremove in req.body.removeInvoices){
            removeInvoiceToProduct(req.body.removeInvoices[idremove], req.params.id)
            for(idinv in req.body.invoices){
                if(req.body.invoices[idinv]==req.body.removeInvoices[idremove]){
                    delete req.body.invoices[idinvd];
                    break
                }
            }
        }
        for(idadd in req.body.addInvoices){
            addInvoiceToProducts(req.body.addInvoices[idadd], req.params.id)
            req.body.invoices.push(req.body.addInvoices[idadd])
        }
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