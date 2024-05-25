const Controller = require("../controller");
const Service = require("../services/specimen");
const { merge, unflatten } = require("../../../lib/helper");

class Specimen extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Specimen.services[_id]) {
                Specimen.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Specimen.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                "resourceType": "Specimen",
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/specimen/{{Org_id}}",
                        "value": "00001",
                        "assigner": {
                            "reference": "Organization/{{Org_id}}"
                        }
                    }
                ],
                "status": "available",
                "type": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "119294007",
                            "display": "Dried blood specimen"
                        }
                    ]
                },
                "collection": {
                    "collectedDateTime": "2022-06-14T08:15:00+07:00",
                    "extension": [
                        {
                            "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/CollectorOrganization",
                            "valueReference": {
                                "reference": "Organization/{{Org_id}}"
                            }
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/100000030009",
                    "display": "Budi Santoso"
                },
                "request": [
                    {
                        "reference": "ServiceRequest/61419a9c-51f9-4491-a6d0-e40e7c0eb7ab"
                    }
                ],
                "receivedTime": "2022-06-14T08:25:00+07:00",
                "extension": [
                    {
                        "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/TransportedTime",
                        "valueDateTime": "2022-06-14T08:23:00+07:00"
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

    static async putId(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                "resourceType": "Specimen",
                "id": "dbee2404-e11d-421f-8399-57cee518e0c7",
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/specimen/{{Org_id}}",
                        "value": "00001",
                        "assigner": {
                            "reference": "Organization/{{Org_id}}"
                        }
                    }
                ],
                "status": "available",
                "type": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "119294007",
                            "display": "Dried blood specimen"
                        }
                    ]
                },
                "collection": {
                    "collectedDateTime": "2022-06-14T08:15:00+07:00",
                    "extension": [
                        {
                            "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/CollectorOrganization",
                            "valueReference": {
                                "reference": "Organization/{{Org_id}}"
                            }
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/100000030004",
                    "display": "Budi Santoso"
                },
                "request": [
                    {
                        "reference": "ServiceRequest/61419a9c-51f9-4491-a6d0-e40e7c0eb7ab"
                    }
                ],
                "receivedTime": "2022-06-14T08:25:00+07:00",
                "extension": [
                    {
                        "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/TransportedTime",
                        "valueDateTime": "2022-06-14T08:23:00+07:00"
                    }
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "dbee2404-e11d-421f-8399-57cee518e0c7",
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
                   ...(params["id"]&&{"id": params["id"]}), // "cb2adef7-3971-4239-9cc2-6ae9981fe57d",
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

    static async patchId(req, res, next) {
        try {
            const {params,query,body} = req
            const target = [
                {
                    "op": "replace",
                    "path": "/status",
                    "value": "unavailable"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "cb2adef7-3971-4239-9cc2-6ae9981fe57d",
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

module.exports = Specimen;
