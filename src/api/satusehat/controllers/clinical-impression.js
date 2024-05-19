const Controller = require("../controller");
const Service = require("../services/clinical-impression");

class ClinicalImpression extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!ClinicalImpression.services[_id]) {
                ClinicalImpression.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = ClinicalImpression.services[_id];

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
//                     "resourceType": "ClinicalImpression",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/clinicalimpression/{{Org_id}}",
//                             "use": "official",
//                             "value": "Prognosis_000123"
//                         }
//                     ],
//                     "status": "completed",
//                     "description": "Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",
//                     "subject": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "encounter": {
//                         "reference": "Encounter/{{Encounter_uuid}}",
//                         "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
//                     },
//                     "effectiveDateTime": "2022-06-14T15:37:31+07:00",
//                     "date": "2022-06-14T15:15:31+07:00",
//                     "assessor": {
//                         "reference": "Practitioner/N10000001"
//                     },
//                     "problem": [
//                         {
//                             "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"
//                         }
//                     ],
//                     "investigation": [
//                         {
//                             "code": {
//                                 "text": "Pemeriksaan Sputum BTA"
//                             },
//                             "item": [
//                                 {
//                                     "reference": "DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"
//                                 },
//                                 {
//                                     "reference": "Observation/56819f05-28b9-43c2-b0d1-3785768aa886"
//                                 }
//                             ]
//                         }
//                     ],
//                     "summary": "Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",
//                     "finding": [
//                         {
//                             "itemCodeableConcept": {
//                                 "coding": [
//                                     {
//                                         "system": "http://hl7.org/fhir/sid/icd-10",
//                                         "code": "A15.0",
//                                         "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                                     }
//                                 ]
//                             },
//                             "itemReference": {
//                                 "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"
//                             }
//                         }
//                     ],
//                     "prognosisCodeableConcept": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://snomed.info/sct",
//                                     "code": "170968001",
//                                     "display": "Prognosis good"
//                                 }
//                             ]
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
                   "subject": query["subject"], // "100000030009",
                   "encounter": query["encounter"], // "{{Encounter_uuid}}",
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
                   "id": params["id"], // "8163695a-6224-401e-9a78-7dbc9bed69af",
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
                   "id": params["id"], // "8163695a-6224-401e-9a78-7dbc9bed69af",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "ClinicalImpression",
//                     "id": "8163695a-6224-401e-9a78-7dbc9bed69af",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/clinicalimpression/{{Org_id}}",
//                             "use": "official",
//                             "value": "Prognosis_000123"
//                         }
//                     ],
//                     "status": "completed",
//                     "description": "Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",
//                     "subject": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "encounter": {
//                         "reference": "Encounter/{{Encounter_uuid}}",
//                         "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
//                     },
//                     "effectiveDateTime": "2022-06-14T15:37:31+07:00",
//                     "date": "2022-06-14T15:15:31+07:00",
//                     "assessor": {
//                         "reference": "Practitioner/N10000001"
//                     },
//                     "problem": [
//                         {
//                             "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"
//                         }
//                     ],
//                     "investigation": [
//                         {
//                             "code": {
//                                 "text": "Pemeriksaan Sputum BTA"
//                             },
//                             "item": [
//                                 {
//                                     "reference": "DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"
//                                 },
//                                 {
//                                     "reference": "Observation/56819f05-28b9-43c2-b0d1-3785768aa886"
//                                 }
//                             ]
//                         }
//                     ],
//                     "summary": "Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",
//                     "finding": [
//                         {
//                             "itemCodeableConcept": {
//                                 "coding": [
//                                     {
//                                         "system": "http://hl7.org/fhir/sid/icd-10",
//                                         "code": "A15.0",
//                                         "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
//                                     }
//                                 ]
//                             },
//                             "itemReference": {
//                                 "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"
//                             }
//                         }
//                     ],
//                     "prognosisCodeableConcept": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://snomed.info/sct",
//                                     "code": "65872000",
//                                     "display": "Fair prognosis"
//                                 }
//                             ]
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
                   "id": params["id"], // "8163695a-6224-401e-9a78-7dbc9bed69af",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/status",
//                         "value": "entered-in-error"
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

module.exports = ClinicalImpression;
