const Service = require("../service");

class Patient extends Service {

    async get(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Patient`, {
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
            const response = await this.fetch(`{{base_url}}/Patient/:id`, {
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

    async post(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/Patient`, {
                params,
                query,
                method: "POST",
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
}

module.exports = Patient;
