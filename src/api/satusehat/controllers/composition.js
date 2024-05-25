const Controller = require("../controller");
const Service = require("../services/composition");
const { merge, unflatten } = require("../../../lib/helper");

class Composition extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Composition.services[_id]) {
                Composition.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Composition.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "Composition",
                "identifier": {
                    // "system": "http://sys-ids.kemkes.go.id/composition/{{Org_id}}",
                    // "value": "P20240001"
                },
                // "status": "final",
                "type": {
                    "coding": [
                        {
                            // "system": "http://loinc.org",
                            // "code": "18842-5",
                            // "display": "Discharge summary"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://loinc.org",
                                // "code": "LP173421-1",
                                // "display": "Report"
                            }
                        ]
                    }
                ],
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
                },
                // "date": "2022-06-14",
                "author": [
                    {
                        // "reference": "Practitioner/N10000001",
                        // "display": "Dokter Bronsig"
                    }
                ],
                // "title": "Resume Medis Rawat Jalan",
                "custodian": {
                    // "reference": "Organization/{{Org_id}}"
                },
                "section": [
                    {
                        "code": {
                            "coding": [
                                {
                                    // "system": "http://loinc.org",
                                    // "code": "42344-2",
                                    // "display": "Discharge diet (narrative)"
                                }
                            ]
                        },
                        "text": {
                            // "status": "additional",
                            // "div": "Rekomendasi diet rendah lemak, rendah kalori"
                        }
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
                   "id": params["id"], // "e511fb00-3641-4816-a9fd-db2a55d1897d",
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
                // "resourceType": "Composition",
                // "id": "e511fb00-3641-4816-a9fd-db2a55d1897d",
                "identifier": {
                    // "system": "http://sys-ids.kemkes.go.id/composition/{{Org_id}}",
                    // "value": "P20240001"
                },
                // "status": "final",
                "type": {
                    "coding": [
                        {
                            // "system": "http://loinc.org",
                            // "code": "18842-5",
                            // "display": "Discharge summary"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://loinc.org",
                                // "code": "LP173421-1",
                                // "display": "Report"
                            }
                        ]
                    }
                ],
                "subject": {
                    // "reference": "Patient/100000030009",
                    // "display": "Budi Santoso"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"
                },
                // "date": "2022-06-14",
                "author": [
                    {
                        // "reference": "Practitioner/N10000001",
                        // "display": "Dokter Bronsig"
                    }
                ],
                // "title": "Resume Medis Rawat Jalan",
                "custodian": {
                    // "reference": "Organization/{{Org_id}}"
                },
                "section": [
                    {
                        "code": {
                            "coding": [
                                {
                                    // "system": "http://loinc.org",
                                    // "code": "42344-2",
                                    // "display": "Discharge diet (narrative)"
                                }
                            ]
                        },
                        "text": {
                            // "status": "additional",
                            // "div": "Rekomendasi diet rendah karbohidrat"
                        }
                    }
                ]
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "e511fb00-3641-4816-a9fd-db2a55d1897d",
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
                    // "value": "amended"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                   "id": params["id"], // "e511fb00-3641-4816-a9fd-db2a55d1897d",
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

module.exports = Composition;
