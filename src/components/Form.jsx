import React, {useState} from 'react'

export default function Form(props) {
    const [todo, setTodo] = useState({content: "", priority: ""})

    function handleChange(event) {
        const {name, value} = event.target;
    
        setTodo(prevValue => {
            return Object.assign({}, prevValue, {[name]: value});
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onAdd(todo);
        setTodo({content: "", priority: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container pb-3">
                <label htmlFor="content" className="form-label"></label>
                <textarea onChange={handleChange} className="form-control" placeholder="Today I would like to..." name="content" rows="3" value={todo.content}></textarea>
            </div>
            <div className="container py-3">
                <select onChange={handleChange} className="form-select" name="priority" value={todo.priority}>
                    <option value="" disabled hidden>Please select a priority</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="container py-3">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
  )
}