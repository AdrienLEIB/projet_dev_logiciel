const mongoose = require('mongoose');
const Golf = require('../models/golf.model');
const Manager = require('../models/manager.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    if(!res._headerSent) {
        Manager.findOne({_id: req.body.id_manager})
            .select("_id")
            .lean()
            .then(result => {
                const golfCreate = new Golf(
                    {
                        title: req.body.title,
                        latitude: req.body.latitude,
                        longitude: req.body.longitude,
                        description: req.body.description,
                        id_manager: req.body.id_manager
                    }
                );

                golfCreate.save()
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
        Golf.find()
            .then(golfs => {
                res.send(golfs);
            })
            .catch(err => {
                console.log("res", res);
                res.status(500).send({
                    message: err.message || "Some error occurred when finding golfs."
                });
            })
    }
};

// Get User by Id
exports.findById = (req, res) => {
    if(!res.headersSent) {
        Golf.findById(_id = req.params.id)
            .then(golf => {
                res.send(golf);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding golfs."
                })
            })
    }
};

// Update User by Id
exports.updateById = (req, res) => {
    if(!res.headersSent) {
        Golf.findByIdAndUpdate(req.params.id, req.body)
            .then(golfs => {
                res.send(golfs);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and updating golf."
                })
            })
    }
};

// Delete User by Id
exports.deleteByID = (req, res) => {
    if(!res.headersSent) {
        Golf.findByIdAndDelete(req.params.id)
            .then(golfs => {
                res.send(golfs);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting golf."
                })
            })
    }
};

// Delete All User
exports.deleteAllGolfs = (req, res) => {
    if(!res.headersSent) {
        Golf.remove()
            .then(golfs => {
                res.send(golfs);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting all golfs."
                })
            })
    }
};