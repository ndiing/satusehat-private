const Controller = require("../controller");
const Service = require("../services/diagnostic-report");
const { merge, unflatten } = require("../../../lib/helper");

class DiagnosticReport extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!DiagnosticReport.services[_id]) {
                DiagnosticReport.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = DiagnosticReport.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                "resourceType": "DiagnosticReport",
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/diagnostic/{{Org_id}}/lab",
                        "use": "official",
                        "value": "5234342"
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                                "code": "MB",
                                "display": "Microbiology"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "11477-7",
                            "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/100000030009"
                },
                "encounter": {
                    "reference": "Encounter/{{Encounter_uuid}}"
                },
                "effectiveDateTime": "2012-12-01T12:00:00+01:00",
                "issued": "2012-12-01T12:00:00+01:00",
                "performer": [
                    {
                        "reference": "Practitioner/N10000001"
                    },
                    {
                        "reference": "Organization/{{Org_id}}"
                    }
                ],
                "result": [
                    {
                        "reference": "Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"
                    }
                ],
                "specimen": [
                    {
                        "reference": "Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"
                    }
                ],
                "conclusionCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "260347006",
                                "display": "+"
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
                   ...(params["id"]&&{"id": params["id"]}), // "ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",
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
                "resourceType": "DiagnosticReport",
                "id": "ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/diagnostic/{{Org_id}}/lab",
                        "use": "official",
                        "value": "5234342"
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                                "code": "MB",
                                "display": "Microbiology"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "11477-7",
                            "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/100000030009"
                },
                "encounter": {
                    "reference": "Encounter/{{Encounter_uuid}}"
                },
                "effectiveDateTime": "2012-12-01T12:00:00+01:00",
                "issued": "2012-12-01T12:00:00+01:00",
                "performer": [
                    {
                        "reference": "Practitioner/N10000001"
                    },
                    {
                        "reference": "Organization/{{Org_id}}"
                    }
                ],
                "result": [
                    {
                        "reference": "Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"
                    }
                ],
                "specimen": [
                    {
                        "reference": "Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"
                    }
                ],
                "conclusionCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "2667000",
                                "display": "Absent"
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
                   ...(params["id"]&&{"id": params["id"]}), // "ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",
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
                    "op": "replace",
                    "path": "/status",
                    "value": "preliminary"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",
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

module.exports = DiagnosticReport;
