const Controller = require("../controller");
const Service = require("../services/questionnaire-response");

class QuestionnaireResponse extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!QuestionnaireResponse.services[_id]) {
                QuestionnaireResponse.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = QuestionnaireResponse.services[_id];

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
//                     "resourceType": "QuestionnaireResponse",
//                     "questionnaire": "https://fhir.kemkes.go.id/Questionnaire/Q0002",
//                     "status": "completed",
//                     "subject": {
//                         "reference": "Patient/P02280547535",
//                         "display": "patient 6"
//                     },
//                     "encounter": {
//                         "reference": "Encounter/{{Encounter_uuid}}"
//                     },
//                     "authored": "2022-07-26T10:00:00+07:00",
//                     "author": {
//                         "reference": "Practitioner/N10000001"
//                     },
//                     "source": {
//                         "reference": "Patient/P02280547535"
//                     },
//                     "item": [
//                         {
//                             "linkId": "1",
//                             "text": "Status Kesejahteraan",
//                             "answer": [
//                                 {
//                                     "valueCoding": {
//                                         "system": "http://terminology.kemkes.go.id/CodeSystem/keluarga-sejahtera",
//                                         "code": "KPS",
//                                         "display": "Keluarga Pra Sejahtera (KPS)"
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 },// 
// 
                body,
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
                   "id": params["id"], // "0070bf6c-ec6f-46d4-98a0-b5089492fdb0",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "QuestionnaireResponse",
//                     "id": "0070bf6c-ec6f-46d4-98a0-b5089492fdb0",
//                     "questionnaire": "https://fhir.kemkes.go.id/Questionnaire/Q0002",
//                     "status": "completed",
//                     "subject": {
//                         "reference": "Patient/P02280547535",
//                         "display": "patient 6"
//                     },
//                     "encounter": {
//                         "reference": "Encounter/{{Encounter_uuid}}"
//                     },
//                     "authored": "2022-07-26T10:00:00+07:00",
//                     "author": {
//                         "reference": "Practitioner/N10000001"
//                     },
//                     "source": {
//                         "reference": "Patient/P02280547535"
//                     },
//                     "item": [
//                         {
//                             "linkId": "1",
//                             "text": "Status Kesejahteraan",
//                             "answer": [
//                                 {
//                                     "valueCoding": {
//                                         "system": "http://terminology.kemkes.go.id/CodeSystem/keluarga-sejahtera",
//                                         "code": "KPS",
//                                         "display": "Keluarga Pra Sejahtera (KPS)"
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 },// 
// 
                body,
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
                   "encounter": query["encounter"], // "66533eb2-723d-4e7c-b7aa-500cd67dd4c8",
                   "patient": query["patient"], // "P02280547535",
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
                   "id": params["id"], // "0070bf6c-ec6f-46d4-98a0-b5089492fdb0",
                },
                query: {
                },
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = QuestionnaireResponse;
