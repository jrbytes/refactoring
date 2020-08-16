import express from 'express'

import htmlStatement from './cap-1/statement'

const app = express()

app.get('/', (req, res) => {
  res.send(htmlStatement)
})

app.listen(3000, () => {
  console.log('listening 3000')
})
