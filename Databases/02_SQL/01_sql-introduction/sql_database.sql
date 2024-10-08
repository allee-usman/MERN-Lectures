# Example 01:
CREATE DATABASE IF NOT EXISTS instagram;

# Example 02:
USE instagram;

# Example 03:
CREATE TABLE IF NOT EXISTS user (
	user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT CHECK (age >= 13)
); 

# Example 04:
INSERT INTO user 
(name, age, email, followers, following) 
VALUES 
("Aqsa", NULL, "aqsa@gmail.com", 12, 67);

# Example 05:
INSERT INTO user 
VALUES 
(12, "Abdullah", 22, "abdullah@gmail.com", 123, 453);

# Example 06:
INSERT INTO user 
(name, age, email, followers, following) 
VALUES 
("Abdullah", 22, "abdullah@gmail.com", 123, 453);

# Example 07: Selecting Specific Columns:
SELECT user_id, name FROM user;

# Example 08: Selecting All Columns:
SELECT * FROM user;

# Example 09: Using the "WHERE" Clause:
SELECT user_id, name 
FROM user
WHERE user_id = 5;

SELECT *
FROM user
WHERE followers >= 200;

# Example 10: Using "ORDER BY" for Sorting:
SELECT * 
FROM user
ORDER BY name ASC;

# Example 11: Using "LIMIT" to Retrieve a Specific Number of Rows:
SELECT *
FROM user
LIMIT 2;

# Example 12: Using "DISTINCT" to Remove Duplicates:
SELECT DISTINCT name 
FROM user;

# Example 13: Using Aliases with "AS":
SELECT name AS user_name, email AS user_email
FROM user;

# Example 14:
SELECT * 
FROM user
WHERE age + 1 = 18;

# Example 15:
SELECT employee_id, target_sales, actual_sales, (target_sales - actual_sales) AS sales_difference
FROM employees;

# Example 16:
SELECT employee_id, hours_worked, hourly_rate, (hours_worked * hourly_rate) AS total_earnings
FROM employees;

# Example 17:
SELECT employee_id, name, hourly_rate, (salary / hours_worked) AS hourly_rate
FROM employees;

# Example 18:
SELECT * 
FROM user
WHERE age > 18 AND name = 'Ali Usman';

# Example 19:
SELECT * 
FROM user
WHERE age > 18 OR name = 'Hasan';

# Example 20:
SELECT * 
FROM user
WHERE name != 'Tauqir Hayat';

# Example 21: The IN operator allows you to specify multiple values in a WHERE clause
SELECT * FROM user
WHERE name IN ('Ali Usman', 'Tauqir Hayat', 'Hassan');

# Example 22: The BETWEEN operator filters the result set to include only rows where a value is within a specific range.
SELECT * FROM user
WHERE age BETWEEN 22 AND 25;

# Example 23: (for Pattern Matching) The LIKE operator is used with wildcards (%, _) to match patterns in a string.
SELECT * FROM user
WHERE name LIKE '%N';
 
/* Note the placement of % */
SELECT * FROM user
WHERE name LIKE 'A%'; 

SELECT * FROM user
WHERE name LIKE '%H%'; 

# Example 24:
SELECT * FROM user
WHERE name LIKE 'H____n';

# Example 25: The "IS NULL" condition is used to check for NULL values in a column.
SELECT * FROM user
WHERE age IS NULL;

/* Aggregate Functions */

# Example 26:
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    bonus DECIMAL(10, 2),
    hours_worked INT,
    hourly_rate DECIMAL(5, 2),
    target_sales DECIMAL(10, 2),
    actual_sales DECIMAL(10, 2)
);

# Example 27:
INSERT INTO employees (name, department, salary, bonus, hours_worked, hourly_rate, target_sales, actual_sales)
VALUES 
('John Doe', 'IT', 60000, 5000, 160, 40, 50000, 45000),
('Jane Smith', 'HR', 55000, 4000, 150, 35, 40000, 42000),
('Alice Johnson', 'Finance', 65000, 6000, 170, 45, 60000, 59000),
('Bob Brown', 'IT', 70000, 7000, 180, 50, 70000, 71000),
('Charlie Green', 'HR', 48000, 3000, 140, 30, 45000, 43000),
('Dave White', 'Finance', 72000, 7500, 175, 52, 65000, 66000),
('Emma Black', 'IT', 52000, 3500, 155, 38, 55000, 54000);

