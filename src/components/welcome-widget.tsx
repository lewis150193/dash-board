import React from 'react'
import {TodoListWidget} from "./todo-list-widget";

interface WelcomeProps {
    name: string
}
export const WelcomeWidget = ({name}: WelcomeProps) => {
    return (
        <div>
            <h1>Welcome {name}</h1>
            <TodoListWidget/>
        </div>
    )
}
