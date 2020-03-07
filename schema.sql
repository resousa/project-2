CREATE TABLE shoes (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sku VARCHAR(6),
    style VARCHAR(30),
    name VARCHAR(30),
    inventory INTEGER,
    inventory_sold INTEGER,
    retail_price DECIMAL(7,2),
    cost DECIMAL(7,2)
);

CREATE TABLE vendors (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30),
    contact VARCHAR(30),
    address VARCHAR(60),
    inventory_purchased INTEGER,
    contract_end VARCHAR(30)
);

CREATE TABLE suppliers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30),
    supplies VARCHAR(30),
    contact VARCHAR(30),
    address VARCHAR(60),
    supplies_purchased INTEGER,
    unit_cost DECIMAL(7,2)
)
SELECT * FROM shoes;

USE shoes_db;