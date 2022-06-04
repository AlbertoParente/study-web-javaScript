/*var sql = require("mssql")

var dbConfig = {
    server: "localhost\DEV17",
    database: "SampleDb",
    user: "sa",
    password: "vls021130",
    port: 1433
}

function getEmp() {
    var conn = new sql.ConnectionPool(dbConfig)
    var req = new sql.Request(conn)

    conn.connect(function (err) {
        if(err) {
            console.log(err)
            return
        }
        req.query("SELECT * FROM LOJAS", function(err, recordset) {
            if(err) {
                console.log(err)
                return
            } else {
                console.log(recordset)
            }
            conn.close()
        })
    })
}

getEmp()*/

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database with SQL Server
var config = {
    server: 'DEV17',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: 'vls021130' // update me
        }
    },
    options: {
        database: 'VMD'
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
