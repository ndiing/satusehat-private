const Controller = require("../controller");
const Service = require("../services/organization");
const { merge, unflatten } = require("../../../lib/helper");
const Telecom = require("../../master/models/telecom");
const Address = require("../../master/models/address");

class Organization extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Organization.services[_id]) {
                Organization.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Organization.services[_id];

            res.locals.telecomModel = new Telecom()
            res.locals.addressModel = new Address()

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req

            const telecom = await res.locals.telecomModel.select()
            const address = await res.locals.addressModel.select()

            const target = {
                "resourceType": "Organization",
                "active": true,
                "identifier": [
                    {
                        // "use": "official",
                        "system": "http://sys-ids.kemkes.go.id/organization/{{organization_id}}",
                        // "value": "Pos Imunisasi LUBUK BATANG"
                    }
                ],
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/organization-type",
                                // "code": "dept",
                                // "display": "Hospital Department"
                            }
                        ]
                    }
                ],
                // "name": "Pos Imunisasi",
                telecom,
                address,
                "partOf": {
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

    static async getId(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.getId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "100025605",
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
                   ...(query["name"]&&{"name": query["name"]}), // "paramarta",
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
        
            const telecom = await res.locals.telecomModel.select()
            const address = await res.locals.addressModel.select()

            const target = {
                "resourceType": "Organization",
                // "id": "abddd50b-b22f-4d68-a1c3-d2c29a27698b",
                "active": false,
                "identifier": [
                    {
                        // "use": "official",
                        "system": "http://sys-ids.kemkes.go.id/organization/{{organization_id}}",
                        // "value": "R220001"
                    }
                ],
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/organization-type",
                                // "code": "dept",
                                // "display": "Hospital Department"
                            }
                        ]
                    }
                ],
                // "name": "Rawat Jalan Terpadu",
                telecom,
                address,
                "partOf": {
                    // "reference": "Organization/{{Org_id}}"
                }
            }
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "abddd50b-b22f-4d68-a1c3-d2c29a27698b",
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
                    // "path": "/name",
                    // "value": "RAJAL TERPADU"
                }
            ]
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "abddd50b-b22f-4d68-a1c3-d2c29a27698b",
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

module.exports = Organization;
