const usersQuery = ({db}) => {
    return Object.freeze({
        getUsers,
        addUsers,
        editUsers,
        deleteUsers,
    });

    // GET
    async function getUsers() {
        const dbs = await db();
        return dbs.query(
            "SELECT * FROM users, roles WHERE users.role_id = roles.role_id"
        );
    }

    // POST
    async function addUsers({ ...info }) {
        const dbs = await db();
        return dbs.query(
            "INSERT INTO users (fname, lname, age, username, password, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                info.fname,
                info.lname,
                info.age,
                info.username,
                info.password,
                info.role_id,
            ]
        );
    }

    // PUT
    async function editUsers({ user_id, ...info }) {
        const dbs = await db();
        return dbs.query(
            "UPDATE users SET fname = $1, lname = $2, age = $3, username = $4, password = $5, role_id = $6 WHERE user_id = $7 RETURNING *",
            [
                info.fname,
                info.lname,
                info.age,
                info.username,
                info.password,
                info.role_id,
                user_id
            ]
        );
    }

    // DELETE
    async function deleteUsers({ user_id }) {
        const dbs = await db();
        return dbs.query(
            "DELETE FROM users WHERE user_id = $1",
            [user_id]
        );
    }
};

module.exports = usersQuery;