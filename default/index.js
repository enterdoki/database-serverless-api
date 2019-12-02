module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Used for cold starting Azure Functions. Default API route, try a different endpoint."
    }
    context.done();
};