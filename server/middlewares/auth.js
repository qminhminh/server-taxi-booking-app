
const jwt = require('jsonwebtoken');

// check type = user
const auth = async(req, res, next)=>{
    try{
        // check x-auth-token in headers
        const token = req.header('x-auth-token') ;
        if(!token) return res.status(401).json({msg: 'NO auth token'});
        
        // check password
        const verified= jwt.verify(token,'passwordKey');
        if(!verified) return res.status(401).json({msg: 'Token verification failed, auth denied!'});

        req.user = verified.id;
        req.token = token;
        next();
     
    }catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports = auth;