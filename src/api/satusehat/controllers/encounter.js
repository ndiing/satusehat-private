const { merge, unflatten } = require("../../../lib/helper");
const ActCode = require("../../hl7/models/act-code");
const ParticipationType = require("../../hl7/models/participation-type");
const Controller = require("../controller");
const Service = require("../services/encounter");
const Location = require("../services/location");
const Organization = require("../services/organization");
const Patient = require("../services/patient");
const Practitioner = require("../services/practitioner");

class Encounter extends Controller {
    static services = {};

    static async init(req, res, next) {
        try {
            const { _id = "default" } = req.query;

            if (!Encounter.services[_id]) {
                Encounter.services[_id] = new Service({ storage: res.locals.storage });
            }

            res.locals.service = Encounter.services[_id];

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
//                     "resourceType": "Encounter",
//                     "status": "arrived",
//                     "class": {
//                         "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
//                         "code": "AMB",
//                         "display": "ambulatory"
//                     },
//                     "subject": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "participant": [
//                         {
//                             "type": [
//                                 {
//                                     "coding": [
//                                         {
//                                             "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
//                                             "code": "ATND",
//                                             "display": "attender"
//                                         }
//                                     ]
//                                 }
//                             ],
//                             "individual": {
//                                 "reference": "Practitioner/N10000001",
//                                 "display": "Dokter Bronsig"
//                             }
//                         }
//                     ],
//                     "period": {
//                         "start": "2022-06-14T07:00:00+07:00"
//                     },
//                     "location": [
//                         {
//                             "location": {
//                                 "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
//                                 "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"
//                             }
//                         }
//                     ],
//                     "statusHistory": [
//                         {
//                             "status": "arrived",
//                             "period": {
//                                 "start": "2022-06-14T07:00:00+07:00"
//                             }
//                         }
//                     ],
//                     "serviceProvider": {
//                         "reference": "Organization/{{Org_id}}"
//                     },
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/encounter/{{Org_id}}",
//                             "value": "P20240001"
//                         }
//                     ]
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
            const {params,query,body:{Patient_nik,Practitioner_nik,Location_id,Org_id,...body}} = req

            const patientService = new Patient({storage:res.locals.storage})
            const patient=await patientService.get({query:{'identifier':'https://fhir.kemkes.go.id/id/nik|'+Patient_nik+''}})
            // console.log(patient)
            // "subject.reference": "Patient/100000030009",
            // "subject.display": ?
            if(!patient?.entry?.[0]?.resource?.id){throw new Error(`Patient_nik tidak ditemukan`)}
            body["subject.reference"]=`Patient/${patient.entry[0].resource.id}`
            body["subject.display"]=patient.entry[0].resource.name[0].text


            const practitionerService = new Practitioner({storage:res.locals.storage})
            const practitioner=await practitionerService.get({query:{'identifier':'https://fhir.kemkes.go.id/id/nik|'+Practitioner_nik+''}})
            // console.log(practitioner)
            // "participant.0.individual.reference": "Practitioner/N10000001",
            // "participant.0.individual.display": ?
            if(!practitioner?.entry?.[0]?.resource?.id){throw new Error(`Practitioner_nik tidak ditemukan`)}
            body['participant.0.individual.reference']=`Practitioner/${practitioner.entry[0].resource.id}`
            body['participant.0.individual.display']=practitioner.entry[0].resource.name[0].text

            // "class.code": "AMB",
            const actCodeModel = new ActCode()
            const actCode = await actCodeModel.get(body['class.code'])
            if(!actCode){throw new Error('class.code tidak ditemukan')}
            body['class.display']=actCode.display

            // "participant.0.type.0.coding.0.code": "ATND",
            const participationTypeModel = new ParticipationType()
            const participationType = await participationTypeModel.get(body['participant.0.type.0.coding.0.code'])
            if(!participationType){throw new Error('participant.0.type.0.coding.0.code tidak ditemukan')}
            body['participant.0.type.0.coding.0.display']=participationType.display

            const locationService = new Location({storage:res.locals.storage})
            const location = await locationService.get({query:{'identifier':'http://sys-ids.kemkes.go.id/location/{{organization_id}}|'+Location_id+''}})
            // console.log(location)
            // "location.0.location.reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
            // "location.0.location.display": ?
            if(!location?.entry?.[0]?.resource?.id){throw new Error(`Location_id tidak ditemukan`)}
            body['location.0.location.reference']=`Location/${location.entry[0].resource.id}`
            body['location.0.location.display']=location.entry[0].resource.name

            const target={
                "resourceType": "Encounter",
                // "status": "arrived",
                "class": {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                    // "code": "AMB",
                    // "display": "ambulatory"
                },
                // "subject": {
                //     "reference": "Patient/100000030009",
                //     "display": "Budi Santoso"
                // },
                "participant": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                        // "code": "ATND",
                                        // "display": "attender"
                                    }
                                ]
                            }
                        ],
                        // "individual": {
                        //     "reference": "Practitioner/N10000001",
                        //     "display": "Dokter Bronsig"
                        // }
                    }
                ],
                // "period": {
                //     "start": "2022-06-14T07:00:00+07:00"
                // },
                // "location": [
                //     {
                //         "location": {
                //             "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
                //             "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"
                //         }
                //     }
                // ],
                // "statusHistory": [
                //     {
                //         "status": "arrived",
                //         "period": {
                //             "start": "2022-06-14T07:00:00+07:00"
                //         }
                //     }
                // ],
                "serviceProvider": {
                    "reference": "Organization/"+Org_id+""
                },
                "identifier": [
                    {
                        "system": "http://sys-ids.kemkes.go.id/encounter/"+Org_id+"",
                        // "value": "P20240001"
                    }
                ]
            }

            const source = unflatten(body)
            const payload = merge(target,source)

            // // remove it later
            // res.json(payload)
            // return

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
                   "id": params["id"], // "{{Encounter_uuid}}",
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
                   "subject": query["subject"], // "100000030009",
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
                   "id": params["id"], // "{{Encounter_uuid}}",
                },
                query: {
                },
