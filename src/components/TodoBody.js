import React from "react"
import { ContainerBody } from "./styles/Container.Styled"
import { Flex, Flex1 } from "./styles/Flex.Styled"
import { Todocontainer } from "./styles/TodoContainer.Styled"
import { Input, Select, Button } from "./styles/TodoForm.Styled"
const TodoBody = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        console.log(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("")
    }
    return (
        <ContainerBody>
            <Todocontainer>
                <Flex>
                    <form action="">
                        <Input value={inputText} onChange={inputTextHandler} type="text" />
                        <Button onClick={submitTodoHandler}>Add</Button>
                        <Select name="todos" id="filter-todos">
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