const makeRoles = require("../../entities/roles/index.js");

const addRoles = ({ rolesdb }) => {
    return async function post(info) {
        const result = makeRoles(info);

        const results = await rolesdb.addRoles({
            role: result.getRole()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = addRoles;