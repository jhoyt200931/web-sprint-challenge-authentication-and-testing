const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    findById,
    findBy
}

async function add(credentials) {
    try {
        const id = await db('users').insert(credentials);
        const user = await findById({id});
        return user[0];
    } catch (err) {
        throw err;
    }
}

async function findById({id}) {
    try {   
        const user = await db('users').where({id});
        return user;
    } catch (err) {
        throw err;
    }
}

async function findBy(filter) {
    try {
        const user = await db('users').where(filter).orderBy('id');
        return user;
    } catch (err) {
        throw err;
    }
}