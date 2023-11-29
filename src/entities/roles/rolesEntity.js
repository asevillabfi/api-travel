const makeRolesEntity = () => {
    return function make({
        role
    } = {}) {
        if (!role) {
            throw new Error("Please enter role.")
        }
        return Object.freeze({
            getRole: () => role,
        });
    };
};

module.exports = makeRolesEntity;