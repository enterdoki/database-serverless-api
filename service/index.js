module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const Services = require('./database/models/services');
    try {
        const data = await Services.findAll({
            where: {
                borough: req.params.borough
            }
        });
        if(data) {
            context.res = {
                body: data
            }
            context.done();
        }
    } catch(err) {
        context.res = {
            status:400,
            body: err
        }
        context.done();
    }

    // if (req.params.borough) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: "Hello " + req.params.borough
    //     };
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Please pass a name on the query string or in the request body"
    //     };
    // }
};