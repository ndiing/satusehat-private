const Controller = require("../controller");
const Service = require("../services/slot");
const { merge, unflatten } = require("../../../lib/helper");

class Slot extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Slot.services[_id]) {
                Slot.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Slot.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "Slot",
//                 "appointmentType": {
//                     "coding": [
//                         {
//                             "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
//                             "code": "ROUTINE",
//                             "display": "Routine appointment"
//                         }
//                     ]
//                 },
//                 "schedule": {
//                     "reference": "Schedule/683a85cf-27fe-416d-a830-3d21d031e58a"
//                 },
//                 "status": "free",
//                 "start": "2022-10-05T08:00:00+07:00",
//                 "end": "2022-10-05T08:15:00+07:00",
//                 "comment": "Slot untuk appointment pelayanan pada jam 8.00 WIB s/d 8.15 WIB"
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.post({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                },
                headers,
                body: payload,
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
                   ...(params["id"]&&{"id": params["id"]}), // "6ced63df-93c3-4148-bbfd-af741b373993",
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

    static async putId(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "Slot",
//                 "id": "6ced63df-93c3-4148-bbfd-af741b373993",
//                 "appointmentType": {
//                     "coding": [
//                         {
//                             "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
//                             "code": "ROUTINE",
//                             "display": "Routine appointment"
//                         }
//                     ]
//                 },
//                 "schedule": {
//                     "reference": "Schedule/683a85cf-27fe-416d-a830-3d21d031e58a"
//                 },
//                 "status": "busy",
//                 "start": "2022-10-05T08:00:00+07:00",
//                 "end": "2022-10-05T08:15:00+07:00",
//                 "comment": "Slot untuk appointment pelayanan pada jam 8.00 WIB s/d 8.15 WIB"
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "6ced63df-93c3-4148-bbfd-af741b373993",
                },
                query: {
                    ...query,
                },
                headers,
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async patchId(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = [
//                 {
//                     "op": "replace",
//                     "path": "/status",
//                     "value": "free"
//                 }
//             ]// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "6ced63df-93c3-4148-bbfd-af741b373993",
                },
                query: {
                    ...query,
                },
                headers,
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Slot;
