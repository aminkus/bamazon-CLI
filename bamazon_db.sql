-- DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price FLOAT(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tomato Seeds 100-count", "garden", 1.59, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DIY Greenhouse", "garden", 499.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lawn Chair", "garden", 13.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bounty Paper Towels 6-pack", "home", 9.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scotts Toliet Paper 24-pack", "home", 13.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ivory Soap 4-pack", "home", 2.49, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Herbal Essense Shampoo", "home", 3.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Herbal Essense Conditioner", "home", 3.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung TV", "electronics", 599.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Tablet", "electronics", 199.99, 3);
