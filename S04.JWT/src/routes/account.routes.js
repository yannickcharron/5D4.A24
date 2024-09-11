import express from 'express';
import httpErrors from 'http-errors';

import accountRepository from '../repositories/account.repository.js';
import accountsValidator from '../validators/accounts.validator.js';

const router = express.Router();

router.post('/', post);
router.post('/actions/login', login);
router.post('/actions/refresh', refreshToken);
router.get('/secure', secure);
router.get('/secure/:uuid', retriveOneSecure);
router.get('/:uuid', retriveOne);
router.delete('/logout', logout);

async function post(req, res, next) { 
    //TODO:
}

async function secure(req, res, next) { 
    //TODO:
}

async function login(req, res, next) { 
    //TODO:
}

async function refreshToken(req, res, next) { 
    //TODO:
}

async function retriveOneSecure(req, res, next) { 
    //TODO:
}

async function retriveOne(req, res, next) { 
    //TODO:
}

async function logout(req, res, next) { 
    //TODO:
}

export default router;
