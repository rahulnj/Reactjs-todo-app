import React from "react"
import { ContainerBody } from "./styles/Container.Styled"
import { Flex, Flex1 } from "./styles/Flex.Styled"
import { Todocontainer } from "./styles/TodoContainer.Styled"
import { Input, Select, Button } from "./styles/TodoForm.Styled"
const TodoBody = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("")
    }
    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value)
    }
    return (
        <ContainerBody>
            <Todocontainer>
                <Flex>
                    <form action="">
                        <Input value={inputText} onChange={inputTextHandler} type="text" />
                        <Button onClick={submitTodoHandler}>Add</Button>
                        <Select onChange={statusHandler} name="todos" id="filter-todos">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </Select>
                    </form>
                </Flex>
            </Todocontainer>
        </ContainerBody>
    )
}

export default TodoBody