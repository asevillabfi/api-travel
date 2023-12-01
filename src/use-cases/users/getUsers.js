const getUsers = ({ usersdb }) => {
    return async function get() {
        const result = await usersdb.getUsers();

        return result.rows;
    };
};

module.exports = getUsers;