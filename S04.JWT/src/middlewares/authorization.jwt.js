import { expressjwt as expressJWT } from 'express-jwt';

const guardAuthorizationJWT = expressJWT({
    secret : process.env.JWT_TOKEN_SECRET,
    issuer : process.env.BASE_URL,
    algorithms: ['HS256'],
    isRevoked: async (req, token) => {
        //Si il est dans la black list return true
    }
});

const guardRefreshJWT = expressJWT({
    secret : process.env.JWT_REFRESH_SECRET,
    issuer: process.env.BASE_URL,
    algorithms: ['HS256'],
    requestProperty: 'refresh',
    getToken : req => {
        return req.body.refresh;      
    }

})


export { guardAuthorizationJWT, guardRefreshJWT };
