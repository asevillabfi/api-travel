const getRoles = ({ rolesdb }) => {
    return async function get() {
        const result = await rolesdb.getRoles();

        return result.rows;
    };
};

module.exports = getRoles;