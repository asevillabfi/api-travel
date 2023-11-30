const deleteRoute = ({ routedb }) => {
    return async function del({ route_id } = {}) {
        const del = await routedb.deleteRoute(route_id);
        return { ...del.rows };
    };
};

module.exports = deleteRoute;