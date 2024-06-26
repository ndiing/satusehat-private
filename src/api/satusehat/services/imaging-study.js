const Service = require("../service");

class ImagingStudy extends Service {

    async post(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/ImagingStudy`, {
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

    async get(req = {}) {
        try {
            const { params, query, headers,body } = req;
            const response = await this.fetch(`{{base_url}}/ImagingStudy`, {
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
            const response = await this.fetch(`{{base_url}}/ImagingStudy/:id`, {
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
}

module.exports = ImagingStudy;
