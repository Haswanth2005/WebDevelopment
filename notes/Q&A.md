# Node.js and Express.js Q&A

This file contains questions and answers based on the provided code examples, covering core Node.js modules and Express.js features.

## Core Node.js Modules

### HTTP Module

**Question:**
How do you create a simple web server in Node.js that listens on port 3000 and sends a response to the client? Also, demonstrate how you can perform calculations like addition and factorial and send the results as a response.

**Answer:**
You can create a simple web server using the `http` module in Node.js. The `http.createServer()` method is used to create a server. This method takes a callback function with `request` and `response` objects as arguments. The `response.write()` method is used to send data to the client, and `response.end()` is used to finalize the response. To make the server listen on a specific port, you can use the `listen()` method.

Here is an example of how to create a server that listens on port 3000, performs some calculations, and sends the results to the client:

```javascript
var http = require('http');

http.createServer((req, res) => {
  res.write(`the number is ${10}
`);
  var a = 10;
  res.write(a.toString());

  function add(a, b) {
    return a + b;
  }
  res.write(`The addition is ${add(4, 5)} `);

  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  res.write(`The factorial is ${factorial(5)}`);

  res.end();
}).listen(3000, () => {
  console.log("server running");
});
```

### File System (fs) Module

**Question 1:**
What is the difference between synchronous and asynchronous file reading in Node.js? Provide code examples for both.

**Answer 1:**
In Node.js, the `fs` module provides both synchronous and asynchronous methods for file operations.

*   **Synchronous file reading** (`fs.readFileSync`): This method blocks the execution of the program until the file is read completely. This means that no other code will be executed while the file is being read. This can be useful for small files or for scripts that need to load configuration data before proceeding, but it's generally not recommended for server applications as it can block the event loop and prevent the server from handling other requests.

    ```javascript
    // sync file reading
    console.log("started syncrhronous reading");
    var data = fs.readFileSync('abc.txt', 'utf-8');
    console.log(data);
    console.log("sync reading completed");
    ```

*   **Asynchronous file reading** (`fs.readFile`): This method reads the file in a non-blocking way. It takes a callback function as an argument, which is executed once the file has been read. This allows the program to continue executing other code while the file is being read, making it suitable for server applications where you don't want to block the event loop.

    ```javascript
    // aysn file reading
    console.log("started async reading");
    fs.readFile('abc.txt', 'utf-8', (err, data) => {
        if (err) { console.log(err) }
        else { console.log(data) }
    });
    console.log("async reading completed");
    ```

**Question 2:**
How can you read and parse a JSON file asynchronously in Node.js?

**Answer 2:**
To read and parse a JSON file asynchronously, you can use `fs.readFile` to read the file content as a string, and then use `JSON.parse()` to parse the string into a JavaScript object within the callback function.

```javascript
fs.readFile('abc.json', 'utf-8', (err, data) => {
    if (err) { console.log(err) }
    else {
        var parsed = JSON.parse(data);
        console.log(parsed);
    }
});
```

**Question 3:**
How do you create a web server that serves different content based on the URL requested by the client? For example, how would you serve the content of a file for the URL `/fread` and a dashboard with links for other URLs?

**Answer 3:**
You can create a web server using the `http` module and inspect the `req.url` property to determine the requested URL. Based on the URL, you can then use the `fs` module to read and serve the appropriate content. For other URLs, you can send an HTML response with links.

```javascript
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    if (req.url == '/fread') {
        fs.readFile('abccopy.txt', 'utf-8', (err, data) => {
            if (err) { res.end(err) }
            else { res.end(data) }
        });
    }
    else if (req.url == '/fwrite') {
        // Handle file writing logic here
    }
    else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`<h1>Dashboard</h1>
            <a href="/fread">file read</a>
            <a href="/fwrite">file write</a>
        `);
    }
}).listen(3000, () => { console.log("open browser") });
```

### OS Module

**Question:**
How can you use the `os` module in Node.js to get information about the operating system, such as the CPU architecture, free memory, and total memory, and send this information as a response from a web server?

**Answer:**
The `os` module in Node.js provides operating system-related utility methods and properties. You can use it to retrieve information about the computer's operating system. To send this information as a response from a web server, you can create an HTTP server using the `http` module and use the `os` module's methods within the request handler.

