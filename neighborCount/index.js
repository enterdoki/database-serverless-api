module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const db = require('./database');
    
    try {
        const data = await db.query(
            `SELECT
                city AS neighbourhood,
                count(city) AS count
            FROM
                services
            WHERE
                city <> ' '
                AND city <> 'BROOKLYN'
                AND city <> 'QUEENS'
                AND city <> 'STATEN ISLAND'
                AND city <> 'MANHATTAN'
                AND city <> 'BRONX'
                AND city <> 'NEW YORK'
            GROUP BY
                neighbourhood
            ORDER BY
                count DESC
                LIMIT 8;
            `);
        if (data) {
            context.res = {
                body: data[0]
            }
            context.done();
        }
    } catch (err) {
        context.res = {
            status:400,
            body: err
        }
        context.done();
    }
};