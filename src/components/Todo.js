import React from "react";
import { SubButton, TodoListLi, Todos } from "./styles/TodoForm.Styled"

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((elem) => elem.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        })
        )
    }
    return (

        <Todos>
            <TodoListLi decoration={todo.completed ? 'line-through' : ''} opacity={todo.completed ? '0.5' : ''}> {text}
                <SubButton onClick={completeHandler} ><i className="fas fa-check"></i></SubButton>
                <SubButton onClick={deleteHandler}><i className="fas fa-trash"></i></SubButton>
            </TodoListLi>
        </Todos >

    )
}

export default Todo;