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

=> CRUD Operations:

* Create Operations:
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


=> Query Operators:
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

$ Field in Embedded Document Equals a Value:
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
db.inventory.find( { tags: { $in: [ /^Sc/, /^ge/ ] } } )

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

    $nor and $exists: 
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

    -- The following example uses $expr with $cond to calculate the discounted price based on the qty and $lt to return documents whose calculated discount price is less than NumberDecimal("5"):
    // Aggregation expression to calculate discounted price

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


*/
