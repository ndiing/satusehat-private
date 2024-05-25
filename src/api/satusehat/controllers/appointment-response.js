const Controller = require("../controller");
const Service = require("../services/appointment-response");
const { merge, unflatten } = require("../../../lib/helper");

class AppointmentResponse extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!AppointmentResponse.services[_id]) {
                AppointmentResponse.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = AppointmentResponse.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "AppointmentResponse",
                "appointment": {
                    // "reference": "Appointment/0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a"
                },
                "actor": {
                    // "reference": "HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17",
                    // "display": "Poliklinik Bedah Rawat Jalan Terpadu"
                },
                // "participantStatus": "accepted",
                // "comment": "A-12"
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.post({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                },
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getId(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.getId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "96bbe117-1738-4e93-abd7-23178dad38d3",
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

    static async get(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.get({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                   ...(query["appointment"]&&{"appointment": query["appointment"]}), // "0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a",
                },
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async putId(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "AppointmentResponse",
                // "id": "96bbe117-1738-4e93-abd7-23178dad38d3",
                "appointment": {
                    // "reference": "Appointment/0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a"
                },
                "actor": {
                    // "reference": "HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17",
                    // "display": "Poliklinik Bedah Rawat Jalan Terpadu"
                },
                // "participantStatus": "declined",
                // "comment": "A-14"
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "96bbe117-1738-4e93-abd7-23178dad38d3",
                },
                query: {
                    ...query,
                },
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async patchId(req, res, next) {
        try {
            const {params,query,body} = req
            const target = [
                {
                    // "op": "replace",
                    // "path": "/comment",
                    // "value": "A-123"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "96bbe117-1738-4e93-abd7-23178dad38d3",
                },
                query: {
                    ...query,
                },
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AppointmentResponse;
