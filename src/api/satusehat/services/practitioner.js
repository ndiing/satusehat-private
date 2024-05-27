const Service = require("../service");

class Practitioner extends Service {

    async get(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Practitioner`, {
                params,
                query,
                method: "GET",
                headers: {
                    "Authorization": "Bearer {{token}}",
                    ...headers,
                },
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async getId(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Practitioner/:id`, {
                params,
                query,
                method: "GET",
                headers: {
                    "Authorization": "Bearer {{token}}",
                    ...headers,
                },
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Practitioner;
