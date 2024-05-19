const Model = require("./model.js");
const Service = require("./service.js");
const Helper = require("./helper.js");
const Client = require("./client.js");
const Store = require("./store.js");

const DB = require("../../lib/sqlite");

class Controller {
    static async init(req, res, next) {
        try {
            // res.locals.service = new Service();

            res.locals.OrganizationType = new DB("OrganizationType");
            res.locals.LocationPhysicalType = new DB("LocationPhysicalType");
            res.locals.ActCode = new DB("ActCode");
            res.locals.ParticipationType = new DB("ParticipationType");

            next();
        } catch (error) {
            next(error);
        }
    }
    static async getCodeSystemOrganizationType(req, res, next) {
        try {
            // const response = await res.locals.service.getCodeSystemOrganizationType();
            // res.json(response.concept);
            const response = await res.locals.OrganizationType.allDocs();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
    static async getCodeSystemLocationPhysicalType(req, res, next) {
        try {
            // const response = await res.locals.service.getCodeSystemLocationPhysicalType();
            // res.json(response.concept);
            const response = await res.locals.LocationPhysicalType.allDocs();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
    static async getCodeSystemV3ActCode(req, res, next) {
        try {
            // const response = await res.locals.service.getCodeSystemV3ActCode();
            // res.json(response.concept);
            const response = await res.locals.ActCode.allDocs();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
    static async getCodeSystemV3ParticipationType(req, res, next) {
        try {
            // const response = await res.locals.service.getCodeSystemV3ParticipationType();
            // res.json(response.concept);
            const response = await res.locals.ParticipationType.allDocs();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
