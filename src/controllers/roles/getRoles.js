const getRolesController = ({ getRolesUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const roles = await getRolesUseCase();

            return {
                headers,
                statusCode: 200,
                body: {
                    roles
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

module.exports = getRolesController;