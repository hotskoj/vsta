import React, {useState} from 'react'
import FormEdit from './FormEdit'

export default function ToDo(props) {
    const [tableView, setTableView] = useState(true);
    const [isDone, setIsDone] = useState(false);

    function handleEdit() {
        setTableView(false);
    }

    function handleSubmit(event, id, newTodo){
        event.preventDefault();
        props.onEdit(id, newTodo);
        setTableView(true);
    }

    function handleClick(){
        setIsDone(prevValue => {
            return !prevValue;
        });
    }

    return (
        tableView ? (<div className="d-flex justify-content-between">
            <p onClick={handleClick} className='content' style= {isDone ? {textDecoration: "line-through"} : {}}>- {props.todo.content}</p> 
            <p className='priority'>Priority: {props.todo.priority} <i onClick={handleEdit} className="fa-regular fa-pen-to-square"></i> <i onClick={() => props.onDelete(props.id)}className="fa-regular fa-trash-can"></i></p>
        </div>) : (<FormEdit todo={props.todo} id={props.id} handleSubmit={handleSubmit}/>)
    )
}
