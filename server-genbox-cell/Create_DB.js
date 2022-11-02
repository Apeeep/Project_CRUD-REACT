const db_config = require('./DB_Config')

const sql = 'CREATE DATABASE genboxcell'

db_config.query(sql, (error) => {
    if ( error ) throw error
    console.log("Database berhasil dibuat");
})