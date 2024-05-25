const Controller = require("../controller");
const Service = require("../services/episode-of-care");
const { merge, unflatten } = require("../../../lib/helper");

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
//             const target = {
//                 "resourceType": "EpisodeOfCare",
//                 "identifier": [
//                     {
//                         "system": "http://sys-ids.kemkes.go.id/episode-of-care/{{Org_id}}",
//                         "value": "EOC12345"
//                     }
//                 ],
//                 "status": "finished",
//                 "statusHistory": [
//                     {
//                         "status": "active",
//                         "period": {
//                             "start": "2022-01-01",
//                             "end": "2022-06-30"
//                         }
//                     },
//                     {
//                         "status": "finished",
//                         "period": {
//                             "start": "2022-06-30",
//                             "end": "2022-06-30"
//                         }
//                     }
//                 ],
//                 "type": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.kemkes.go.id/CodeSystem/episodeofcare-type",
//                                 "code": "TB-SO",
//                                 "display": "Tuberkulosis Sensitif Obat"
//                             }
//                         ]
//                     }
//                 ],
//                 "diagnosis": [
//                     {
//                         "condition": {
//                             "reference": "Condition/f51d6f8b-0508-4286-9942-0dc196cca59a",
//                             "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                         },
//                         "role": {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
//                                     "code": "DD",
//                                     "display": "Discharged Diagnosis"
//                                 }
//                             ]
//                         },
//                         "rank": 1
//                     }
//                 ],
//                 "patient": {
//                     "reference": "Patient/100000030009",
//                     "display": "Budi Santoso"
//                 },
//                 "managingOrganization": {
//                     "reference": "Organization/{{Org_id}}"
//                 },
//                 "period": {
//                     "start": "2012-01-01",
//                     "end": "2012-06-30"
//                 },
//                 "careManager": {
//                     "reference": "Practitioner/N10000001",
//                     "display": "Dokter Bronsig"
//                 }
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
                body: payload,
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
                   ...(query["subject"]&&{"subject": query["subject"]}), // "100000030009",
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
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "260aa42f-d8d6-49a9-9d40-bb47c95effff",
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

    static async putId(req, res, next) {
        try {
            const {params,query,body} = req
//             const target = {
//                 "resourceType": "EpisodeOfCare",
//                 "id": "61c138e4-445a-447d-879c-fe3d5f8fb281",
//                 "identifier": [
//                     {
//                         "system": "http://sys-ids.kemkes.go.id/episode-of-care/{{Org_id}}",
//                         "value": "EOC12345"
//                     }
//                 ],
//                 "status": "waitlist",
//                 "statusHistory": [
//                     {
//                         "status": "active",
//                         "period": {
//                             "start": "2022-01-01",
//                             "end": "2022-06-30"
//                         }
//                     },
//                     {
//                         "status": "finished",
//                         "period": {
//                             "start": "2022-06-30",
//                             "end": "2022-06-30"
//                         }
//                     }
//                 ],
//                 "type": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.kemkes.go.id/CodeSystem/episodeofcare-type",
//                                 "code": "TB-SO",
//                                 "display": "Tuberkulosis Sensitif Obat"
//                             }
//                         ]
//                     }
//                 ],
//                 "diagnosis": [
//                     {
//                         "condition": {
//                             "reference": "Condition/f51d6f8b-0508-4286-9942-0dc196cca59a",
//                             "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                         },
//                         "role": {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
//                                     "code": "DD",
//                                     "display": "Discharged Diagnosis"
//                                 }
//                             ]
//                         },
//                         "rank": 1
//                     }
//                 ],
//                 "patient": {
//                     "reference": "Patient/100000030009",
//                     "display": "Budi Santoso"
//                 },
//                 "managingOrganization": {
//                     "reference": "Organization/{{Org_id}}"
//                 },
//                 "period": {
//                     "start": "2012-01-01",
//                     "end": "2012-06-30"
//                 },
//                 "careManager": {
//                     "reference": "Practitioner/N{{Org_id}}",
//                     "display": "Dokter Budiyana Santosa"
//                 }
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "61c138e4-445a-447d-879c-fe3d5f8fb281",
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
//             const target = [
//                 {
//                     "op": "replace",
//                     "path": "/status",
//                     "value": "cancelled"
//                 }
//             ]// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "61c138e4-445a-447d-879c-fe3d5f8fb281",
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

module.exports = EpisodeOfCare;
