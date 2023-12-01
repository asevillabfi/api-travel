const makeUsersEntity = () => {
    return function make({
        fname,
        lname,
        age,
        username,
        password,
        role_id
    } = {}) {
        if (!fname) {
            throw new Error("Please enter first name.")
        }
        if (!lname) {
            throw new Error("Please enter last name.")
        }
        if (!age) {
            throw new Error("Please enter age.")
        }
        if (!username) {
            throw new Error("Please enter username.")
        }
        if (!password) {
            throw new Error("Please enter password.")
        }
        if (!role_id) {
            throw new Error("Please enter role id.")
        }
        return Object.freeze({
            getFName: () => fname,
            getLName: () => lname,
            getAge: () => age,
            getUsername: () => username,
            getPassword: () => password,
            getRoleId: () => role_id,
        });
    };
};

module.exports = makeUsersEntity;