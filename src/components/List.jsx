import React from 'react'
import ToDo from './ToDo'

export default function List(props) {

    return (
        <div className="container">
            <h2 className='py-3'>To Do:</h2>
            {props.todos.map((todo, id) => (
                <ToDo key={id} id={id} todo={todo} onDelete={props.onDelete} onEdit={props.onEdit}/>
            ))}
        </div>
    )
}