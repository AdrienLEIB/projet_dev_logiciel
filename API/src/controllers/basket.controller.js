const jwt = require('jsonwebtoken');
const jwtPwd = require('../configs/jwt.config');
const bcrypt = require('bcrypt');


exports.createBasket = (req, res) => {
    // step 1: search user w email
    // step 2: check password
    // step 3: generate new token
    let basket_token = req.headers['basket-token'];
    // Second step: check token 
	if(!basket_token) {
	    basket_token = jwt.sign (
	        {
	           products: []
	        },
	        jwtPwd.secret,
	        {
	            expiresIn: 86400
	        }
	    );
    }

	jwt.verify(basket_token, jwtPwd.secret, function(err, decoded){
		if(err) {
        return res.status(401).send({
            auth: false,
            message: 'invalid token'
        })
    }
	res.send({
		basket: basket_token,
		products:decoded.products
		}
		);
    });
};

exports.addBasket  = (req, res) => {
	let basket_token = req.headers['basket-token'];
	jwt.verify(basket_token, jwtPwd.secret, function(err, decoded){
		if(err) {
		    return res.status(401).send({
		        auth: false,
		        message: 'invalid token'
		    })
		}
		decoded.products.push(req.body.product);
		basket_token = jwt.sign (
	        {
	           products: decoded.products
	        },
	        jwtPwd.secret,
	        {
	            expiresIn: 86400
	        }
	    );
		//const refreshToken = jwt.getRefreshToken(basket_token);
		res.send({
			basket: basket_token,
			products:decoded.products
			});
	});
	//next();
}