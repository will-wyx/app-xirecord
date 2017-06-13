/**
 * Created by will on 2017/2/12.
 */
const ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient,
    co = require('co');
const url = 'mongodb://210.209.70.86:27017/xirecord';
function coller(callback) {
    co(function*() {
        const db = yield MongoClient.connect(url);
        const collection = db.collection('label');
        callback(collection);
        db.close();
    })
}
const label = {
    limit: options => {
        const {index, pagesize} = options;
        coller(collection => {
            co(function*() {
                const docs = yield collection
                    .find({})
                    .sort({date: -1})
                    .skip((index - 1) * pagesize)
                    .limit(pagesize);
                    // .toArray();
                console.log(docs);
            })
        });
    },
    one: id => {
        const _id = ObjectId(id);
        return new Promise((resolve, reject) => {
            coller(collection => {
                co(function*() {
                    const doc = yield collection.findOne({_id});
                    resolve(doc);
                }).catch(reject)
            })
        })
    },
    insert: data => {
        coller(collection => {
            co(function*() {
                yield collection.insertOne(data);
            })
        })
    },
    update: () => {

    },
    delete: () => {

    }
};
module.exports = label;
