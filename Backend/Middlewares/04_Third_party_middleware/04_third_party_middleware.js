/*
-> Use third-party middleware to add functionality to Express apps.

-> Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

*/

//# The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

/*
-- Some famous middlewares used and maintained by express:
1) timeout: Set a timeout period for HTTP request processing.
2) serve-static: Serve static files.
3) morgan: HTTP request logger.
4) method-override:	Override HTTP methods using header.
5) cors: Enable cross-origin resource sharing (CORS) with various options.
6) cookie-session:	Establish cookie-based sessions.
7) cookie-parser: Parse cookie header and populate req.cookies. See also cookies and keygrip.
8) body-parser:	Parse HTTP request body. See also: body, co-body, and raw-body.

--Additional middleware modules:
These are some additional popular middleware modules.
1) helmet: Helps secure your apps by setting various HTTP headers.
2) static-expiry: Fingerprint URLs or caching headers for static assets.
3) view-helpers: Common helper methods for views.
4) sriracha-admin: Dynamically generate an admin site for Mongoose.




*/