Here's an example that shows how to get the CPU architecture, free memory, and total memory and send it as a response:

```javascript
var http = require('http');
var os = require('os');

http.createServer((req, res) => {
    res.write('CPU Architecture: ' + os.arch() + '\n');
    res.write('Free Memory: ' + os.freemem() + '\n');
    res.write('Total Memory: ' + os.totalmem() + '\n');
    res.end();
}).listen(3000);
```

*   `os.arch()`: Returns the operating system CPU architecture.
*   `os.freemem()`: Returns the amount of free system memory in bytes as an integer.
*   `os.totalmem()`: Returns the total amount of system memory in bytes as an integer.

### Events Module

**Question 1:**
What is the `EventEmitter` in Node.js and how do you use it to create and handle custom events? Explain with an example.

**Answer 1:**
The `EventEmitter` is a class in the `events` module of Node.js that allows objects to emit and listen for custom events. It is a fundamental part of Node.js's asynchronous, event-driven architecture.

To use it, you first need to create an instance of the `EventEmitter` class. Then, you can use the `on()` or `addListener()` method to register a listener for a specific event, and the `emit()` method to trigger that event.

Here is a simple example:

```javascript
var EventEmitter = require('events');
var obj = new EventEmitter();

// Register a listener for the 'marketOpen' event
obj.on('marketOpen', (msg) => {
    console.log(msg);
});

// Emit the 'marketOpen' event with a message
obj.emit('marketOpen', 'please do ur task');
```

In this example, when `obj.emit('marketOpen', ...)` is called, the callback function passed to `obj.on('marketOpen', ...)` is executed with the provided message.

**Question 2:**
What is the difference between `on()` and `once()` methods in `EventEmitter`? Provide an example.

**Answer 2:**
The `on()` method adds a listener for an event that will be executed every time the event is emitted. The `once()` method, on the other hand, adds a listener that will be executed only once for a given event. After the first execution, the listener is removed.

Here's an example to illustrate the difference:

```javascript
var EventEmitter = require('events');
var obj = new EventEmitter();

// This listener will be called every time 'WeatherChange' is emitted
obj.on('WeatherChange', (msg) => {
    console.log(msg);
});

// This listener will be called only once for the 'Circus' event
obj.once('Circus', (msg) => {
    console.log(msg);
});

obj.emit('WeatherChange', 'weather has been changed');
obj.emit('WeatherChange', 'weather has been changed again');

obj.emit('Circus', "circus is there please visit");
obj.emit('Circus', "circus is there please visit again"); // This will not trigger the listener
```

**Question 3:**
How can you manage listeners in `EventEmitter`? Explain how to add multiple listeners, set the maximum number of listeners, and remove listeners.

**Answer 3:**
The `EventEmitter` class provides several methods to manage listeners:

*   **Adding multiple listeners:** You can add multiple listeners to the same event by calling `on()` or `addListener()` multiple times for the same event.

    ```javascript
    function fun1() {
        console.log("open a shop");
    }
    function fun2() {
        console.log("Buy a candy");
    }
    obj.on("marketOpen", fun1);
    obj.on("marketOpen", fun2);

    obj.emit("marketOpen"); // Both fun1 and fun2 will be executed
    ```

*   **Managing the maximum number of listeners:** By default, an `EventEmitter` will print a warning if more than 10 listeners are added for a particular event. This is a safeguard to prevent memory leaks. You can change this limit using the `setMaxListeners()` method. `getMaxListeners()` returns the current limit.

    ```javascript
    console.log(obj.getMaxListeners()); // Prints the current max listeners limit
    obj.setMaxListeners(20); // Sets the max listeners to 20
    ```

*   **Removing listeners:** You can remove a specific listener using the `removeListener()` method, or remove all listeners for a specific event using `removeAllListeners()`.

    ```javascript
    obj.removeListener('marketOpen', fun1); // Removes fun1 from the 'marketOpen' event
    obj.emit('marketOpen'); // Only fun2 will be executed now

    obj.removeAllListeners('marketOpen'); // Removes all listeners for 'marketOpen'
    obj.emit('marketOpen'); // No listeners will be executed
    ```