//                 body: {
//                     "resourceType": "Encounter",
//                     "id": "{{Encounter_uuid}}",
//                     "identifier": [
//                         {
//                             "system": "http://sys-ids.kemkes.go.id/encounter/{{Org_id}}",
//                             "value": "P20240001"
//                         }
//                     ],
//                     "status": "in-progress",
//                     "class": {
//                         "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
//                         "code": "AMB",
//                         "display": "ambulatory"
//                     },
//                     "subject": {
//                         "reference": "Patient/100000030009",
//                         "display": "Budi Santoso"
//                     },
//                     "participant": [
//                         {
//                             "type": [
//                                 {
//                                     "coding": [
//                                         {
//                                             "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
//                                             "code": "ATND",
//                                             "display": "attender"
//                                         }
//                                     ]
//                                 }
//                             ],
//                             "individual": {
//                                 "reference": "Practitioner/N10000001",
//                                 "display": "Dokter Bronsig"
//                             }
//                         }
//                     ],
//                     "period": {
//                         "start": "2022-06-14T07:00:00+07:00",
//                         "end": "2022-06-14T09:00:00+07:00"
//                     },
//                     "location": [
//                         {
//                             "location": {
//                                 "reference": "Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",
//                                 "display": "Ruang 1A, Poliklinik Rawat Jalan"
//                             }
//                         }
//                     ],
//                     "statusHistory": [
//                         {
//                             "status": "arrived",
//                             "period": {
//                                 "start": "2022-06-14T07:00:00+07:00",
//                                 "end": "2022-06-14T08:00:00+07:00"
//                             }
//                         },
//                         {
//                             "status": "in-progress",
//                             "period": {
//                                 "start": "2022-06-14T08:00:00+07:00",
//                                 "end": "2022-06-14T09:00:00+07:00"
//                             }
//                         }
//                     ],
//                     "serviceProvider": {
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
                   "id": params["id"], // "{{Encounter_uuid}}",
                },
                query: {
                },
//                 body: [
//                     {
//                         "op": "replace",
//                         "path": "/statusHistory/0/period/start",
//                         "value": "2022-06-17T07:00:00+07:00"
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

module.exports = Encounter;
