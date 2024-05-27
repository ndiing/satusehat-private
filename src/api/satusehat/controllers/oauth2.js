const Controller = require("../controller");
const Service = require("../services/oauth2");

class OAuth2 extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!OAuth2.services[_id]) {
                OAuth2.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = OAuth2.services[_id];

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
                   "grant_type": query["grant_type"]??"client_credentials",
                },
//                 body: {
//                     "client_id": "{{client_id}}",
//                     "client_secret": "{{client_secret}}"
//                 },
// 
// 
                body,
            });

            // {
            //     "refresh_token_expires_in": "0",
            //     "api_product_list": "[api-satusehat-prod]",
            //     "api_product_list_json": [
            //       "api-satusehat-prod"
            //     ],
            //     "organization_name": "ihs-prod-1",
            //     "developer.email": "rahmanrahimrs@gmail.com",
            //     "token_type": "BearerToken",
            //     "issued_at": "1716046940319",
            //     "client_id": "bfeuWZr54cjGPXUUkG2GHUoVy1hVCPpiXmK8kV3VhFjRIo9D",
            //     "access_token": "LVqhSG1jnmudBNhHb58GQj1KPzDL",
            //     "application_name": "94805e1b-2d54-4af6-b0fe-c2143517b55a",
            //     "scope": "",
            //     "expires_in": "14399",
            //     "refresh_count": "0",
            //     "status": "approved"
            //   }
            if(process.env.client_id){
                res.locals.storage.token=result.access_token
            }

            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async get(req, res, next) {
        try {
            const {params,query,body} = req
            const result = await res.locals.service.get({params,query,body});
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async refresh(req, res, next) {
        try {
            // {
            //     "resourceType": "OperationOutcome",
            //     "issue": [
            //       {
            //         "severity": "error",
            //         "code": "invalid-access-token",
            //         "details": {
            //           "text": "Invalid Access Token."
            //         }
            //       }
            //     ]
            //   }

            if(process.env.client_id){
                const {params,query,body} = req
                const result = await res.locals.service.get({params,query,body});
                // console.log(JSON.stringify(result))
                if(result?.issue?.[0]?.code=='invalid-access-token'){
                    // refresh
                    const result = await res.locals.service.post({
                        params: {
                        },
                        query: {
                           "grant_type": query["grant_type"]??"client_credentials",
                        },
                        body: {
                            "client_id": process.env.client_id,// "{{client_id}}",
                            "client_secret": process.env.client_secret,// "{{client_secret}}"
                        },
        // 
        // 
                        // body,
                    });
                    // console.log(JSON.stringify(result))
        
                    // {
                    //     "refresh_token_expires_in": "0",
                    //     "api_product_list": "[api-satusehat-prod]",
                    //     "api_product_list_json": [
                    //       "api-satusehat-prod"
                    //     ],
                    //     "organization_name": "ihs-prod-1",
                    //     "developer.email": "rahmanrahimrs@gmail.com",
                    //     "token_type": "BearerToken",
                    //     "issued_at": "1716046940319",
                    //     "client_id": "bfeuWZr54cjGPXUUkG2GHUoVy1hVCPpiXmK8kV3VhFjRIo9D",
                    //     "access_token": "LVqhSG1jnmudBNhHb58GQj1KPzDL",
                    //     "application_name": "94805e1b-2d54-4af6-b0fe-c2143517b55a",
                    //     "scope": "",
                    //     "expires_in": "14399",
                    //     "refresh_count": "0",
                    //     "status": "approved"
                    //   }
                    res.locals.storage.token=result.access_token
                }
            }
            

            next()
        } catch (error) {
            next(error);
        }
    }
}

module.exports = OAuth2;
