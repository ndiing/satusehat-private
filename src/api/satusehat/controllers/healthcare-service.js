const Controller = require("../controller");
const Service = require("../services/healthcare-service");
const { merge, unflatten } = require("../../../lib/helper");

class HealthcareService extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!HealthcareService.services[_id]) {
                HealthcareService.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = HealthcareService.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "HealthcareService",
//                 "identifier": [
//                     {
//                         "system": "http://sys-ids.kemkes.go.id/healthcareservice/{{Org_id}}",
//                         "value": "HS-19920029"
//                     }
//                 ],
//                 "active": true,
//                 "providedBy": {
//                     "reference": "Organization/{{Org_id}}"
//                 },
//                 "type": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://sys-ids.kemkes.go.id/bpjs-poli",
//                                 "code": "JAN",
//                                 "display": "Poli Jantung"
//                             }
//                         ]
//                     },
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/service-type",
//                                 "code": "305",
//                                 "display": "Counselling"
//                             }
//                         ]
//                     },
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/service-type",
//                                 "code": "221",
//                                 "display": "Surgery - General"
//                             }
//                         ]
//                     }
//                 ],
//                 "specialty": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",
//                                 "code": "S001.09",
//                                 "display": "Penyakit dalam kardiovaskular "
//                             }
//                         ]
//                     }
//                 ],
//                 "location": [
//                     {
//                         "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
//                         "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"
//                     }
//                 ],
//                 "name": "Poliklinik Bedah Rawat Jalan Terpadu",
//                 "program": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.kemkes.go.id/CodeSystem/program",
//                                 "code": "1000200",
//                                 "display": "Program JKN"
//                             }
//                         ]
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
                   ...(params["id"]&&{"id": params["id"]}), // "8cfb2d6f-dc20-4068-9113-805d426a6f17",
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
                   ...(query["specialty"]&&{"specialty": query["specialty"]}), // "S001.09",
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
//                 "resourceType": "HealthcareService",
//                 "id": "8cfb2d6f-dc20-4068-9113-805d426a6f17",
//                 "identifier": [
//                     {
//                         "system": "http://sys-ids.kemkes.go.id/healthcareservice/{{Org_id}}",
//                         "value": "HS-19920029_123"
//                     }
//                 ],
//                 "active": true,
//                 "providedBy": {
//                     "reference": "Organization/{{Org_id}}"
//                 },
//                 "type": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://sys-ids.kemkes.go.id/bpjs-poli",
//                                 "code": "JAN",
//                                 "display": "Poli Jantung"
//                             }
//                         ]
//                     },
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/service-type",
//                                 "code": "305",
//                                 "display": "Counselling"
//                             }
//                         ]
//                     },
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.hl7.org/CodeSystem/service-type",
//                                 "code": "221",
//                                 "display": "Surgery - General"
//                             }
//                         ]
//                     }
//                 ],
//                 "specialty": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",
//                                 "code": "S001.09",
//                                 "display": "Penyakit dalam kardiovaskular "
//                             }
//                         ]
//                     }
//                 ],
//                 "location": [
//                     {
//                         "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
//                         "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"
//                     }
//                 ],
//                 "name": "Poliklinik Bedah Rawat Jalan Terpadu",
//                 "program": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://terminology.kemkes.go.id/CodeSystem/program",
//                                 "code": "1000200",
//                                 "display": "Program JKN"
//                             }
//                         ]
//                     }
//                 ]
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "8cfb2d6f-dc20-4068-9113-805d426a6f17",
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
//                     "path": "/name",
//                     "value": "Poliklinik Jantung Konsultan Bedah Thorax Kardiovaskular"
//                 }
//             ]// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "8cfb2d6f-dc20-4068-9113-805d426a6f17",
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

module.exports = HealthcareService;
