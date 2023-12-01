const addUsersController = ({ addUsersUseCase }) => {
    return async function post(httpRequest) {
        try {
            const { ...info } = httpRequest.body;
            console.log(info);

            const post = await addUsersUseCase({
                ...info
            });

            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 201,
                body: { post }
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

module.exports = addUsersController;