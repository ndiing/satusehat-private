const Service = require("../service");

class ErrorResponse extends Service {

    async get(req = {}) {
        try {
            const { params, query, body } = req;
            const response = await this.fetch(`see_example`, {
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

module.exports = ErrorResponse;
