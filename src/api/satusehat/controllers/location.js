const Controller = require("../controller");
const Service = require("../services/location");
const { merge, unflatten } = require("../../../lib/helper");

class Location extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Location.services[_id]) {
                Location.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Location.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                "resourceType": "Location",
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/location/{{Org_id}}",
                        // "value": "G-2-R-1A"
                    }
                ],
                // "status": "active",
                // "name": "Ruang 1A IRJT",
                // "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",
                // "mode": "instance",
                "telecom": [
                    {
                        "system": "phone",
                        // "value": "2328",
                        // "use": "work"
                    },
                    {
                        "system": "fax",
                        // "value": "2329",
                        // "use": "work"
                    },
                    {
                        "system": "email",
                        // "value": "second wing admissions"
                    },
                    {
                        "system": "url",
                        // "value": "http://sampleorg.com/southwing",
                        // "use": "work"
                    }
                ],
                "address": {
                    // "use": "work",
                    "line": [
                        // "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"
                    ],
                    // "city": "Jakarta",
                    // "postalCode": "12950",
                    // "country": "ID",
                    "extension": [
                        {
                            // "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",
                            "extension": [
                                {
                                    // "url": "province",
                                    // "valueCode": "10"
                                },
                                {
                                    // "url": "city",
                                    // "valueCode": "1010"
                                },
                                {
                                    // "url": "district",
                                    // "valueCode": "1010101"
                                },
                                {
                                    // "url": "village",
                                    // "valueCode": "1010101101"
                                },
                                {
                                    // "url": "rt",
                                    // "valueCode": "1"
                                },
                                {
                                    // "url": "rw",
                                    // "valueCode": "2"
                                }
                            ]
                        }
                    ]
                },
                "physicalType": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                            // "code": "ro",
                            // "display": "Room"
                        }
                    ]
                },
                "position": {
                    // "longitude": -6.23115426275766,
                    // "latitude": 106.83239885393944,
                    // "altitude": 0
                },
                "managingOrganization": {
                    // "reference": "Organization/{{Org_id}}"
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
                   ...(query["identifier"]&&{"identifier": query["identifier"]}), // "http://sys-ids.kemkes.go.id/location/1000001|G-2-R-1A",
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
                   ...(params["id"]&&{"id": params["id"]}), // "dc01c797-547a-4e4d-97cd-4ece0630e380",
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
                "resourceType": "Location",
                // "id": "dc01c797-547a-4e4d-97cd-4ece0630e380",
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/location/{{Org_id}}",
                        // "value": "G-2-R-1A"
                    }
                ],
                // "status": "inactive",
                // "name": "Ruang 1A IRJT",
                // "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",
                // "mode": "instance",
                "telecom": [
                    {
                        "system": "phone",
                        // "value": "2328",
                        // "use": "work"
                    },
                    {
                        "system": "fax",
                        // "value": "2329",
                        // "use": "work"
                    },
                    {
                        "system": "email",
                        // "value": "second wing admissions"
                    },
                    {
                        "system": "url",
                        // "value": "http://sampleorg.com/southwing",
                        // "use": "work"
                    }
                ],
                "address": {
                    // "use": "work",
                    "line": [
                        // "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"
                    ],
                    // "city": "Jakarta",
                    // "postalCode": "12950",
                    // "country": "ID",
                    "extension": [
                        {
                            // "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",
                            "extension": [
                                {
                                    // "url": "province",
                                    // "valueCode": "10"
                                },
                                {
                                    // "url": "city",
                                    // "valueCode": "1010"
                                },
                                {
                                    // "url": "district",
                                    // "valueCode": "1010101"
                                },
                                {
                                    // "url": "village",
                                    // "valueCode": "1010101101"
                                },
                                {
                                    // "url": "rt",
                                    // "valueCode": "1"
                                },
                                {
                                    // "url": "rw",
                                    // "valueCode": "2"
                                }
                            ]
                        }
                    ]
                },
                "physicalType": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                            // "code": "ro",
                            // "display": "Room"
                        }
                    ]
                },
                "position": {
                    // "longitude": -6.23115426275766,
                    // "latitude": 106.83239885393944,
                    // "altitude": 0
                },
                "managingOrganization": {
                    // "reference": "Organization/{{Org_id}}"
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "dc01c797-547a-4e4d-97cd-4ece0630e380",
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
                   ...(params["id"]&&{"id": params["id"]}), // "dc01c797-547a-4e4d-97cd-4ece0630e380",
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

module.exports = Location;
