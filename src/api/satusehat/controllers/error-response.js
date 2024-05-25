const Controller = require("../controller");
const Service = require("../services/error-response");
const { merge, unflatten } = require("../../../lib/helper");

class ErrorResponse extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!ErrorResponse.services[_id]) {
                ErrorResponse.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = ErrorResponse.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async get(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.get({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                },
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ErrorResponse;
