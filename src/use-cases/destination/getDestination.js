const getDestination = ({ destinationdb }) => {
    return async function get() {
        const result = await destinationdb.getDestination();

        return result.rows;
    };
};

module.exports = getDestination;