const getPlaneController = ({ getPlaneUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const plane = await getPlaneUseCase();

            return {
                headers,
                statusCode: 200,
                body: {
                    plane
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

module.exports = getPlaneController;