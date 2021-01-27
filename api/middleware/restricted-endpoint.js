const jwt = require('jsonwebtoken');
const secrets = require('../auth/JWTsecrets.js');

module.exports = (req, res, next) => {
  
  try {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
    
    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'token invalid'})
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({message: 'token required'})
    }
} catch (err) {
  console.log(err);
    res.status(500).json({message: 'There was an error fetching jokes'});
}

    
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
