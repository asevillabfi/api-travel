const deleteRolesController = ({ deleteRolesUseCase }) => {
    return async function del(httpRequest) {
        try {
            const { ...info } = httpRequest.body;

            const del = {
                ...info,
                role_id: httpRequest.params.id
            };

            const deleted = await deleteRolesUseCase(del);
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

module.exports = deleteRolesController;