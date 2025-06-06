const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! 33</h1>')
})

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server running on port ${PORT}`)
})