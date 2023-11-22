const getDestinationController = ({ getDestinationUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const destination = await getDestinationUseCase();

            return {
                headers,
                statusCode: 200,
                body: {
                    destination
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

module.exports = getDestinationController;