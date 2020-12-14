const db = require('../../data/dbConfig.js');

module.exports = {
    add
}

async function add(credentials) {
    try {
        const user = await db('users').insert(credentials);
        return user;
    } catch (err) {
        throw err;
    }
}