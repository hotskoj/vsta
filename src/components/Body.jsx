import React, {useState} from 'react'
import Form from './Form'
import List from './List'

export default function Body() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos((prevValue) => {
            return [...prevValue, todo].sort((a, b) => a.priority - b.priority);
        })
    }

    function deleteTodo(id) {
        setTodos((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            })
        })
    }

    function editTodo(id, updatedTodo) {
        setTodos((prevValue) => {
            return prevValue.map((todo, index) => {
                if (index === id) {
                    return updatedTodo;
                } else {
                    return todo;
                }
            })
        })
    }

  return (
        <div className="row pt-5">
            <div className="col-md-6">
                <Form  onAdd={addTodo}/>
            </div>
            <div className="col-md-6">
                <List todos={todos} onDelete={deleteTodo} onEdit={editTodo}/>
            </div>
        </div>
  )
}