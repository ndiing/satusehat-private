// require('./env.js')
require('./helper.js')
const DB = require("./sqlite.js");
const Store = require("./store.js");
const CookieStore = require("./cookie-store.js");

async function storage(name, _id) {
    const db = new DB(name);
    const doc = (await db.get(_id)) || {};
    doc.cookieStore = new CookieStore(doc.cookieStore);
    // console.log(doc)
    const store = new Store(doc, (doc) => {
        doc._id=_id
        db.put(doc)
    });
    // console.log(store)
    return store;
}

// storage('example','default')
// .then(doc => {
//     console.log(doc)
//     // doc.user='name'
// })

module.exports = {storage};
