import React from 'react';
import './App.css';

function Filter(task)
{
    return(
        <div className="Hide">
            <p >Hide done taks</p>
            <input type="checkbox"
                checked={task.filtr.hide}
                onChange={()=>task.addFilter()} />
        </div>
    );
}
export default Filter