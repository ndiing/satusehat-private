const Controller = require("../controller");
const Service = require("../services/episode-of-care");

class EpisodeOfCare extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!EpisodeOfCare.services[_id]) {
                EpisodeOfCare.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = EpisodeOfCare.services[_id];

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
//                     "resourceType": "EpisodeOfCare",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/episode-of-care/{{Org_id}}",
//                             "value": "EOC12345"
//                         }
//                     ],
//                     "status": "finished",
//                     "statusHistory": [
//                         {
//                             "status": "active",
//                             "period": {
//                                 "start": "2022-01-01",
//                                 "end": "2022-06-30"
//                             }
//                         },
//                         {
//                             "status": "finished",
//                             "period": {
//                                 "start": "2022-06-30",
//                                 "end": "2022-06-30"
//                             }
//                         }
//                     ],
//                     "type": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.kemkes.go.id/CodeSystem/episodeofcare-type",
//                                     "code": "TB-SO",
//                                     "display": "Tuberkulosis Sensitif Obat"
//                                 }
//                             ]
//                         }
//                     ],
//                     "diagnosis": [
//                         {
//                             "condition": {
//                                 "reference": "Condition/f51d6f8b-0508-4286-9942-0dc196cca59a",
//                                 "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                             },
//                             "role": {
//                                 "coding": [
//                                     {
//                                         "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
//                                         "code": "DD",
//                                         "display": "Discharged Diagnosis"
//                                     }
//                                 ]
//                             },
//                             "rank": 1
//                         }
//                     ],
//                     "patient": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "managingOrganization": {
//                         "reference": "Organization/{{Org_id}}"
//                     },
//                     "period": {
//                         "start": "2012-01-01",
//                         "end": "2012-06-30"
//                     },
//                     "careManager": {
//                         "reference": "Practitioner/N10000001",
//                         "display": "Dokter Bronsig"
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
                   "subject": query["subject"], // "100000030009",
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
                   "id": params["id"], // "260aa42f-d8d6-49a9-9d40-bb47c95effff",
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
                   "id": params["id"], // "61c138e4-445a-447d-879c-fe3d5f8fb281",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "EpisodeOfCare",
//                     "id": "61c138e4-445a-447d-879c-fe3d5f8fb281",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/episode-of-care/{{Org_id}}",
//                             "value": "EOC12345"
//                         }
//                     ],
//                     "status": "waitlist",
//                     "statusHistory": [
//                         {
//                             "status": "active",
//                             "period": {
//                                 "start": "2022-01-01",
//                                 "end": "2022-06-30"
//                             }
//                         },
//                         {
//                             "status": "finished",
//                             "period": {
//                                 "start": "2022-06-30",
//                                 "end": "2022-06-30"
//                             }
//                         }
//                     ],
//                     "type": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.kemkes.go.id/CodeSystem/episodeofcare-type",
//                                     "code": "TB-SO",
//                                     "display": "Tuberkulosis Sensitif Obat"
//                                 }
//                             ]
//                         }
//                     ],
//                     "diagnosis": [
//                         {
//                             "condition": {
//                                 "reference": "Condition/f51d6f8b-0508-4286-9942-0dc196cca59a",
//                                 "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                             },
//                             "role": {
//                                 "coding": [
//                                     {
//                                         "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
//                                         "code": "DD",
//                                         "display": "Discharged Diagnosis"
//                                     }
//                                 ]
//                             },
//                             "rank": 1
//                         }
//                     ],
//                     "patient": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "managingOrganization": {
//                         "reference": "Organization/{{Org_id}}"
//                     },
//                     "period": {
//                         "start": "2012-01-01",
//                         "end": "2012-06-30"
//                     },
//                     "careManager": {
//                         "reference": "Practitioner/N{{Org_id}}",
//                         "display": "Dokter Budiyana Santosa"
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
                   "id": params["id"], // "61c138e4-445a-447d-879c-fe3d5f8fb281",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/status",
//                         "value": "cancelled"
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

module.exports = EpisodeOfCare;
