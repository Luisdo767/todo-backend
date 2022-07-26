const express = require('express')
const todosRouter = require('./todo/todo.router').router

const app = express()

app.use(express.json())



app.use('/api/v1', todosRouter)


app.listen(8000, () => {
    console.log('Server started at port: 8000');
})
