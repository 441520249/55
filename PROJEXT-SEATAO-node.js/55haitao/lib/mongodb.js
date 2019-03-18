const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = '55haitao';

let connection = (collections) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err);
            } else {
                const db = client.db(dbName);
                const collection = db.collection(collections);
                resolve({ collection, client });
            }
        });
    })
}

const insert = async (collections, arr) => {
    let { collection, client } = await connection(collections);
    return new Promise((resolve, reject) => {
        collection.insertMany(arr, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        client.close();
    })
}

const findDb = async (collections, obj = {}, page = 0, qty = 10) => {
    let { collection, client } = await connection(collections);
    return new Promise((resolve, reject) => {
        collection.find(obj).limit(qty).skip(qty * page).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        client.close();
    })
}

module.exports = {
    insert,
    findDb
} 