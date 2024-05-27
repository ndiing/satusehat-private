const Service = require("../service");

class Immunization extends Service {

    async get(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Immunization`, {
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
            const response = await this.fetch(`{{base_url}}/Immunization/:id`, {
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

    async putId(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Immunization/:id`, {
                params,
                query,
                method: "PUT",
                headers: {
                    "Authorization": "Bearer {{token}}",
                    "Content-type": "application/json",
                    ...headers,
                },
                body: JSON.stringify(body),
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async patchId(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Immunization/:id`, {
                params,
                query,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json-patch+json",
                    "Authorization": "Bearer {{token}}",
                    ...headers,
                },
                body: JSON.stringify(body),
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Immunization;
