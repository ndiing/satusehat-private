// require('./rest-generator.js')
// require('./service-generator.js')
// require('./controller-generator.js')
// require('./router-generator.js')
// require('./http-generator.js')
// require('./message-generator.js')

// const {flatten,unflatten,merge} = require('../lib/helper')

// const telecom = [
//     {
//         "system": "phone",
//         "value": "+6221-783042654",
//         "use": "work"
//     },
//     {
//         "system": "email",
//         "value": "rs-satusehat@gmail.com",
//         "use": "work"
//     },
//     {
//         "system": "url",
//         "value": "www.rs-satusehat@gmail.com",
//         "use": "work"
//     }
// ]
// const address = [
//     {
//         "use": "work",
//         "type": "both",
//         "line": [
//             "Jalan Jati Asih"
//         ],
//         "city": "Jakarta",
//         "postalCode": "55292",
//         "country": "ID",
//         "extension": [
//             {
//                 "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",
//                 "extension": [
//                     {
//                         "url": "province",
//                         "valueCode": "31"
//                     },
//                     {
//                         "url": "city",
//                         "valueCode": "3171"
//                     },
//                     {
//                         "url": "district",
//                         "valueCode": "317101"
//                     },
//                     {
//                         "url": "village",
//                         "valueCode": "31710101"
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// const target = {
//     "resourceType": "Organization",
//     // "active": true,
//     "identifier": [
//         {
//             // "use": "official",
//             "system": "http://sys-ids.kemkes.go.id/organization/1000079374",
//             // "value": "Pos Imunisasi LUBUK BATANG"
//         }
//     ],
//     "type": [
//         {
//             "coding": [
//                 {
//                     "system": "http://terminology.hl7.org/CodeSystem/organization-type",
//                     // "code": "dept",
//                     "display": "Hospital Department"
//                 }
//             ]
//         }
//     ],
//     // "name": "Pos Imunisasi",
//     telecom,
//     address,
//     // "partOf": {
//     //     "reference": "Organization/{{Org_id}}"
//     // }
// }
// const payload = {
//     "active": true,
//     "identifier.0.use": "official",
//     "identifier.0.value": "Pos Imunisasi LUBUK BATANG",
//     "type.0.coding.0.code": "dept",
//     "name": "Pos Imunisasi"
// }
// const source = unflatten(payload)

// console.log(merge(target,source))