### Streams Module

**Question 1:**
What are streams in Node.js and why are they useful? Explain the concept of a readable stream with a code example.

**Answer 1:**
Streams in Node.js are a powerful way to work with data. They are collections of data that might not be available all at once, and don't have to fit in memory. Streams are particularly useful for handling large amounts of data, such as reading large files or handling network requests, because they allow you to process data in chunks instead of waiting for the entire data to be available.

A **readable stream** is a stream from which you can read data. The `fs.createReadStream()` method allows you to create a readable stream from a file. You can then listen for `data` events to process the chunks of data as they arrive, and the `end` event which is fired when there is no more data to consume.

Here is an example of a readable stream that reads a file and converts its content to lowercase:

```javascript
var fs = require('fs');
var data1 = "";
var reader = fs.createReadStream("streamexample.txt");
reader.setEncoding('utf-8');

reader.on('data', (chunk) => {
    data1 = data1 + chunk;
});

reader.on('end', () => {
    console.log(data1.toLowerCase());
});

reader.on('error', (err) => {
    console.log(err);
});
```

**Question 2:**
Explain the concept of a writable stream in Node.js with a code example.

**Answer 2:**
A **writable stream** is a stream to which you can write data. The `fs.createWriteStream()` method can be used to create a writable stream to a file. You can use the `write()` method to write data to the stream and the `end()` method to signal that you are done writing. The `finish` event is emitted when all data has been flushed to the underlying system.

Here is an example of a writable stream that writes content to a file:

```javascript
var fs = require('fs');
var content = "grg rrg er errt  f t f";
var writer = fs.createWriteStream("example1stream.txt");

writer.write(content, () => {
    console.log("content has written and the content is", content);
});

writer.end();

writer.on('finish', () => {
    console.log("writing finished");
});

writer.on('error', (err) => {
    console.log("error:", err);
});
```

**Question 3:**
What is a pipe in Node.js streams and how is it used?

**Answer 3:**
In Node.js, the `pipe()` method is a function available on readable streams that allows you to connect the output of a readable stream to the input of a writable stream. It's a way to easily move data from one stream to another without having to manually listen for `data` events and call `write()` on the writable stream. This is a very efficient way to handle data flow.

For example, you can pipe a readable stream from a file directly to a writable stream of another file to copy the content:

```javascript
var fs = require('fs');
var reader1 = fs.createReadStream("examplestream.txt");
var writer1 = fs.createWriteStream("examplepipe.txt");

writer1.on('pipe', () => {
    console.log("data is transferring through pipe");
});

// This single line pipes the data from reader1 to writer1
reader1.pipe(writer1);
```

### Zlib Module

**Question:**
How can you use the `zlib` module in Node.js to compress and decompress files using different algorithms like Gzip, Deflate, and Brotli? Provide code examples for both compression and decompression.

**Answer:**
The `zlib` module in Node.js provides compression and decompression functionality. It can be used with streams to efficiently compress and decompress data. The `zlib` module offers several compression algorithms, including Gzip, Deflate, and Brotli.

To compress a file, you can create a readable stream from the source file, a writable stream to the destination file, and a transform stream for the compression algorithm using `zlib`. Then, you can pipe the streams together.

Here are examples of compressing a file using `createGzip()`, `createDeflate()`, and `createBrotliCompress()`:

**Compression:**

*   **Gzip:**
    ```javascript
    var fs = require('fs');
    var zlib = require('zlib');
    var reader1 = fs.createReadStream('examplestream.txt');
    var writer1 = fs.createWriteStream('examplestream.txt.gz');
    var gzip = zlib.createGzip();
    reader1.pipe(gzip).pipe(writer1);
    console.log("data zipped with Gzip, check ur editor");
    ```

*   **Deflate:**
    ```javascript
    var fs = require('fs');
    var zlib = require('zlib');
    var reader1 = fs.createReadStream('examplestream.txt');
    var writer1 = fs.createWriteStream('examplestream.txt.deflate');
    var deflate = zlib.createDeflate();
    reader1.pipe(deflate).pipe(writer1);
    console.log("data zipped with Deflate, check ur editor");
    ```

