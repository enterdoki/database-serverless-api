# Database Serverless API

## 
Microsoft Azure Functions (Node.Js)

###
@GET Endpoint to get all airbnb data by borough:

https://data-visual-api.azurewebsites.net/api/airbnb/{borough_name}


###
@GET Endpoint to get all 311 service call data by borough

https://data-visual-api.azurewebsites.net/api/service/{borough_name}


###
@GET Endpoint to fetch all user generated 311 service data

https://data-visual-api.azurewebsites.net/api/report


###
@POST Endpoint to allow users to add to 311 service data

https://data-visual-api.azurewebsites.net/api/report

This endpoint expects the following example body (description is optional): 

```
"severity": "High",
"description": "House robbery",
"latitude": 40.12,
"longitude": 30.98
```