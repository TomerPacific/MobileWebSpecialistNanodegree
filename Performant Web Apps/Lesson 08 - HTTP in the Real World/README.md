# HTTP in the Real World

## Concept 01 - Deploying to a hosting service

Followed all the necessary steps from [here](https://classroom.udacity.com/nanodegrees/nd024/parts/b5036a67-32f5-4b47-b4cd-18b33201aa96/modules/69d7024c-2c8a-43c5-b466-af62e74a3bad/lessons/773150bb-8e88-4457-b077-3b8a02018f33/concepts/1d84f620-4d25-45fd-aa10-276498e328ae)

## Concept 02 - Handling more requests

> Question 1 of 2 : Why can't the bookmark server fetch a page from itself?

`http.server can only handle one request at a time`

Adding the following code to BookmarkServer.py : 

`import threading
from socketserver import ThreadingMixIn
class ThreadHTTPServer(ThreadingMixIn, http.server.HTTPServer):
    "This is an HTTPServer that supports thread-based concurrency."`

And at the bottom of the code changed the line that creates an HTTPServer to  the following:
`httpd = ThreadHTTPServer(server_address, Shortener)`

> Question 2 of 2: Try posting an entry to your bookmark server that points to the server itself now. Did it work? If so, the server is now able to handle a second incoming request while processing another request.

`Yes, it worked!`

## Concept 03 - What's an Apache or Nginx?

> Question 1 of 2 : In September 2016, the English Wikipedia received about 250 million page views per day. That's an average of about 2,900 page views every second. Let's imagine that an average page view involves three HTTP queries (the page HTML itself and two images), and that each HTTP query takes 0.1 seconds (or 100 milliseconds) to serve. About how many requests are in flight at any instant?

`3 HTTP Queries that each take 0.1 seconds take 0.3 seconds multiplied by the amount of page views per second, 2,900 yields the result of 870 so the answer is between 100 and 1000`

> Imagine that you have a service that is handling 6,000 requests per second. One-third of its of requests are for the site's CSS file, which doesn't change very often. So browsers shouldn't need to fetch it every time they load the site. If you tell the browser to cache the CSS, 1% of visitors will need to fetch it. After this change, about how many requests will the service be getting?

`A third of all requests (6,000) is 2,000. 1% of 2,000 is 20 so the remaining requests, 4,000, plus the necessary fetch requests is 4,020`