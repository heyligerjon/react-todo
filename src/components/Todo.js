import React, { useEffect, useRef, useState } from "react";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                  id={props.id} 
                  className="todo-text" 
                  type="text" 
                  value={newName}
                  onChange={handleChange}
                  ref={editFieldRef}
                />
                <span className="btn-group">
                  <button 
                    type="button" 
                    className="btn btn__ctrl todo-cancel"
                    onClick={() => setEditing(false)}
                  >
                      <span className="material-icons-round">clear</span>
                      <span className="visually-hidden">renaming {props.span}</span>
                  </button>
                  <button type="submit" className="btn btn__primary todo-save">
                    <span className="material-icons-round">done</span>
                      <span className="visually-hidden">new name for {props.name}</span>
                  </button>
                </span>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="todo stack-small">          
          <span className="c-cb">
            <input 
              id={props.id} 
              type="checkbox" 
              defaultChecked={props.completed} 
              onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <label className="todo-label" htmlFor={props.id}>
              {props.name}
            </label>
          </span>
          <span className="btn-group">
              <button 
                type="button" 
                className="btn btn__ctrl todo-edit"
                onClick={() => setEditing(true)}
                ref={editButtonRef}
              >
                <span className="material-icons-round">edit</span>
                <span className="visually-hidden">{props.name}</span> 
              </button>
              <button 
                type="button" 
                className="btn btn__danger" 
                onClick={() => props.deleteTask(props.id)}
              >
                <span className="material-icons-round">delete</span>
                <span className="visually-hidden">{props.name}</span>
              </button>
            </span>
        </div>
    );

    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);
    
    return (
      
        <li className="todo">
          {isEditing ? editingTemplate : viewTemplate}
        </li>
    );
}