*   **Brotli:**
    ```javascript
    var fs = require('fs');
    var zlib = require('zlib');
    var reader1 = fs.createReadStream('examplestream.txt');
    var writer1 = fs.createWriteStream('examplestream.txt.br');
    var brotli = zlib.createBrotliCompress();
    reader1.pipe(brotli).pipe(writer1);
    console.log("data zipped with Brotli, check ur editor");
    ```

**Decompression:**

To decompress a file, you follow a similar process, but you use the corresponding decompression methods: `createGunzip()`, `createInflate()`, and `createBrotliDecompress()`.

*   **Gunzip (for Gzip compressed files):**
    ```javascript
    var fs = require('fs');
    var zlib = require('zlib');
    var reader1 = fs.createReadStream('examplestream.txt.gz');
    var writer1 = fs.createWriteStream('examplestream_unzipped.txt');
    var gunzip = zlib.createGunzip();
    reader1.pipe(gunzip).pipe(writer1);
    console.log("data unzipped from Gzip, check ur editor");
    ```

*   **Inflate (for Deflate compressed files):**
    ```javascript
    var fs = require('fs');
    var zlib = require('zlib');
    var reader1 = fs.createReadStream('examplestream.txt.deflate');
    var writer1 = fs.createWriteStream('examplestream_unzipped.txt');
    var inflate = zlib.createInflate();
    reader1.pipe(inflate).pipe(writer1);
    console.log("data unzipped from Deflate, check ur editor");
    ```

*   **BrotliDecompress (for Brotli compressed files):**
    ```javascript
    var fs = require('fs');
    var zlib = require('zlib');
    var reader1 = fs.createReadStream('examplestream.txt.br');
    var writer1 = fs.createWriteStream('examplestream_unzipped.txt');
    var brotli = zlib.createBrotliDecompress();
    reader1.pipe(brotli).pipe(writer1);
    console.log("data unzipped from Brotli, check ur editor");
    ```

### Promises and Async/Await

**Question 1:**
What is "callback hell" in Node.js and how can you avoid it using Promises? Provide a code example that demonstrates reading a file and then writing to another file using the `fs.promises` module.

**Answer 1:**
"Callback hell" (also known as the pyramid of doom) refers to the situation where multiple nested callbacks make the code hard to read, debug, and maintain. This often happens in asynchronous programming when you have a sequence of dependent asynchronous operations.

You can avoid callback hell by using Promises. Promises provide a cleaner and more structured way to handle asynchronous operations. The `fs.promises` API in Node.js provides promise-based versions of the `fs` module functions. You can chain promises using `.then()` for successful completion and handle errors with `.catch()`.

Here is an example that reads from one file and writes its content to another using `fs.promises` and promise chaining:

```javascript
var fs = require('fs').promises;

fs.readFile('streamexample.txt', 'utf-8')
    .then((data) => {
        console.log(data);
        var content = "content in promises";
        return fs.writeFile('contentpromises.txt', content);
    })
    .then(() => {
        return fs.readFile('contentpromises.txt', 'utf8');
    })
    .then((finaldata) => {
        console.log(finaldata);
    })
    .catch((error) => {
        console.log(error);
    });
```

**Question 2:**
How can you use `async/await` with the `fs.promises` module to write cleaner asynchronous code? Provide an example that reads from a file, writes to another file, and then reads the newly written file.

**Answer 2:**
`async/await` is a syntactic sugar built on top of promises that makes asynchronous code look and behave more like synchronous code, making it even easier to read and write. The `async` keyword is used to define a function that returns a promise, and the `await` keyword is used to pause the execution of the function until a promise is resolved.

You can use `async/await` with `fs.promises` to write asynchronous file operations in a sequential and readable manner. You should use a `try...catch` block to handle potential errors.

Here's an example that demonstrates reading a file, writing to another, and then reading the new file using `async/await`:

```javascript
var fs = require('fs').promises;

async function processfiles() {
    try {
        var data = await fs.readFile('streamexample.txt', 'utf-8');
        console.log(data);

        var data1 = "jdhfuihf";
        await fs.writeFile('asyncwrite.txt', data1);

        var writtendata = await fs.readFile('asyncwrite.txt', 'utf-8');
        console.log(writtendata);
    } catch (err) {
        console.log(err);
    }
}

processfiles();
```

