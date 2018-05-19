# Requests & Responses

## Concept 02 - Your first web server

> Question 1 of 2 : Which of these events are likely to cause an HTTP request to happen?

- Following a link on Googe Search
- Saving a revision of a Wikipedia article
- Ordering a pizza using a smartphone app

> Question 2 of 2 : What happens if you make up a web address that doesn't correspond to a file you actually have, like http://localhost:8000/NotExistyFile ?

- The browser gives an error response with a 404 error code, and the server keeps running

## Concept 03 - Parts of a URI

> Question 1 of 2 : Which of these are real URI schemes actually used on the Web?

- mailto
- data
- magnet

> Question 2 of 2 : Here is a URI: http://example.net/google.com/ponies
What is the hostname in this URI?

`example.net`

## Concept 04 - Hostnames and ports

> Question 1 of 3 : Use the host or nslookup command to find the IPv4 address for the name localhost. What is it?

`127.0.0.1`

> Question 2 of 3: Use the host or nslookup command to find the IPv4 addresses of en.wikipedia.org and ja.wikipedia.org — the servers for Wikipedia in English and Japanese. Are these sites on the same IP address?

`Yes, they are on the same IP address`

> Which of the URIs below refers to the same resource as https://en.wikipedia.org/wiki/Fish?

` https://en.wikipedia.org:443/wiki/Fish`

## Concept 05 - HTTP GET requests

> Which of these things do you see in the server's response?

- A line that ends with 200 OK
- The date and time
- A piece of HTML

## Concept 06 - HTTP responses

> Question 1 of 5 : What do you think Google's server wants the client to do?

`Go to http://www.google.com/ instead of http://google.com/`

> Question 2 of 5 : What does the Content-type header sent by the two servers mean? Content-type: text/html; charset=utf-8

`The server is telling the client that the response body is an HTML document written in UTF-8 text`

> Question 3 of 5 : Use ncat -l 9999 to listen on port 9999. Connect to it with your web browser at http://localhost:9999/. What do you see in your terminal?

`An HTTP request that starts with "GET /HTTP/1.1`

> Question 4 of 5 : What happens in your browser after sending it the response described above?

`It opens the web page of the Electronic Frontier Foundation (EFF)`

> Question 5 of 5 : What happens in your browser after you send it the HTTP response with 200 OK?

`It displays the message that you typed, in plain text`