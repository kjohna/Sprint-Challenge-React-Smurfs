1.  Explain the differences between `client-side routing` and `server-side routing`.

Client-side routing: uses an initial request to the server to retrieve all of the HTML for displaying a web page. Further requests may be made exchanging JSON data with a server for a dynamic page but the page is not refreshed. Pros: speedy transition between views and the ability to smoothly transition between views. Cons: possibility of data being sent which is never used, sub-optimal search engine optimization since they are designed with server-side routing in mind.

Server-side routing: relies on requests to the server for each page and sending new HTML for each request. Pros: optimal search engine performance, sending only HTML which is consumed. Cons: slow transition between pages since a full refresh is required.

1.  What does HTTP stand for?

Hyper Text Transfer Protocol

1.  What does CRUD stand for?

Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C = POST, R = GET, U = PUT, D =  DELETE

1.  Mention three tools we can use to make AJAX requests

AJAX (Asynchronous Javascript And XML) is the way we think about performing async operations (such as HTTP requests in JS). 

JS offers a Promise object to handle async operations and it can be used directly for HTTP requests. The Promise object has built in functionality to assign a callback to the possible outcomes of an operation (.then if successful, .catch if error). 

Axios is a library that uses Promises to perform HTTP requests. 

jQuery offers a third way to make HTTP requests using the $.ajax method.