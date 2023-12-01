const deleteUsers = ({ usersdb }) => {
    return async function del({ user_id } = {}) {
        const del = await usersdb.deleteUsers(user_id);
        return { ...del.rows };
    };
};

module.exports = deleteUsers;