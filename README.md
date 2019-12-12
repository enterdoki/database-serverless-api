# Database Serverless API

## 
Microsoft Azure Functions (Node.Js)


###
** HOW TO RUN LOCALLY: **

* Clone this repository
* If you don't have Node.JS installed, install Node.JS. Else, in this directory, execute npm install
* Install Azure Function Core Tools. Link here: https://github.com/Azure/azure-functions-core-tools


####
@GET Function to get all airbnb data by borough:

https://data-visual-api.azurewebsites.net/api/airbnb/{borough_name}




####
@GET Endpoint to get all 311 service call data by borough

https://data-visual-api.azurewebsites.net/api/service/{borough_name}




####
@GET Endpoint to fetch all user generated 311 service data

https://data-visual-api.azurewebsites.net/api/report




####
@POST Endpoint to allow users to add to 311 service data

https://data-visual-api.azurewebsites.net/api/report

This endpoint expects the following example body (description is optional): 

```
"severity": "High",
"description": "House robbery",
"latitude": 40.12,
"longitude": 30.98
```




####
@GET Endpoint to fetch count of 311 service data grouped by neighborhood (Used to see which neighborhood has the most 311 service calls)

https://data-visual-api.azurewebsites.net/api/neighborCount
