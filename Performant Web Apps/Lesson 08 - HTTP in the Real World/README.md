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

## Concept 04 - Cookies

Added the following code to CookieServer.py

In the do_POST method :

`c['yourname'] = yourname
 c['yourname']["maxage"] = 100
 c['yourname']["domain"] = "localhost"`

 In the do_GET method : 

`cookie = cookies.SimpleCookie(self.headers["cookie"])
 name = cookie['yourname'].value`

## Concept 05 - HTTPS for security

> Question 1 of 4 : Here are a few different malicious things that an attacker could do to normal HTTP traffic. Each of the three guarantees (privacy, authenticity, and integrity) helps defend against one of them. Match them up!

- You're reading your email in a coffee shop, and the shop owner can read your email off of their Wi-Fi network you're using.
`Privacy`

- You think you're logging into Facebook, but actually you're sending your Facebook password to a server in the coffee shop's back room.
`Authenticity`

- The coffee shop owner doesn't like cat pictures, so they replace all the cat pictures on the web pages you're looking at with pictures of celery.
`Integrity`

> Question 2 of 4 : Take a look at the TLS certificate presented for your deployed app, or the screenshots above from my version of it. What organization was this server certificate issued to? Who issued it?

`It was issued to Heroku, and the issuer is DigiCert`

> Question 3 of 4 : Suppose that an attacker were able to trick your browser into sending your udacity.com requests to the attacker's server instead of Udacity's real servers. What could the attacker do with that evil ability?

- Steal your udacity.com cookies, use them to log into the real site as you, and post terrible spam to the discussion forums
- Make this course appear with terrible images in it instead of nice friendly ones

> Question 4 of 4 : When your browser talks to your deployed service over HTTPS, there are still some ways that an attacker could spy on the communication. Mark the cases that HTTPS does not protect against:

- A malcious program on your computer taking a screenshot of your browser
- An attacker guessing your Heroku password and replacing your service with a malicious one
- An attacker who had broken into Heroku's servers themselves

## Concept 06 - Beyond GET and POST

> Question 1 of 3 : PUT can be used for actions such as uploading a file to a web site. However, it's not the most common way to do file uploads. PUT has to be done in application code (e.g. JavaScript), whereas with another method it's possible to do uploads with just HTML on the client side. What method do you think this describes?

`POST`

> Question 2 of 3 : What's something that we would almost always want the client to do before allowing it to delete resources in your application?

`Log in, or otherwise authenticate`

> Question 3 of 3 : If HTTP methods are the "verbs" in the protocol, what are the "objects" (in the grammatical sense)?

`URIs`

## Concept 07 - New developments in HTTP

> In the Gophertiles demo, try the HTTP/2 and HTTP/1 links with 1 second of latency. What do you notice about the time it takes to load all the images?

`HTTP/2 loads much more quickly than HTTP/1`