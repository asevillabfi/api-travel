const makeUsers = require("../../entities/users/index.js");

const addUsers = ({ usersdb }) => {
    return async function post(info) {
        const result = makeUsers(info);

        const results = await usersdb.addUsers({
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

module.exports = addUsers;