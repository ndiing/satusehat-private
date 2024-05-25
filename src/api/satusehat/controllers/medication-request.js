const Controller = require("../controller");
const Service = require("../services/medication-request");
const { merge, unflatten } = require("../../../lib/helper");

class MedicationRequest extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!MedicationRequest.services[_id]) {
                MedicationRequest.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = MedicationRequest.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "MedicationRequest",
                "identifier": [
                    {
                        // "system": "http://sys-ids.kemkes.go.id/prescription/{{Org_id}}",
                        // "use": "official",
                        // "value": "123456788"
                    },
                    {
                        // "system": "http://sys-ids.kemkes.go.id/prescription-item/{{Org_id}}",
                        // "use": "official",
                        // "value": "123456788-1"
                    }
                ],
                // "status": "completed",
                // "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                                // "code": "outpatient",
                                // "display": "Outpatient"
                            }
                        ]
                    }
                ],
                // "priority": "routine",
                "medicationReference": {
                    // "reference": "Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",
                    // "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"
                },
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}"
                },
                // "authoredOn": "2022-08-04",
                "requester": {
                    // "reference": "Practitioner/N10000001",
                    // "display": "Dokter Bronsig"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                // "system": "http://hl7.org/fhir/sid/icd-10",
                                // "code": "A15.0",
                                // "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
                            }
                        ]
                    }
                ],
                "courseOfTherapyType": {
                    "coding": [
                        {
                            // "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                            // "code": "continuous",
                            // "display": "Continuing long term therapy"
                        }
                    ]
                },
                "dosageInstruction": [
                    {
                        // "sequence": 1,
                        // "text": "4 tablet per hari",
                        "additionalInstruction": [
                            {
                                // "text": "Diminum setiap hari"
                            }
                        ],
                        // "patientInstruction": "4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",
                        "timing": {
                            "repeat": {
                                // "frequency": 1,
                                // "period": 1,
                                // "periodUnit": "d"
                            }
                        },
                        "route": {
                            "coding": [
                                {
                                    // "system": "http://www.whocc.no/atc",
                                    // "code": "O",
                                    // "display": "Oral"
                                }
                            ]
                        },
                        "doseAndRate": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            // "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                                            // "code": "ordered",
                                            // "display": "Ordered"
                                        }
                                    ]
                                },
                                "doseQuantity": {
                                    // "value": 4,
                                    // "unit": "TAB",
                                    // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                    // "code": "TAB"
                                }
                            }
                        ]
                    }
                ],
                "dispenseRequest": {
                    "dispenseInterval": {
                        // "value": 1,
                        // "unit": "days",
                        // "system": "http://unitsofmeasure.org",
                        // "code": "d"
                    },
                    "validityPeriod": {
                        // "start": "2022-01-01",
                        // "end": "2022-01-30"
                    },
                    // "numberOfRepeatsAllowed": 0,
                    "quantity": {
                        // "value": 120,
                        // "unit": "TAB",
                        // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                        // "code": "TAB"
                    },
                    "expectedSupplyDuration": {
                        // "value": 30,
                        // "unit": "days",
                        // "system": "http://unitsofmeasure.org",
                        // "code": "d"
                    },
                    "performer": {
                        // "reference": "Organization/{{Org_id}}"
                    }
                }
            }
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
                   ...(params["id"]&&{"id": params["id"]}), // "b5293e6d-31c6-4111-8214-609ae5890838",
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
            const target = {
                // "resourceType": "MedicationRequest",
                // "id": "b5293e6d-31c6-4111-8214-609ae5890838",
                "identifier": [
                    {
                        // "system": "http://sys-ids.kemkes.go.id/prescription/{{Org_id}}",
                        // "use": "official",
                        // "value": "123456788"
                    },
                    {
                        // "system": "http://sys-ids.kemkes.go.id/prescription-item/{{Org_id}}",
                        // "use": "official",
                        // "value": "123456788-1"
                    }
                ],
                // "status": "cancelled",
                // "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                                // "code": "outpatient",
                                // "display": "Outpatient"
                            }
                        ]
                    }
                ],
                // "priority": "routine",
                "medicationReference": {
                    // "reference": "Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",
                    // "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"
                },
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}"
                },
                // "authoredOn": "2022-08-04",
                "requester": {
                    // "reference": "Practitioner/N10000001",
                    // "display": "Dokter Bronsig"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                // "system": "http://hl7.org/fhir/sid/icd-10",
                                // "code": "A15.0",
                                // "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture"
                            }
                        ]
                    }
                ],
                "courseOfTherapyType": {
                    "coding": [
                        {
                            // "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                            // "code": "continuous",
                            // "display": "Continuing long term therapy"
                        }
                    ]
                },
                "dosageInstruction": [
                    {
                        // "sequence": 1,
                        // "text": "4 tablet per hari",
                        "additionalInstruction": [
                            {
                                // "text": "Diminum setiap hari"
                            }
                        ],
                        // "patientInstruction": "4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",
                        "timing": {
                            "repeat": {
                                // "frequency": 1,
                                // "period": 1,
                                // "periodUnit": "d"
                            }
                        },
                        "route": {
                            "coding": [
                                {
                                    // "system": "http://www.whocc.no/atc",
                                    // "code": "O",
                                    // "display": "Oral"
                                }
                            ]
                        },
                        "doseAndRate": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            // "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                                            // "code": "ordered",
                                            // "display": "Ordered"
                                        }
                                    ]
                                },
                                "doseQuantity": {
                                    // "value": 4,
                                    // "unit": "TAB",
                                    // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                    // "code": "TAB"
                                }
                            }
                        ]
                    }
                ],
                "dispenseRequest": {
                    "dispenseInterval": {
                        // "value": 1,
                        // "unit": "days",
                        // "system": "http://unitsofmeasure.org",
                        // "code": "d"
                    },
                    "validityPeriod": {
                        // "start": "2022-01-01",
                        // "end": "2022-01-30"
                    },
                    // "numberOfRepeatsAllowed": 0,
                    "quantity": {
                        // "value": 120,
                        // "unit": "TAB",
                        // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                        // "code": "TAB"
                    },
                    "expectedSupplyDuration": {
                        // "value": 30,
                        // "unit": "days",
                        // "system": "http://unitsofmeasure.org",
                        // "code": "d"
                    },
                    "performer": {
                        // "reference": "Organization/{{Org_id}}"
                    }
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "b5293e6d-31c6-4111-8214-609ae5890838",
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
            const target = [
                {
                    // "op": "replace",
                    // "path": "/status",
                    // "value": "on-hold"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "b5293e6d-31c6-4111-8214-609ae5890838",
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

module.exports = MedicationRequest;
