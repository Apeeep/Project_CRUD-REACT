const db_config = require('./DB_Config')

const sql = `CREATE TABLE pulsa
            (
                id INT NOT NULL AUTO_INCREMENT,
                Tanggal VARCHAR(10),
                Saldo INT,
                Nominal INT,
                Provider VARCHAR(20),
                Nomor_HP VARCHAR(15),
                PRIMARY KEY (id)
            )`

const sql2 = `CREATE TABLE saldo
            (
                id INT NOT NULL AUTO_INCREMENT,
                Tanggal VARCHAR(10),
                Saldo INT,
                PRIMARY KEY (id)
            )`

db_config.query(sql2, (error) => {
    if ( error ) throw error
    console.log("Table berhasil dibuat");
})