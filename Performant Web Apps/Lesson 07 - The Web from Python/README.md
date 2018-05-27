# The Web from Python

## Concept 03 - The echo server

> Question 1 of 3 : Take a look at the Python documentation for the BaseHTTPRequestHandler parent class in http.server. What's the name of the instance variable that contains the request path?

`path`

> Question 2 of 3 : Which of these silly words did not show up in the server's response when you tried the URIs above?

`stardust`

> Question 3 of 3 : The echo server wants to listen on the same port that the hello server does: port 8000. What happens if you try to start EchoServer.py while HelloServer.py is still running … or vice versa?

`The new server exits with an OSError exception`

## Concept 04 - Queries and quoting

> What does parse_qs('texture=fuzzy&animal=gray+squirrel') return?

`The dictionary {'texture': ['fuzzy'], 'animal:['gray squirrel']}`

## Concept 05 - HTML and forms

> Question 1 of 2 : What happens when you fill out the form and submit it?

`You see the username and password you entered in the output from the echo server`

> Question 2 of 2 : Using these two different forms as examples, can you tell what data in the form tells the browser which server to submit the form to?

`The URI in the form action attribute`

## Concept 06 - GET and POST

> Question 1 of 2 : Here's a list of several (non-HTTP) actions. Mark the ones that are idempotent.

- Adding zero to a numeric variable
- Setting a variable to the value 5
- Looking up an entry in a dictionary

> Question 2 of 2 : What's different about this HTTP request from ones you've seen before?

- The request line says "POST" instead of "GET"
- The form data is not in the URI path of the request
- The form data is somewhere else in the request

## Concept 07 - A server for POST

> Question 1 of 3 : Which HTTP methods do you think this server will need to use?

`GET for viewing messages, and POST for submitting them`

> Question 2 of 3 : How do you think our code can tell how much data is in the request body of a POST request from a web browser?

`The browser sends the length of the request body in the Content-Length header`

**Exercise: Messageboard, part one**

Added the following code to MessageboardPartOne.py:

` length = int(self.headers.get('Content-length', 0))
        data = self.rfile.read(length).decode()
        message = parse_qs(data)["message"][0]
        self.send_response(200)
        self.send_header('Content-type', 'text/plain; charset=utf-8')
        self.end_headers()
        self.wfile.write(message.encode())`

**Exercise: Messageboard, part two**

Added the following code to MessageboardPartTwo.py:

`def do_GET(self):
         form = '''<!DOCTYPE html>
  <title>Message Board</title>
  <form method="POST" action="http://localhost:8000/">
    <textarea name="message"></textarea>
    <br>
    <button type="submit">Post it!</button>
  </form>
'''
        self.send_response(200)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()
        self.wfile.write(form.encode())
`

> Question 3 of 3 : Bring your messageboard server up and send it some requests from your browser with different URI paths, like http://localhost:8000/bears or http://localhost:8000/udacity-rocks/my-foxes. Does it do anything different based on the URI path?

`No, it doesn't`


## Concept 08 - POST-Redirect-GET

Added the following code to MessageboardPartThree.py

Inside the do_POST method:

`self.send_response(303)
 self.send_header('Location', '/')
 self.end_headers()`

Inside the do_GET method:

`response = form.format("\n".join(memory))
 self.wfile.write(response.encode())`