## Express.js

### Middleware

**Question:**
What is middleware in Express.js? Explain how to create and use application-level and route-level middleware with a code example.

**Answer:**
Middleware functions in Express.js are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. These functions can perform various tasks such as executing any code, making changes to the request and the response objects, ending the request-response cycle, and calling the next middleware in the stack.

There are different types of middleware, including application-level, router-level, error-handling, built-in, and third-party middleware.

*   **Application-level middleware:** This middleware is bound to an instance of the `express()` object by using the `app.use()` or `app.METHOD()` functions. It is executed for every request to the app.

*   **Route-level middleware:** This middleware is similar to application-level middleware, but it is bound to an instance of `express.Router()` or as an argument to a specific route handler.

Here is an example that demonstrates both application-level and route-level middleware:

```javascript
var express = require('express');
var obj = new express();

// Application-level middleware
var log = (req, res, next) => {
    console.log("record saved, middleware (1)");
    next(); // Calls the next middleware
};
obj.use(log);

// Another application-level middleware
obj.use((req, res, next) => {
    console.log("record saved 1, middleware (2)");
    next();
});

// A route that uses the application-level middleware
obj.get('/', (req, res) => {
    res.send("middlewares are running in the code");
});

// Route-level middleware
var log1 = (req, res, next) => {
    console.log("record saved, middleware (3)");
    next();
};

// A route with a route-level middleware
obj.get('/home', log1, (req, res) => {
    res.send("middlewares at home are running in the code");
});

obj.listen(3009, () => { console.log("server running") });
```

In this example, the `log` and the anonymous middleware function are application-level middleware and will be executed for any request. The `log1` middleware is a route-level middleware and will only be executed for requests to the `/home` route. The `next()` function is crucial to pass control to the next middleware function.

### Built-in Middleware

**Question:**
What are some of the built-in middleware functions in Express.js? Explain the purpose of `express.json()`, `express.urlencoded()`, and `express.static()` with a code example.

**Answer:**
Express.js comes with a set of built-in middleware functions that are commonly used in web applications. Some of the most important ones are:

*   **`express.json()`:** This middleware parses incoming requests with JSON payloads. It is based on the `body-parser` library. When you send a JSON object in a request body (e.g., from a client-side JavaScript fetch), this middleware will parse the JSON and make it available in `req.body`.

*   **`express.urlencoded({ extended: true })`:** This middleware parses incoming requests with URL-encoded payloads. This is the type of payload you get from an HTML form submission. The `extended: true` option allows for rich objects and arrays to be encoded into the URL-encoded format. The parsed data is available in `req.body`.

*   **`express.static(root, [options])`:** This middleware is used to serve static files such as images, CSS files, and JavaScript files. You provide the `root` argument which specifies the root directory from which to serve static assets.

Here is a code example that demonstrates the use of these built-in middleware functions:

```javascript
var express = require('express');
var obj = new express();
var path = require('path');

// Middleware to parse JSON bodies
obj.use(express.json());

// Middleware to parse URL-encoded bodies
obj.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
var filepath = path.join(__dirname, '/public');
obj.use(express.static(filepath));

// A route to handle POST requests from a form
obj.post('/formpost', (req, res) => {
    var body = req.body; // Contains the parsed form data
    res.send(body);
});

obj.listen(3000, () => { console.log("server running") });
```

In this example:
*   `express.json()` and `express.urlencoded()` will process the body of incoming `POST` requests.
*   `express.static(filepath)` will serve any files found in the `public` directory. For example, if there is a file named `index.html` in the `public` directory, it will be served when a user navigates to the root URL (`/`).

### Cookies and Sessions

**Question:**
What is the difference between cookies and sessions in the context of Express.js? How can you use the `cookie-parser` and `cookie-session` middleware to manage them? Provide code examples for setting, getting, and deleting both cookies and sessions.

**Answer:**
Cookies and sessions are both used to store information about a user between requests, but they work differently:

*   **Cookies:** Cookies are small pieces of data that are stored on the client's browser. The server sends the cookie to the client, and the client sends it back to the server with every subsequent request. Cookies are useful for storing small amounts of non-sensitive data, like user preferences (e.g., a theme). However, since they are stored on the client, they can be tampered with.

