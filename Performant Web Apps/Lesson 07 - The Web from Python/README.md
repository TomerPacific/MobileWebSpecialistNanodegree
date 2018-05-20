# The Web from Python

## Concept 03 - The echo server

> Question 1 of 3 : Take a look at the Python documentation for the BaseHTTPRequestHandler parent class in http.server. What's the name of the instance variable that contains the request path?

`path`

> Question 2 of 3 : Which of these silly words did not show up in the server's response when you tried the URIs above?

`stardust`

> Question 3 of 3 : The echo server wants to listen on the same port that the hello server does: port 8000. What happens if you try to start EchoServer.py while HelloServer.py is still running … or vice versa?

`The new server exits with an OSError exception`