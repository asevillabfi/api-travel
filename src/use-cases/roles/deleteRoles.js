const deleteRoles = ({ rolesdb }) => {
    return async function del({ role_id } = {}) {
        const del = await rolesdb.deleteRoles(role_id);
        return { ...del.rows };
    };
};

module.exports = deleteRoles;