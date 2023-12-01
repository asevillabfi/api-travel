const deleteUsersController = ({ deleteUsersUseCase }) => {
    return async function del(httpRequest) {
        try {
            const { ...info } = httpRequest.body;

            const del = {
                ...info,
                user_id: httpRequest.params.id
            };

            const deleted = await deleteUsersUseCase(del);
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: { deleted }
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

module.exports = deleteUsersController;