*   **Sessions:** Sessions also store user data, but the data itself is stored on the server. The server creates a unique session ID for the user and sends it to the client as a cookie. The client sends this session ID cookie with each request, and the server uses it to retrieve the user's session data. This is more secure than storing all the data in cookies because the sensitive data never leaves the server.

**Managing Cookies with `cookie-parser`**

The `cookie-parser` middleware is used to parse the `Cookie` header on the request and populate `req.cookies` with an object keyed by the cookie names.

*   **Installation:** `npm i cookie-parser`

*   **Usage:**
    ```javascript
    var express = require('express');
    var cookieParser = require('cookie-parser');
    var obj = new express();
    obj.use(cookieParser());

    // Set a cookie
    obj.get('/set-cookie', (req, res) => {
        res.cookie('theme', 'dark');
        res.send('cookies have been sent');
    });

    // Get a cookie
    obj.get('/get-cookie', (req, res) => {
        var cookieName = req.cookies.theme;
        res.send(`The fetched cookies is ${cookieName}`);
    });

    // Delete a cookie
    obj.get('/delete-cookie', (req, res) => {
        res.clearCookie('theme');
        res.send("cookies cleared, try to fetch again");
    });

    obj.listen(3013, () => {
        console.log('server is running on port 3013');
    });
    ```

**Managing Sessions with `cookie-session`**

The `cookie-session` middleware stores session data in a cookie on the client side. The session data is serialized and encoded, and then stored in a cookie. This is different from other session middleware that only store a session ID in the cookie and keep the data on the server.

*   **Installation:** `npm i cookie-session`

*   **Usage:**
    ```javascript
    var express = require('express');
    var cookieSession = require('cookie-session');
    var obj = new express();

    obj.use(cookieSession({
        name: "session",
        maxAge: 5 * 60 * 1000, // Session will be active for 5 minutes
        keys: ["secret-key"] // Used to sign the cookie
    }));

    // Set session data
    obj.get('/set-session', (req, res) => {
        req.session.username = "arwin";
        req.session.city = "patiala";
        res.send('session is set');
    });

    // Get session data
    obj.get('/get-session', (req, res) => {
        var username = req.session.username;
        var city = req.session.city;
        res.send(`session fetched and the value is ${username} and ${city}`);
    });

    // Delete a session
    obj.get('/delete-session', (req, res) => {
        req.session = null;
        res.send("session deleted succesfully");
    });

    obj.listen(3001, () => {
        console.log('Port 3001 is running');
    });
    ```

**Question:**
How does the `express-session` middleware work and how is it different from `cookie-session`? Provide a code example that demonstrates how to set, get, and destroy a session using `express-session`.

**Answer:**
The `express-session` middleware is used to manage sessions in Express.js. Unlike `cookie-session`, which stores the entire session data in the cookie, `express-session` stores only a session ID in the cookie. The actual session data is stored on the server-side, typically in memory by default, but it can also be configured to use a database or other session stores. This makes `express-session` more suitable for storing larger amounts of data or sensitive information that should not be exposed to the client.

Here's how to use `express-session` to set, get, and destroy a session:

*   **Installation:** `npm i express-session`

*   **Usage:**
    ```javascript
    var express = require('express');
    var session = require('express-session');
    var obj = new express();

    // Middleware to use sessions
    obj.use(session({
        secret: 'secret-key', // Used to sign the session ID cookie
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 5 * 60 * 1000 } // Session will expire in 5 minutes
    }));

    // Set session data
    obj.get('/set-session', (req, res) => {
        req.session.username = "arwin";
        req.session.city = "patiala";
        res.send(`session has been set <a href="/get-session">get-session</a>`);
    });

    // Get session data
    obj.get('/get-session', (req, res) => {
        const user = req.session.username;
        const city = req.session.city;
        res.send(`session fetched and value is ${user} and ${city} <a href="/delete-session">delete-session</a>`);
    });

    // Destroy the session
    obj.get('/delete-session', (req, res) => {
        req.session.destroy();
        res.send(`session deleted <a href="/get-session">get-session</a>`);
    });

    obj.listen(3015, () => {
        console.log("server running on port 3015");
    });
    ```

