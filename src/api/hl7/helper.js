function extract(json) {
    const data = [];

    function extractData(obj) {
        if (obj.code && obj.display && obj.definition) {
            data.push({ code: obj.code, display: obj.display, definition: obj.definition });
        }
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                extractData(obj[key]);
            }
        }
    }

    if (Array.isArray(json)) {
        json.forEach(item => {
            extractData(item);
        });
    } else {
        extractData(json);
    }

    return data;
}




// class Helper {}

module.exports = {
    extract
};
