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
<link>https://socket.io/docs/v4/</link>
