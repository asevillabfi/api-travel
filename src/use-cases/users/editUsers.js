const makeUsers = require("../../entities/users/index.js");

const editUsers = ({ usersdb }) => {
    return async function put({ users_id, ...info } = {}) {
        const result = makeUsers(info);

        const results = await usersdb.editUsers({
            user_id: users_id,
            fname: result.getFName(),
            lname: result.getLName(),
            age: result.getAge(),
            username: result.getUsername(),
            password: result.getPassword()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = editUsers;