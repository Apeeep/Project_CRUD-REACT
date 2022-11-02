const mysql = require('mysql')

const db_connect = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "genboxcell"
})

db_connect.connect(error => { 
    error ? console.error(error) : console.log("Running Database . . .");
})

module.exports = db_connect