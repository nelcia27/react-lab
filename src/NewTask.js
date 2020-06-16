import React from 'react';


function NewTask(task){

    return (
        <form>
            <input
            id="newTask"
            type="text"></input>
            <button type="submit" 
            onClick={(event) =>{
                task.addTask(document.getElementById("newTask").value);
                document.getElementById("newTask").value='';
                event.preventDefault();
            }}>Add</button>
        </form>
    );
}

export default NewTask;