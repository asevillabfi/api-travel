const makeDestinationEntity = () => {
    return function make({
        country_name,
        city_name
    } = {}) {
        if (!country_name) {
            throw new Error("Please enter country name.")
        }
        if (!city_name) {
            throw new Error("Please enter city name.")
        }
        return Object.freeze({
            getCountryName: () => country_name,
            getCityName: () => city_name,
        });
    };
};

module.exports = makeDestinationEntity;