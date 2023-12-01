const getUsersController = ({ getUsersUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const users = await getUsersUseCase();

            return {
                headers,
                statusCode: 200,
                body: {
                    users
                }
            };
        } catch (error) {
            console.log(error);

            return {
                headers,
                statusCode: 400,
                body: {
                    error: error.message
                }
            };
        }
    };
};

module.exports = getUsersController;