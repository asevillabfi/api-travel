const {del} = require("express/lib/application");
const deleteDestination = ({ destinationdb }) => {
    return async function del({ destination_id } = {}) {
        const del = await destinationdb.deleteDestination(destination_id);
        return { ...del.rows };
    };
};

module.exports = deleteDestination;