# Security

## Concept 06 Preflight Request with CORS Quiz 1

- Download L5-Preflight-Requests-Binary Zip
- Run the executable
- Open a browser in incognito mode and go to `localhost:8080`
- Inspect and click on **Send Request** to make a GET request
- Notice that no preflight request has been made, therefore, **Request is not preflighted**

## Concept 07 Preflight Request with CORS Quiz 2

- Download L5-Preflight-Requests-Binary Zip
- Run the executable
- Open a browser in incognito mode and go to `localhost:8080`
- Inspect and click on **Send Request** to make a POST request
- Notice that a preflight request has been made by the **X-Forwarded-For** header
