const express = require('express')
const app = express()
app.use(express.json())

let tasks = []

app.get('/tasks', (req, res) => {
  res.send(tasks)
})

app.get('/tasks/:id', (req, res) => {
  const t = tasks.find(x => x.id == req.params.id)
  res.send(t)
})

app.post('/tasks', (req, res) => {
  const t = req.body
  t.id = tasks.length + 1
  tasks.push(t)
  res.send(t)
})

// TODO update and delete

app.listen(3000)
