const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

const app = customExpress()

conexao.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) {
  console.log(error)

  } else {
    console.log('The solution is: ', results[0].solution)

    Tabelas.init(conexao)
  }
})

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000')
})
