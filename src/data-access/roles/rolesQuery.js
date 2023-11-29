const rolesQuery = ({db}) => {
    return Object.freeze({
        getRoles,
        addRoles,
        editRoles,
        deleteRoles,
    });

    // GET
    async function getRoles() {
        const dbs = await db();
        return dbs.query(
            "SELECT * FROM roles"
        );
    }

    // POST
    async function addRoles({ ...info }) {
        const dbs = await db();
        return dbs.query(
            "INSERT INTO roles (role) VALUES ($1) RETURNING *",
            [
                info.role,
            ]
        );
    }

    // PUT
    async function editRoles({ role_id, ...info }) {
        const dbs = await db();
        return dbs.query(
            "UPDATE roles SET role = $1 WHERE role_id = $2 RETURNING *",
            [
                info.role,
                role_id
            ]
        );
    }

    // DELETE
    async function deleteRoles({ role_id }) {
        const dbs = await db();
        return dbs.query(
            "DELETE FROM roles WHERE role_id = $1",
            [role_id]
        );
    }
};

module.exports = rolesQuery;