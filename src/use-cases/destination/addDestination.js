const makeDestination = require("../../entities/destination/index.js");

const addDestination = ({ destinationdb }) => {
    return async function post(info) {
        const result = makeDestination(info);

        const results = await destinationdb.addDestination({
            country_name: result.getCountryName(),
            city_name: result.getCityName()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = addDestination;