const Controller = require("../controller");
const Service = require("../services/encounter");
const { merge, unflatten } = require("../../../lib/helper");

class Encounter extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Encounter.services[_id]) {
                Encounter.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Encounter.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "Encounter",
//                 "status": "arrived",
//                 "class": {
//                     "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
//                     "code": "AMB",
//                     "display": "ambulatory"
//                 },
//                 "subject": {
//                     "reference": "Patient/100000030009",
//                     "display": "Budi Santoso"
//                 },
//                 "participant": [
//                     {
//                         "type": [
//                             {
//                                 "coding": [
//                                     {
//                                         "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
//                                         "code": "ATND",
//                                         "display": "attender"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "individual": {
//                             "reference": "Practitioner/N10000001",
//                             "display": "Dokter Bronsig"
//                         }
//                     }
//                 ],
//                 "period": {
//                     "start": "2022-06-14T07:00:00+07:00"
//                 },
//                 "location": [
//                     {
//                         "location": {
//                             "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
//                             "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"
//                         }
//                     }
//                 ],
//                 "statusHistory": [
//                     {
//                         "status": "arrived",
//                         "period": {
//                             "start": "2022-06-14T07:00:00+07:00"
//                         }
//                     }
//                 ],
//                 "serviceProvider": {
//                     "reference": "Organization/{{Org_id}}"
//                 },
//                 "identifier": [
//                     {
//                         "system": "http://sys-ids.kemkes.go.id/encounter/{{Org_id}}",
//                         "value": "P20240001"
//                     }
//                 ]
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
                   ...(params["id"]&&{"id": params["id"]}), // "{{Encounter_uuid}}",
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

    static async get(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.get({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                   ...(query["subject"]&&{"subject": query["subject"]}), // "100000030009",
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
//                 "resourceType": "Encounter",
//                 "id": "{{Encounter_uuid}}",
//                 "identifier": [
//                     {
//                         "system": "http://sys-ids.kemkes.go.id/encounter/{{Org_id}}",
//                         "value": "P20240001"
//                     }
//                 ],
//                 "status": "in-progress",
//                 "class": {
//                     "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
//                     "code": "AMB",
//                     "display": "ambulatory"
//                 },
//                 "subject": {
//                     "reference": "Patient/100000030009",
//                     "display": "Budi Santoso"
//                 },
//                 "participant": [
//                     {
//                         "type": [
//                             {
//                                 "coding": [
//                                     {
//                                         "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
//                                         "code": "ATND",
//                                         "display": "attender"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "individual": {
//                             "reference": "Practitioner/N10000001",
//                             "display": "Dokter Bronsig"
//                         }
//                     }
//                 ],
//                 "period": {
//                     "start": "2022-06-14T07:00:00+07:00",
//                     "end": "2022-06-14T09:00:00+07:00"
//                 },
//                 "location": [
//                     {
//                         "location": {
//                             "reference": "Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",
//                             "display": "Ruang 1A, Poliklinik Rawat Jalan"
//                         }
//                     }
//                 ],
//                 "statusHistory": [
//                     {
//                         "status": "arrived",
//                         "period": {
//                             "start": "2022-06-14T07:00:00+07:00",
//                             "end": "2022-06-14T08:00:00+07:00"
//                         }
//                     },
//                     {
//                         "status": "in-progress",
//                         "period": {
//                             "start": "2022-06-14T08:00:00+07:00",
//                             "end": "2022-06-14T09:00:00+07:00"
//                         }
//                     }
//                 ],
//                 "serviceProvider": {
//                     "reference": "Organization/{{Org_id}}"
//                 }
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "{{Encounter_uuid}}",
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
//                     "path": "/statusHistory/0/period/start",
//                     "value": "2022-06-17T07:00:00+07:00"
//                 }
//             ]// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "{{Encounter_uuid}}",
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

module.exports = Encounter;
