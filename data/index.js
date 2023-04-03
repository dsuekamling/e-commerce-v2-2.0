// // const express = require('express');
// // const cors = require('cors');
// // const mysql= require('mysql2');
// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // // ESTABLISHED DATABASE CONNECTION
// // const db = mysql.createConnection({
// //   host: "127.0.0.1",
// //   user: 'root',
// //   password: "password",
// //   database: 'arcsurf_db'
// //   ,});
  
// // db.connect(err =>{
// //   if(err){
// //       console.log(err.message)
// //       return;
// //   }
// //   console.log("Connected to MySQL database")
// // });

// // // Get all products
// // app.get("/products", (req, res) => {
// //   const q = "SELECT * FROM products";
// //   db.query(q, (err, data) => {
// //     if (err) {
// //       console.log(err);
// //       return res.json(err);
// //     }
// //     return res.json(data);
// //   });
// // });

// // // Add new product
// // app.post("/products", (req, res) => {
// //   const q = "INSERT INTO products(`productName`, `productTag`, `productURL`, `productDesc`) VALUES (?)";
// //   const values = [
// //     req.body.productName,
// //     req.body.productTag,
// //     req.body.productURL,
// //     req.body.productDesc,
// //   ];
// //   db.query(q, [values], (err, data) => {
// //     if (err) return res.send(err);
// //     return res.json(data);
// //   });
// // });

// // // Start server
// // const PORT = process.env.PORT || 3001;
// // app.listen(PORT, () => {
// //   console.log(`Server listening on port ${PORT}`);
// // });
// const express = require('express');
// const cors = require('cors');
// const mysql= require('mysql2');
// const app = express();
// app.use(express.json());
// app.use(cors());

// // ESTABLISHED DATABASE CONNECTION
// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: 'root',
//   password: "password",
//   database: 'arcsurf_db'
// });

// db.connect(err =>{
//   if(err){
//       console.log(err.message)
//       return;
//   }
//   console.log("Connected to MySQL database")
// });

// // Get all tables and their data
// // app.get("/products", (req, res) => {
// //   const q = "SHOW TABLES";
// //   db.query(q, (err, tables) => {
// //     if (err) {
// //       console.log(err);
// //       return res.json(err);
// //     }
// //     const results = {};
// //     tables.forEach(table => {
// //       const tableName = table[`Tables_in_${db.config.database}`];
// //       const query = `SELECT * FROM ${tableName}`;
// //       db.query(query, (err, data) => {
// //         if (err) {
// //           console.log(err);
// //           return res.json(err);
// //         }
// //         results[tableName] = data;
// //         if (Object.keys(results).length === tables.length) {
// //           return res.json(results);
// //         }
// //       });
// //     });
// //   });
// // });
// app.get('/products', (req, res) => {
//   db.query('SELECT * FROM products', (error, results, fields) => {
//     if (error) {
//       console.log(error);
//       res.sendStatus(500);
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Push contact info
// app.post("/contact", (req, res) => {
//   const q = "INSERT INTO contacts(`name`, `email`, `message`) VALUES (?, ?, ?)";
//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.message,
//   ];
//   db.query(q, values, (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });

// // Start server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.use(cors());

// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'arcsurf_db'
});

db.connect(err => {
  if (err) {
    console.log(err.message)
    return;
  }
  console.log("Connected to MySQL database")
});

// Get all products
app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Add new product
app.post("/products", (req, res) => {
  const q = "INSERT INTO products(`productName`, `productTag`, `productURL`, `productDesc`, 'price') VALUES (?)";
  const values = [
    req.body.productName,
    req.body.productTag,
    req.body.productURL,
    req.body.productDesc,
    req.body.price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Push contact info
app.post("/contact", (req, res) => {
  const q = "INSERT INTO contacts(`name`, `email`, `message`) VALUES (?, ?, ?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.message,
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
