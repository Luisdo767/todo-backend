const router = require('express').Router()
const httpTodos = require('./todo.http')

router.route('/todos')
    .get(httpTodos.getAll)
    .post(httpTodos.create)

router.route('/todos/:id')
    .get(httpTodos.getById)
    .put(httpTodos.edit)
    .delete(httpTodos.deleted)



module.exports = {
    router
}
