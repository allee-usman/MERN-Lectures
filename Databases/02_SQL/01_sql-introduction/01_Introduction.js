/*

$ SQL: SQL is a standardized programming language designed for managing and querying data stored in Relational Databases (RDBMS). 

=> What SQL Offers?
SQL allows users to perform various operations like:
--  CRUD operations (data insertion, retreival, updation, deletion)
--  Defining data structures (schemas)
--  Managing user permissions


+++++++++++++++++++++++++++++++    
$ ++++++++++ Tables +++++++++++    
+++++++++++++++++++++++++++++++ 
* Data in an SQL database is stored in tables, which resemble spreadsheets. A table consists of rows (records) and columns (fields).
--    Rows represent individual records or data entries
--    Columns represent data attributes (fields) like name, age, email.

Tables have a fixed schema, meaning each column has a specified data type (e.g., INT, VARCHAR, DATE).
    
INFO: Technical name of rows is "tuples".

+++++++++++++++++++++++++++++++    
$ ++++++++++ Schema +++++++++++    
+++++++++++++++++++++++++++++++ 
* A schema defines the structure of tables and their relationships. In an SQL database, the schema is predefined and rigid, ensuring data consistency.

Schema includes:
    - Tables: The structure of tables (e.g., name, columns, and data types).
    - Constraints: Rules for data validation (e.g., primary key, foreign key, unique constraints).

+++++++++++++++++++++++++++++++++++++    
$ ++++++++++ Foreign Keys +++++++++++    
+++++++++++++++++++++++++++++++++++++    
* A foreign key establishes a relationship between two tables by referencing the primary key of another table.
- Foreign keys enforce referential integrity, ensuring that relationships between tables remain consistent.

=> Example: In an Orders table, the "user_id" might reference the primary key of the Users table.
         

+++++++++++++++++++++++++++++++++++++    
$ ++++++++++ Constraints ++++++++++++    
+++++++++++++++++++++++++++++++++++++
* Constraints are the rules for data in the table.

=>  Example:
1. NOT NULL: column cannot have a null value e.g: user_id INT NOT NULL

2. UNIQUE: all values in a column must be different e.g: email VARCHAR(50) UNIQUE

3. DEFAULT: set the default value of a column e.g: salary INT DEFAULT 25000

4. CHECK: it can limit the values allowed in a column e.g: CONSTRAINT age CHECK ( age >= 18) OR CONSTRAINT CHECK (age >= 18)

=> ++++++++++ Key Constraints +++++++++++ 

=> 1.  PRIMARY KEY: makes a column unique & not null but used for only one
It is column (set of columns) in a table that is uniquely identifies each row and it must not be null.
    ? Example: 
        1- CREATE TABLE temp (
            id INT NOT NULL,
            PRIMARY KEY (id)
        )

        2- CREATE TABLE temp (
            id INT NOT NULL PRIMARY KEY, 
        )

=> 2. FOREIGN KEY: prevent actions that would destroy relations b/w tables
-- FKs can have duplicate values.
-- There can be multiple FKs.

? Example: 
1- CREATE TABLE temp (
        cust_id INT NOT NULL,
        FOREIGN KEY (cust_id) REFERENCES temp (id)
   )

+++++++++++++++++++++++++++++++++++++++    
$ ++++++++++ SQL Datatypes ++++++++++++    
+++++++++++++++++++++++++++++++++++++++

=> Character Data Types:

? 1. CHAR(size):  
    - Description: Fixed-length string, stores `size` number of characters (0-255). Pads extra spaces if the value is shorter than `size`.
    Example: CHAR(50)

? 2. VARCHAR(size):  
   - Description: Variable-length string, stores up to `size` number of characters (0-65,535). Only uses the storage needed for the actual string length.
    Example: VARCHAR(100)

NOTE: Use VARCHAR instead of CHAR.    

=> Numeric Data Types:

? 1. INT(size):  
    - Description: Integer, can store whole numbers (typically -2,147,483,648 to 2,147,483,647). The `size` is display width, not storage size.
    Example: INT

? 2. TINYINT(size):  
   - Description: Very small integer, can store values between -128 and 127 or 0 and 255 (if unsigned)
   Example: TINYINT

? 3. BIGINT(size):  
    - Description: Large integer, can store values between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807.
    Example: BIGINT

? 4. FLOAT(size, d):  
   - Description: Floating-point number, with precision upto 23 digits
    Example: FLOAT, FLOAT(2)

? 5. DOUBLE(size, d):  
    - Description: Floating-point number, with precision upto 24 - 53 digits
    Example: DOUBLE, DOUBLE(2)

? 6. DECIMAL(size, d):  
   - Description: Exact fixed-point number, `size` is the total number of digits, `d` is the number of digits after the decimal. Used for precise values like currency.
    Example: DECIMAL, DECIMAL(10, 2)

=> Date and Time Data Types
? 1. DATE:  
    - Description: Stores date values in the format `YYYY-MM-DD` (e.g., `2024-10-06`).
    Example: DATE
? 2. TIME:  
    - Description: Stores time values in the format `HH:MM:SS`.
    Example: TIME

? 3. DATETIME:  
   - Description: Stores both date and time in the format `YYYY-MM-DD HH:MM:SS`.

? 4. TIMESTAMP:  
   - Description: Stores both date and time, typically in the format `YYYY-MM-DD HH:MM:SS`, but also tracks time zone and auto-updates with the current time if set as default.

? 5. YEAR:  
   - Description: Stores year in `YYYY` format (e.g., `2024`).

=> Binary Data Types:

? 1. BLOB:  
   - Description: Binary Large Object, used for storing large binary data (e.g., images, files). Can store up to 65,535 bytes.

=> Boolean Data Types:

? 1. BOOLEAN (or BOOL):  
   - Description: Stores `TRUE` or `FALSE`. In MySQL, `BOOLEAN` is usually a synonym for `TINYINT(1)` where `0` is `FALSE` and any non-zero value is `TRUE`

=> Miscellaneous Data Types:

? 1. ENUM(val1, val2, …):
     - Description: String object with a predefined list of possible values. Can store one value from the list.
    Example: order_status ENUM('pending', 'shipped', 'delivered', 'canceled'), gender enum("M", "F","O")
    
    
? 2. SET(val1, val2, …):
    Description: Similar to ENUM, but can store multiple values from a predefined list.
    Example: contact_methods SET('email', 'sms', 'phone', 'postal_mail')


INFO: We can additionally use "UNSIGNED" with various types to avoid negtive numbers i.e INT UNSIGNED

+++++++++++++++++++++++++++++++++++++    
$ ++++++++++ SQL Queries ++++++++++++    
+++++++++++++++++++++++++++++++++++++  

#1. CREATE DATABASE db_name:
It creates a database.

#2. CREATE DATABASE IF NOT EXIST db_name:
To create and avoid duplicate database.

=> See Example 01:

#3. DROP DATABASE db_name:
It deletes a database.

#4. USE db_name:
To start working in a already created database, we use this command.

=> See Example 02:


+++++++++++++++++++++++++++++++++++++++++++
$ +++++++++++++ TABLE Queries +++++++++++++
+++++++++++++++++++++++++++++++++++++++++++

#1. CREATE TABLES: 
* It creates a  and defines columns/schema for a database.

--Syntax:
CREATE TABLE 
OR 
CREATE TABLE IF NOT EXISTS table_name 
(column_name1 data_type constraints, column_name1 data_type constraints,...nthcolumn_name data_type constraints)

=> See Example 03, 26


=> 2. INSERT INTO table_name: 
* It inserts the data into a table.

--Syntax:
INSERT INTO table_name
(colname1, colname2 ...)
VALUES 
(value1, value2...)

=> See Example 04, 27

-- You can omit the column names if all columns' values are to be inserted. i.e:
=> See Example 05:

--When there is a key which has constraints auto-increment, you must specify the column name, omitting that specific column.
=> See Example 06:


#3. SELECT: 
* The SELECT command in SQL is used to retrieve data from one or more tables in a database.

--Basic Syntax:
SELECT column1, column2, ...
FROM table_name
WHERE condition;

=> See Example 07:

-- * is used to select all columns
=> See Example 08:

--  Using the "WHERE" Clause:
"WHERE" clause is optional to use with the SELECT command to specify some conditions on result
=> See Example 09:

--  Using "ORDER BY" for Sorting:
Result can be sorted using the "ORDER BY" clause
=> See Example 10:

--  Using "LIMIT" clause:
It helps us to retrieve  Specific Number of Rows in the resul. In other words, it limits the results.
=> See Example 11:

--  Using "DISTINCT" to Remove Duplicates:
=> See Example 12:

--  Using Aliases with "AS":
Aliases means we can rename columns or tables temporarily.
=> See Example 13:


+++++++++++++++++++++++++++++++++++++++++++
$ ++++++++++++++ WHERE clause +++++++++++++
+++++++++++++++++++++++++++++++++++++++++++

* It define some conditions to filter rows. The WHERE clause is applied after the FROM clause.
=> See Example 09

?   Operators to use in the WHERE clause:
1.  Arithmetic Operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulo)
2.  Comparison Operators: = (equal to), != (not equal to), >, <, >=, <= 
3.  Logical Operators:  AND, OR, NOT, LIKE, IN, BETWEEN, ALL, ANY, IS NULL
4.  Bitwise Operators: & (Bitwise AND), | (Bitwise OR)

? 1.  Arithmetic Operators:
-- Addition Operator (+):
=> See Example 14

-- Subtract Operator (-):
=> See Example 15

-- Multiplication Operator (*):
=> See Example 16

-- Division Operator (*):
=> See Example 17


? 2.  Comparison Operators:
=> See Example 18


? 3.  Logical Operators:
-- AND operator: Both conditions must be true
=> See Example 18

-- OR Operators: at least one condition must be true
=> See Example 19

-- NOT Operators: the NOT operator negates a condition.
=> See Example 20

-- "IN" Operaotor: This operator allows you to specify multiple values to look for, in a WHERE clause
=> See Example 21


-- BETWEEN Operarator: The BETWEEN operator filters the result set to include only rows where a value is within a specific range.
=> See Example 22

NOTE: The boundary values also include in the result

--  LIKE Operarator (for Pattern Matching): The LIKE operator is used with wildcards (%, _) to match patterns in a string.

? (%) Represents zero, one, or more characters.
=> See Example 23
==  
NOTE: The placement of % matters, i.e "A%" will look for names which  with "A", while "%A" will look for names ending with "A". Similarly, "%A% will look for names which has letter "A" at any index

? (:) Represents a single character.
=> See Example 24

INFO: This query returns users with names that have exactly six characters and start with 'H' and end with 'n' (e.g., Hassan).

--  "IS NULL": The "IS NULL" condition is used to check for NULL values in a column.
=> See Example 25


++++++++++++++++++++++++++++++++++++++++++++
$ ++++++++++ Aggregate Functions +++++++++++
++++++++++++++++++++++++++++++++++++++++++++

* Aggregate functions in SQL perform calculations on a set of values and return a single value. These functions are commonly used in "SELECT" statements along with the "GROUP BY" clause to perform summary or grouping operations on the data.

=> Using Aggregate Functions with "GROUP BY":
Aggregate functions are often used with the "GROUP BY" clause to perform calculations for each group of rows that share the same value in a specific column. i.e calculate the average salary for each department

=> Common Aggregate Functions:

-- COUNT(): Counts the number of rows in a result set.
=> See Example 28

-- SUM(): Calculates the total sum of a numeric column.
=> See Example 29

-- AVG(): Calculates the average value of a numeric column.
=> See Example 30

-- MAX(): Returns the maximum value in a column.
=> See Example 31

-- MIN(): Returns the minimum value in a column.
=> See Example 32


++++++++++++++++++++++++++++++++++++++++
$ +++++++++++ HAVING Caluse ++++++++++++
++++++++++++++++++++++++++++++++++++++++
* The HAVING clause in SQL is used to filter records after the GROUP BY operation, based on the results of aggregate functions. It's similar to the WHERE clause, but while WHERE filters records before any aggregation (grouping), the HAVING clause filters after the aggregation has been applied.

Hence "WHERE" is for tables, and "HAVING" is for groups. This implies grouping is necessary for HAVING.

=> General Order of using multiple caluses in a query:
SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) DESC/ASC;

=> Key Differences Between "WHERE" and "HAVING":

# WHERE: 
    Filters rows before grouping.
    Cannot use aggregate functions (e.g., SUM(), AVG()) in the WHERE clause. Operates on individual rows.

# HAVING: Filters rows after grouping.
    Can use aggregate functions to filter groups.
    Operates on groups of rows created by GROUP BY.


=> Examples:

-- Example 33: Fetch the departments which have an average salary of employees greater than 60,000.

-- Example 34: Find departments that have more than 2 employee.

-- Example 35:  Find departments where the average salary is greater than 60,000 and the total bonus exceeds 10,000.

-- Example 36: Find the departments where the average salary of employees having salary greater than 50000, is greater than 60,000;

-- Example 37: Find the departments where the average salary is greater than the overall average salary across all employees.

-- Example 38: Find departments where the total sales for the year 2023 are more than 20% higher than their total sales in the year 2022.

To understand the solution of this problem, we need to have knowledge of the "CASE" statement:

+++++++++++++++++++++++++++++++++++++++++++
$ +++++++++++++ CASE Statement ++++++++++++
+++++++++++++++++++++++++++++++++++++++++++

* The CASE statement in SQL is a conditional expression that allows you to perform if-then-else logic within a query. It evaluates conditions and returns a value based on the result of those conditions. You can use it to apply logic to data on a row-by-row basis and is commonly used to generate new computed columns in SELECT statements.

=> Syntax:
CASE
    WHEN condition1/valu1 THEN result1
    WHEN condition2/valu2 THEN result2
    ...
    ELSE default_result
END

=> How the "CASE" Statement Works:
1.  Conditions are evaluated in order. As soon as one condition is true, the corresponding result is returned.
2.  If none of the conditions are true, the ELSE part is executed (if provided). If false then ELSE is given and no conditions match, NULL is returned.

=> Use Cases of "CASE":
1.  Create computed columns: You can generate new columns based on logic.
2.  Conditional aggregation: Use CASE inside aggregate functions like SUM or COUNT to selectively aggregate data.
    Example: SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) to sum only completed transactions.

3.  Update records with conditional logic: It's useful in UPDATE queries to apply different changes based on a condition.

=> Example: 
Consider a "students" table with two columns as student_id, score. We can use a CASE statement to create a new column for grades. i.e:

SELECT student_id, score,
    CASE 
        WHEN score >= 90 THEN 'A'
        WHEN score >= 80 THEN 'B'
        WHEN score >= 70 THEN 'C'
        WHEN score >= 60 THEN 'D'
        ELSE 'F'
    END AS grade
FROM students;

Now go to SQL file, track the problem number and see the solution.

-- Example 39: You need to find categories from the products table where the total revenue exceeds 1,000,0 and there are more than 3 distinct products in the category.

#In the solution of this problem, we use the DISTINCT keyword while counting the products under each category. The DISTINCT keyword in SQL is used to remove duplicate rows from the result set of a query. It ensures that the result only contains unique values or combinations of values in the specified columns.

-- Example 40: Write a query to show the department and average hours worked, but only for departments where the average hours worked is greater than 150, and there are more than 2 employees in the department.

-- Example 41: Write a query to display the department, total salary, and total bonus, but only for departments where the total bonus paid is greater than 10% of the total salary.


#4. UPDATE TABLE:
* The UPDATE statement in SQL is used to modify existing records in a table. You can update one or more rows based on conditions, or update all rows in the table if no condition is specified.

-- Basic Syntax:
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Update Single Row
=> Example 42: 

-- Update Multiple Rows
=> Example 43: 

-- Update multiple columns
=> Example 44: 

? Transactions and Rollback:
If your database supports transactions, you can use them with the UPDATE query to ensure the change can be undone if something goes wrong.

=> Example:
BEGIN TRANSACTION;
UPDATE employees
SET salary = 60000
WHERE id = 101;
COMMIT;

-- If you encounter an issue, you can use ROLLBACK to undo the changes before committing. If all OK, then execute "COMMIT" command.


#5. DELETE:
* The DELETE statement in SQL is used to remove one or more rows from a table. It allows you to specify conditions to delete specific records, or you can delete all records from a table if needed. However, unlike the DROP statement (which removes an entire table), DELETE only removes rows while keeping the table structure intact.

-- Basic Syntax:
DELETE FROM table_name
WHERE condition;

-- Delete Specific Rows
=> Example 45: 

-- Delete Multiple Rows
=> Example 46: 

-- Delete All Rows : DELETE FROM employees; OR TRUNCATE TABLE table_name;

NOTE: Once a DELETE query has been executed, the deleted data cannot be restored unless you are using a backup or have wrapped the operation in a transaction that allows you to roll it back.

#6. TRUNCATE:
The TRUNCATE statement is used to delete all the data of a table
--Syntax: TRUNCATE TABLE table_name;

=> DELETE vs. TRUNCATE vs. DROP:

--DELETE: 
"DELETE FROM employees" deletes rows one by one and logs each row's deletion, making it a slower operation, but it can be used with a WHERE clause to remove specific records.

-- DROP:
It removes the table from the start, meaning that it deletes all the rows and tables itself.

--TRUNCATE: 
Deletes all rows from the table without logging each row individually. It is faster but does not allow a WHERE clause, so it is typically used to remove all data from the table

INFO: If deleting all the rows from the table is required, use TRUNCATE over DELETE

? Transactions and Rollback:
Just like with the "UPDATE" query, "DELETE" can be wrapped inside a transaction to ensure that the changes can be rolled back if needed.

=> Example:
BEGIN TRANSACTION;
DELETE FROM employees
WHERE department = 'Sales';
COMMIT;

-- If you encounter an issue, you can use "ROLLBACK" to undo the changes before committing. If all OK, then execute "COMMIT" command.

#7. ALTER TABLE:
* The ALTER TABLE statement in SQL is used to modify the structure of an existing table. You can use it to add, modify, or delete columns, as well as to add or remove constraints, rename columns, change data types, or perform other schema modifications.

-- Basic Syntax:
ALTER TABLE table_name
action;

=> Common Actions with ALTER TABLE:

    # 1.Adding a New Column:
    -- Syntax:
    ALTER TABLE table_name
    ADD column_name datatype [constraints];
    => See Example 47

    # 2.Modifying an Existing Column:
    The MODIFY (or ALTER COLUMN in some systems) keyword allows you to change the data type, size, or constraints of an existing column.
    --Syntax:
    ALTER TABLE table_name
    MODIFY column_name new_datatype [new_constraints];
    => See Example 48

    # 3.Dropping (Deleting) a Column:
    You can remove an existing column from a table using the DROP keyword.
    --Syntax:
    ALTER TABLE table_name
    DROP COLUMN column_name;
    => See Example 49:
    
    # 4.Renaming a Column:
    Some databases allow you to rename an existing column with the RENAME COLUMN keyword.
    --Syntax:
    ALTER TABLE table_name
    CHANGE old_column_name new_column_name [new_constraints];
    => See Example 50:
    
    # 5.Renaming a Table:
    You can also rename the table itself.
    --Syntax:
    ALTER TABLE old_table_name
    RENAME TO new_table_name;
    => See Example 51:
    
    # 6.Adding/Removing Constraints
    Constraints are rules enforced on columns to ensure data integrity. Using ALTER TABLE, you can add or remove constraints like PRIMARY KEY, FOREIGN KEY, UNIQUE, or CHECK
    .
    * ADD Primary Key: To add a primary key constraint, use the ADD keyword.
    --Syntax:
    ALTER TABLE table_name
    ADD PRIMARY KEY (column_name);
    => See Example 52:

    * DROP Primary Key:
    --Syntax:
    ALTER TABLE table_name
    DROP PRIMARY KEY;
    => See Example 53:

    * Adding a Foreign Key:
    --Syntax:
    ALTER TABLE table_name
    ADD CONSTRAINT fk_name
    FOREIGN KEY (column_name) REFERENCES other_table(column_name);
    => See Example 54:

    * Removing a Foreign Key:
    --Syntax:
    ALTER TABLE table_name
    DROP CONSTRAINT constraint_name;

    * Changing the Data Type of a Column:
    --Syntax:
    ALTER TABLE table_name
    MODIFY column_name new_data_type;
    => See Example 56:


https://chatgpt.com/share/6703e2c0-a61c-8005-89c3-0b04073f1734

*/
