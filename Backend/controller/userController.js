const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user');

exports.userSignUp = async function (req, res) {
    console.log(req.body);
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            console.log()
            if (user !== null) {
                return res.status(409).json({
                    message: 'User already exist'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const newUser = {
                            id: 1,
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            price_per_hour: req.body.price_per_hour
                        };

                        User.create(newUser)
                            .then(result => {
                                console.log(result.dataValues);
                                res.status(201).json({
                                    messsage: 'User created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    err: err
                                });
                            });
                    }
                });
            }
        })
}

exports.userLogIn = (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user === null) {
                return res.status(401).json({
                    messsage: 'Auth failed'
                });
            }
            
            console.log(user.dataValues);
            const userData = user.dataValues;

            bcrypt.compare(req.body.password, userData.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        messsage: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: userData.email,
                        userId: userData.id
                    },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        messsage: 'Auth successful',
                        token: token
                    });
                }
                return res.status(401).json({
                    messsage: 'Auth failed'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: err });
        });
}