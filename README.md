# JLR Shoes CRM

[Shoe Inventory tracker](https://github.com/resousa/project-2)
## Table of contents
- [Install](#Install)
- [General Info](#Info)
- [Technologies](#Technologies)
- [Summary](#Summary)
- [Authors](#Authors)
- [License](#License)

## Install
- npm i react-router-dom @okta/okta-react @okta/okta-signin-widget

## Info
The JLR Shoes CRM is a used for the JLR Shoe company to track inventory, supplier info, and vendor info. It gives JLR Shoe company an advantage over the competition by having the most important company information accurately displayed in one place  
![Login](-----)   
Screenshot of the JLR Shoes login screen.

![Dashboard](-----)  
Screenshot of the JLR Shoes dashboard.

![Inventory](-----)
Screenshot of the JLR Shoes inventory page.

## Technologies
### * React
React is a JavaScript library used to create user interfaces. It was used to create the login and CRM itself. an example of some React JavaScript code can be seen below   
```javascript
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
```
You will notice that there are multiple components being imported in the code displayed above. This is how React creates complex user interfaces. An example of this react code can be seen below.
```javascript
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='sticky-footer bg-dark'>
      <div className='text-center'>
        <span className='text-muted'>Copyright &copy; 2020 oh CRUD</span>
      </div>
    </footer>
  );
}

```
For more information on React and React based NPM packages click the links below.   
[React](https://reactjs.org/)
[Chart.js](https://www.chartjs.org/docs/latest/)
[react-calendar](https://www.npmjs.com/package/react-calendar)
[material-ui](https://www.npmjs.com/package/material-ui)
[react-router](https://reacttraining.com/react-router/)


### * Sequelize
Sequelize is a Node.js ORM. In this application it is used to transfer data from a MYSQL database and display it in our React interface. Below is an example of this code.
```javascript
const db = require(`../models`);

module.exports = app => {
  app.get(`/api/sales`, (req, res) => {
    db.Shoe.findAll({
      attributes: [
        [db.sequelize.literal(`SUM(inventory_sold * retail_price)`), `result`]
      ]
    }).then(totalSold => {
      res.json(totalSold);
    });
  });

  app.get(`/api/costs`, (req, res) => {
    db.Shoe.findAll({
      attributes: [
        [db.sequelize.literal(`SUM(inventory_sold * cost)`), `result`]
      ]
    }).then(totalCost => {
      res.json(totalCost);
    });
  });

  app.get(`/api/materials`, (req, res) => {
    db.Supplier.findAll({
      attributes: [
        [db.sequelize.literal(`SUM(supplies_purchased * unit_cost)`), `result`]
      ]
    }).then(totalCost => {
      res.json(totalCost);
    });
  });
};
```
For more information on Sequelize ORM click the link below.    
[Sequelize](https://sequelize.org/)  


### * MySQL 
MySql is the database used for this application. Below is an example of some data the application was initially used to seed the Shoes database
```sql
INSERT INTO Shoes (sku, style, name, inventory, inventory_sold, retail_price, cost, createdAt, UpdatedAt)
VALUES ("BB0001", "basketball", "dunk force", 1263, 1454, 129.99, 47.67, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), ("BB0002", "basketball", "hyper air", 263, 4552, 169.99, 77.46, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), 
("BB0003", "basketball", "ultra max hi", 11233, 22312, 159.99, 64.68, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), ("BB0004", "basketball", "ultra max lo", 15246, 21231, 109.99, 42.41, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), 
("BB0005", "basketball", "dunk force", 1263, 3212, 129.99, 47.67, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), ("BB0006", "basketball", "maxx force", 1263, 1123, 129.99, 47.67, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), 
("RU0024", "running shoe", "SXX 550", 3263, 12233, 149.99, 67.99, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"), ("RU0008", "running shoe", "SXX 450", 23450, 34286, 129.99, 47.89, "2020-03-07 22:01:45.8040","2020-03-07 22:01:45.8040"),   
```
[MySql](https://www.mysql.com/)

### * Dependencies
Below is a full list of Dependencies used in the application.  
```json
  "dependencies": {
    "@material-ui/core": "^4.9.5",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "bcrypt": "^4.0.1",
    "chart.js": "^2.9.3",
    "express": "^4.17.1",
    "express-session": "^1.17.0",
    "mysql": "^2.18.1",
    "mysql2": "^2.1.0",
    "react": "^16.13.0",
    "react-calendar": "^2.19.2",
    "react-chartjs-2": "^2.9.0",
    "react-dom": "^16.13.0",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.0",
    "sequelize": "^5.21.5"
  }
```

## Summary
This CRM was created using React, Sequelize, and MySQL. The interface of the application was created with React. There is a template that is created and then each React component is imported into the template. The data displayed within each component is done so with Sequelize. A few examples of the data we retrieve are total sales, total supply cost, and shoe inventory. With Sequelize the application also has the ability to add new data to a table or delete data from a table.  There Are a total of 4 tables for this application. For a more in depth overview of how this application works see the diagram below.

![Model](------) 


## Authors
- Justin Le (https://github.com/twopcz)
- Lloyd Marcelino (https://github.com/Ethanlloyd21)
- Ryan Sousa (https://github.com/resousa)

## License

- MIT License Copyright (c) 2020 Justin Le, Lloyd Marcelino, Ryan Sousa
