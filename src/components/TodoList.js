import React from "react"
import { Flex2 } from "./styles/Flex.Styled";
import { TodoListUl } from "./styles/TodoForm.Styled";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <Flex2>
            <div>
                <TodoListUl>
                    {todos.map(todo => (
                        <Todo setTodos={setTodos}
                            todos={todos}
                            text={todo.text}
                            key={todo.id}
                            todo={todo} />
                    ))}
                </TodoListUl>
            </div>
        </Flex2>
    )
}



export default TodoList;