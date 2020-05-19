const Invoice = require('../models/invoice.model');
const Product = require('../models/product.model');
const bcrypt = require('bcrypt');



function addInvoiceToProducts(idproduct, idinvoice){
    Product.findById(_id=idproduct).then(products => {
        products.invoices.push(idinvoice);
        products.stock = products.stock -1;

        Product.findByIdAndUpdate( {_id:products._id}, {invoices:products.invoices, stock:products.stock})
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

function removeInvoiceToProduct(idproduct, idinvoice){
    Product.findById(_id=idproduct).then(products => {
        for(var invoice in products.invoices){

            if(idinvoice == products.invoices[invoice]){
                delete products.invoices[invoice]
                break

            }
        }
        products.invoices.filter(function(obj) { return obj });
        //products.invoices.push(idinvoice);

        Product.findByIdAndUpdate( {_id:products._id}, {invoices:products.invoices})
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
        var l = []
        const start = Date.now();
        console.log(req.body);
        const invoiceCreate = new Invoice(
            {
                client: req.userId,
                issue_date: start,
                paid: req.body.paid,
                pay_date: req.body.pay_date,
                price: req.body.price,
                products:  req.body.products
            }
        );

        //console.log(invoiceCreate.client);

        invoiceCreate.save()
            .then(data => {
                for(var idproduct in req.body.products){
                    console.log(req.body.products[idproduct]);
                    addInvoiceToProducts(req.body.products[idproduct], invoiceCreate._id);

                };
                res.send(data)     
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

        for(idremove in req.body.removeProducts){
            removeInvoiceToProduct(req.body.removeProducts[idremove], req.params.id)
            for(idproduct in req.body.products){
                if(req.body.products[idproduct]==req.body.removeProducts[idremove]){
                    delete req.body.products[idproduct];
                    break
                }
            }
        }
        for(idadd in req.body.addProducts){
            addInvoiceToProducts(req.body.addProducts[idadd], req.params.id)
            req.body.products.push(req.body.addProducts[idadd])
        }
        //req.body.removeProducts
        //req.body.addProducts

        //(verif quantity)

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