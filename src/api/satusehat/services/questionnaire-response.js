const Service = require("../service");

class QuestionnaireResponse extends Service {

    async post(req = {}) {
        try {
            const { params, query, body } = req;
            const response = await this.fetch(`{{base_url}}/QuestionnaireResponse`, {
                params,
                query,
                method: "POST",
                headers: {
                    "Authorization": "Bearer {{token}}",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async putId(req = {}) {
        try {
            const { params, query, body } = req;
            const response = await this.fetch(`{{base_url}}/QuestionnaireResponse/:id`, {
                params,
                query,
                method: "PUT",
                headers: {
                    "Authorization": "Bearer {{token}}",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async get(req = {}) {
        try {
            const { params, query, body } = req;
            const response = await this.fetch(`{{base_url}}/QuestionnaireResponse`, {
                params,
                query,
                method: "GET",
                headers: {
                    "Authorization": "Bearer {{token}}",
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
            const { params, query, body } = req;
            const response = await this.fetch(`{{base_url}}/QuestionnaireResponse/:id`, {
                params,
                query,
                method: "GET",
                headers: {
                    "Authorization": "Bearer {{token}}",
                },
            });
            const json = response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = QuestionnaireResponse;
