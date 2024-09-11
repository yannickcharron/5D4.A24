import HttpErrors from 'http-errors';
import argon from 'argon2';

import Account from '../models/account.model.js';

class AccountRepository {

    async login(email, password) {
      
    }

    validatePassword(password, account) {
        
    }

    async create(account) {
      try {
        account.passwordHash = await argon.hash(account.password);
        delete account.password;
        return Account.create(account);
      } catch(err) {
        throw err;
      }
    }

    generateJWT(account, needNewRefresh = true) {
       
    }

    async validateRefreshToken(email, refreshToken) {
      
        
    }

    logout(email) {
       
    }

    logoutRefresh(refreshToken) {
        
    }

    transform(account) {

        account.href = `${process.env.BASE_URL}/accounts/${account.uuid}`;
        

        delete account._id;
        delete account.passwordHash;
        delete account.__v;
    
        return account;
        
    }
}

export default new AccountRepository();