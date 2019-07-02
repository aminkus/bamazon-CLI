DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tomato seeds 100-count", "garden", 1.59, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("greenhouse", "garden", 499.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lawn chair", "garden", 13.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bounty paper towels 6-pack", "home", 9.99, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scotts toliet paper 24-pack", "home", 13.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ivory soap 4-pack", "home", 2.49, 135);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("herbal essense shampoo", "home", 3.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("herbal essense conditioner", "home", 3.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("samsung tv", "electronics", 599.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("samsung tablet", "electronics", 199.99, 25);
