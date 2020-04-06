const Manager = require('../models/manager.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    if(!res._headerSent) {
        const managerCreate = new Manager(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                telephone: req.body.telephone,
            }
        );

        managerCreate.save()
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

// get all users
exports.findAll = (req, res) => {
    if(!res._headerSent) {
        Manager.find()
            .then(managers => {
                res.send(managers);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding managers."
                })
            })
    }
};

// Get User by Id
exports.findById = (req, res) => {
    if(!res._headerSent) {
        Manager.findById(_id = req.params.id)
            .then(managers => {
                res.send(managers);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding managers."
                })
            })
    }
};

// Update User by Id
exports.updateById = (req, res) => {
    if(!res._headerSent) {

        Manager.findByIdAndUpdate(req.params.id, req.body)
            .then(managers => {
                res.send(managers);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and updating manager."
                })
            })
    }
};

// Delete User by Id
exports.deleteByID = (req, res) => {
    if(!res._headerSent) {
        Manager.findByIdAndDelete(req.params.id)
            .then(managers => {
                res.send(managers);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting manager."
                })
            })
    }
};

// Delete All User
exports.deleteAllManagers = (req, res) => {
    if(!res._headerSent) {
        Manager.remove()
            .then(managers => {
                res.send(managers);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding and deleting all managers."
                })
            })
    }
};