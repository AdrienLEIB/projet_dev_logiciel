const Client = require('../models/client.model');
const jwt = require('jsonwebtoken');
const jwtPwd = require('../configs/jwt.config');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    
    let hashpassword = bcrypt.hashSync(req.body.password, 8);
    const start = Date.now();
    const client = new Client ({
        firstname: req.body.firstname,
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        password: hashpassword,
        admin: req.body.admin,
        create_date: start
    });

    client.save()
        .then(data => {
            let client_token = jwt.sign (
                {
                    id: client.email,
                    admin: client.admin
                },
                "supersecret",
                {
                    expiresIn: 86400
                }
            );

            res.send({
                client: true,
                token: client_token,
                body: data
            });

        }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

exports.login = (req, res) => {
    // step 1: search user w email
    // step 2: check password
    // step 3: generate new token

    Client.findOne({ email: req.body.email })
        .then(client => {
            if(!client) return res.status(404).send('No client found');

            if (!bcrypt.compareSync(req.body.password, client.password)) {
                return res.status(401).send({
                    message: "Wrong password",
                    auth: false,
                    token: null
                })
            }
            let client_token = jwt.sign (
                {
                    id: client._id,
                    admin: client.admin
                },
                jwtPwd.secret,
                {
                    expiresIn: 86400
                }
            );
            res.send({
                auth: true,
                token: client_token,
                data: client
            });

        }).catch(err => {
        return res.status(500).send({
            message: err || "Error : client not found"
        });
    });
};

exports.getClient = (req, res) => {
    if(!res.headersSent) {
        Client.findById(_id = req.params.id)
            .then(client => {
                res.send(client);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding the client."
                })
            })
    }
};