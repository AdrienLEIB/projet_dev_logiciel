const Account = require('../models/account.model');
const jwt = require('jsonwebtoken');
const jwtPwd = require('../configs/jwt.config');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    let hashpassword = bcrypt.hashSync(req.body.password, 8);

    const account = new Account ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
        email: req.body.email,
        password: hashpassword,
        admin: req.body.admin
    });

    account.save()
        .then(data => {
            let account_token = jwt.sign (
                {
                    id: account.email,
                    admin: account.admin
                },
                "supersecret",
                {
                    expiresIn: 86400
                }
            );

            res.send({
                auth: true,
                token: account_token,
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

    Account.findOne({ email: req.body.email })
        .then(account => {
            if(!account) return res.status(404).send('No account found');

            if (!bcrypt.compareSync(req.body.password, account.password)) {
                return res.status(401).send({
                    message: "Wrong password",
                    auth: false,
                    token: null
                })
            }
            let account_token = jwt.sign (
                {
                    id: account._id,
                    admin: account.admin
                },
                jwtPwd.secret,
                {
                    expiresIn: 86400
                }
            );
            res.send({
                auth: true,
                token: account_token,
                data: account
            });

        }).catch(err => {
        return res.status(500).send({
            message: err || "Error : account not found"
        });
    });
};

exports.getAccount = (req, res) => {
    if(!res.headersSent) {
        Account.findById(_id = req.params.id)
            .then(account => {
                res.send(account);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred when finding the account."
                })
            })
    }
};