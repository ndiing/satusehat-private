const Controller = require("../controller");
const Service = require("../services/care-plan");
const { merge, unflatten } = require("../../../lib/helper");

class CarePlan extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!CarePlan.services[_id]) {
                CarePlan.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = CarePlan.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "CarePlan",
                // "status": "active",
                // "intent": "plan",
                // "description": "Rujuk ke RS Rujukan Tumbuh Kembang level 1",
                "subject": {
                    // "reference": "Patient/100000030004",
                    // "display": "Anak Smith"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}"
                },
                // "created": "2022-07-26",
                "author": {
                    // "reference": "Practitioner/N10000001"
                }
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
                   ...(params["id"]&&{"id": params["id"]}), // "d16e2819-be08-40f7-888b-3f81a3a3518d",
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
                   ...(query["subject"]&&{"subject": query["subject"]}), // "100000030004",
                   ...(query["encounter"]&&{"encounter": query["encounter"]}), // "{{Encounter_uuid}}",
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
                // "resourceType": "CarePlan",
                // "id": "d16e2819-be08-40f7-888b-3f81a3a3518d",
                // "status": "active",
                // "intent": "plan",
                // "description": "Rujuk ke RS Rujukan Tumbuh Kembang ABCDEFG level 1",
                "subject": {
                    // "reference": "Patient/100000030004",
                    // "display": "Anak Smith"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}"
                },
                // "created": "2022-07-26",
                "author": {
                    // "reference": "Practitioner/N10000001"
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "d16e2819-be08-40f7-888b-3f81a3a3518d",
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
                    // "path": "/description",
                    // "value": "Rujuk ke PAUD terdekat untuk stimulasi tumbuh kembang"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "d16e2819-be08-40f7-888b-3f81a3a3518d",
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

module.exports = CarePlan;