In this example:
*   The `express-session` middleware is configured with a `secret` to sign the session ID cookie.
*   In the `/set-session` route, data is stored in `req.session`.
*   In the `/get-session` route, the data is retrieved from `req.session`.
*   In the `/delete-session` route, `req.session.destroy()` is called to remove the session data from the server.

### Form Handling

**Question:**
How do you handle form submissions in Express.js for both GET and POST requests? Explain with an example that includes the HTML form and the Express route handlers.

**Answer:**
Handling form submissions in Express.js involves creating HTML forms and then setting up route handlers to process the submitted data. The way you handle the data depends on whether the form uses the `GET` or `POST` method.

**Handling GET Requests**

When a form is submitted with the `GET` method, the form data is appended to the URL as a query string. In Express, you can access this data through the `req.query` object.

*   **HTML Form (`formget.html`):**
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/getsend" method="get">
            <input type="number" name="num1"> <br>
            <input type="number" name="num2">
            <input type="submit" value="submit">
        </form>
    </body>
    </html>
    ```

*   **Express Route Handler:**
    ```javascript
    var express = require('express');
    var app = express();

    app.get('/formget', (req, res) => {
        res.sendFile(__dirname + '/formget.html');
    });

    app.get('/getsend', (req, res) => {
        var num1 = parseInt(req.query.num1);
        var num2 = parseInt(req.query.num2);
        var sum = num1 + num2;
        res.send('The sum is: ' + sum);
    });

    app.listen(3000, () => { console.log('Server running on port 3000'); });
    ```
    In this example, when the form is submitted, the browser will navigate to a URL like `/getsend?num1=10&num2=5`. The Express route for `/getsend` will then access `req.query.num1` and `req.query.num2` to perform the calculation.

**Handling POST Requests**

When a form is submitted with the `POST` method, the form data is sent in the body of the request. To handle this in Express, you need to use a middleware like `express.urlencoded()` to parse the request body. The parsed data will then be available in the `req.body` object.

*   **HTML Form (`formpost.html`):**
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/formpost" method="post">
            <input type="text" name="n1"><br>
            <input type="password" name="n2"><br>
            <input type="submit" value="submit">
        </form>
    </body>
    </html>
    ```

*   **Express Route Handler (`post.js`):**
    ```javascript
    var express = require('express');
    var obj = new express();

    // Middleware to parse URL-encoded bodies
    var encoded = express.urlencoded({ extended: true });

    obj.get('/postlogin', (req, res) => {
        res.sendFile(__dirname + '/formpost.html');
    });

    obj.post('/formpost', encoded, (req, res) => {
        res.send({
            name: req.body.n1,
            pass: req.body.n2
        });
    });

    obj.listen(3001, () => { console.log("server running") });
    ```
    In this case, the `express.urlencoded()` middleware processes the form data from the `POST` request, and the `/formpost` route handler can then access the username and password from `req.body`.

### Router Middleware

**Question:**
What is router-level middleware in Express.js and how is it used? Provide a code example that demonstrates creating a router with its own middleware for a group of routes.

**Answer:**
Router-level middleware works in the same way as application-level middleware, but it is bound to an instance of `express.Router()`. It is used to create a modular and mountable system of routes. This is particularly useful for grouping related routes and applying specific middleware to them.

You can create a new router object using `express.Router()`, and then add middleware and routes to it. Finally, you can mount the router on a path in your main application.

Here is an example that demonstrates how to create a router for user-related routes with its own middleware:

```javascript
var express = require('express');
var obj = new express();
var router = express.Router();

// Middleware for the '/dashboard' route within the router
var rou = (req, res, next) => {
    console.log("router level middleware, run only for dashboard");
    next();
};

router.get('/dashboard', rou, (req, res) => {
    res.send("dashboard page opened");
});

// Middleware for the '/profile' route within the router
var rou1 = (req, res, next) => {
    console.log("router level middleware, run only for profile");
    next();
};

router.get('/profile', rou1, (req, res) => {
    res.send("profile page opened");
});

// Mount the router on the '/user' path
obj.use('/user', router);

obj.listen(3009, () => { console.log("server running") });
```

