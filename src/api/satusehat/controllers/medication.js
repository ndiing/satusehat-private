const Controller = require("../controller");
const Service = require("../services/medication");
const { merge, unflatten } = require("../../../lib/helper");

class Medication extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Medication.services[_id]) {
                Medication.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Medication.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "Medication",
                "meta": {
                    "profile": [
                        // "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"
                    ]
                },
                "identifier": [
                    {
                        // "system": "http://sys-ids.kemkes.go.id/medication/{{Org_id}}",
                        // "use": "official",
                        // "value": "123456789"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://sys-ids.kemkes.go.id/kfa",
                            // "code": "93001019",
                            // "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"
                        }
                    ]
                },
                // "status": "active",
                "manufacturer": {
                    // "reference": "Organization/900001"
                },
                "form": {
                    "coding": [
                        {
                            // "system": "http://terminology.kemkes.go.id/CodeSystem/medication-form",
                            // "code": "BS023",
                            // "display": "Kaplet Salut Selaput"
                        }
                    ]
                },
                "ingredient": [
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000330",
                                    // "display": "Rifampin"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 150,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    },
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000328",
                                    // "display": "Isoniazid"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 75,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    },
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000329",
                                    // "display": "Pyrazinamide"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 400,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    },
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000288",
                                    // "display": "Ethambutol"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 275,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    }
                ],
                "extension": [
                    {
                        // "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://terminology.kemkes.go.id/CodeSystem/medication-type",
                                    // "code": "NC",
                                    // "display": "Non-compound"
                                }
                            ]
                        }
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

    static async getId(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.getId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",
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
                // "resourceType": "Medication",
                // "id": "8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",
                "meta": {
                    "profile": [
                        // "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"
                    ]
                },
                "identifier": [
                    {
                        // "system": "http://sys-ids.kemkes.go.id/medication/{{Org_id}}",
                        // "use": "official",
                        // "value": "123456789"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://sys-ids.kemkes.go.id/kfa",
                            // "display": "Obat Kapsul TB Bintang Toedjoe"
                        }
                    ]
                },
                // "status": "active",
                "manufacturer": {
                    // "reference": "Organization/900001"
                },
                "form": {
                    "coding": [
                        {
                            // "system": "http://terminology.kemkes.go.id/CodeSystem/medication-form",
                            // "code": "BS019",
                            // "display": "Kapsul"
                        }
                    ]
                },
                "ingredient": [
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000330",
                                    // "display": "Rifampin"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 150,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    },
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000328",
                                    // "display": "Isoniazid"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 75,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    },
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000329",
                                    // "display": "Pyrazinamide"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 400,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    },
                    {
                        "itemCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://sys-ids.kemkes.go.id/kfa",
                                    // "code": "91000288",
                                    // "display": "Ethambutol"
                                }
                            ]
                        },
                        "isActive": true,
                        "strength": {
                            "numerator": {
                                // "value": 275,
                                // "system": "http://unitsofmeasure.org",
                                // "code": "mg"
                            },
                            "denominator": {
                                // "value": 1,
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                                // "code": "TAB"
                            }
                        }
                    }
                ],
                "extension": [
                    {
                        // "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    // "system": "http://terminology.kemkes.go.id/CodeSystem/medication-type",
                                    // "code": "NC",
                                    // "display": "Non-compound"
                                }
                            ]
                        }
                    }
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",
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
                    // "value": "inactive"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",
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

module.exports = Medication;
