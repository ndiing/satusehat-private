const Controller = require("../controller");
const Service = require("../services/immunization");
const { merge, unflatten } = require("../../../lib/helper");

class Immunization extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Immunization.services[_id]) {
                Immunization.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Immunization.services[_id];

            next();
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
                   "date": query["date"], // "2022-01-11",
                   "patient": query["patient"], // "100000030009",
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
                   "id": params["id"], // "cbda5884-f180-4118-911e-9bd35e09651a",
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
                // "resourceType": "Immunization",
                // "id": "cbda5884-f180-4118-911e-9bd35e09651a",
                // "status": "not-done",
                "vaccineCode": {
                    "coding": [
                        {
                            // "system": "http://sys-ids.kemkes.go.id/kfa",
                            // "code": "93001282",
                            // "display": "Vaksin DTP - HB - Hib 0,5 mL (PENTABIO, 1)"
                        },
                        {
                            // "system": "http://sys-ids.kemkes.go.id/kfa",
                            // "code": "VG17",
                            // "display": "HIB"
                        },
                        {
                            // "system": "http://hl7.org/fhir/sid/cvx",
                            // "code": "102",
                            // "display": "DTP-Hib-Hep B"
                        }
                    ]
                },
                "patient": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/8a224d91-5132-47d0-ae35-0fc70f24a776"
                },
                // "occurrenceDateTime": "2022-01-10",
                // "recorded": "2022-01-10",
                "primarySource": true,
                "location": {
                    // "reference": "Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",
                    // "display": "Ruang 1A, Poliklinik Rawat Jalan"
                },
                // "lotNumber": "202009007",
                "route": {
                    "coding": [
                        {
                            // "system": "http://www.whocc.no/atc",
                            // "code": "inj.intramuscular",
                            // "display": "Injection Intramuscular"
                        }
                    ]
                },
                "doseQuantity": {
                    "value": 1,
                    // "unit": "mL",
                    // "system": "http://unitsofmeasure.org",
                    // "code": "ml"
                },
                "performer": [
                    {
                        "function": {
                            "coding": [
                                {
                                    // "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
                                    // "code": "AP",
                                    // "display": "Administering Provider"
                                }
                            ]
                        },
                        "actor": {
                            // "reference": "Practitioner/N10000001"
                        }
                    }
                ],
                "reasonCode": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.kemkes.go.id/CodeSystem/immunization-reason",
                                // "code": "IM-Dasar",
                                // "display": "Imunisasi Program Rutin Dasar"
                            },
                            {
                                // "system": "http://terminology.kemkes.go.id/CodeSystem/immunization-routine-timing",
                                // "code": "IM-Ideal",
                                // "display": "Imunisasi Ideal"
                            }
                        ]
                    }
                ],
                "protocolApplied": [
                    {
                        "doseNumberPositiveInt": 1
                    }
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "cbda5884-f180-4118-911e-9bd35e09651a",
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
                    // "path": "/status",
                    // "value": "entered-in-error"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                   "id": params["id"], // "cbda5884-f180-4118-911e-9bd35e09651a",
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

module.exports = Immunization;
