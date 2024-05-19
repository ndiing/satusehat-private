const Controller = require("../controller");
const Service = require("../services/appointment");

class Appointment extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Appointment.services[_id]) {
                Appointment.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Appointment.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.post({
                params: {
                },
                query: {
                },
//                 body: {
//                     "resourceType": "Appointment",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/cha-appointment",
//                             "value": "123"
//                         }
//                     ],
//                     "status": "proposed",
//                     "appointmentType": {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
//                                 "code": "ROUTINE",
//                                 "display": "Routine appointment"
//                             }
//                         ]
//                     },
//                     "basedOn": [
//                         {
//                             "reference": "ServiceRequest/e668bf96-b330-44c8-a2ea-0f6bdf388bf1"
//                         }
//                     ],
//                     "slot": [
//                         {
//                             "reference": "Slot/6ced63df-93c3-4148-bbfd-af741b373993"
//                         }
//                     ],
//                     "created": "2022-09-24T08:00:00+07:00",
//                     "participant": [
//                         {
//                             "actor": {
//                                 "reference": "Patient/100000030009",
//                                 "display": "Budi Santoso"
//                             },
//                             "status": "accepted"
//                         },
//                         {
//                             "actor": {
//                                 "reference": "HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17",
//                                 "display": "Poliklinik Bedah Rawat Jalan Terpadu"
//                             },
//                             "status": "needs-action"
//                         }
//                     ]
//                 },// 
// 
                body,
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
                },
                query: {
                   "actor": query["actor"], // "8cfb2d6f-dc20-4068-9113-805d426a6f17",
                },
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
                   "id": params["id"], // "0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a",
                },
                query: {
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
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "Appointment",
//                     "id": "0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/cha-appointment",
//                             "value": "123"
//                         }
//                     ],
//                     "status": "proposed",
//                     "appointmentType": {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
//                                 "code": "ROUTINE",
//                                 "display": "Routine appointment"
//                             }
//                         ]
//                     },
//                     "basedOn": [
//                         {
//                             "reference": "ServiceRequest/e668bf96-b330-44c8-a2ea-0f6bdf388bf1"
//                         }
//                     ],
//                     "slot": [
//                         {
//                             "reference": "Slot/6ced63df-93c3-4148-bbfd-af741b373993"
//                         }
//                     ],
//                     "created": "2022-09-24T08:00:00+07:00",
//                     "participant": [
//                         {
//                             "actor": {
//                                 "reference": "Patient/100000030009",
//                                 "display": "Budi Santoso"
//                             },
//                             "status": "declined"
//                         },
//                         {
//                             "actor": {
//                                 "reference": "HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17",
//                                 "display": "Poliklinik Bedah Rawat Jalan Terpadu"
//                             },
//                             "status": "needs-action"
//                         }
//                     ]
//                 },// 
// 
                body,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async patchId(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.patchId({
                params: {
                   "id": params["id"], // "0e0f2ff3-cf5c-48d8-9db2-b0f710fe514a",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/participant/0/status",
//                         "value": "tentative"
//                     }
//                 ],// 
// 
                body,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Appointment;
