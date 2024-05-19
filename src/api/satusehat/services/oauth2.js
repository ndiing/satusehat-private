const Service = require("../service");

class OAuth2 extends Service {

    async post(req = {}) {
        try {
            const { params, query, body } = req;
            // console.log({params, query, body})
            const response = await this.fetch(`{{auth_url}}/accesstoken`, {
                params,
                query,
                method: "POST",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(body).toString(),
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
            const response = await this.fetch(`{{base_url}}`, {
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

module.exports = OAuth2;
