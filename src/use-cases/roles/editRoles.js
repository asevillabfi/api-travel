const makeRoles = require("../../entities/roles/index.js");

const editRoles = ({ rolesdb }) => {
    return async function put({ role_id, ...info } ={}) {
        const result = makeRoles(info);

        const results = await rolesdb.editRoles({
            role_id: role_id,
            role: result.getRole()
        });
        console.log(results.rows);
        return results.rows;
    };
};

module.exports = editRoles;