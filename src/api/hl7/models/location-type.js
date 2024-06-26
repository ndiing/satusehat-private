const DB = require("../../../lib/sqlite");

class LocationType extends DB {
    constructor() {
        super("LocationType");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "si",
                    "display": "Site",
                    "definition": "A collection of buildings or other locations such as a site or a campus."
                },
                {
                    "code": "bu",
                    "display": "Building",
                    "definition": "Any Building or structure. This may contain rooms, corridors, wings, etc. It might not have walls, or a roof, but is considered a defined/allocated space."
                },
                {
                    "code": "wi",
                    "display": "Wing",
                    "definition": "A Wing within a Building, this often contains levels, rooms and corridors."
                },
                {
                    "code": "wa",
                    "display": "Ward",
                    "definition": "A Ward is a section of a medical facility that may contain rooms and other types of location."
                },
                {
                    "code": "lvl",
                    "display": "Level",
                    "definition": "A Level in a multi-level Building/Structure."
                },
                {
                    "code": "co",
                    "display": "Corridor",
                    "definition": "Any corridor within a Building, that may connect rooms."
                },
                {
                    "code": "ro",
                    "display": "Room",
                    "definition": "A space that is allocated as a room, it may have walls/roof etc., but does not require these."
                },
                {
                    "code": "bd",
                    "display": "Bed",
                    "definition": "A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy."
                },
                {
                    "code": "ve",
                    "display": "Vehicle",
                    "definition": "A means of transportation."
                },
                {
                    "code": "ho",
                    "display": "House",
                    "definition": "A residential dwelling. Usually used to reference a location that a person/patient may reside."
                },
                {
                    "code": "ca",
                    "display": "Cabinet",
                    "definition": "A container that can store goods, equipment, medications or other items."
                },
                {
                    "code": "rd",
                    "display": "Road",
                    "definition": "A defined path to travel between 2 points that has a known name."
                },
                {
                    "code": "area",
                    "display": "Area",
                    "definition": "A defined physical boundary of something, such as a flood risk zone, region, postcode"
                },
                {
                    "code": "jdn",
                    "display": "Jurisdiction",
                    "definition": "A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundary"
                },
                {
                    "code": "vi",
                    "display": "Virtual",
                    "definition": "A location that is virtual in nature, such as a conference call or virtual meeting space"
                }
            ];
            for (const doc of docs) {
                doc._id=doc.code;
                await this.put(doc);
            }
        }

        return Promise.resolve();
    }
}

module.exports = LocationType;
