import HttpErrors from 'http-errors';
import argon from 'argon2';
import jwt from 'jsonwebtoken';

import Account from '../models/account.model.js';

class AccountRepository {
    async login(email, password) {
        const account = await Account.findOne({ email: email });

        if (!account) {
            //Account avec email non existant
            return { err: HttpErrors.Unauthorized() };
        }

        //Account avec email existe
        if (await this.validatePassword(password, account)) {
            return { account };
        }

        return { err: HttpErrors.Unauthorized() };
    }

    async validatePassword(password, account) {
        return await argon.verify(account.passwordHash, password);
    }

    async create(account) {
        try {
            account.passwordHash = await argon.hash(account.password);
            delete account.password;
            return Account.create(account);
        } catch (err) {
            throw err;
        }
    }

    generateJWT(account, needNewRefresh = true) {
        const accessToken = jwt.sign({ email: account.email }, process.env.JWT_TOKEN_SECRET, {
            expiresIn: process.env.JWT_TOKEN_LIFE,
            issuer: process.env.BASE_URL
        });

        const refreshToken = jwt.sign({ uuid: account.uuid }, process.env.JWT_REFRESH_SECRET, {
            expiresIn: process.env.JWT_REFRESH_LIFE,
            issuer: process.env.BASE_URL
        });

        return { accessToken, refreshToken };
    }

    async validateRefreshToken(uuid, headerEmail) {
        const account = await Account.findOne({uuid: uuid});
        return { validate: account.email === headerEmail, account: account}
    }

    logout(email) {}

    logoutRefresh(refreshToken) {}

    transform(account) {
        account.href = `${process.env.BASE_URL}/accounts/${account.uuid}`;

        delete account._id;
        delete account.passwordHash;
        delete account.__v;

        return account;
    }
}

export default new AccountRepository();
