//imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = "ce9fbf1c7698155a7c24d6222463d0a911a8ad84"
//Exported functions
module.exports={
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmine:userData.isAdmine
        },
        JWT_SIGN_SECRET,
        {
            expiresIn:'1h'
        })
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
      },
      getUserId: function(authorization) {
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization);
        if(token != null) {
          try {
            var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
            if(jwtToken != null)
              userId = jwtToken.userId;
          } catch(err) { }
        }
        return userId;
      }

      
}