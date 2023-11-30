const makeTicketEntity = () => {
    return function make({
        destination_id,
        user_id,
        plane_id,
        date
    } = {}) {
        if (!destination_id) {
            throw new Error("Please enter destination id.")
        }
        if (!user_id) {
            throw new Error("Please enter user id.")
        }
        if (!plane_id) {
            throw new Error("Please enter plane id.")
        }
        if (!date) {
            throw new Error("Please enter date.")
        }
        return Object.freeze({
            getDestinationId: () => destination_id,
            getUserId: () => user_id,
            getPlaneId: () => plane_id,
            getDate:() => date,
        });
    };
};

module.exports = makeTicketEntity;