const editPlaneController = ({ editPlaneUseCase }) => {
    return async function put(httpRequest) {
        try {
            const { ...info } = httpRequest.body;

            const edit = await editPlaneUseCase({
                ...info,
                plane_id: httpRequest.params.id
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

module.exports = editPlaneController;