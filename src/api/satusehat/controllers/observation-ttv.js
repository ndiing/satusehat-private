const Controller = require("../controller");
const Service = require("../services/observation-ttv");
const { merge, unflatten } = require("../../../lib/helper");

class ObservationTTV extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!ObservationTTV.services[_id]) {
                ObservationTTV.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = ObservationTTV.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const target = {
                // "resourceType": "Observation",
                // "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                // "code": "vital-signs",
                                // "display": "Vital Signs"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://loinc.org",
                            // "code": "8867-4",
                            // "display": "Heart rate"
                        }
                    ]
                },
                "subject": {
                    // "reference": "Patient/100000030009"
                },
                "performer": [
                    {
                        // "reference": "Practitioner/N10000001"
                    }
                ],
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Pemeriksaan Fisik Nadi Budi Santoso di hari Selasa, 14 Juni 2022"
                },
                // "effectiveDateTime": "2022-07-14",
                // "issued": "2022-07-14T14:27:00+07:00",
                "valueQuantity": {
                    // "value": 80,
                    // "unit": "beats/minute",
                    // "system": "http://unitsofmeasure.org",
                    // "code": "/min"
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
                   "id": params["id"], // "6d6186d9-9f29-4837-98f1-b61ac593ce15",
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
                // "resourceType": "Observation",
                // "status": "final",
                // "id": "40a8c3c0-89fb-4ed3-b646-399c6a909d8a",
                "category": [
                    {
                        "coding": [
                            {
                                // "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                // "code": "vital-signs",
                                // "display": "Vital Signs"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            // "system": "http://loinc.org",
                            // "code": "9279-1",
                            // "display": "Respiratory rate"
                        }
                    ]
                },
                "subject": {
                    // "reference": "Patient/100000030009"
                },
                "encounter": {
                    // "reference": "Encounter/{{Encounter_uuid}}",
                    // "display": "Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022"
                },
                // "effectiveDateTime": "2022-07-14",
                // "issued": "2022-07-14T14:27:00+07:00",
                "valueQuantity": {
                    // "value": 22,
                    // "unit": "breaths/minute",
                    // "system": "http://unitsofmeasure.org",
                    // "code": "/min"
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   "id": params["id"], // "40a8c3c0-89fb-4ed3-b646-399c6a909d8a",
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
                    // "path": "/valueQuantity/value",
                    // "value": 15
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   "id": params["id"], // "6d6186d9-9f29-4837-98f1-b61ac593ce15",
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

module.exports = ObservationTTV;
