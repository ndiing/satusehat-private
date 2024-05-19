function flatten(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                flatten(obj[key], newKey, result);
            } else if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                    let arrayKey = `${newKey}.${index}`;
                    if (typeof item === "object" && item !== null) {
                        flatten(item, arrayKey, result);
                    } else {
                        result[arrayKey] = item;
                    }
                });
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

function unflatten(data) {
    const result = {};

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            const keys = key.split(".");
            keys.reduce((acc, part, index) => {
                if (index === keys.length - 1) {
                    acc[part] = data[key];
                } else {
                    if (!acc[part]) {
                        // Check if the next key part is a number to determine if this should be an array
                        acc[part] = isNaN(keys[index + 1]) ? {} : [];
                    }
                }
                return acc[part];
            }, result);
        }
    }

    // Determine if the result itself should be an array
    const topKeys = Object.keys(result);
    if (topKeys.length === 1 && !isNaN(topKeys[0])) {
        const arrayResult = [];
        for (let i = 0; i < topKeys.length; i++) {
            arrayResult[i] = result[i];
        }
        return arrayResult;
    }

    return result;
}

// // Example usage

// // Define a nested object
// const nestedObject = {
//     a: {
//         b: {
//             c: 1
//         },
//         d: [1, 2, { e: 3 }]
//     },
//     f: {
//         g: {
//             h: 2
//         }
//     }
// };

// // Flatten the nested object
// const flattenedObject = flatten(nestedObject);
// console.log(flattenedObject);
// // Output:
// // {
// //     'a.b.c': 1,
// //     'a.d.0': 1,
// //     'a.d.1': 2,
// //     'a.d.2.e': 3,
// //     'f.g.h': 2
// // }

// // Unflatten the flattened object
// const unflattenedObject = unflatten(flattenedObject);
// console.log(unflattenedObject);
// // Output:
// // {
// //     a: {
// //         b: { c: 1 },
// //         d: [1, 2, { e: 3 }]
// //     },
// //     f: {
// //         g: { h: 2 }
// //     }
// // }

// // Define a nested array object
// const nestedArrayObject = [
//     {
//         a: {
//             b: {
//                 c: 1
//             },
//             d: [1, 2, { e: 3 }]
//         },
//         f: {
//             g: {
//                 h: 2
//             }
//         }
//     }
// ];

// // Flatten the nested array object
// const flattenedArrayObject = flatten(nestedArrayObject);
// console.log(flattenedArrayObject);
// // Output:
// // {
// //     '0.a.b.c': 1,
// //     '0.a.d.0': 1,
// //     '0.a.d.1': 2,
// //     '0.a.d.2.e': 3,
// //     '0.f.g.h': 2
// // }

// // Unflatten the flattened array object
// const unflattenedArrayObject = unflatten(flattenedArrayObject);
// console.log(unflattenedArrayObject);
// // Output:
// // [
// //     {
// //         a: {
// //             b: { c: 1 },
// //             d: [1, 2, { e: 3 }]
// //         },
// //         f: {
// //             g: { h: 2 }
// //         }
// //     }
// // ]

// Your merge function
function merge(...objects) {
    function mergeTwoObjects(target, source) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                if (Array.isArray(source[key]) && Array.isArray(target[key])) {
                    // Handle merging arrays
                    target[key] = source[key].map((item, index) => {
                        if (typeof item === 'object' && typeof target[key][index] === 'object') {
                            return mergeTwoObjects(target[key][index], item);
                        }
                        return item;
                    });
                } else if (typeof source[key] === 'object' && source[key] !== null) {
                    // If the property is an object, recursively merge
                    if (!target[key]) {
                        target[key] = Array.isArray(source[key]) ? [] : {};
                    }
                    target[key] = mergeTwoObjects(target[key], source[key]);
                } else {
                    // For primitives or if the key doesn't exist in the target, directly assign the value
                    target[key] = source[key];
                }
            }
        }
        return target;
    }

    // Start with an empty object as the initial target
    return objects.reduce((acc, obj) => mergeTwoObjects(acc, obj), {});
}

// // Example objects
// const a = [{
//     "resourceType": "Location",
//     "identifier": [
//         {
//             "system": "http://sys-ids.kemkes.go.id/location/{{Org_id}}",
//             "value": "G-2-R-1A"
//         }
//     ],
//     "status": "active",
//     "name": "Ruang 1A IRJT",
//     "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",
//     "mode": "instance",
//     "physicalType": {
//         "coding": [
//             {
//                 "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
//                 "code": "ro",
//                 "display": "Room"
//             }
//         ]
//     },
//     "position": {
//         "longitude": -6.23115426275766,
//         "latitude": 106.83239885393944,
//         "altitude": 0
//     },
//     "managingOrganization": {
//         "reference": "Organization/{{Org_id}}"
//     }
// }];

// const b = [{
//     "identifier": [
//         {
//             "value": "G-2-R-1A"
//         }
//     ],
//     "status": "active",
//     "name": "Ruang 1A IRJT",
//     "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",
//     "mode": "instance",
//     "physicalType": {
//         "coding": [
//             {
//                 "code": "ro"
//             }
//         ]
//     },
//     "position": {
//         "longitude": -6.23115426275766,
//         "latitude": 106.83239885393944,
//         "altitude": 0
//     },
//     "managingOrganization": {
//         "reference": "Organization/{{Org_id}}"       
//     }
// }];

// // Example of more objects
// const c = [{
//     "status": "inactive",
//     "newField": "Example"
// }];

// const e =[ {
//     "identifier": [
//         {
//             // "system": "http://example.com",
//             "value": "EX-123"
//         }
//     ]
// }];

// const f = [{
//     "position": {
//         "altitude": 100
//     }
// }];

// const g = [{
//     "managingOrganization": {
//         "reference": "Organization/NewOrg"
//     }
// }];

// // Merge objects a, b, c, e, f, g
// const merged = merge(a, b, c, e, f, g);

// console.log(JSON.stringify(merged, null, 2));



module.exports={
    flatten,
    unflatten,
    merge,
}