# Example 28: Counts the number of rows in a result set.
SELECT COUNT(employee_id) AS total_employees
FROM employees;

-- This query counts how many employees are in the 'HR' department.
SELECT COUNT(*) AS hr_employees
FROM employees
WHERE department = 'HR';

-- This query returns the sum of employees for each department by grouping rows based on the department column.
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department;

# Example 29:
SELECT SUM(salary) AS total_salaries
FROM employees;

-- This query returns the sum of salaries for each department by grouping rows based on the department column.
SELECT department, SUM(salary) AS total_salaries
FROM employees
GROUP BY department;

# Example 30: The AVG() function returns the average value of a numeric column.
SELECT AVG(salary) AS average_salary
FROM employees;

-- Calculate avg salary by departments
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;

# Example 31: Finding the Maximum Value
SELECT name, MAX(salary) AS highest_paid
FROM employees;

-- Get the highest paid employee of each department
SELECT name, department, MAX(salary) AS highest_paid
FROM employees
GROUP BY department;

# Example 32: Finding the Minimum Value
SELECT name, MIN(salary) AS minimum_paid
FROM employees;

-- Get the lowest paid employee of each department
SELECT name, department, MIN(salary) AS minimum_paid
FROM employees
GROUP BY department;

/* HAVING clause */
# Example 33:
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary >= 60000;

# Example 34:
SELECT department, COUNT(employee_id) AS employee_count
FROM employees
GROUP BY department
HAVING employee_count > 2;

# Example 35:
SELECT department, AVG(salary) AS avg_salary, SUM(bonus) AS total_bonus
FROM employees
GROUP BY department
HAVING avg_salary > 60000 AND total_bonus > 10000;

# Example 36:
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE salary > 50000
GROUP BY department
HAVING avg_salary > 60000;


CREATE TABLE sales (
    salesperson_id INT NOT NULL,
    team_id INT NOT NULL,
    department VARCHAR(50) NOT NULL,
    total_sales DECIMAL(10, 2) NOT NULL,
    year INT NOT NULL
);


INSERT INTO sales 
(salesperson_id, team_id, department, total_sales, year) 
VALUES
(1, 101, 'Electronics', 50000.00, 2022),
(2, 101, 'Electronics', 75000.00, 2023),
(3, 102, 'Clothing', 45000.00, 2022),
(4, 102, 'Clothing', 60000.00, 2023),
(5, 103, 'Electronics', 40000.00, 2022),
(6, 103, 'Electronics', 65000.00, 2023),
(7, 104, 'Home Appliances', 55000.00, 2022),
(8, 104, 'Home Appliances', 80000.00, 2023),
(9, 105, 'Furniture', 70000.00, 2022),
(10, 105, 'Furniture', 90000.00, 2023),
(11, 106, 'Clothing', 35000.00, 2022),
(12, 106, 'Clothing', 50000.00, 2023);

CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    units_sold INT NOT NULL
);

INSERT INTO products 
(category, price, units_sold) 
VALUES 
('Electronics', 299.99, 150),
('Electronics', 199.99, 300),
('Electronics', 99.99, 500),
('Furniture', 399.99, 80),
('Furniture', 499.99, 50),
('Furniture', 249.99, 120),
('Clothing', 49.99, 1000),
('Clothing', 79.99, 750),
('Clothing', 99.99, 400),
('Clothing', 39.99, 1200),
('Books', 19.99, 2000),
('Books', 9.99, 2500),
('Books', 14.99, 1800);

CREATE TABLE IF NOT EXISTS performance (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    performance_score DECIMAL(5, 2) NOT NULL,
    year INT NOT NULL
);

INSERT INTO performance 
(name, performance_score, year) 
VALUES 
-- Employee 1: John Doe's performance scores from 2021 to 2023
('John Doe', 90.00, 2021),
('John Doe', 88.50, 2022),
('John Doe', 91.75, 2023),

-- Employee 2: Jane Smith's performance scores from 2021 to 2023
('Jane Smith', 85.50, 2021),
('Jane Smith', 87.00, 2022),
('Jane Smith', 89.25, 2023),

-- Employee 3: Alice Johnson's performance scores from 2021 to 2023
('Alice Johnson', 92.00, 2021),
('Alice Johnson', 95.50, 2022),
('Alice Johnson', 96.75, 2023),

