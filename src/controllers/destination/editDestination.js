const editDestinationController = ({ editDestinationUseCase }) => {
    return async function put(httpRequest) {
        try {
            const { ...info } = httpRequest.body;

            const edit = await editDestinationUseCase({
                ...info,
                destination_id: httpRequest.params.id
            });

            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: {
                    edit
                }
            };
        } catch (error) {
            console.log(error);
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            };
        }
    };
};

module.exports = editDestinationController;