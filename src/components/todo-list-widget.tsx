import React, {useState} from 'react';

interface IListItem {
    todo: string;
    key: number
}

export const TodoListWidget = () => {
const [todo,setTodo] = useState("");
const [list,setList] = useState([{key: 0,todo: 'My first Todo'}]);


const onChange = (e: any) => {
    setTodo(e.target.value)
};

const onSubmit = () => {
    console.log("clicked")

};

console.log(todo);
console.log(list);

    return (
        <div>
            <h3>Here is your to-do list</h3>
            <div className="todo-list">
                {list.map( (item: IListItem) => {
                    return(
                    <p className="todo-list-item">{item.todo}</p>
                    )
                })}

            <span><input onChange={(e) => onChange(e)}/><button className="add-button" onSubmit={onSubmit}>Add</button></span>
            </div>
        </div>
    )
};
