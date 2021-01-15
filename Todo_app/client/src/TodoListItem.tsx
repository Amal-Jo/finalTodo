import React from 'react';
import "./TodoListItem.css"

interface TodoListItemProps{
    todo:Todo;
    clickToToggle:ClickToDoToggle
}

const TodoListItem:React.FC<TodoListItemProps>=({todo,clickToToggle})=>{
    return(
        <div >
        <li>
            <label className={todo.complete?"complete":undefined}>
                <input type="checkbox" checked={todo.complete}
                onChange={()=>clickToToggle(todo)}/>
                {' '}
                {todo.name}

            </label>
        </li>
        </div>
    )

}
export default TodoListItem;