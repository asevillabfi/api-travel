const makeDestination = require("../../entities/destination/index.js");

const editDestination = ({ destinationdb }) => {
    return async function put({ destination_id, ...info } = {}) {
        const result = makeDestination(info);

        const results = await destinationdb.editDestination({
            destination_id: destination_id,
            country_name: result.getCountryName(),
            city_name: result.getCityName()
        });
        console.log(results.rows);
        return results.rows
    };
};

module.exports = editDestination;