import React, {useState} from 'react';

interface IListItem {
    todo: string;
    key: number
}

export const TodoListWidget = () => {
const [todo,setTodo] = useState("");
const [list,setList] = useState([{key: 0,todo: 'My first Todo'}]);

const randomKey = () => Math.floor(Math.random() * 10000000);

const onChange = (e: any) => {
    setTodo(e.target.value)
};

const onSubmit = (e: any) => {
    e.preventDefault();
    if(list.filter( (item: IListItem) => item.todo === todo).length > 0){
        alert('This is already in the todo');
        return
    }
    setList([...list,{todo: todo, key: randomKey()}])
    setTodo("");
};

const deleteTodo = (key: number) => {
    const newList =  list.filter((i: IListItem) => i.key !== key);
    setList(newList)
};

    return (
        <div>
            <h3>Here is your to-do list</h3>
            <div className="todo-list">
                {list.map( (item: IListItem) => {
                    return(
                        <span key={item.key}><p className="todo-list-item">{item.todo}</p><button  onClick={() => deleteTodo(item.key)}>x</button></span>
                    )
                })}

            <span>
                <input onChange={(e) => onChange(e)}/>
                <button className="add-button" onClick={e => onSubmit(e)} formAction="submit">Add</button>
            </span>
            </div>
        </div>
    )
};
