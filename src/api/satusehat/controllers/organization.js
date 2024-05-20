const { flatten, unflatten, merge } = require("../../../lib/helper");
const OrganizationType = require("../../hl7/models/organization-type");
const Address = require("../../master/models/address");
const Telecom = require("../../master/models/telecom");
const Controller = require("../controller");
const Service = require("../services/organization");

class Organization extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Organization.services[_id]) {
                Organization.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Organization.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.post({
                params: {
                },
                query: {
                },
//                 body: {
//                     "resourceType": "Organization",
//                     "active": true,
//                     "identifier": [
//                         {
//                             "use": "official",
//                             "system": "http://sys-ids.kemkes.go.id/organization/1000079374",
//                             "value": "Pos Imunisasi LUBUK BATANG"
//                         }
//                     ],
//                     "type": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.hl7.org/CodeSystem/organization-type",
//                                     "code": "dept",
//                                     "display": "Hospital Department"
//                                 }
//                             ]
//                         }
//                     ],
//                     "name": "Pos Imunisasi",
//                     "telecom": [
//                         {
//                             "system": "phone",
//                             "value": "+6221-783042654",
//                             "use": "work"
//                         },
//                         {
//                             "system": "email",
//                             "value": "rs-satusehat@gmail.com",
//                             "use": "work"
//                         },
//                         {
//                             "system": "url",
//                             "value": "www.rs-satusehat@gmail.com",
//                             "use": "work"
//                         }
//                     ],
//                     "address": [
//                         {
//                             "use": "work",
//                             "type": "both",
//                             "line": [
//                                 "Jalan Jati Asih"
//                             ],
//                             "city": "Jakarta",
//                             "postalCode": "55292",
//                             "country": "ID",
//                             "extension": [
//                                 {
//                                     "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",
//                                     "extension": [
//                                         {
//                                             "url": "province",
//                                             "valueCode": "31"
//                                         },
//                                         {
//                                             "url": "city",
//                                             "valueCode": "3171"
//                                         },
//                                         {
//                                             "url": "district",
//                                             "valueCode": "317101"
//                                         },
//                                         {
//                                             "url": "village",
//                                             "valueCode": "31710101"
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ],
//                     "partOf": {
//                         "reference": "Organization/{{Org_id}}"
//                     }
//                 },
// 
// 
                body,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async postV1(req, res, next) {
        try {
            const {params,query,body} = req

            // "identifier.0.use": "official",
            // "identifier.0.value": "Pos Imunisasi LUBUK BATANG",

            // "type.0.coding.0.code": "dept",
            const organizationTypeModel = new OrganizationType()
            const organizationType = await organizationTypeModel.get(body["type.0.coding.0.code"])
            if(!organizationType){
                res.status(400)
                throw new Error(`type.0.coding.0.code tidak ditemukan`)
            }
            body["type.0.coding.0.display"]=organizationType.display

            const telecomModel = new Telecom()
            const telecom = await telecomModel.select()

            const addressModel = new Address()
            const address = await addressModel.select()


            const target={
                "resourceType": "Organization",
                // "active": true,
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
                // "partOf": {
                //     "reference": "Organization/{{Org_id}}"
                // }
            }

            const source = unflatten(body)
            const payload = merge(target,source)

            const result = await res.locals.service.post({
                params: {
                },
                query: {
                },
                body:payload,
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
                   "id": params["id"], // "100025605",
                },
                query: {
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
                },
                query: {
                   "name": query["name"], // "paramarta",
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
            const result = await res.locals.service.putId({
                params: {
                   "id": params["id"], // "abddd50b-b22f-4d68-a1c3-d2c29a27698b",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "Organization",
//                     "id": "abddd50b-b22f-4d68-a1c3-d2c29a27698b",
//                     "active": false,
//                     "identifier": [
//                         {
//                             "use": "official",
//                             "system": "http://sys-ids.kemkes.go.id/organization/{{Org_id}}",
//                             "value": "R220001"
//                         }
//                     ],
//                     "type": [
//                         {
//                             "coding": [
//                                 {
//                                     "system": "http://terminology.hl7.org/CodeSystem/organization-type",
//                                     "code": "dept",
//                                     "display": "Hospital Department"
//                                 }
//                             ]
//                         }
//                     ],
//                     "name": "Rawat Jalan Terpadu",
//                     "telecom": [
//                         {
//                             "system": "phone",
//                             "value": "+6221-783042654",
//                             "use": "work"
//                         },
//                         {
//                             "system": "email",
//                             "value": "rs-satusehat@gmail.com",
//                             "use": "work"
//                         },
//                         {
//                             "system": "url",
//                             "value": "www.rs-satusehat@gmail.com",
//                             "use": "work"
//                         }
//                     ],
//                     "address": [
//                         {
//                             "use": "work",
//                             "type": "both",
//                             "line": [
//                                 "Jalan Jati Asih"
//                             ],
//                             "city": "Jakarta",
//                             "postalCode": "55292",
//                             "country": "ID",
//                             "extension": [
//                                 {
//                                     "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",
//                                     "extension": [
//                                         {
//                                             "url": "province",
//                                             "valueCode": "31"
//                                         },
//                                         {
//                                             "url": "city",
//                                             "valueCode": "3171"
//                                         },
//                                         {
//                                             "url": "district",
//                                             "valueCode": "317101"
//                                         },
//                                         {
//                                             "url": "village",
//                                             "valueCode": "31710101"
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ],
//                     "partOf": {
//                         "reference": "Organization/{{Org_id}}"
//                     }
//                 },
// 
// 
                body,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async patchId(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.patchId({
                params: {
                   "id": params["id"], // "abddd50b-b22f-4d68-a1c3-d2c29a27698b",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/name",
//                         "value": "RAJAL TERPADU"
//                     }
//                 ],
// 
// 
                body,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Organization;
