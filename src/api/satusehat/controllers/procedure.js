const Controller = require("../controller");
const Service = require("../services/procedure");
const { merge, unflatten } = require("../../../lib/helper");

class Procedure extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Procedure.services[_id]) {
                Procedure.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Procedure.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
//             const target = {
//                 "resourceType": "Procedure",
//                 "status": "completed",
//                 "category": {
//                     "coding": [
//                         {
//                             "system": "http://snomed.info/sct",
//                             "code": "103693007",
//                             "display": "Diagnostic procedure"
//                         }
//                     ],
//                     "text": "Diagnostic procedure"
//                 },
//                 "code": {
//                     "coding": [
//                         {
//                             "system": "http://hl7.org/fhir/sid/icd-9-cm",
//                             "code": "87.44",
//                             "display": "Routine chest x-ray, so described"
//                         }
//                     ]
//                 },
//                 "subject": {
//                     "reference": "Patient/100000030009",
//                     "display": "Budi Santoso"
//                 },
//                 "encounter": {
//                     "reference": "Encounter/{{Encounter_uuid}}",
//                     "display": "Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022"
//                 },
//                 "performedPeriod": {
//                     "start": "2022-06-14T13:31:00+01:00",
//                     "end": "2022-06-14T14:27:00+01:00"
//                 },
//                 "performer": [
//                     {
//                         "actor": {
//                             "reference": "Practitioner/N10000001",
//                             "display": "Dokter Bronsig"
//                         }
//                     }
//                 ],
//                 "reasonCode": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://hl7.org/fhir/sid/icd-10",
//                                 "code": "A15.0",
//                                 "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                             }
//                         ]
//                     }
//                 ],
//                 "bodySite": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://snomed.info/sct",
//                                 "code": "302551006",
//                                 "display": "Entire Thorax"
//                             }
//                         ]
//                     }
//                 ],
//                 "note": [
//                     {
//                         "text": "Rontgen thorax melihat perluasan infiltrat dan kavitas."
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
                   ...(params["id"]&&{"id": params["id"]}), // "87859868-c35b-4f7b-86dd-da9830ae58c5",
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
//                 "resourceType": "Procedure",
//                 "id": "87859868-c35b-4f7b-86dd-da9830ae58c5",
//                 "status": "completed",
//                 "category": {
//                     "coding": [
//                         {
//                             "system": "http://snomed.info/sct",
//                             "code": "103693007",
//                             "display": "Diagnostic procedure"
//                         }
//                     ],
//                     "text": "Diagnostic procedure"
//                 },
//                 "code": {
//                     "coding": [
//                         {
//                             "system": "http://hl7.org/fhir/sid/icd-9-cm",
//                             "code": "87.44",
//                             "display": "Routine chest x-ray, so described"
//                         }
//                     ]
//                 },
//                 "subject": {
//                     "reference": "Patient/P00030004",
//                     "display": "Budi Santoso"
//                 },
//                 "encounter": {
//                     "reference": "Encounter/{{Encounter_uuid}}",
//                     "display": "Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022"
//                 },
//                 "performedPeriod": {
//                     "start": "2022-06-14T13:31:00+01:00",
//                     "end": "2022-06-14T14:27:00+01:00"
//                 },
//                 "performer": [
//                     {
//                         "actor": {
//                             "reference": "Practitioner/N10000001",
//                             "display": "Dokter Bronsig"
//                         }
//                     }
//                 ],
//                 "reasonCode": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://hl7.org/fhir/sid/icd-10",
//                                 "code": "A15.0",
//                                 "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                             }
//                         ]
//                     }
//                 ],
//                 "bodySite": [
//                     {
//                         "coding": [
//                             {
//                                 "system": "http://snomed.info/sct",
//                                 "code": "302551006",
//                                 "display": "Entire Thorax"
//                             }
//                         ]
//                     }
//                 ],
//                 "note": [
//                     {
//                         "text": "Rontgen thorax melihat perluasan infiltrat dan kavitas."
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
                   ...(params["id"]&&{"id": params["id"]}), // "87859868-c35b-4f7b-86dd-da9830ae58c5",
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
//                     "path": "/category/text",
//                     "value": "Surgical procedure"
//                 }
//             ]// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "87859868-c35b-4f7b-86dd-da9830ae58c5",
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

module.exports = Procedure;
