const getPlane = ({ planedb }) => {
    return async function get() {
        const result = await planedb.getPlane();

        return result.rows;
    };
};

module.exports = getPlane;