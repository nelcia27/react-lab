import React from 'react';
import Task from './Task';

function ToDoList(list)
{
    let todoList = list.list.map(item => <Task
        key={item.id}
        item={item}
        handleChange = {()=>
        {
            list.handleChange(item.id)
        }
        }
        />);

    return(
        <p>
            {todoList}
        </p>
    );
}
export default ToDoList;