const Model = require("./model.js");
const Service = require("./service.js");
const Helper = require("./helper.js");
const Client = require("./client.js");
const Store = require("./store.js");

class Controller {
    static async init(req, res, next) {
        try {
            next();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