In this example:
*   An `express.Router()` instance is created.
*   Two routes, `/dashboard` and `/profile`, are defined on the router, each with its own middleware (`rou` and `rou1` respectively).
*   The router is mounted on the `/user` path in the main application using `obj.use('/user', router)`.
*   This means that the routes will be accessible at `/user/dashboard` and `/user/profile`. The middleware `rou` will only be executed for requests to `/user/dashboard`, and `rou1` will only be executed for requests to `/user/profile`.

### Input Validation

**Question:**
What is `express-validator` and how is it used for server-side validation in Express.js? Provide a code example that validates a registration form with fields for username, email, and password.

**Answer:**
`express-validator` is a library for Express.js that provides a set of middleware for validating and sanitizing user input. It is a powerful tool for ensuring that the data received from the client is in the correct format and meets the application's requirements.

The library works by creating a chain of validation rules for each field you want to validate. These validation rules are passed as middleware to the route handler. Inside the route handler, you can use the `validationResult()` function to check for any validation errors.

Here is a code example that demonstrates how to use `express-validator` to validate a registration form:

*   **Installation:** `npm i express-validator`

*   **Usage:**
    ```javascript
    var express = require('express');
    var { body, validationResult } = require('express-validator');
    var obj = new express();

    // Middleware to handle post request
    obj.use(express.urlencoded({ extended: true }));

    // Route to display the registration form
    obj.get('/registration', (req, res) => {
        res.send(`<form method="post" action="/validate">
            <label>Name<input type="text" name="username" placeholder="Enter username"/></label>
            <label>Email<input type="email" name="email" placeholder="Enter email"/></label>
            <label>Password<input type="password" name="password" placeholder="Enter password"/></label>
            <button type="submit">Register</button>
        </form>`);
    });

    // Route to handle the form submission and validation
    obj.post('/validate', [
        // Validation rules
        body('username').trim().isLength({ max: 10 }).withMessage('username should not exceed 10 characters'),
        body('email').isEmail().withMessage('enter valid email address').normalizeEmail(),
        body('password').trim().isLength({ min: 6, max: 8 }).withMessage('password should be between 6 and 8 characters')
    ], (req, res) => {
        // Check for validation errors
        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // If no errors, proceed with registration
        res.send("registration successful");
    });

    obj.listen(3016, () => {
        console.log("server running on port 3016");
    });
    ```

In this example:
*   We import `body` and `validationResult` from `express-validator`.
*   In the `/validate` route, we define an array of validation rules for the `username`, `email`, and `password` fields. These rules include trimming whitespace, checking length, and validating email format. `normalizeEmail()` is a sanitizer.
*   The `validationResult(req)` function is used to gather any validation errors.
*   If there are errors, we send a 400 Bad Request response with the error details. Otherwise, we send a success message.

## Local Modules

**Question:**
How do you create and use a simple local module in Node.js? Provide an example of a calculator module that exports `add` and `sub` functions, and a separate file that uses this module.

**Answer:**
Creating and using local modules is a fundamental concept in Node.js for organizing and reusing code. A local module is essentially a file that exports one or more functions, objects, or values that can be imported and used in other files.

Here's how to create and use a simple calculator module:

**1. Create the Module (`index.js`)**

In this file, we define the `add` and `sub` functions and then export them using `module.exports`.

```javascript
// index.js
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = { add, sub };
```

**2. Create the `package.json` file**

It's a good practice to include a `package.json` file to provide metadata about the module.

```json
// package.json
{
  "name": "arwincal999",
  "version": "1.0.0",
  "description": "A calculator",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "calculator"
  ],
  "author": "arwin94 arwinderdhillon999@gmail.com",
  "license": "ISC"
}
```

**3. Use the Module (`test.js`)**

In another file, you can import the module using `require()` with a relative path to the module file. Then you can use the exported functions.

```javascript
// test.js
var c = require('./index'); // Imports the local module

console.log(c.add(4, 5)); // Outputs: 9
console.log(c.sub(10, 5)); // Outputs: 5
```

In this example, `require('./index')` loads the `index.js` module and returns the `module.exports` object from that file. We can then call the `add` and `sub` functions from the imported module.

```