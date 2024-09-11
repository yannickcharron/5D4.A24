import express from 'express';
import httpErrors from 'http-errors';

import accountRepository from '../repositories/account.repository.js';
import accountsValidator from '../validators/accounts.validator.js';

const router = express.Router();

router.post('/', post);
router.post('/actions/login', login);
router.post('/actions/refresh', refreshToken);
router.get('/secure', secure);
router.get('/secure/:uuid', retrieveOneSecure);
router.get('/:uuid', retrieveOne);
router.delete('/logout', logout);

async function post(req, res, next) {
    try {
        let account = await accountRepository.create(req.body);
        account = account.toObject({ getters: false, virtuals: false });
        account = accountRepository.transform(account);
        res.status(201).json(account);
    } catch (err) {
        return next(err);
    }
}

async function secure(req, res, next) {
    //TODO:
}

async function login(req, res, next) {
    
    const { email, password } = req.body;

    const loginResult = await accountRepository.login(email, password);

    if(loginResult.account) {
        let account = loginResult.account.toObject({getters: false, virtuals: false});
        account = accountRepository.transform(account);
        //TODO: Generate Token
        res.status(201).json(account);
    } else {
        return next(loginResult.err);
    }



}

async function refreshToken(req, res, next) {
    //TODO:
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
