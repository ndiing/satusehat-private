const Model = require("./model.js");
const Service = require("./service.js");
const Helper = require("./helper.js");
const Client = require("./client.js");
const Store = require("./store.js");
const { storage } = require("../../lib");

// fetch('http://google.com')
// .then(res=>{
//     console.log(res.headers.getSetCookie())
// })
// .catch(console.log)

// const service = new Service({})

// service.fetch('{{base_url}}/Practitioner/:id',{
//     params:{
//         id:'367400001111222'
//     },
//     query:{
//         identifier:'https://fhir.kemkes.go.id/id/nik|367400001111222'
//     }
// })
// .then(res=>{
//     console.log(res.status)
//     return res.json()
// })
// .then(console.log)
// .catch(console.log)

// storage('satusehat','default')
// .then(doc => {
//     console.log(doc)
//     // doc.user='name'
// })

class Controller {
    // static services = {};

    static async init(req, res, next) {
        try {
            // name
            const name = "satusehat";
            // _id
            const { _id = "default" } = req.query;

            // storage
            res.locals.storage = await storage(name, _id);

            // // service
            // if (!Controller.services[_id]) {
            //     Controller.services[_id] = new Service(res.locals);
            // }
            // res.locals.service = Controller.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
