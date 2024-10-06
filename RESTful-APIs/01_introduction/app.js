/*
$ A RESTful API (Representational State Transfer) is a set of web service principles that allows systems to communicate over HTTP using standard methods, making it easier to structure, design, and maintain web services. It’s commonly used in web development to allow servers to handle requests from clients, such as browsers or mobile apps. Also used to perform CRUD operations.

*   CRUD operations:
1.  GET retrieves resources
2.  POST submits new data to server 
3.  PUT updates existing data
4.  PATCH updates existing data partially
5.  DELETE removes data from server

*   Resource-Based: 
    Resources (like users, products, articles) are the key entities in a RESTful API. Each resource is represented by a unique URL (Uniform Resource Locator), known as an endpoint. For example, a RESTful API managing users might have the following endpoints:

->    GET /users (Fetch all users)
->    POST /users (Create a new user)
->    GET /users/{id} (Fetch a specific user by ID)
->    PUT /users/{id} (Update a specific user)
->    DELETE /users/{id} (Delete a specific user)

*   Stateless Communication:
    RESTful APIs rely on HTTP status codes to communicate the result of a request. Examples:

->    200 OK: Successful request.
->    201 Created: A resource was successfully created.
->    400 Bad Request: The client made an invalid request.
->    404 Not Found: The requested resource was not found.
->    500 Internal Server Error: A generic server error.

*   JSON/XML Responses: 
    REST APIs typically return data in a structured format like JSON or XML, with JSON being more commonly used today due to its simplicity and easy integration with JavaScript-based applications.
*/
