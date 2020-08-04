import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  return response.json([{ name: 'oie', age: 25}])
})

// localhost:3333
app.listen(3333)

