const Controller = require("../controller");
const Service = require("../services/service-request");
const { merge, unflatten } = require("../../../lib/helper");

class ServiceRequest extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!ServiceRequest.services[_id]) {
                ServiceRequest.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = ServiceRequest.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "ServiceRequest",
                "identifier": [
                    {
                        // "system": "http://sys-ids.kemkes.go.id/servicerequest/{{Org_id}}",
                        // "value": "00001"
                    }
                ],
                // "status": "active",
                // "intent": "original-order",
                // "priority": "routine",
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://snomed.info/sct",
                                // "code": "108252007",
                                // "display": "Laboratory procedure"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://loinc.org",
                            // "code": "11477-7",
                            // "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain"
                        }
                    ],
                    // "text": "Pemeriksaan Sputum BTA"
                },
                "subject": {
                    // "reference": "Patient/100000030009"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Permintaan BTA Sputum Budi Santoso di hari Selasa, 14 Juni 2022 pukul 09:30 WIB"
                },
                // "occurrenceDateTime": "2022-06-14T09:30:27+07:00",
                // "authoredOn": "2022-06-13T12:30:27+07:00",
                "requester": {
                    // "reference": "Practitioner/N10000001",
                    // "display": "Dokter Bronsig"
                },
                "performer": [
                    {
                        // "reference": "Practitioner/N10000005",
                        // "display": "Fatma"
                    }
                ],
                "reasonCode": [
                    {
                        // "text": "Periksa jika ada kemungkinan Tuberculosis"
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

    static async get(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.get({
                params: {
                },
                query: {
                   "identifier": query["identifier"], // "http://sys-ids.kemkes.go.id/acsn/{{Org_id}}|21120054",
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
                   "id": params["id"], // "1204ee6c-4af3-4448-946c-f2f1c2bbc50a",
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
                // "resourceType": "ServiceRequest",
                // "id": "1204ee6c-4af3-4448-946c-f2f1c2bbc50a",
                "identifier": [
                    {
                        // "system": "http://sys-ids.kemkes.go.id/servicerequest/{{Org_id}}",
                        // "value": "00001"
                    }
                ],
                // "status": "active",
                // "intent": "original-order",
                // "priority": "routine",
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://snomed.info/sct",
                                // "code": "108252007",
                                // "display": "Laboratory procedure"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://loinc.org",
                            // "code": "11477-7",
                            // "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain"
                        }
                    ],
                    // "text": "Pemeriksaan Sputum BTA"
                },
                "subject": {
                    // "reference": "Patient/100000030009"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Permintaan BTA Sputum Budi Santoso di hari Selasa, 14 Juni 2022 pukul 09:30 WIB"
                },
                // "occurrenceDateTime": "2022-06-14T09:30:27+07:00",
                // "authoredOn": "2022-06-13T12:30:27+07:00",
                "requester": {
                    // "reference": "Practitioner/N10000001",
                    // "display": "Dokter Bronsig"
                },
                "performer": [
                    {
                        // "reference": "Practitioner/N10000005",
                        // "display": "Fatma"
                    }
                ],
                "reasonCode": [
                    {
                        // "text": "Periksa jika ada kemungkinan Tuberculosis"
                    }
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "1204ee6c-4af3-4448-946c-f2f1c2bbc50a",
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
                   "id": params["id"], // "1204ee6c-4af3-4448-946c-f2f1c2bbc50a",
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

module.exports = ServiceRequest;
