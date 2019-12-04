module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const Report = require('./database/models/report');
    try {
        if(req.method == 'GET') {
            const data = await Report.findAll();
            if(data) {
                context.res = {
                    body: data
                }
                context.done();
            }
        } 
        else if(req.method == 'POST') {
            if(req.body.description) {
                const data = await Report.create({
                    severity: req.body.severity,
                    description: req.body.description,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    date: Date.now()
                })
                context.res = {
                    status:201,
                    body: {'The following user report has been added: ': data}
                }
                context.done();
            } else {
                const data = await Report.create({
                    severity: req.body.severity,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    date: Date.now()
                })
                context.res = {
                    status:201,
                    body: {'The following user report has been added: ': data}
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