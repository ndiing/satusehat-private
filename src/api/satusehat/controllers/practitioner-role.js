const Controller = require("../controller");
const Service = require("../services/practitioner-role");

class PractitionerRole extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!PractitionerRole.services[_id]) {
                PractitionerRole.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = PractitionerRole.services[_id];

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
//                     "resourceType": "PractitionerRole",
//                     "active": true,
//                     "practitioner": {
//                         "reference": "Practitioner/N10000001",
//                         "display": "Dokter Bronsig"
//                     },
//                     "organization": {
//                         "reference": "Organization/{{Org_id}}"
//                     },
//                     "code": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.hl7.org/CodeSystem/practitioner-role",
//                                     "code": "doctor",
//                                     "display": "Doctor"
//                                 }
//                             ]
//                         }
//                     ],
//                     "specialty": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",
//                                     "code": "S001.09",
//                                     "display": "Penyakit dalam kardiovaskular "
//                                 }
//                             ]
//                         }
//                     ],
//                     "healthcareService": [
//                         {
//                             "reference": "HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17"
//                         }
//                     ],
//                     "telecom": [
//                         {
//                             "system": "phone",
//                             "value": "(021) 14045",
//                             "use": "work"
//                         },
//                         {
//                             "system": "email",
//                             "value": "doctor.bronsig@dto.kemkes.go.id",
//                             "use": "work"
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

    static async getId(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.getId({
                params: {
                   "id": params["id"], // "5b4dc020-80b0-40f8-b4f4-5c385b28e1a7",
                },
                query: {
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
                },
                query: {
                   "practitioner": query["practitioner"], // "N10000001",
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
                   "id": params["id"], // "5b4dc020-80b0-40f8-b4f4-5c385b28e1a7",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "PractitionerRole",
//                     "id": "5b4dc020-80b0-40f8-b4f4-5c385b28e1a7",
//                     "active": true,
//                     "practitioner": {
//                         "reference": "Practitioner/N10000001",
//                         "display": "Dokter Bronsig"
//                     },
//                     "organization": {
//                         "reference": "Organization/{{Org_id}}"
//                     },
//                     "code": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.hl7.org/CodeSystem/practitioner-role",
//                                     "code": "doctor",
//                                     "display": "Doctor"
//                                 }
//                             ]
//                         }
//                     ],
//                     "specialty": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",
//                                     "code": "S001.09",
//                                     "display": "Penyakit dalam kardiovaskular "
//                                 }
//                             ]
//                         }
//                     ],
//                     "healthcareService": [
//                         {
//                             "reference": "HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17"
//                         }
//                     ],
//                     "telecom": [
//                         {
//                             "system": "phone",
//                             "value": "(021) 14045 I'm Lovin It",
//                             "use": "work"
//                         },
//                         {
//                             "system": "email",
//                             "value": "doctor.bronsig@dto.kemkes.go.id",
//                             "use": "work"
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
                   "id": params["id"], // "5b4dc020-80b0-40f8-b4f4-5c385b28e1a7",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/active",
//                         "value": false
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

module.exports = PractitionerRole;
