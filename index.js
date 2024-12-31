const { APIGatewayProxyHandler } = require('aws-lambda');

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify('hi'),
    };
};
