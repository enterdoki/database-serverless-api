module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const tunnel = require('tunnel-ssh');
    const sequelize = require('sequelize');
    const db = new sequelize(process.env.DATABASE_URL)

    // tunnel config 
    var config = {
        username: process.env.SSH_USERNAME,
        password: process.env.SSH_PASSWORD,
        host: process.env.SSH_HOST,
        port: 22,
        dstPort: 3306,
        keepAlive:true,
        ssl: true
    };

    tunnel(config, function (error, server) {
        //....   
        if (error) {
            console.error(error);
        } else {
            // test sequelize connection     
            db.authenticate().then(function (err) {
                console.log('Connection established');
            }).catch(function (err) {
                console.error('Unable establish connection', err);
            })

        }
    })


    if (req.params.borough) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + req.params.borough
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }

    context.done();
};