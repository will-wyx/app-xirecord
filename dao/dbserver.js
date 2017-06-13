/**
 * Created by will on 2017/2/9.
 */
const MongoClient = require('mongodb').MongoClient,
    co = require('co');

co(function*() {
    const url = 'mongodb://210.209.70.86:27017/xirecord';
    const db = yield MongoClient.connect(url);

    const collection = db.collection('manager');
    const docs = yield collection.find({}).toArray();
    console.dir(docs);
    db.close();
}).catch(function (err) {
    console.log(err.stack);
});
