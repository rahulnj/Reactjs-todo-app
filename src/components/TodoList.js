import React from "react"
import { Flex2 } from "./styles/Flex.Styled";
import { TodoListUl } from "./styles/TodoForm.Styled";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
    return (
        <Flex2>
            <div>
                <TodoListUl>
                    {todos.map(todo => (
                        <Todo text={todo.text} key={todo.id} />
                    ))}
                </TodoListUl>
            </div>
        </Flex2>
    )
}



export default TodoList;