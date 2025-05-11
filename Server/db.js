// const mysql = require('mysql2');
//
// // Use connection pool instead of single connection
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 10000,
//   // pingInterval: 60000
// });
//
// // Wrap in promise API for async/await support
// const promisePool = pool.promise();
//
// module.exports = promisePool;