-- Employee 4: Bob Brown's performance scores from 2021 to 2023
('Bob Brown', 80.00, 2021),
('Bob Brown', 84.25, 2022),
('Bob Brown', 82.75, 2023),

-- Employee 5: Charlie Green's performance scores from 2021 to 2023
('Charlie Green', 88.00, 2021),
('Charlie Green', 87.75, 2022),
('Charlie Green', 90.00, 2023),

-- Employee 6: Dave White's performance scores from 2021 to 2023
('Dave White', 86.00, 2021),
('Dave White', 89.00, 2022),
('Dave White', 90.50, 2023);


# Example 37:
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > (SELECT AVG(salary) FROM employees);

# Example 38:
SELECT department, 
       SUM(CASE WHEN year = 2023 THEN total_sales ELSE 0 END) AS sales_2023,
       SUM(CASE WHEN year = 2022 THEN total_sales ELSE 0 END) AS sales_2022
FROM sales
GROUP BY department
HAVING SUM(CASE WHEN year = 2023 THEN total_sales ELSE 0 END) > 
       1.2 * SUM(CASE WHEN year = 2022 THEN total_sales ELSE 0 END);
       
# Example 38: Alternative & more efficient solution: 
SELECT department, sales_2023, sales_2022
FROM (
    SELECT department,
           SUM(CASE WHEN year = 2023 THEN total_sales ELSE 0 END) AS sales_2023,
           SUM(CASE WHEN year = 2022 THEN total_sales ELSE 0 END) AS sales_2022
    FROM sales
    GROUP BY department
) AS sales_summary
HAVING sales_2023 > 1.2 * sales_2022;


# Example 39:
SELECT category, 
       SUM(price * units_sold) AS total_revenue, 
       COUNT(DISTINCT product_id) AS num_products
FROM products
GROUP BY category
HAVING SUM(price * units_sold) > 10000 AND COUNT(DISTINCT product_id) > 3;

# Example 39: Solution 2
SELECT category, total_revenue, num_products
FROM (
		SELECT category,
		SUM(price * units_sold ) AS total_revenue, 
        COUNT(DISTINCT product_id) AS num_products
        FROM products
        GROUP BY category
) AS sales_summary
HAVING total_revenue > 10000 AND num_products > 3;
        
# Example 40:
SELECT department, AVG(hours_worked) AS avg_hours_worked, COUNT(DISTINCT employee_id) AS total_employees
FROM employees
GROUP BY department
HAVING AVG(hours_worked) > 150 AND COUNT(DISTINCT employee_id) >= 2;

# Example 41:
SELECT department, SUM(salary) AS total_salary, SUM(bonus) AS total_bonus
FROM employees
GROUP BY department
HAVING SUM(bonus) > 1.10 * SUM(salary);   

# Example 42: Update Single Row
UPDATE employees
SET name = 'ALi Usman'
WHERE employee_id = 1;
     
# Example 43: Update Multiple Rows
UPDATE employees
SET salary = 1.10 * salary
WHERE department = 'IT';

/* Since we updated the salary of IT employees, we must have to update hourly_rate */
UPDATE employees
SET hourly_rate = (salary / hours_worked )
WHERE department = 'IT';

# Example 44: Update Multiple Columns
UPDATE employees
SET salary = 60000, department = 'HR'
WHERE id = 101;

# Example 45:
DELETE FROM employees
WHERE employee_id = 5;

# Example 46:
DELETE FROM employees
WHERE department = 'HR';

# Example 47:
ALTER TABLE employees
ADD COLUMN birthdate DATE;

# Example 48:
ALTER TABLE employees
MODIFY salary DECIMAL(10, 2);

# Example 49:
ALTER TABLE employees
DROP COLUMN birthdate;

# Example 50:
ALTER TABLE sales
CHANGE team_id employee_id int(11);

# Example 51:
ALTER TABLE employees
RENAME TO staff;

# Example 52:
ALTER TABLE employees
ADD PRIMARY KEY (name);

# Example 53:
ALTER TABLE `employees`
DROP PRIMARY KEY;

# Example 54:
ALTER TABLE sales
ADD CONSTRAINT fk_employee_id
FOREIGN KEY (employee_id) REFERENCES employees(employee_id); 

# Example 55:
ALTER TABLE employees
MODIFY salary FLOAT;

# Example 56:

# Example 57:
# Example 58:
# Example 59:






