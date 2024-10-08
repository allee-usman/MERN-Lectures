/*
$:  A database is an organized collection of data that is stored and managed so it can be easily accessed, updated, and analyzed.

*   Types:
There are two types of databases:
?1: SQL (Realational Database):
-   Structure: SQL databases use a predefined schema where data is organized into tables with rows and columns.
- Schema: The structure (schema) is fixed, meaning each table's format is defined before data is added.
- Query Language: Uses SQL (Structured Query Language) for defining, managing, and querying data.
- Vertical Scaling: Scaling is often done by adding more resources (e.g., CPU, RAM) to a single server.
*   Examples: 
    MySQL, PostgreSQL, Oracle, Microsoft SQL Server.

*   Use Cases: 
    Suitable for structured data, such as financial transactions, inventory management, and CRM systems.

?   NoSQL Databases (Non-relational Databases):
-   Structure: NoSQL databases store data in various formats such as key-value pairs, documents (JSON-like), graphs, or columns. They don't require a predefined schema.
- Schema: Flexible or schema-less, allowing dynamic changes in the structure of the data.
- Query Language: NoSQL databases have their own methods for querying data; they don't necessarily rely on SQL.
- Horizontal Scaling: Easily scales across multiple servers by adding more nodes.

*   Examples: 
    MongoDB (Document Store)
    Redis (Key-Value Store)
    Cassandra (Column Store)
    Neo4j (Graph Database)

*   Use Cases: 
    Ideal for unstructured data or large datasets like social networks, real-time analytics, IoT, and big data applications.


INFO:
- SQL databases are great for structured data and complex queries where consistency is crucial.
- NoSQL databases are better suited for flexible, large-scale applications with unstructured or semi-structured data.
*/
