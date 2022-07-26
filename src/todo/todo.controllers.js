//?'Base de datos'
const todoDB = [{
        id: 1,
        done: false,
        title: 'Terminar el entregable',
        description: 'Verificar el los requerimientos en el notion'
    },
    {
        id: 2,
        done: false,
        title: 'Hacer mis deberes',
        description: 'Limpiar la casa'
    }
]

// Controlador para retornar todos los todo
const getAllTodos = () => {
    return todoDB
}

//Controlador para retornar un todo especifico
const getTodoById = (id) => {
    const filtDb = todoDB.filter((todo) => todo.id === id)
    if(filtDb.length > 0){
        return filtDb[0]
    } else {
        return false
    }
}

// Controlador para crear un nuevo todo
const createTodo = (todoObj) => {
    if(todoDB.length === 0){
        const newTodo = {
            id: 1,
            done: false,
            title: todoObj.title,
            description: todoObj.description
        }
        todoDB.push(newTodo)
        return newTodo
    }
    const newTodo = {
        id: todoDB[todoDB.length - 1].id + 1,
        done: false,
        title: todoObj.title,
        description: todoObj.description
    }
    todoDB.push(newTodo)
    return newTodo
}

// Controlador para editar un todo
const editTodo = (id, data) => {
    const index = todoDB.findIndex(item => item.id === id)
    if(data.done === false && data.title && data.description && todoDB[index]){
        todoDB[index] = {
            id,
            ...data
        }
        return todoDB[index]
    }
    return false
}


const deleteTodo = (id) => {
    const index = todoDB.findIndex(item => item.id === id)
    if(index !== -1){
        todoDB.splice(index, 1)
        return true
    }
    return false
}

module.exports = {
    getAllTodos,
    getTodoById,
    editTodo,
    deleteTodo,
    createTodo
}