const Controller = require("../controller");
const Service = require("../services/condition");
const { merge, unflatten } = require("../../../lib/helper");

class Condition extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Condition.services[_id]) {
                Condition.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Condition.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "Condition",
                "clinicalStatus": {
                    "coding": [
                        {
                            // "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                            // "code": "active",
                            // "display": "Active"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                // "code": "encounter-diagnosis",
                                // "display": "Encounter Diagnosis"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://hl7.org/fhir/sid/icd-10",
                            // "code": "K35.8",
                            // "display": "Acute appendicitis, other and unspecified"
                        }
                    ]
                },
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.post({
                params: {
                },
                query: {
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
                   "id": params["id"], // "cfbfb2a9-b261-494b-a6ad-905875fcdec6",
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
            const target = {
                // "resourceType": "Condition",
                // "id": "f1369adf-26f6-47a5-90f2-ce08442639aa",
                "clinicalStatus": {
                    "coding": [
                        {
                            // "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                            // "code": "remission",
                            // "display": "Remission"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                // "code": "encounter-diagnosis",
                                // "display": "Encounter Diagnosis"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://hl7.org/fhir/sid/icd-10",
                            // "code": "K35.8",
                            // "display": "Acute appendicitis, other and unspecified"
                        }
                    ]
                },
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "f1369adf-26f6-47a5-90f2-ce08442639aa",
                },
                query: {
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
            const target = [
                {
                    // "op": "replace",
                    // "path": "/clinicalStatus/coding/0/code",
                    // "value": "remission"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                   "id": params["id"], // "f1369adf-26f6-47a5-90f2-ce08442639aa",
                },
                query: {
                },
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Condition;
