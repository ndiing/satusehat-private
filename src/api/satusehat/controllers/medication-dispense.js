const Controller = require("../controller");
const Service = require("../services/medication-dispense");
const { merge, unflatten } = require("../../../lib/helper");

class MedicationDispense extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!MedicationDispense.services[_id]) {
                MedicationDispense.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = MedicationDispense.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "MedicationDispense",
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
                "category": {
                    "coding": [
                        {
                            // "system": "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",
                            // "code": "outpatient",
                            // "display": "Outpatient"
                        }
                    ]
                },
                "medicationReference": {
                    // "reference": "Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b",
                    // "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"
                },
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "context": {
                    // "reference": "Encounter/{{Encounter_uuid}}"
                },
                "performer": [
                    {
                        "actor": {
                            // "reference": "Practitioner/N10000003",
                            // "display": "John Miller"
                        }
                    }
                ],
                "location": {
                    // "reference": "Location/52e135eb-1956-4871-ba13-e833e662484d",
                    // "display": "Apotek RSUD Jati Asih"
                },
                "authorizingPrescription": [
                    {
                        // "reference": "MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"
                    }
                ],
                "quantity": {
                    // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                    // "code": "TAB",
                    // "value": 120
                },
                "daysSupply": {
                    // "value": 30,
                    // "unit": "Day",
                    // "system": "http://unitsofmeasure.org",
                    // "code": "d"
                },
                // "whenPrepared": "2022-01-15T10:20:00Z",
                // "whenHandedOver": "2022-01-15T16:20:00Z",
                "dosageInstruction": [
                    {
                        // "sequence": 1,
                        // "text": "Diminum 4 tablet sekali dalam sehari",
                        "timing": {
                            "repeat": {
                                // "frequency": 1,
                                // "period": 1,
                                // "periodUnit": "d"
                            }
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
                ]
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
                    ...params,
                   "id": params["id"], // "71e27aa4-89d1-49a0-80ab-20e970a939cc",
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
                // "resourceType": "MedicationDispense",
                // "id": "71e27aa4-89d1-49a0-80ab-20e970a939cc",
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
                // "status": "in-progress",
                "category": {
                    "coding": [
                        {
                            // "system": "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",
                            // "code": "outpatient",
                            // "display": "Outpatient"
                        }
                    ]
                },
                "medicationReference": {
                    // "reference": "Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b",
                    // "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"
                },
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "context": {
                    // "reference": "Encounter/{{Encounter_uuid}}"
                },
                "performer": [
                    {
                        "actor": {
                            // "reference": "Practitioner/N10000003",
                            // "display": "John Miller"
                        }
                    }
                ],
                "location": {
                    // "reference": "Location/52e135eb-1956-4871-ba13-e833e662484d",
                    // "display": "Apotek RSUD Jati Asih"
                },
                "authorizingPrescription": [
                    {
                        // "reference": "MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"
                    }
                ],
                "quantity": {
                    // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                    // "code": "TAB",
                    // "value": 120
                },
                "daysSupply": {
                    // "value": 30,
                    // "unit": "Day",
                    // "system": "http://unitsofmeasure.org",
                    // "code": "d"
                },
                // "whenPrepared": "2022-01-15T10:20:00Z",
                // "whenHandedOver": "2022-01-15T16:20:00Z",
                "dosageInstruction": [
                    {
                        // "sequence": 1,
                        // "text": "Diminum 4 tablet sekali dalam sehari",
                        "timing": {
                            "repeat": {
                                // "frequency": 1,
                                // "period": 1,
                                // "periodUnit": "d"
                            }
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
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   "id": params["id"], // "71e27aa4-89d1-49a0-80ab-20e970a939cc",
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
                    // "value": "preparation"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   "id": params["id"], // "71e27aa4-89d1-49a0-80ab-20e970a939cc",
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

module.exports = MedicationDispense;
