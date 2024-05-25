const Controller = require("../controller");
const Service = require("../services/related-person");
const { merge, unflatten } = require("../../../lib/helper");

class RelatedPerson extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!RelatedPerson.services[_id]) {
                RelatedPerson.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = RelatedPerson.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "RelatedPerson",
                "meta": {
                    "profile": [
                        "https://fhir.kemkes.go.id/r4/StructureDefinition/RelatedPerson"
                    ]
                },
                "identifier": [
                    {
                        // "use": "official",
                        // "system": "https://fhir.kemkes.go.id/id/nik",
                        // "value": "367400001111222"
                    }
                ],
                "active": true,
                "relationship": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                                // "code": "NMTH",
                                // "display": "natural mother"
                            }
                        ],
                        // "text": "Natural Mother"
                    }
                ],
                "patient": {
                    // "reference": "Patient/P02029102701"
                },
                "name": [
                    {
                        // "use": "official",
                        // "text": "Jane Smith"
                    }
                ],
                "telecom": [
                    {
                        // "system": "phone",
                        // "value": "08123456789",
                        // "use": "mobile"
                    },
                    {
                        // "system": "phone",
                        // "value": "+622123456789",
                        // "use": "home"
                    },
                    {
                        // "system": "email",
                        // "value": "john.smith@xyz.com",
                        // "use": "home"
                    }
                ],
                // "gender": "female",
                // "birthDate": "2023-03-08",
                "address": [
                    {
                        // "use": "home",
                        "line": [
                            "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"
                        ],
                        // "city": "Jakarta",
                        // "postalCode": "12950",
                        // "country": "ID"
                    }
                ],
                "communication": [
                    {
                        "language": {
                            "coding": [
                                {
                                    // "system": "urn:ietf:bcp:47",
                                    // "code": "id-ID",
                                    // "display": "Indonesian"
                                }
                            ],
                            // "text": "Indonesian"
                        },
                        "preferred": true
                    }
                ]
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

    static async putId(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "RelatedPerson",
                // "id": "c093eab9-a0e5-41b9-a543-51096653cd92",
                "meta": {
                    "profile": [
                        "https://fhir.kemkes.go.id/r4/StructureDefinition/RelatedPerson"
                    ]
                },
                "identifier": [
                    {
                        // "use": "official",
                        // "system": "https://fhir.kemkes.go.id/id/nik",
                        // "value": "367400001111222"
                    }
                ],
                "active": true,
                "relationship": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                                // "code": "NMTH",
                                // "display": "natural mother"
                            }
                        ],
                        // "text": "Natural Mother"
                    }
                ],
                "patient": {
                    // "reference": "Patient/P02029102701"
                },
                "name": [
                    {
                        // "use": "official",
                        // "text": "Jane Smith"
                    }
                ],
                "telecom": [
                    {
                        // "system": "phone",
                        // "value": "08123456789",
                        // "use": "mobile"
                    },
                    {
                        // "system": "phone",
                        // "value": "+622123456789",
                        // "use": "home"
                    },
                    {
                        // "system": "email",
                        // "value": "john.smith@xyz.com",
                        // "use": "home"
                    }
                ],
                // "gender": "female",
                // "birthDate": "2023-03-08",
                "address": [
                    {
                        // "use": "home",
                        "line": [
                            "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"
                        ],
                        // "city": "Jakarta",
                        // "postalCode": "12950",
                        // "country": "ID"
                    }
                ],
                "communication": [
                    {
                        "language": {
                            "coding": [
                                {
                                    // "system": "urn:ietf:bcp:47",
                                    // "code": "id-ID",
                                    // "display": "Indonesian"
                                }
                            ],
                            // "text": "Indonesian"
                        },
                        "preferred": true
                    }
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "c093eab9-a0e5-41b9-a543-51096653cd92",
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
                   "identifier": query["identifier"], // "https://fhir.kemkes.go.id/id/nik|367400001111222",
                },
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
                    // "path": "/active",
                    "value": true
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                   "id": params["id"], // "c093eab9-a0e5-41b9-a543-51096653cd92",
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

module.exports = RelatedPerson;
