import React, { useState } from 'react'

const Todo = ({ name, completed, id, toggleTaskCompleted, editTask, deleteTask }) => {
    const [isEditing, setEditing] = useState(false);

    const editingTemplate = (
        <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={id}>
                    New name for {name}
                </label>
                <input id={id} className="todo-text" type="text" />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {name}</span>
                </button>
                <button type="submit" className="btn btn_primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {name} </span>
                </button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
            <input
            id={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={() => toggleTaskCompleted(id)}
            />
            <label className="todo-label" htmlFor={id}>
            {name}
            </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
        </div>
    </div>
    )

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>

    // return (
    //     <div>
    //         <li className="todo stack-small">
    //             <div className="c-cb">
    //                 <input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)} />
    //                 <label className="todo-label" htmlFor={id}>
    //                 {name}
    //                 </label>
    //             </div>
    //             <div className="btn-group">
    //                 <button type="button" className="btn" onClick={() => editTask(id)}  >
    //                 Edit <span className="visually-hidden">{name}</span>
    //                 </button>
    //                 <button type="button" className="btn btn__danger" onClick={() => deleteTask(id)}>
    //                 Delete <span className="visually-hidden">{name}</span>
    //                 </button>
    //             </div>
    //         </li>
    //     </div>
    // )
}

export default Todo
