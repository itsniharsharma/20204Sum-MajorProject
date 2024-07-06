# 2024Sum-MajorProject
Software Description: <br><br>
So, initiating the description, This app is simple demonstration of Socket.io 
application. I choose this as my Major project for summers, but it ended up in 
a Day:). Websites we browse have an HTTP protocole, 
which only allows a one way communication, being a client you search someting 
on your browser, actually you are requesting something from server, inresponse 
Server send you the requested data packets. This is a one way process. Now to
establish a two way connection, between client and server, web sockets are used.
They work on a principle called HTTP long polling, which means a 2 way connection, 
where server interacts with client. Many clients joint to same server to interact.
This draws a framework of chat application. <br><br>

How HTTP protocole different from HTTP long polling? <br><br>
HTTP protocole, being a one way process can't update about the updates, its only 
principle is give and take, nothing much than that, You requested somethig, you have it.
But in HTTP long polling, which is a 2 way connection, any update pushed by a client will
be broadcasted among other joined clients through server. 

Socket.io makes the implimentation of this polling easier and effecient. Refer to 
<link>https://socket.io/docs/v4/</link> for references. <br><br>

Mind-Map: <br><br>
- Most basic stuff are, having a server and a client.
- having a styling and layout for App (CSS)
- In context to that, creating three folders: js, css, nodeServer
- js will have client side stuff, nodeServer will handle our server
- We will be using NodeJS framework
- Additionals are, having index.html (basic structure for App), img logo for chat and Ting.mp3
- Created a layout design using HTML and CSS, it look like WhatsApp! :)
- Having proper text area and text field along with send button <br><br>

Constructing Our Server: <br>
- get in nodeServer, then used npm init
- This command create a package.json file to handle our NodeJS server
- To install socket.io, I used:  npm i socket.io
- Being inside nedeServer folder, I created index.js file
- I planned to create server in index.js

I was clear of the fact that, for handeling web applications, i need an HTTP server and 
Express server, HTTP performs Transfer Protocol function (TP) which is essential for 
communication between web clients (like browsers) and web servers. and is used by www 
While Express server, constructed by NodeJS framework provides single page and multipage
webApp functionality. Express runs on top of HTTP server and could be accessed through
Routing(defining the endpoints) and many other method.  Both servers are crucial for managing
the exchange of data between clients and servers, enabling users to interact with web applications.<br>

- To install socket.io and express, use:    npm install express socket.io
- Code line:
     - const express = require('express'); <br>
       const app = express(); <br><br>
    initializes an Express application


