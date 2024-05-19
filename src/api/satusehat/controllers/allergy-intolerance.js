const Controller = require("../controller");
const Service = require("../services/allergy-intolerance");

class AllergyIntolerance extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!AllergyIntolerance.services[_id]) {
                AllergyIntolerance.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = AllergyIntolerance.services[_id];

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
//                     "resourceType": "AllergyIntolerance",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/allergy/{{Org_id}}",
//                             "use": "official",
//                             "value": "98457729"
//                         }
//                     ],
//                     "clinicalStatus": {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
//                                 "code": "active",
//                                 "display": "Active"
//                             }
//                         ]
//                     },
//                     "verificationStatus": {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
//                                 "code": "confirmed",
//                                 "display": "Confirmed"
//                             }
//                         ]
//                     },
//                     "category": [
//                         "food"
//                     ],
//                     "code": {
//                         "coding": [
//                             {
//                                 "system": "http://snomed.info/sct",
//                                 "code": "89811004",
//                                 "display": "Gluten"
//                             }
//                         ],
//                         "text": "Alergi bahan gluten, khususnya ketika makan roti gandum"
//                     },
//                     "patient": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "encounter": {
//                         "reference": "Encounter/{{Encounter_uuid}}",
//                         "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
//                     },
//                     "recordedDate": "2022-06-14T15:37:31+07:00",
//                     "recorder": {
//                         "reference": "Practitioner/N10000001"
//                     }
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
                   "patient": query["patient"], // "100000030009",
                   "code": query["code"], // "89811004",
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
                   "id": params["id"], // "94b05c94-7429-4e98-bebe-d9cbda19d3d5",
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
                   "id": params["id"], // "94b05c94-7429-4e98-bebe-d9cbda19d3d5",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "AllergyIntolerance",
//                     "id": "94b05c94-7429-4e98-bebe-d9cbda19d3d5",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/allergy/{{Org_id}}",
//                             "use": "official",
//                             "value": "98457729"
//                         }
//                     ],
//                     "clinicalStatus": {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
//                                 "code": "resolved",
//                                 "display": "resolved"
//                             }
//                         ]
//                     },
//                     "verificationStatus": {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
//                                 "code": "confirmed",
//                                 "display": "Confirmed"
//                             }
//                         ]
//                     },
//                     "category": [
//                         "food"
//                     ],
//                     "code": {
//                         "coding": [
//                             {
//                                 "system": "http://snomed.info/sct",
//                                 "code": "89811004",
//                                 "display": "Gluten"
//                             }
//                         ],
//                         "text": "Alergi bahan gluten, khususnya ketika makan roti gandum"
//                     },
//                     "patient": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "encounter": {
//                         "reference": "Encounter/{{Encounter_uuid}}",
//                         "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
//                     },
//                     "recordedDate": "2022-06-14T15:37:31+07:00",
//                     "recorder": {
//                         "reference": "Practitioner/N10000001"
//                     }
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
                   "id": params["id"], // "94b05c94-7429-4e98-bebe-d9cbda19d3d5",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/category/0",
//                         "value": "medication"
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

module.exports = AllergyIntolerance;
