const jwt = require("jsonwebtoken");
require('dotenv').config()
 
exports.verifyToken = (req, res, next) => {
    let authData = req.headers.authorization;
    if(!authData) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }
    let token = authData.split(' ')[1];
 
    jwt.verify(token, process.env.APP_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.userId = decoded.id;
        next()
    })
};
