import React from "react";
import { Flex2, Flex3 } from "./styles/Flex.Styled";
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
                <div />
                <div className="listBtn">
                    <SubButton color='green' onClick={completeHandler} ><i className="far fa-check-square"></i></SubButton>
                    <SubButton color='red' onClick={deleteHandler}><i className="far fa-trash-alt"></i></SubButton>
                </div>
            </TodoListLi>

        </Todos >


    )
}

export default Todo;