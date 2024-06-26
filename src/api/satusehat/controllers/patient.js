const Controller = require("../controller");
const Service = require("../services/patient");
const { merge, unflatten } = require("../../../lib/helper");

class Patient extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Patient.services[_id]) {
                Patient.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Patient.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async get(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.get({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                   ...(query["identifier"]&&{"identifier": query["identifier"]}), // "https://fhir.kemkes.go.id/id/nik|9271060312000001",
                },
                headers,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getId(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.getId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "P02478375538",
                },
                query: {
                    ...query,
                },
                headers,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async post(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "Patient",
//                 "meta": {
//                     "profile": [
//                         "https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"
//                     ]
//                 },
//                 "identifier": [
//                     {
//                         "use": "official",
//                         "system": "https://fhir.kemkes.go.id/id/nik",
//                         "value": "3174031002890009"
//                     },
//                     {
//                         "use": "official",
//                         "system": "https://fhir.kemkes.go.id/id/paspor",
//                         "value": "A01111222"
//                     },
//                     {
//                         "use": "official",
//                         "system": "https://fhir.kemkes.go.id/id/kk",
//                         "value": "367400001111111"
//                     }
//                 ],
//                 "active": true,
//                 "name": [
//                     {
//                         "use": "official",
//                         "text": "John Smith"
//                     }
//                 ],
//                 "telecom": [
//                     {
//                         "system": "phone",
//                         "value": "08123456789",
//                         "use": "mobile"
//                     },
//                     {
//                         "system": "phone",
//                         "value": "+622123456789",
//                         "use": "home"
//                     },
//                     {
//                         "system": "email",
//                         "value": "john.smith@xyz.com",
//                         "use": "home"
//                     }
//                 ],
//                 "gender": "female",
//                 "birthDate": "1945-11-17",
//                 "deceasedBoolean": false,
//                 "address": [
//                     {
//                         "use": "home",
//                         "line": [
//                             "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"
//                         ],
//                         "city": "Jakarta",
//                         "postalCode": "12950",
//                         "country": "ID",
//                         "extension": [
//                             {
//                                 "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",
//                                 "extension": [
//                                     {
//                                         "url": "province",
//                                         "valueCode": "10"
//                                     },
//                                     {
//                                         "url": "city",
//                                         "valueCode": "1010"
//                                     },
//                                     {
//                                         "url": "district",
//                                         "valueCode": "1010101"
//                                     },
//                                     {
//                                         "url": "village",
//                                         "valueCode": "1010101101"
//                                     },
//                                     {
//                                         "url": "rt",
//                                         "valueCode": "2"
//                                     },
//                                     {
//                                         "url": "rw",
//                                         "valueCode": "2"
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ],
//                 "maritalStatus": {
//                     "coding": [
//                         {
//                             "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
//                             "code": "M",
//                             "display": "Married"
//                         }
//                     ],
//                     "text": "Married"
//                 },
//                 "multipleBirthInteger": 0,
//                 "contact": [
//                     {
//                         "relationship": [
//                             {
//                                 "coding": [
//                                     {
//                                         "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
//                                         "code": "C"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "name": {
//                             "use": "official",
//                             "text": "Jane Smith"
//                         },
//                         "telecom": [
//                             {
//                                 "system": "phone",
//                                 "value": "0690383372",
//                                 "use": "mobile"
//                             }
//                         ]
//                     }
//                 ],
//                 "communication": [
//                     {
//                         "language": {
//                             "coding": [
//                                 {
//                                     "system": "urn:ietf:bcp:47",
//                                     "code": "id-ID",
//                                     "display": "Indonesian"
//                                 }
//                             ],
//                             "text": "Indonesian"
//                         },
//                         "preferred": true
//                     }
//                 ],
//                 "extension": [
//                     {
//                         "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace",
//                         "valueAddress": {
//                             "city": "Bandung",
//                             "country": "ID"
//                         }
//                     },
//                     {
//                         "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",
//                         "valueCode": "WNI"
//                     }
//                 ]
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.post({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                },
                headers,
                body: payload,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Patient;
