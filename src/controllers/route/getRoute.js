const getRouteController = ({ getRouteUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const route = await getRouteUseCase();

            return {
                headers,
                statusCode: 200,
                body: {
                    route
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

module.exports = getRouteController;