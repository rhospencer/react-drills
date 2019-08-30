import React from 'react'
import Todo from './Todo'

export default function List(props) {
    return(
        <ul>
            {props.tasks.map((task) => <Todo task={task}/>)}
            
        </ul>
    )
}