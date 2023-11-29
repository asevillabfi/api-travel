// const {del} = require("express/lib/application");
const deletePlane = ({ planedb }) => {
    return async function del({ plane_id } = {}) {
        const del = await planedb.deletePlane(plane_id);
        return { ...del.rows };
    };
};

module.exports = deletePlane;