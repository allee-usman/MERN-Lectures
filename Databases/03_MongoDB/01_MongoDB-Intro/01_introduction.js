/*
=> Basic Commands:

# Start Mongo Shell:
-- mongosh

# List all databases:
-- show dbs

# List all collections (table):
-- show collections

# To display the database you are using, type:
-- db

# Select/Create a database, type:
-- use db_name
If database does not exist, it will be created then, otherwise that db will be selected/switched 

# To terminate a running command or query in mongosh:
-- Ctrl + C

# To exit the Mongosh shell, Press:
-- Ctrl + C (twice)

# Clear the mongosh Console:
-- cls / Ctrl + L / console.clear()

$ Document: MongoDB sotres the data in the form of document.
$ Collection: MongoDB sotres document in the form of collection.

? CRUD Operations:

=> "C" of CRUD aka Create Operations:
Create or insert operations add new documents to a collection. If the collection does not exist, create operations also create the collection. You can insert a single document or multiple documents in a single operation.

# insert a single document, use insertOne():
-- Syntax:
db.collection_name.insertOne()

-- Example:
db.products.insertOne({_id: 12, name: 'Pen', price: 90, quantity: 32})

# To insert a multiple documents, use insertMany():
-- Syntax: 
db.collection_name.insertMany( {
    [ <document 1> , <document 2>, ... ],
     {
        writeConcern: <document>,
        ordered: <boolean>
    }
} )

where
-- document: ia an array of documents to insert into the collection.
-- writeConcern: Optional. A document expressing the write concern. Omit to use the default write concern.
-- order: Optional. A boolean specifying whether the mongod instance should perform an ordered or unordered insert. Defaults to true.

-- Example:
db.products.insertMany( [
    { _id: 1, name: 'Pencil, price: 10.00', stock: 300},
    { _id: 2, name: 'Geometery, price: 190.00', stock: 200},
    { _id: 3, name: 'Sharpner, price: 20.00', stock: 30},
])

Note: If a collection does not exist, MongoDB will automatically create the collection when you first insert data for that collection. Also if we do not specify "_id", MongoDB will automatically create and insert the "id " attribute which will act as PRIMARY KEY.

=> JSON vs BSON:
JSON is a widely used data interchange format popular across many applications and technology stacks. BSON, the binary representation of JSON, is primarily used internally by MongoDB for efficient storage and data traversal. 

# There are several issues that make JSON less than ideal for usage inside of a database.

    -- JSON only supports a limited number of basic data types. Most notably, JSON lacks support for datetime and binary data.

    -- JSON objects and properties don't have fixed length which makes traversal slower.

    -- JSON does not provide metadata and type information, taking longer to retrieve documents.

# Solution (Binary JSON):
To make MongoDB JSON-first but still high-performance and general purpose, BSON was invented to bridge the gap: a binary representation to store data as JSON documents, optimized for speed, space, and efficiency. It's not dissimilar from other binary interchange formats like Protocol Buffers, or Thrift, in terms of approach.

-- BSON adds some additional data types (non-JSON-native), like dates and binary data, without which MongoDB would have been missing some valuable support.

=> 2) Read Operations:

# db.collection_name.find(query, projection):
Selects documents in a collection or view and returns a "cursor" to the selected documents.
? Query is representing conditions (key, value pairs)
? Projction is an object which specifies which fields to select in results. For example {name: 1, price: 1, stock: 0}
Notice here "1" means true (include) and "0" means false ( do not include)

-- Cursor:
A cursor is a reference to original documents. Which will help us to loop through the results for large data. The default cursor value is "20". We can modify the cursor behavior by using the "limit(newValue)".

-- Examples:
db.products.find() // return everything. Similar to ( SELECT * )

db.products.find({ name: "Pen" }) //return the documents having the name "Pen". Similar to ( SELECT * FROM products where name = "Pen)

db.products.find({ name: "Pen" }. { price: 32}) //multiple conditions. Similar to ( SELECT * FROM products where name = "Pen AND price = 32)

db.products.find({price: {$gt: 200} }) // find and return having price greater than 200. Similar to ( SELECT * FROM products where price > 200)

db.products.find({price: {$gt: 10} }).limit(2) // find and return having price greater than 200 and limits the result to 2 Similar to ( SELECT * FROM products where price > 200 LIMIT 2)

-- Here .limit(2) is "cursor modifer".

# db.collection.findOne(query, projection, options)
Returns one document that satisfies the specified query criteria on the collection or view.
where "query", "projection" and "options" are optional parameters.

Note: Although similar to the "find()" method, the "findOne()" method returns a document rather than a cursor.

-- Example:
db.products.find({ stock: "32" }) //Similar to ( SELECT * FROM products where stock = 32)

The following example defines a targetFlavor variable in let and uses the variable to retrieve the chocolate cake flavor:
db.cakeFlavors.findOne(
   { $expr: { $eq: [ "$flavor", "$$targetFlavor" ] } },
   { _id: 0 },
   { let : { targetFlavor: "chocolate" }
} )

OR:

db.products.findOne( 
    { $expr: {$eq: [ "$price", "$$targetPrice" ] } }, 
    {_id: 0}, 
    {let: {targetPrice: 32 } 
} )


# Query Operators:
Query Operators helps us to filter out results on some conditions.

Imagine this table: 

db.inventory.insertMany( [
   { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
   { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
   { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
   { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
   { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
] )

? Comparison:
#1: $eq (=)
Matches values that are equal to a specified value.
-- Example:
db.students.find( { cgpa: { $eq: 3.89 } } ) ===  db.students.find( { cgpa: 3.89 } )

$ Field in Embedded Document Equals a Value (Nesting):
db.inventory.find( { "item.name": { $eq: "ab" } } ) === db.inventory.find( { "item.name": "ab" } )

$ Array Element Equals a Value:
db.inventory.find( { tags: { $eq: "B" } } ) === db.inventory.find( { tags: "B" } )

$ Equals an Array Value:
db.inventory.find( { tags: { $eq: [ "A", "B" ] } } ) === db.inventory.find( { tags: [ "A", "B" ] } )

* Regex Match Behaviour: The following examples demonstrate the differences in behavior between implicit and explicit regular expression matching. Consider a collection with these documents:

db.companies.insertMany( [
   { _id: 001, name: "MongoDB" },
   { _id: 002, name: "MongoDB2" }
] )

$eq match on a string: 
A string expands to return the same values whether an implicit match or an explicit use of $eq. Both of these queries:
db.companies.find( { name: "MongoDB" }, {_id: 0 }) === db.companies.find( { name: { $eq: "MongoDB" } }, {_id: 0 } )

$eq match on a regular expression:
An explicit query using $eq and a regular expression will only match an object which is also a regular expresssion. The example query won't return anything since values in the company field are strings:
db.companies.find( { name: { $eq: /MongoDB/ } }, {_id: 0 } )

$ Regular expression matches:
A query with an implicit match against a regular expression is equivalent to a making a query with the $regex operator. Both of these queries:

db.companies.find( { name: /MongoDB/ }, {_id: 0 }) === db.companies.find( { name: { $regex: /MongoDB/ } }, {_id: 0 } )

#2: $gt (>):
"$gt" selects those documents where the value of the specified field is greater than (i.e. >) the specified value.

-- Syntax: 
{ field: { $gt: value } }

-- Examples:
db.inventory.find({ qty: { $gt: 20 } })

#3: $lt (<):
"$lt" selects those documents where the value of the specified field is less than (i.e. <) the specified value.

-- Syntax: 
{ field: { $lt: value } }

-- Examples:
db.inventory.find({ qty: { $lt: 15 } })

#4: $gte (>=):
"$gte" selects those documents where the value of the specified field is greater than or equal (i.e. >=) the specified value.

-- Syntax: 
{ field: { $gte: value } }

-- Examples:
db.inventory.find({ qty: { $gte: 20 } })

#5: $lte (>=):
"$lte" selects those documents where the value of the specified field is less than or equal (i.e. <=) the specified value.

-- Syntax: 
{ field: { $lte: value } }

-- Examples:
db.inventory.find({ qty: { $lte: 20 } })

#6: $in:
The $in operator selects the documents where the value of a field equals any value in the specified array.

-- Syntax:
{ field: { $in: [<value1>, <value2>, ... <valueN> ] } }

-- Examples:
db.inventory.find({ "item.name": { $in: ["ab", "xy", "ij" ] } }, { _id: 0, tags: 0, "item.code": 0 } )

$ Use the "$in" Operator with a Regular Expression:
The $in operator can specify matching values using regular expressions of the form /pattern/. You cannot use $regex operator expressions inside an $in.
-- db.inventory.find( { tags: { $in: [ /^Sc/, /^ge/ ] } } )

#7: $ne (!=):
    "$ne" selects the documents where the value of the specified field is not equal to the specified value. This includes documents that do not contain the specified field.

-- The SQL equivalent to this query is:
SELECT * FROM INVENTORY WHERE qty != 20    

-- Syntax:
{ field: { $ne: value } }

-- Examples:
db.inventory.find( { quantity: { $ne: 20 } } )

#8: $nin:
"$nin" selects the documents where:
    the specified field value is not in the specified array or
    the specified field does not exist.

-- Syntax:
{ field: { $nin: [ <value1>, <value2> ... <valueN> ] } }

-- Examples:
db.inventory.find( { qty: { $nin: [ 5, 15 ] } }, { _id: 0 } )


? Logical:
#1: $and:
    "$and" performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.

    -- syntax:
    { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }

    -- Examples:
    db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
    The query selects all documents in the inventory collection where:
        the price field value is not equal to 1.99 and
        the price field exists.
        
#2: $not:
    "$not" performs a logical NOT operation on the specified <operator-expression> and selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.

    -- Syntax:
    { field: { $not: { <operator-expression> } } }

    -- Examples:
    db.inventory.find( { price: { $not: { $gt: 1.99 } } } 

    This query will select all documents in the inventory collection where:
        the price field value is less than or equal to 1.99 or
        the price field does not exist

INFO: { $not: { $gt: 1.99 } } is different from the "$lte" operator. { $lte: 1.99 } returns only the documents where price field exists and its value is less than or equal to 1.99.

Remember that the $not operator only affects other operators and cannot check fields and documents independently. So, use the $not operator for logical disjunctions and the $ne operator to test the contents of fields directly.

* So If you want to fetch all documents which fullfills some conditions or doesn't have that field at all, use the $not operator then.

#3: $nor
    "$nor" performs a logical NOR operation on an array of one or more query predicates and selects the documents that fail all the query predicates in the array. The $nor has the following syntax:

    -- Syntax:
    { $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }

    -- Examples:

    * db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )

    This query will return all documents that:
        -> contain the price field whose value is not equal to 1.99 and contain the sale field whose value is not equal to true or
        -> contain the price field whose value is not equal to 1.99 but do not contain the sale field or
        -> do not contain the price field but contain the sale field whose value is not equal to true or
        -> do not contain the price field and do not contain the sale field

    * db.inventory.find( { $nor: [ { price: 1.99 }, { qty: { $lt: 20 } }, { sale: true } ] } ) 

    This query will select all documents in the inventory collection where:
        -> the price field value does not equal 1.99 and
        -> the qty field value is not less than 20 and
        -> the sale field value is not equal to true
    including those documents that do not contain these field(s). 

    $nor and "$exists": 
    Compare that with the following query which uses the $nor operator with the $exists operator:

    db.inventory.find( { $nor: [ { price: 1.99 }, { price: { $exists: false } }, { sale: true }, { sale: { $exists: false } } ] } )

    This query will return all documents that:
        contain the price field whose value is not equal to 1.99 and contain the sale field whose value is not equal to true

#4: $or:
    The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.

    -- Syntax:
    { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }

    -- Examples:
    db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
    
    $or versus $in:
    When using $or with <expressions> that are equality checks for the value of the same field, use the $in operator instead of the $or operator.

    For example, to select all documents in the inventory collection where the quantity field value equals either 20 or 50, use the $in operator:
    db.inventory.find ( { quantity: { $in: [20, 50] } } )

? Element Query Operators:
Element operators return data based on field existence or data types.

#1: $exists	
    The $exists operator matches documents that contain or do not contain a specified field, including documents where the field value is null.

    -- Syntax:
    { field: { $exists: <boolean> } }

    When <boolean> is true, $exists matches the documents that contain the field, including documents where the field value is null. If <boolean> is false, the query returns only the documents that do not contain the field.

    -- Example:
    * db.inventory.find( { qty: { $exists: true, $nin: [ 5, 15 ] } } )

    This query will select all documents in the inventory collection where the qty field exists and its value does not equal 5 or 15.

    The following examples uses a collection named spices with the following documents:
    db.spices.insertMany( [
   { saffron: 5, cinnamon: 5, mustard: null },
   { saffron: 3, cinnamon: null, mustard: 8 },
   { saffron: null, cinnamon: 3, mustard: 9 },
   { saffron: 1, cinnamon: 2, mustard: 3 },
   { saffron: 2, mustard: 5 },
   { saffron: 3, cinnamon: 2 },
   { saffron: 4 },
   { cinnamon: 2, mustard: 4 },
   { cinnamon: 2 },
   { mustard: 6 }
    ] )

    The following query specifies the query predicate saffron: { $exists: true }:
    * db.spices.find( { saffron: { $exists: true } } )

Create a stockSales collection:
db.stockSales.insertMany( [
   { _id: 0, symbol: "MDB", auditDate: new Date( "2021-05-18T16:12:23Z" ) },
   { _id: 1, symbol: "MDB", auditDate: new Date( "2021-04-21T11:34:45Z" ) },
   { _id: 2, symbol: "MSFT", auditDate: new Date( "2021-02-24T15:11:32Z" ) },
   { _id: 3, symbol: "MSFT", auditDate: null },
   { _id: 4, symbol: "MSFT", auditDate: new Date( "2021-07-13T18:32:54Z" ) },
   { _id: 5, symbol: "AAPL" }
] )

The document with an _id of:
    3 has a null auditDate value.
    5 is missing the auditDate value.

    * db.stockSales.countDocuments( { auditDate: { $exists: true } } )
    The above example returns 5. The document that is missing the auditDate value is not counted.
Tip:
If you only need documents where the field has a non-null value, you:
    Can use $ne: null instead of $exists: true.
    Do not need a sparse index on the field.

For example, using the stockSales collection:
db.stockSales.countDocuments( { auditDate: { $ne: null } } )
The example returns 4. Documents that are missing the auditDate value or have a null auditDate value are not counted.

Note: MongoDB "$exists" does not correspond to SQL operator exists.


#2: $type:
    "$type" selects documents where the value of the field is an instance of the specified BSON type(s). Querying by data type is useful when dealing with highly unstructured data where data types are not predictable.

    -- Syntax:
    { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }

    -- Examples:
    db.stockSales.find( { symbol: { $type: ["string"]} } )

=> Available Types:
The "$type" operator accepts string aliases for the BSON types in addition to the numbers corresponding to the BSON types:

-- Type                          Number                      Alias                        Notes

  Double                           1                        "double"	
  String                           2                        "string"
  Object                           3                        "object"
  Array                            4                         "array"
  Binary data                      5                        "binData"
  Undefined                        6                       "undefined"                 Deprecated.
  ObjectId                         7                       "objectId"                  
  Boolean                          8                         "bool"                  
  Date                             9                         "date"                  
  Null                            10                         "null"                  
  Regular Expression              11                         "regex"                 
  DBPointer                       12                       "dbPointer"                 Deprecated.
  JavaScript                      13                       "javascript"                
  Symbol                          14                         "symbol"                  Deprecated.
  32-bit integer                  16                          "int"                     
  Timestamp                       17                       "timestamp"                     
  64-bit integer                  18                         "long"                     
  Decimal128                      19                        "decimal"                     
  Min key                         -1                         "minKey"                     
  Max key                        127                         "maxKey"                     



  
=> "$type" supports the number alias, which matches against the following BSON types:
    double
    32-bit integer
    64-bit integer
    decimal
        
INFO: "$isNumber" returns true if a value is a number otherwise false e.g { $isNumber: <expression> }

# MinKey and MaxKey:
MinKey and MaxKey are used in comparison operations and exist primarily for internal use. For all possible BSON element values, MinKey is always the smallest value while MaxKey is always the greatest value.

Suppose the document:
db.data.insertMany( [
   { _id : 1, x : { "$minKey" : 1 } },
   { _id : 2, y : { "$maxKey" : 1 } }
] )

-- The following query returns the document with _id: 1:
db.data.find( { x: { $type: "minKey" } } )

-- The following query returns the document with _id: 2:
db.data.find( { y: { $type: "maxKey" } } )

-- "$type" examples:
The addressBook contains addresses and zipcodes, where zipCode has string, int, double, and long values:
db.addressBook.insertMany( [
      { _id : 1, address : "2030 Martian Way", zipCode : "90698345" },
      { _id : 2, address : "156 Lunar Place", zipCode : 43339374 },
      { _id : 3, address : "2324 Pluto Place", zipCode : NumberLong(3921412) },
      { _id : 4, address : "55 Saturn Ring" , zipCode : NumberInt(88602117) },
      { _id : 5, address : "104 Venus Drive", zipCode : ["834847278", "1893289032"] }
] )

-- The following queries return all documents where zipCode is the BSON type string or is an array containing an element of the specified type:
db.addressBook.find( { zipCode : { $type : 2 } } );
db.addressBook.find( { zipCode : { $type : "string" } } );

-- The following queries return all documents where zipCode is the BSON type double or is an array containing an element of the specified type:
db.addressBook.find( { zipCode : { $type : 1 } } );
db.addressBook.find( { zipCode : { $type : "double" } } );

-- The following query uses the number alias to return documents where zipCode is the BSON type double, int, or long or is an array containing an element of the specified types:
db.addressBook.find( { zipCode : { $type : "number" } } )

* Querying by Multiple Data Types:
The grades collection contains names and averages, where classAverage has string, int, and double values:
db.grades.insertMany( [
      { _id : 1, name : "Alice King" , classAverage : 87.333333333333333 },
      { _id : 2, name : "Bob Jenkins", classAverage : "83.52" },
      { _id : 3, name : "Cathy Hart", classAverage: "94.06" },
      { _id : 4, name : "Drew Williams" , classAverage : NumberInt("93") }
] )

-- The following queries return all documents where classAverage is the BSON type string or double or is an array containing an element of the specified types. The first query uses numeric aliases while the second query uses string aliases.
db.grades.find( { classAverage : { $type : [ 2 , 1 ] } } );
db.grades.find( { classAverage : { $type : [ "string" , "double" ] } } );

* Querying by MinKey and MaxKey: 
The restaurants collection uses minKey for any grade that is a failing grade:

db.restaurants.insertOne( [
   {
      _id: 1,
      address: {
         building: "230",
         coord: [ -73.996089, 40.675018 ],
         street: "Huntington St",
         zipcode: "11231"
      },
      borough: "Brooklyn",
      cuisine: "Bakery",
      grades: [
         { date : new Date(1393804800000), grade : "C", score : 15 },
         { date : new Date(1378857600000), grade : "C", score : 16 },
         { date : new Date(1358985600000), grade : MinKey(), score : 30 },
         { date : new Date(1322006400000), grade : "C", score : 15 }
      ],
      name : "Dirty Dan's Donuts",
      restaurant_id : "30075445"
   }
] )

And maxKey for any grade that is the highest passing grade:

db.restaurants.insertOne( [
   {
      _id : 2,
      address : {
         building : "1166",
         coord : [ -73.955184, 40.738589 ],
         street : "Manhattan Ave",
         zipcode : "11222"
      },
      borough: "Brooklyn",
      cuisine: "Bakery",
      grades: [
         { date : new Date(1393804800000), grade : MaxKey(), score : 2 },
         { date : new Date(1378857600000), grade : "B", score : 6 },
         { date : new Date(1358985600000), grade : MaxKey(), score : 3 },
         { date : new Date(1322006400000), grade : "B", score : 5 }
      ],
      name : "Dainty Daisey's Donuts",
      restaurant_id : "30075449"
   }
] )

-- The following query returns any restaurant whose grades.grade field contains minKey or is an array containing an element of the specified type:
db.restaurants.find(
   { "grades.grade" : { $type : "minKey" } }
)

-- The following query returns any restaurant whose grades.grade field contains maxKey or is an array containing an element of the specified type:
db.restaurants.find(
   { "grades.grade" : { $type : "maxKey" } }
)

* Querying by Array Type:
A collection named sensorReading contains the following documents:

db.sensorReading.insertMany( [
   { _id : 1, readings : [ 25, 23, [ "Warn: High Temp!", 55 ], [ "ERROR: SYSTEM SHUTDOWN!", 66 ] ] },
   { _id : 2, readings : [ 25, 25, 24, 23 ] },
   { _id : 3, readings : [ 22, 24, [] ] },
   { _id : 4, readings : [] },
   { _id : 5, readings : 24 }
] )

-- The following query returns any document in which the readings field is an array, empty or non-empty:
db.SensorReading.find( { readings : { $type: "array" } } )

? Evaluation Query Operators:
Evaluation operators return data based on evaluations of either individual fields or the entire collection's documents.

#1: $expr
    Allows the use of expressions within a query predicate.

    -- Syntax:
    { $expr: { <expression> } }

    -- Examples:

    * Compare Two Fields from a Single Document: "$expr" can contain expressions that compare fields from the same document.
    Create a monthlyBudget collection with these documents:

    db.monthlyBudget.insertMany( [
    { _id : 1, category : "food", budget : 400, spent : 450 },
    { _id : 2, category : "drinks", budget : 100, spent : 150 },
    { _id : 3, category : "clothes", budget : 100, spent : 50 },
    { _id : 4, category : "misc", budget : 500, spent : 300 },
    { _id : 5, category : "travel", budget : 200, spent : 650 }
    ] )

    -- The following operation uses $expr to find documents where the spent amount exceeds the budget:
    db.monthlyBudget.find( { $expr: { $gt: [ "$spent" , "$budget" ] } } )
    Note: The order of fields names is matter. ["$spent", "$budget"] means spent > budget and vice versa.


    * Use $expr With Conditional Statements:
    Some queries require the ability to execute conditional logic when defining a query filter. The aggregation pipeline provides the $cond operator to express conditional statements. By using $expr with the $cond operator, you can specify a conditional filter for your query statement.

    Create a sample supplies collection with the following documents:
    db.supplies.insertMany( [
        { _id : 1, item : "binder", qty : NumberInt("100"), price : NumberDecimal("12") },
        { _id : 2, item : "notebook", qty : NumberInt("200"), price : NumberDecimal("8") },
        { _id : 3, item : "pencil", qty : NumberInt("50"), price : NumberDecimal("6") },
        { _id : 4, item : "eraser", qty : NumberInt("150"), price : NumberDecimal("3") },
        { _id : 5, item : "legal pad", qty : NumberInt("42"), price : NumberDecimal("10") }
    ] )

    Assume that for an upcoming sale next month, you want to discount the prices such that:

        If qty is greater than or equal to 100, the discounted price will be 0.5 of the price.

        If qty is less than 100, the discounted price is 0.75 of the price.

    Before applying the discounts, you would like to know which items in the supplies collection have a discounted price of less than 5.

    -- The following example uses $expr with $cond to calculate the discounted price based on the qty and to return documents whose calculated discount price is less than NumberDecimal("5"):

let discountedPrice = {
   $cond: {
      if: { $gte: ["$qty", 100] },
      then: { $multiply: ["$price", NumberDecimal("0.50")] },
      else: { $multiply: ["$price", NumberDecimal("0.75")] }
   }
};

// Query the supplies collection using the aggregation expression

db.supplies.find( { $expr: { $lt:[ discountedPrice,  NumberDecimal("5") ] } });

#2: $jsonSchema
    The $jsonSchema operator matches documents that satisfy the specified JSON Schema.

    -- Syntax:
    { $jsonSchema: <JSON Schema object> }

    -- Example: FIXME:


#3: $mod
    Select documents where the value of a field divided by a divisor has the specified remainder. That is, $mod performs a modulo operation to select documents. The first argument is the dividend, and the second argument is the remainder.    
    
    -- Syntax:
    { field: { $mod: [ divisor, remainder ] } }

    -- Examples:
    The following query selects those documents in the inventory collection where value of the qty field modulo 4 equals 0:
    -- db.inventory.find( { qty: { $mod: [ 4, 0 ] } } )

    * Not Enough Elements Error:
    The $mod operator errors when passed an array with fewer than two elements.e.g: 
    -- db.inventory.find( { qty: { $mod: [ 4 ] } } )

    * Too Many Elements Error:
    The $mod operator errors when passed an array with more than two elements.e.g: 
    -- db.inventory.find( { qty: { $mod: [ 4, 0, 5 ] } } )

    * Floating Point Arguments:
    The $mod expression rounds decimal input towards zero.
    -- db.inventory.find( { qty: { $mod: [ 4.0, 0 ] } } ),
    -- db.inventory.find( { qty: { $mod: [ 4.5, 0 ] } } ),
    -- db.inventory.find( { qty: { $mod: [ 4.99, 0 ] } } )
    Each of the above three queries applies 4 to the $mod expression regardless of decimal points, resulting in the same result set.

    * Negative Dividend:
    The $mod expression produces a negative result when the dividend is negative. e.g:
    -- db.inventory.find( { qty: { $mod: [ -4, -0 ] } } )
    This query returns two documents because the qty has a remainder of -0 when the dividend is negative and -0 equals 0 in JavaScript.

#4: $regex
Provides regular expression capabilities for pattern matching strings in queries.

-- Syntax:
To use $regex, use one of the following syntaxes:
{ <field>: { $regex: /pattern/, $options: '<options>' } }
{ "<field>": { "$regex": "pattern", "$options": "<options>" } }
{ <field>: { $regex: /pattern/<options> } }

-- Examples:
1. db.supplies.find( {item: {$regex: /l/}} ) // select documents where item has "l" character at any index
2. db.supplies.find( {item: {$regex: /^l/}} ) // select documents whose item name starts with "l" character
3. db.supplies.find( {item: {$regex: /l$/}} ) // select documents whose item name ends with "l" character
4. db.supplies.find({ item: { $regex: /^b.*b$/ } }) // select documents which starts and end with "b" character FIXME:


--$options:
The following <options> are available for use with regular expression.
    -- i: 
    Case insensitivity to match upper and lower cases.
    -- Examples:
    db.supplies.find({item: {$regex: /^e/, "$options": "i"}}),
    db.supplies.find({item: {$regex: /^e/, $options: "i"}}),
    db.supplies.find({item: {$regex: /^e/i}})

    All of above queries in the number (5) returns documents whose item name either start with "e" 0r "E"

    -- m: 
    For patterns that include anchors (i.e. ^ for the start, $ for the end), match at the beginning or end of each line for strings with multiline values. Without this option, these anchors match at beginning or end of the string.
    -- Examples:
    db.blogs.find({body: {$regex: /DB.$/m}}) // select documents in which each line of the "body" field ends with the word DB.
    
    Note: If the pattern contains no anchors or if the string value has no newline characters (e.g. \n), the m option has no effect.
    
    -- x: 
    "Extended" capability to ignore all white space characters in the $regex pattern unless escaped or included in a character class.
    Additionally, it ignores characters in-between and including an un-escaped hash/pound (#) character and the next new line, so that you may include comments in complicated patterns. This only applies to data characters; white space characters may never appear within special character sequences in a pattern.
    -- Examples:
    db.blogs.find({ body: { $regex: /MongoDB uses regex for pattern matching # This part is ignored/x } })
    The above query will give an error because: 
    Note: You cannot use "x and s" flag directly in a patterrn, for this you must use the following method:
    db.blogs.find({ body: { $regex: /MongoDB\ uses\ regex\ for\ pattern\ matching\ #\ This\ part\ is\ ignored/, "$options": "x" } }) //This will selects the document by ignoring spaces and everything after the # symbol (because the x option allows whitespace and comments to be ignored).

    INFO: the backslash (\) is used as an escape character for special characters in the regular expression. In regular expressions, certain characters like spaces, #, ., *, +, ?, and others have special meanings. To use them literally (i.e., as normal characters), you need to escape them with a backslash (\).

    -- s: 
    Allows the dot character (i.e. .) to match all characters including newline characters.
    -- Examples:
    db.blogs.find({ body: { $regex: /Regex can be\ quite\ powerful\..*Use\ it/, $options: "s" } })
    //the . (dot) will match the newline character between "powerful." and "Use it" due to the "s" flag.

    -- u: 
    Supports Unicode. This flag is accepted, but is redundant. UTF is set by default in the $regex operator, making the u option unnecessary.
    -- Examples:
    db.blogs.find({ body: { $regex: /こんにちは世界/u } })


Note: The $regex operator does not support the global search modifier g.
  
-- $regex vs. /pattern/ Syntax:
    $in Expressions:
    To include a regular expression in an "$in" query predicate operator, you can only use JavaScript regular expression objects (/pattern/ ). For example:
    { name: { $in: [ /^acme/i, /^ack/ ] } }
    ? Remember: You cannot use $regex operator expressions inside an $in operator.

    $ Implicit AND Conditions for the Field:
    To include a regular expression in a comma-separated list of query conditions for the field, use the $regex operator. For example:
    { name: { $regex: /acme.*corp/i, $nin: [ 'acmeblahcorp' ] } }
    { name: { $regex: /acme.*corp/, $options: 'i', $nin: [ 'acmeblahcorp' ] } }
    { name: { $regex: 'acme.*corp', $options: 'i', $nin: [ 'acmeblahcorp' ] } }

    $ "x" and "s" Options:
    To use either the x option or s options, you must use the $regex operator expression with the $options operator. For example, to specify the i and the s options, you must use $options for both:
    { name: { $regex: /acme.*corp/, $options: "si" } }
    { name: { $regex: 'acme.*corp', $options: "si" } }

    $regex and $not:
    The $not operator can perform logical NOT operation on both:
        Regular expression objects (i.e. /pattern/) For example:
        -- db.inventory.find( { "item.name": { $not: /^p/i } } ) // will selects all the documents in which item's name is not starting with 'p' or 'p.

-- Examples:
The examples in this section use the following products collection:
    db.products.insertMany( [
    { _id: 100, sku: "abc123", description: "Single line description." },
    { _id: 101, sku: "abc789", description: "First line\nSecond line" },
    { _id: 102, sku: "xyz456", description: "Many spaces before     line" },
    { _id: 103, sku: "xyz789", description: "Multiple\nline description" },
    { _id: 104, sku: "Abc789", description: "SKU starts with A" }
    ] )

    *1) Perform a LIKE Match:
    The following example matches all documents where the sku field is like "%789":
    -- db.products.find( { sku: { $regex: /789$/ } } )
    
    The example is analogous to the following SQL LIKE statement:
        SELECT * FROM products WHERE sku like "%789";

    *2) Perform Case-Insensitive Regular Expression Match:
    The following example uses the i option perform a case-insensitive match for documents with sku value that starts with ABC.
    -- db.products.find( { sku: { $regex: /^ABC/i } } )

    *3) Multiline Match for Lines Starting with Specified Pattern:
    The following example uses the m option to match lines starting with the letter S for multiline strings:
    -- db.products.find( { description: { $regex: /^S/, $options: 'm' } } )

    -- Example output:
    [
        { _id: 100, sku: 'abc123', description: 'Single line description.' },
        { _id: 101, sku: 'abc789', description: 'First line\nSecond line' },
        { _id: 104, sku: 'Abc789', description: 'SKU starts with A' }
    ]

    ? without "m" options the output will be:
    [
        { _id: 100, sku: 'abc123', description: 'Single line description.' },
        { _id: 104, sku: 'Abc789', description: 'SKU starts with A' }
    ]

    *4) If the $regex pattern does not contain an anchor(^), the pattern matches against the string as a whole, as in the following example:
    db.products.find( { description: { $regex: /S/ } } )

    -- Example output:
    [
        { _id: 100, sku: 'abc123', description: 'Single line description.' },
        { _id: 101, sku: 'abc789', description: 'First line\nSecond line' },
        { _id: 104, sku: 'Abc789', description: 'SKU starts with A' }
    ]

    *5) Use the (.) Dot Character to Match New Line:
    The following example uses the "s" option to allow the dot character (i.e. .) to match all characters including new line as well as the i option to perform a case-insensitive match:
    db.products.find( { description: { $regex: /m.*line/, $options: 'si' } } )
    -- Example output:

    [
        { _id: 102, sku: 'xyz456', description: 'Many spaces before     line' },
        { _id: 103, sku: 'xyz789', description: 'Multiple\nline description' }
    ]
    *6) Without the s option, the example output is:

    [ { _id: 102, sku: 'xyz456', description: 'Many spaces before     line' } ]

    *7) Ignore White Spaces in Pattern:
    The following example uses the x option ignore white spaces and the comments, denoted by the # and ending with the \n in the matching pattern:

    var pattern = "abc #category code\n123 #item number"
    db.products.find( { sku: { $regex: pattern, $options: "x" } } )

    -- Example output:
    [ { _id: 100, sku: 'abc123', description: 'Single line description.' } ]

    *8) Use a Regular Expression to Match Case in Strings:
    The following example uses the regular expression "(?i)a(?-i)bc" to match sku field strings that contain:
        "abc"
        "Abc"
    db.products.find( { sku: { $regex: "(?i)a(?-i)bc" } } )
    -- Example output:
    [
        { _id: 100, sku: 'abc123', description: 'Single line description.' },
        { _id: 101, sku: 'abc789', description: 'First line\nSecond line' },
        { _id: 104, sku: 'Abc789', description: 'SKU starts with A' }
    ]

    INFO: "(?i)" is an inline flag that tells the regular expression engine to enable case-insensitive matching from this point onward, whereas (?-i) is another inline flag, but this one disables case-insensitive matching from this point forward.


    *9) Extend Regex Options to Match Characters Outside of ASCII:
    # New in version 6.1.
    By default, certain regex options (such as /b and /w) only recognize ASCII characters. This can cause unexpected results when performing regex matches against UTF-8 characters.
    Starting in MongoDB 6.1, you can specify the *UCP regex option to match UTF-8 characters.
    -- For example, consider the following documents in a songs collection:

    db.songs.insertMany( [
        { _id: 0, "artist" : "Blue Öyster Cult", "title": "The Reaper" },
        { _id: 1, "artist": "Blue Öyster Cult", "title": "Godzilla" },
        { _id: 2, "artist" : "Blue Oyster Cult", "title": "Take Me Away" }
    ] )

    The following regex query uses the \b option in a regex match. The \b option matches a word boundary.
    db.songs.find( { artist: { $regex: /\byster/ } } ) //Note: The word being matched is "yster" not "byster" as "/b" is flag option here

    Example output:
    [
        { _id: 0, artist: 'Blue Öyster Cult', title: 'The Reaper' },
        { _id: 1, artist: 'Blue Öyster Cult', title: 'Godzilla' }
    ]
    The previous results are unexpected because none of the words in the returned artist fields begin with the matched string (yster). The Ö character in documents _id: 0 and _id: 1 is ignored when performing the match because it is a UTF-8 character.

    The expected result is that the query does not return any documents.

    To allow the query to recognize UTF-8 characters, specify the *UCP option before the pattern:
    -- db.songs.find( { artist: { $regex: "(*UCP)/\byster/" } } )
    The above query does not return any documents, which is the expected result.

    Important:  Performance of UCP Option:
    The *UCP option results in slower queries than those without the option specified because *UCP requires a multistage table lookup to perform the match.

    Tip: Escape Characters for Regex Patterns.When specifying *UCP or any other regular expression option, ensure that you use the correct escape characters for your shell or driver.


#4: $where:
Use the $where operator to pass either a string containing a JavaScript expression or a full JavaScript function to the query system. The $where provides greater flexibility, but requires that the database processes the JavaScript expression or function for each document in the collection. Reference the document in the JavaScript expression or function using either this or obj .

Important:- Server-side JavaScript Deprecated:
Starting in MongoDB 8.0, server-side JavaScript functions ($accumulator, $function, $where) are deprecated. MongoDB logs a warning when you run these functions.

-- Syntax:
{ $where: <string|JavaScript Code> }

-- Example:
Consider the following documents in the players collection:
db.players.insertMany([
   { _id: 12378, name: "Steve", username: "steveisawesome", first_login: "2017-01-01" },
   { _id: 2, name: "Anya", username: "anya", first_login: "2001-02-02" }
])

The following example uses $where and the hex_md5() JavaScript function to compare the value of the name field to an MD5 hash and returns any matching document:
db.players.find( { $where: function() {
   return (hex_md5(this.name) == "9b53e667f30cd329dca1ec9e6a83e994")
} } );

INFO: hex_md5() is a JavaScript function that computes the MD5 hash of a string (in this case, the name field of the document) and MD5 is a hashing algorithm that generates a 32-character hexadecimal string (hash) from the input string.


? Array Query Operators:

#1: $elemMatch (query):
    The "$elemMatch" operator matches documents that contain an array field with at least one element that matches all the specified query criteria.

-- Syntax:
{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }

Note: 
You cannot specify a "$where" operator in an $elemMatch.
You cannot specify a "$text" query operator in an $elemMatch.

-- Examples:
db.scores.insertMany([
  { _id: 1, results: [82, 85, 88] },
  { _id: 2, results: [75, 88, 89] }
]);

-- The following query matches only those documents where the results array contains at least one element that is both greater than or equal to 80 and is less than 85:

db.scores.find(
   { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
)

-- Array of Embedded Documents

This statement inserts documents into the survey collection:

db.survey.insertMany( [
   { "_id": 1, "results": [ { "product": "abc", "score": 10 },
                            { "product": "xyz", "score": 5 } ] },
   { "_id": 2, "results": [ { "product": "abc", "score": 8 },
                            { "product": "xyz", "score": 7 } ] },
   { "_id": 3, "results": [ { "product": "abc", "score": 7 },
                            { "product": "xyz", "score": 8 } ] },
   { "_id": 4, "results": [ { "product": "abc", "score": 7 },
                            { "product": "def", "score": 8 } ] },
   { "_id": 5, "results": { "product": "xyz", "score": 7 } }
] )

The document with an _id of 5 doesn't contain an array. That document is included to show that $elemMatch only matches array elements, which you will see in the following examples.

The following query matches documents where results contains at least one element where product is "xyz" and score is greater than or equal to 8:

db.survey.find(
   { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
)

#2: $all
    The $all operator selects the documents where the value of a field is an array that contains all the specified elements.
-- Syntax:
{ <field>: { $all: [ <value1> , <value2> ... ] } }

-- Equivalent to $and Operation:
The $all is equivalent to an $and operation of the specified values; i.e. the following statement:
{ tags: { $all: [ "ssl" , "security" ] } }

is equivalent to:

{ $and: [ { tags: "ssl" }, { tags: "security" } ] } 


-- Nested Array:
When passed an array of a nested array (e.g. [ [ "A" ] ] ), "$all" matches documents where the field contains the nested array as an element (e.g. field: [ [ "A" ], ... ]), or the field equals the nested array (e.g. field: [ "A" ]).
For example, consider the following query [1]:

db.articles.find( { tags: { $all: [ [ "ssl", "security" ] ] } } )

The query is equivalent to:

db.articles.find( { $and: [ { tags: [ "ssl", "security" ] } ] } )

which is equivalent to:

db.articles.find( { tags: [ "ssl", "security" ] } )


--Examples:
The following examples use the inventory collection that contains the documents:
{
   _id: ObjectId("5234cc89687ea597eabee675"),
   code: "xyz",
   tags: [ "school", "book", "bag", "headphone", "appliance" ],
   qty: [
          { size: "S", num: 10, color: "blue" },
          { size: "M", num: 45, color: "blue" },
          { size: "L", num: 100, color: "green" }
        ]
}

{
   _id: ObjectId("5234cc8a687ea597eabee676"),
   code: "abc",
   tags: [ "appliance", "school", "book" ],
   qty: [
          { size: "6", num: 100, color: "green" },
          { size: "6", num: 50, color: "blue" },
          { size: "8", num: 100, color: "brown" }
        ]
}

{
   _id: ObjectId("5234ccb7687ea597eabee677"),
   code: "efg",
   tags: [ "school", "book" ],
   qty: [
          { size: "S", num: 10, color: "blue" },
          { size: "M", num: 100, color: "blue" },
          { size: "L", num: 100, color: "green" }
        ]
}

{
   _id: ObjectId("52350353b2eff1353b349de9"),
   code: "ijk",
   tags: [ "electronics", "school" ],
   qty: [
          { size: "M", num: 100, color: "green" }
        ]
}

-- Use $all to Match Values

The following operation uses the $all operator to query the inventory collection for documents where the value of the tags field is an array whose elements include appliance, school, and book:
-- db.inventory.find( { tags: { $all: [ "appliance", "school", "book" ] } } )

-- Use $all with "$elemMatch":

If the field contains an array of documents, you can use the $all with the $elemMatch operator.

The following operation queries the inventory collection for documents where the value of the qty field is an array whose elements match the $elemMatch criteria:

db.inventory.find( {
    qty: { $all: [
        { "$elemMatch" : { size: "M", num: { $gt: 50} } },
        { "$elemMatch" : { num : 100, color: "green" } }
        ] }
} )

#3: $size
    The $size operator matches any array with the number of elements specified by the argument.

-- Example:
Consider the following examples:

db.collection.find( { field: { $size: 2 } } );

This query returns all documents in collection where field is an array with 2 elements. For instance, the above expression will return { field: [ red, green ] } and { field: [ apple, lime ] } but not { field: fruit } or { field: [ orange, lemon, grapefruit ] }. To match fields with only one element within an array use $size with a value of 1, as follows:

db.collection.find( { field: { $size: 1 } } );

"$size" does not accept ranges of values. To select documents based on fields with different numbers of elements, create a counter field that you increment when you add elements to a field.

Queries cannot use indexes for the $size portion of a query, although the other portions of a query can use indexes if applicable.


=> 3: "U" of CRUD aka UPDATE:
MongoDB provides several methods to update documents, which can target a single document or multiple documents, update specific fields, or replace entire documents.


We will use the following documents to test examples:
db.collection('inventory').insertMany([
  {
    item: 'canvas',
    qty: 100,
    size: { h: 28, w: 35.5, uom: 'cm' },
    status: 'A'
  },
  {
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    item: 'mat',
    qty: 85,
    size: { h: 27.9, w: 35.5, uom: 'cm' },
    status: 'A'
  },
  {
    item: 'mousepad',
    qty: 25,
    size: { h: 19, w: 22.85, uom: 'cm' },
    status: 'P'
  },
  {
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'P'
  },
  {
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D'
  },
  {
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D'
  },
  {
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  },
  {
    item: 'sketchbook',
    qty: 80,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    item: 'sketch pad',
    qty: 95,
    size: { h: 22.85, w: 30.5, uom: 'cm' },
    status: 'A'
  }
]);

* Key MongoDB Update Methods:
--   updateOne(): 
Updates a single document that matches a filter.
--   updateMany(): 
Updates all documents that match a filter.
--   replaceOne(): 
Replaces a single document entirely.
--   findOneAndUpdate():
Finds and updates a single document, and optionally returns the updated document.
--   findOneAndReplace():
it replaces a single document that matches a specified filter with a new document. Like other update methods, it also supports the upsert option.It does not modify individual fields like updateOne() does; instead, it replaces the entire document.

* Structure of an Update Operation:
An update operation typically consists of:
    -- A "filter" to find the document(s) you want to update.
    -- An update document that specifies the changes to be made.
    -- options: optional settings like upsert, etc.

* Update Operators - Second Parameter:    
MongoDB uses update operators and modifiers to specify how the document should be updated. These are divided into different categories i.e Filds, Array, Modifiers, Bitwise etc

=> Field Operators:

#1: $set:
Replaces the value of a field with a specified value. It will create the field if the field does not exist.
-- Example:
db.supplies.updateOne(
    {_id: 4}, //filter
    {$set: {price: NumberDecimal("10")}} //
    )
    
#2: $unset:
    Removes a field from a document.
-- Example:
db.supplies.updateOne({_id: 8}, {$unset: {price: ""}})

#3: $inc:
Increments the value of a field by a specified amount.

-- Example:
db.supplies.updateOne({_id: 8}, {$inc: {price: 150}})

#4: $rename:
Renames a field.   

-- Example:
db.students.updateOne({name: "Ali Usman"}, {$rename: {name: "full-name"}})

#5:  $mul:
Multiplies the value of the field by the specified amount.

-- Example:
db.supplies.updateOne({_id: 1}, {$mul: {price: 2}})

#6:  $max:
Only updates the field if the specified value is greater than the existing field value.

-- Example:
db.supplies.updateMany({item: "Eraser"}, {$max: {price: 10}})
What this query actually did is:
    -- Compares the price, 3, to the specified value, 10
    -- Updates price to 10 since 10 is greater than 3

#7:  $min:
Only updates the field if the specified value is less than the existing field value.

-- Example:
Opposite to $max

#8:  $currentDate:
The $currentDate operator sets the value of a field to the current date, either as a Date or a timestamp. The default type is Date.

-- Example:
Consider this document to test example:
db.customers.insertOne(
   { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
)

INFO: The ISODate() function converts the given string into a UTC date format (ISODate)."2013-10-02T01:11:18.965Z" is a specific date and time (October 2, 2013, at 1:11:18 AM UTC).



#9:  $setOnInsert:
Only updates the field if the specified value is less than the existing field value.

-- Example:
db.supplies.updateOne({_id: 1}, {$mul: {price: 2}}) FIXME:


=> Array Operators:

#1:  $:
Adds a value to an array only if the value is not already in the array.

-- Example:
Consider the following document:
db.students.insertMany( [
   { "_id" : 1, "grades" : [ 85, 80, 80 ] },
   { "_id" : 2, "grades" : [ 88, 90, 92 ] },
   { "_id" : 3, "grades" : [ 85, 100, 90 ] }
] )

To update the first element whose value is 80 to 82 in the in the grades array, use the positional $ operator if you do not know the position of the element in the array:

db.students.updateOne(
   { _id: 1, grades: 80 },
   { $set: { "grades.$" : 82 } }
)
Important: You must include the array field as part of the query document.

#2:  $[]:
The all positional operator $[] indicates that the update operator should modify all elements in the specified array field.

-- Example:
To increment all elements in the grades array by 10 for all documents in the collection, use the all positional $[] operator:

db.students.updateMany(
   { },
   { $inc: { "grades.$[]": 10 } },
)

By Adding 10 numbers to each, there will be cases where obtained marks may exceeded the total marks (100) i.e 101. To set those marks again to 100, the next operator will help us.

#3:  $[<identifier>]:
The filtered positional operator $[<identifier>] identifies the array elements that match the arrayFilters conditions for an update operation, e.g. db.collection.updateMany() and db.collection.findAndModify().

NOTE: The <identifier> must begin with a lowercase letter and contain only alphanumeric characters.

The arrayFilters option cannot include the following query operators: $expr, $text, $where

-- Example:
To update all elements that are greater than or equal to 100 in the grades array, use the filtered positional operator $[<identifier>] with the arrayFilters:

db.students.updateMany(
   { },
   { $set: { "grades.$[element]" : 100 } },
   { arrayFilters: [ { "element": { $gte: 100 } } ] }
)
-- Update All Documents That Match arrayFilters in an Array:
Create the students2 collection:
db.students2.insertMany( [
   {
      "_id" : 1,
      "grades" : [
         { "grade" : 80, "mean" : 75, "std" : 6 },
         { "grade" : 85, "mean" : 90, "std" : 4 },
         { "grade" : 85, "mean" : 85, "std" : 6 }
      ]
   },
   {
      "_id" : 2,
      "grades" : [
         { "grade" : 90, "mean" : 75, "std" : 6 },
         { "grade" : 87, "mean" : 90, "std" : 3 },
         { "grade" : 85, "mean" : 85, "std" : 4 }
      ]
   }
] )

To modify the value of the mean field for all elements in the grades array where the grade is greater than or equal to 85, use the positional $[<identifier>] operator and arrayFilters:

  db.students.updateMany(
   { },
   { $set: { "grades.$[elem].mean" : 100 } },
   { arrayFilters: [ { "elem.grade": { $gte: 85 } } ] }
)

-- Update All Array Elements that Match Multiple Conditions
To modify the value of the std field for all elements in the grades array where both the grade is greater than or equal to 80 and the std is greater than or equal to 5, use the positional $[<identifier>] operator and arrayFilters:

db.students3.updateMany(
   { },
   { $inc: { "grades.$[elem].std" : -1 } },
   { arrayFilters: [ { "elem.grade": { $gte: 80 }, "elem.std": { $gte: 5 } } ] }
)

#4:  $addToSet:
The $addToSet operator adds a value to an array unless the value is already present, in which case $addToSet does nothing to that array.

-- Example:
db.survey.updateOne({_id: 1}, {$addToSet: {  results: {products: "mno", score: 90 } } } )

#5:  $push:
    Adds a value to the end of an array.

    -- Example:
db.survey.updateOne({_id: 1}, {$push: {  results: {products: "mno", score: 90 } } } )
 
INFO: "$addToSet" is similar to "$push" as both add new elements to the array at the end
 
#6:  $pop:
    Removes the first or last element of an array.
INFO: "$pop" expects 1 or -1 as value, 1 to remove from the end and -1 to remove from the beginning.
-- Example:
db.survey.updateOne({_id: 1}, {$pop: {results: -1} })
db.survey.updateOne({_id: 1}, {$pop: {results: 1} })
 
#7:  $pull:
The $pull operator removes from an existing array all instances of a value or values that match a specified condition.

-- Example:
Create the stores collection:
db.stores.insertMany( [
   {
      _id: 1,
      fruits: [ "apples", "pears", "oranges", "grapes", "bananas" ],
      vegetables: [ "carrots", "celery", "squash", "carrots" ]
   },
   {
      _id: 2,
      fruits: [ "plums", "kiwis", "oranges", "bananas", "apples" ],
      vegetables: [ "broccoli", "zucchini", "carrots", "onions" ]
   }
] )

The following operation removes
    "apples" and "oranges" from the fruits array
    "carrots" from the vegetables array

db.stores.updateMany(
    { },
    { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } }
)    
-- Remove All Items That Match a Specified $pull Condition:
Create the profiles collection:
db.profiles.insertOne( { _id: 1, votes: [ 3, 5, 6, 7, 7, 8 ] } )

The following operation will remove all items from the votes array that are greater than or equal to ( $gte ) 6:
db.profiles.updateOne( { _id: 1 }, { $pull: { votes: { $gte: 6 } } } )

$ bulkWrite():
The "db.collection.bulkWrite()" method executes multiple write operations listed in an array. In this example, the db.collection.bulkWrite() performs multiple operations on the profiles collection.

-- Remove All Items That Match a Specified $pull Condition With bulkWrite()
The following db.collection.bulkWrite() operation:
    Creates the profilesBulkWrite collection.
    Removes all items from the votes array that are greater than or equal to ( $gte ) 6.
    Removes all items from the votes array that are less than or equal to ( $lte ) 3.

   db.profilesBulkWrite.bulkWrite( [
      {
         insertOne: {
            "document": { _id: 2, votes: [ 3, 5, 6, 7, 7, 8 ] }
         }
      },
      {
         updateOne: {
            "filter": { _id: 2 },
            "update": { $pull: { votes: { $gte: 6 } } }
         }
      },
      {
         updateOne: {
            "filter": {_id: 2},
            "update": { $pull: { votes: { $lte: 3 } } }
         }
      }
   ] );
}
After the db.collection.bulkWrite() operation, you can confirm the document only has values less than 6 and greater than 3 using the following operation:
db.profilesBulkWrite.find()

#8:  $pullAll:
The $pullAll operator removes all instances of the specified values from an existing array. Unlike the $pull operator that removes elements by specifying a query, $pullAll removes elements that match the listed values.

-- Example:
Create the survey collection:
db.survey.insertOne( { _id: 1, scores: [ 0, 2, 5, 5, 1, 0 ] } )

The following operation removes all instances of the values "0" and "5" from the scores array:
db.survey.updateOne( { _id: 1 }, { $pullAll: { scores: [ 0, 5 ] } } )

#9: $each:
The $each modifier is available for use with the "$addToSet" operator and the $push operator.
Use with the "$addToSet" operator to add multiple values to an array <field> if the values do not exist in the <field>.

-- Example:
? Use "$each" with "$push" Operator
The following example appends each element of [ 90, 92, 85 ] to the scores array for the document where the name field equals joe:

db.students.updateOne(
   { name: "joe" },
   { $push: { scores: { $each: [ 90, 92, 85 ] } } }
)

? Use $each with $addToSet Operator:
A collection inventory has the following document:
{ _id: 2, item: "cable", tags: [ "electronics", "supplies" ] }

Then the following operation uses the $addToSet operator with the $each modifier to add multiple elements to the tags array:
db.inventory.updateOne(
   { _id: 2 },
   { $addToSet: { tags: { $each: [ "camera", "electronics", "accessories" ] } } }
 )

#10: $position:
The $position modifier specifies the location in the array at which the $push operator inserts elements. Without the $position modifier, the $push operator inserts elements to the end of the array.
--Syntax:
To use the $position modifier, it must appear with the $each modifier:
{ $push: { <field>: { $each: [ <value1>, <value2>, ... ], $position: <num> } } }

where:
<num> indicates the position in the array, based on a zero-based array index (position)

    A non-negative number corresponds to the position in the array, starting from the beginning of the array. If the value of <num> is greater or equal to the length of the array, the $position modifier has no effect and $push adds elements to the end of the array.

    A negative number corresponds to the position in the array, counting from (but not including) the last element of the array. For example, -1 indicates the position just before the last element in the array. If you specify multiple elements in the $each array, the last added element is in the specified position from the end. If the absolute value of <num> is greater than or equal to the length of the array, the $push adds elements to the beginning of the array.

-- Examples:
Create the students collection:
db.students.insertOne( { "_id" : 1, "scores" : [ 100 ] } )

The following operation updates the scores field to add the elements 50, 60 and 70 to the beginning of the array:

db.students.updateOne(
   { _id: 1 },
   {
     $push: {
        scores: {
           $each: [ 50, 60, 70 ],
           $position: 0
        }
     }
   }
)
? Add Elements to the Middle of the Array:
Add a document to the students collection: 
db.students.insertOne( { "_id" : 2, "scores" : [  50,  60,  70,  100 ] } )
The following operation updates the scores field to add the elements 20 and 30 at the array index (position) of 2:
db.students.updateOne(
   { _id: 2 },
   {
     $push: {
        scores: {
           $each: [ 20, 30 ],
           $position: 2
        }
     }
   }
)
   
? Use a Negative Array Index (Position) to Add Elements to the Array:
$position can accept a negative array index (position) value to indicate the position starting from the end, counting from (but not including) the last element of the array. For example, -1 indicates the position just before the last element in the array.

Add the following document to the students collection:

db.students.insertOne(
   { "_id" : 3, "scores" : [  50,  60,  20,  30,  70,  100 ] }
)

The following operation specifies -2 for the $position to add 90 at the position two places before the last element, and then 80 at the position two places before the last element.

Important:
With a negative array index (position), if you specify multiple elements in the $each array, the last added element is in the specified position from the end.

db.students.updateOne(
   { _id: 3 },
   {
     $push: {
        scores: {
           $each: [ 90, 80 ],
           $position: -2
        }
     }
   }
)

#11: $slice
The $slice modifier limits the number of array elements during a $push operation. To project, or return, a specified number of array elements from a read operation, see the $slice projection operator instead.

To use the $slice modifier, it must appear with the $each modifier. You can pass an empty array [] to the $each modifier such that only the $slice modifier has an effect.

-- Stntax:
{
  $push: {
     <field>: {
       $each: [ <value1>, <value2>, ... ],
       $slice: <num>
     }
  }
}
The <num> can be:
    Zero: To update the array <field> to an empty array.
    Negative: To update the array <field> to contain only the last <num> elements.
    Positive: To update the array <field> contain only the first <num> elements.

-- Examples:
? Slice from the End of the Array:
A collection students contains the following document:
{ "_id" : 1, "scores" : [ 40, 50, 60 ] }

The following operation adds new elements to the scores array, and then uses the $slice modifier to trim the array to the last five elements:

db.students.updateOne(
   { _id: 1 },
   {
     $push: {
       scores: {
         $each: [ 80, 78, 86 ],
         $slice: -5
       }
     }
   }
)

? Slice from the Front of the Array:
The following operation adds new elements to the scores array, and then uses the $slice modifier to trim the array to the first three elements.

db.students.updateOne(
   { _id: 2 },
   {
     $push: {
       scores: {
         $each: [ 100, 20 ],
         $slice: 3
       }
     }
   }
)

? Update Array Using Slice Only:
A collection students contains the following document:
{ "_id" : 3, "scores" : [  89,  70,  100,  20 ] }

To update the scores field with just the effects of the $slice modifier, specify the number of elements to slice (e.g. -3) for the $slice modifier and an empty array [] for the $each modifier, as in the following:

db.students.updateOne(
  { _id: 3 },
  {
    $push: {
      scores: {
         $each: [ ],
         $slice: -3
      }
    }
  }
)

#12: $sort
The $sort modifier orders the elements of an array during a $push operation.
To use the $sort modifier, it must appear with the $each modifier. You can pass an empty array [] to the $each modifier such that only the $sort modifier has an effect.

-- Syntax:
{
  $push: {
     <field>: {
       $each: [ <value1>, <value2>, ... ],
       $sort: <sort specification>
     }
  }
}
For <sort specification>:
    To sort array elements that are not documents, or if the array elements are documents, to sort by the whole documents, specify 1 for ascending or -1 for descending.

    If the array elements are documents, to sort by a field in the documents, specify a sort document with the field and the direction, i.e. { field: 1 } or { field: -1 }. Do not reference the containing array field in the sort specification (e.g. { "arrayField.field": 1 } is incorrect).  

-- Examples:
Sort Array of Documents by a Field in the Documents

Create the students collection:

db.students.insertOne(
   {
     "_id": 1,
     "quizzes": [
       { "id" : 1, "score" : 6 },
       { "id" : 2, "score" : 9 }
     ]
   }
)
The following update appends additional documents to the quizzes array and then sorts all the elements of the array by the ascending score field:

db.students.updateOne(
   { _id: 1 },
   {
     $push: {
       quizzes: {
         $each: [ { id: 3, score: 8 }, { id: 4, score: 7 }, { id: 5, score: 6 } ],
         $sort: { score: 1 }
       }
     }
   }
)
   
Important:
The sort document refers directly to the field in the documents and does not reference the containing array field quizzes; i.e. { score: 1 } and not { "quizzes.score": 1}

? Sort Array Elements That Are Not Documents:
Add the following document to the students collection:
db.students.insertOne( { "_id" : 2, "tests" : [  89,  70,  89,  50 ] } )

The following operation adds two more elements to the tests array and sorts the elements:
db.students.updateOne(
   { _id: 2 },
   { $push: { tests: { $each: [ 40, 60 ], $sort: 1 } } }
)


* Third Parameter - "upsert" Option:
Upsert stands for "update or insert." is a boolean value (true or false). If no document matches the filter, MongoDB will insert a new document with the specified update.
-- Default value: false

-- Example:
db.supplies.updateOne({item: "Geometry Box"}, {$set: {price: 300, qty: 75}}, {upsert: true})

#3: Replace Document with replaceOne():
If you want to replace an entire document (instead of updating fields):
-- Example:
db.supplies.replaceOne({_id: 5}, {item: "Board Marker", qty: 500, price: 120})

Note: We can't use update operators in replacement methods. 
#4: findOneAndUpdate():
This method finds a document, updates it, and can return the original or updated document based on the options you set.
-- Example:
db.supplies.findOneAndUpdate(
  { _id: 5 },                         // filter to find the document with _id: 5
  { $set: { item: "Board Marker", qty: 500, price: 120 } }  // use $set to update fields
);

INFO: Update Operators are allowed.

#5: findOneAndReplace():

-- Example:
db.supplies.findOneAndReplace({_id: 5}, {item: "Board Marker", qty: 500, price: 120})


=> 4: "D" of CRUD aka DELETE:

* Delete Methods:
--  db.collection.deleteOne():
Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.
--  db.collection.deleteMany():
Delete all documents that match a specified filter.
--  db.collection.findOneAndDelete():
Deletes a single document based on the filter and sort criteria, returning the deleted document.
--  db.collection.remove()
Delete a single document or all documents that match a specified filter.


* Structure of an Delete Operation:
An update operation typically consists of:
-- filter:	
is of type "document" and specifies deletion criteria(matching conditi) using query operators.    
-- writeConcern	
optional parameter of type "document", expressing the write concern. Omit to use the default write concern.
-- collation
optional parameter of type "document". It specifies the collation to use for the operation.
INFO: Collation allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks.
-- hint	
optional parameter of type "document". It specifies the index to use to support the query predicate.
The option can take an index specification document or the index name string. If you specify an index that does not exist, the operation errors.

#1: db.collection.deleteOne():
Removes a single document from a collection.

-- Syntax:
db.collection.deleteOne(
    {<filter>},
    {
      writeConcern: <document>,
      collation: <document>,
      hint: <document|string>
    }
)
    
-- Examples:
The orders collection has documents with the following structure:
db.orders.insertOne(
   {
      _id: ObjectId("563237a41a4d68582c2509da"),
      stock: "Brent Crude Futures",
      qty: 250,
      type: "buy-limit",
      limit: 48.90,
      creationts: ISODate("2015-11-01T12:30:15Z"),
      expiryts: ISODate("2015-11-01T12:35:15Z"),
      client: "Crude Traders Inc."
   }
)
The following operation deletes the order with id = 1:
db.orders.deleteOne( { _id: 1 } )

The following operation deletes the first document with "expiryts" greater than ISODate("2015-11-01T12:40:15Z"):
db.orders.deleteOne( { expiryts: { $gt: ISODate("2015-11-01T12:40:15Z") } } )

#2: db.collection.deleteMany():
Removes all documents that match the filter from a collection.

-- Syntax:
db.collection.deleteMany(
    {<filter>},
    {
      writeConcern: <document>,
      collation: <document>,
      hint: <document|string>
    }
)

-- Examples:
The following operation deletes all documents where client : "Crude Traders Inc.":
db.orders.deleteMany( { "client" : "Crude Traders Inc." } )

#3: db.collection.findOneAndDelete():
Deletes a single document based on the filter and sort criteria, returning the deleted document.

-- Syntax:
db.collection.findOneAndDelete(
  { <filter>},
   {
     writeConcern: <document>,
     projection: <document>,
     sort: <document>,
     maxTimeMS: <number>,
     collation: <document>
   }
)
where writeConcern, collation are explained above and:
-- projection
is also an optional parameter of type document, which represents a subset of fields to return. To return all fields in the returned document, omit this parameter.
If the projection argument is not a document, the operation errors.
-- sort
is also an optional parameter of type document, which specifies a sorting order for the documents matched by the filter.
If the sort argument is not a document, the operation errors.
-- maxTimeMS
optional parameter of type number. It Specifies a time limit in milliseconds within which the operation must complete within. Throws an error if the limit is exceeded.

-- Examples:
The scores collection contains documents similar to the following:

 db.scores.insertMany( [
   { _id: 6305, name : "A. MacDyver", "assignment" : 5, "points" : 24 },
   { _id: 6308, name : "B. Batlock", "assignment" : 3, "points" : 22 },
   { _id: 6312, name : "M. Tagnum", "assignment" : 5, "points" : 30 },
   { _id: 6319, name : "R. Stiles", "assignment" : 2, "points" : 12 },
   { _id: 6322, name : "A. MacDyver", "assignment" : 2, "points" : 14 },
   { _id: 6234, name : "R. Stiles", "assignment" : 1, "points" : 10 }
] )

The following operation finds the first document where name : M. Tagnum and deletes it:
db.scores.findOneAndDelete(
   { "name" : "M. Tagnum" }
)

? Sort And Delete A Document:
The following operation first finds all documents where name : "A. MacDyver". It then sorts by points ascending before deleting the document with the lowest points value:
db.scores.findOneAndDelete(
   { "name" : "A. MacDyver" },
   { sort : { "points" : 1 } }
)

? Projecting the Deleted Document
The following operation uses projection to only return the _id and assignment fields in the returned document:

db.scores.findOneAndDelete(
   { "name" : "A. MacDyver" },
   { sort : { "points" : 1 }, projection: { "assignment" : 1 } }
)

#4: db.collection.remove() (Deprecated):
Removes documents from a collection.

Important: This method is deprecated in mongosh.

-- Syntax
The db.collection.remove() method can have one of two syntaxes. The remove() method can take a query document and an optional justOne boolean:
db.collection.remove(
    <query>,
    <justOne>
)
where "justOne" id an optional "boolean" parameter to limit the deletion to just one document, set to true. Omit to use the default value of false and delete all documents matching the deletion criteria.

-- Example:
The following query will delete all documents matching the criteria of having quantity greater than 20:
db.products.remove(
    { qty: { $gt: 20 } }
)

? Remove a Single Document that Matches a Condition:
To remove the first document that match a deletion criteria, call the remove method with the query criteria and the justOne parameter set to true or 1.

The following operation removes the first document from the collection products where qty is greater than 20:
db.products.remove( { qty: { $gt: 20 } }, true )
























*/
