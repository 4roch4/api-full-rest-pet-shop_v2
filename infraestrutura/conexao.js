const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'database-petshop_v2',
  port: 3306,
  user: 'app',
  password: '123456',
  database: 'agenda-petshop_v2'
})

module.exports = conexao
