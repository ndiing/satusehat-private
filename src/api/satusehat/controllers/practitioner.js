const Controller = require("../controller");
const Service = require("../services/practitioner");
const { merge, unflatten } = require("../../../lib/helper");

class Practitioner extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Practitioner.services[_id]) {
                Practitioner.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Practitioner.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async get(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.get({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                   ...(query["identifier"]&&{"identifier": query["identifier"]}), // "https://fhir.kemkes.go.id/id/nik|367400001111222",
                },
                headers,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getId(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.getId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "N10000001",
                },
                query: {
                    ...query,
                },
                headers,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Practitioner;
