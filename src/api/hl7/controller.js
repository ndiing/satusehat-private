const Model = require("./model.js");
const Service = require("./service.js");
const Helper = require("./helper.js");
const Client = require("./client.js");
const Store = require("./store.js");

const OrganizationType = require('./models/organization-type.js')
const LocationPhysicalType = require('./models/location-physical-type.js')
const ActCode = require('./models/act-code.js')
const ParticipationType = require('./models/participation-type.js')

class Controller {
    static async init(req, res, next) {
        try {
            // res.locals.service = new Service();

            next();
        } catch (error) {
            next(error);
        }
    }

    static async getCodeSystemOrganizationType(req, res, next) {
        try {
            // const response = await res.locals.service.getCodeSystemOrganizationType();
            // res.json(response.concept);
            res.locals.OrganizationType = new OrganizationType()
            await res.locals.OrganizationType.init()
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
            res.locals.LocationPhysicalType = new LocationPhysicalType()
            await res.locals.LocationPhysicalType.init()
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
            res.locals.ActCode = new ActCode()
            await res.locals.ActCode.init()
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
            res.locals.ParticipationType = new ParticipationType()
            await res.locals.ParticipationType.init()
            const response = await res.locals.ParticipationType.allDocs();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
