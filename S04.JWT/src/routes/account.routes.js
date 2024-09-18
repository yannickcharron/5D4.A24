import express from 'express';
import httpErrors from 'http-errors';

import accountRepository from '../repositories/account.repository.js';
import accountsValidator from '../validators/accounts.validator.js';

import { guardAuthorizationJWT, guardRefreshJWT } from '../middlewares/authorization.jwt.js';

const router = express.Router();

router.post('/', post);
router.post('/actions/login', login);
router.post('/actions/refresh', guardRefreshJWT, refreshToken);
router.get('/secure', guardAuthorizationJWT, secure);
router.get('/secure/:uuid', retrieveOneSecure);
router.get('/:uuid', retrieveOne);
router.delete('/logout', logout);

async function post(req, res, next) {
    try {
        let account = await accountRepository.create(req.body);
        account = account.toObject({ getters: false, virtuals: false });
        account = accountRepository.transform(account);
        const tokens = accountRepository.generateJWT(account);

        res.status(201).json({ account, tokens });
    } catch (err) {
        return next(err);
    }
}

async function secure(req, res, next) {
    try {
        console.log(req.headers);
        res.status(200).json(req.auth);

        //TODO:
        const email = req.auth.email;
    } catch (err) {
        return next(err);
    }
}

async function login(req, res, next) {
    const { email, password } = req.body;

    const loginResult = await accountRepository.login(email, password);

    if (loginResult.account) {
        let account = loginResult.account.toObject({ getters: false, virtuals: false });
        account = accountRepository.transform(account);
        const tokens = accountRepository.generateJWT(account);

        res.status(201).json({ account, tokens });
    } else {
        return next(loginResult.err);
    }
}

async function refreshToken(req, res, next) {
    try {
        const uuid = req.refresh.uuid;
        const validateResult = await accountRepository.validateRefreshToken(uuid, req.headers.email)
        if(!validateResult.validate) {
            //Email ne correspond pas à celui en base de données
            return next(httpErrors.Forbidden());
        }

        const tokens = accountRepository.generateJWT(validateResult.account);
        res.status(201).json(tokens);

    } catch (err) {
        return next(err);
    }
}

async function retrieveOneSecure(req, res, next) {
    //TODO:
}

async function retrieveOne(req, res, next) {
    //TODO:
}

async function logout(req, res, next) {
    //TODO:
}

export default router;
