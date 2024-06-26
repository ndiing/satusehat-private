const Controller = require("../controller");
const Service = require("../services/family-member-history");
const { merge, unflatten } = require("../../../lib/helper");

class FamilyMemberHistory extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!FamilyMemberHistory.services[_id]) {
                FamilyMemberHistory.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = FamilyMemberHistory.services[_id];

            next();
        } catch (error) {
            next(error);
        }
    }


    static async post(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "FamilyMemberHistory",
//                 "status": "completed",
//                 "relationship": {
//                     "coding": [
//                         {
//                             "system": "http://snomed.info/sct",
//                             "code": "38048003",
//                             "display": "Uncle"
//                         }
//                     ]
//                 },
//                 "deceasedBoolean": true,
//                 "patient": {
//                     "reference": "Patient/P02280547535",
//                     "display": "patient 6"
//                 },
//                 "condition": [
//                     {
//                         "code": {
//                             "coding": [
//                                 {
//                                     "system": "http://snomed.info/sct",
//                                     "code": "115665000",
//                                     "display": "Atopy"
//                                 }
//                             ]
//                         },
//                         "outcome": {
//                             "coding": [
//                                 {
//                                     "system": "http://snomed.info/sct",
//                                     "code": "419099009",
//                                     "display": "Died"
//                                 }
//                             ]
//                         }
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

    static async getId(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.getId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "0735510d-ad0b-44ca-92be-b695a9b127d1",
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

    static async get(req, res, next) {
        try {
            const {params,query,headers,body} = req
            const result = await res.locals.service.get({
                params: {
                    ...params,
                },
                query: {
                    ...query,
                   ...(query["relationship"]&&{"relationship": query["relationship"]}), // "72705000",
                   ...(query["patient"]&&{"patient": query["patient"]}), // "P02280547535",
                },
                headers,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async putId(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = {
//                 "resourceType": "FamilyMemberHistory",
//                 "id": "0735510d-ad0b-44ca-92be-b695a9b127d1",
//                 "status": "completed",
//                 "relationship": {
//                     "coding": [
//                         {
//                             "system": "http://snomed.info/sct",
//                             "code": "72705000",
//                             "display": "Mother"
//                         }
//                     ]
//                 },
//                 "deceasedBoolean": true,
//                 "patient": {
//                     "reference": "Patient/P02280547535",
//                     "display": "patient 6"
//                 },
//                 "condition": [
//                     {
//                         "code": {
//                             "coding": [
//                                 {
//                                     "system": "http://snomed.info/sct",
//                                     "code": "115665000",
//                                     "display": "Atopy"
//                                 }
//                             ]
//                         },
//                         "outcome": {
//                             "coding": [
//                                 {
//                                     "system": "http://snomed.info/sct",
//                                     "code": "419099009",
//                                     "display": "Died"
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             }// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.putId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "0735510d-ad0b-44ca-92be-b695a9b127d1",
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

    static async patchId(req, res, next) {
        try {
            const {params,query,headers,body} = req
//             const target = [
//                 {
//                     "op": "replace",
//                     "path": "/deceasedBoolean",
//                     "value": true
//                 }
//             ]// 
// 
            const target = {}
            const source = unflatten(body)
            const payload = merge(target,source)
            const result = await res.locals.service.patchId({
                params: {
                    ...params,
                   ...(params["id"]&&{"id": params["id"]}), // "0735510d-ad0b-44ca-92be-b695a9b127d1",
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

module.exports = FamilyMemberHistory;
