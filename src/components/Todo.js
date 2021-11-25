import React from "react";
import { SubButton, TodoListLi, Todos } from "./styles/TodoForm.Styled"

const Todo = ({ text }) => {
    return (

        <Todos>
            <TodoListLi> {text}
                <SubButton><i className="fas fa-check"></i></SubButton>
                <SubButton><i className="fas fa-trash"></i></SubButton>
            </TodoListLi>
        </Todos>

    )
}

export default Todo;