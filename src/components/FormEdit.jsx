import React, {useState} from 'react'

export default function FormEdit(props) {
    const [tempTodo, setTempTodo] = useState(props.todo);

    function handleChange(event) {
        const {name, value} = event.target;
    
        setTempTodo(prevValue => {
            return Object.assign({}, prevValue, {[name]: value});
        });
    }

    return (
        <form onSubmit={() => props.handleSubmit(event, props.id, tempTodo)}>
            <div className="py-3">
                <label htmlFor="content" className="form-label"></label>
                <textarea  onChange={handleChange} className="form-control" defaultValue={tempTodo.content} name="content" rows="3"></textarea>
            </div>
            <div className="py-3">
                <select onChange={handleChange} className="form-select" name="priority" defaultValue={tempTodo.priority}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="py-3">
                <button type="submit" className="btn btn-outline-dark">Edit</button>
            </div>
        </form>
  )
}