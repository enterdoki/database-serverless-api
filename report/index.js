module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const db = require('./database');
    
    try {
        if(req.method == 'GET') {
            const data = await db.query(`SELECT * FROM reports`);
            if(data) {
                context.res = {
                    body: data[0]
                }
                context.done();
            }
        } 
        else if(req.method == 'POST') {
            if(req.body.description) {
                await db.query(`INSERT INTO reports VALUES (DEFAULT, "${req.body.severity}", "${req.body.description}", ${req.body.latitude}, ${req.body.longitude}, DEFAULT)`)

                context.res = {
                    status:201,
                    body: 'The following user report has been added.'
                }
                context.done();
            } else {
                await db.query(`INSERT INTO reports VALUES (DEFAULT, "${req.body.severity}", ${req.body.latitude}, ${req.body.longitude}, DEFAULT)`)

                context.res = {
                    status:201,
                    body: 'The following user report has been added.'
                }
                context.done();
            } 
        }
        
    } catch (err) {
        context.res = {
            status:400,
            body: err
        }
        context.done();
    }
};