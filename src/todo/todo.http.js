const { getAllTodos, getTodoById, createTodo, editTodo, deleteTodo } = require("./todo.controllers")




const getAll = (req, res) => {
    const data = getAllTodos()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = ( req, res) => {
    const id = Number(req.params.id)
    if(id){
        const data = getTodoById(id)
        if(data.id){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Invalid Id'})
        }
    } else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const create = (req, res) => {
    const todoObj = req.body
    if(todoObj){
        const newtodo = createTodo(todoObj)
        res.status(200).json({newtodo})
    } else {
        res.status(400).json({message: 'Missing new todo data'})
    }
}

const edit = (req, res) => {
    const id = Number(req.params.id)
    const todoObj = req.body
    if(id && todoObj){
        const editedTodo = editTodo(id, todoObj)
        if(editedTodo){
            res.status(200).json({editedTodo})
        } else {
            res.status(400).json({message: 'Invalid data or id'})
        }
    } else {
        res.status(400).json({message: 'Invalid or missing data'})
    }
}

const deleted = (req, res) => {
    const id = Number(req.params.id)
    if(id){
        const deletedTodo = deleteTodo(id)
        if(deletedTodo){
            res.status(200).json()
        } else {
            res.status(400).json({message: 'Invalid id'})
        }
        
    } else {
        res.status(400).json({message: 'Missing id'})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    edit,
    deleted
}