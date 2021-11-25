import React from "react"
import { ContainerBody } from "./styles/Container.Styled"
import { Flex, Flex1 } from "./styles/Flex.Styled"
import { Todocontainer } from "./styles/TodoContainer.Styled"
import { Input, Select, Button } from "./styles/TodoForm.Styled"
export default function TodoBody() {
    return (
        <ContainerBody>
            <Todocontainer>
                <Flex>
                    <form action="">
                        <Input type="text" />
                        <Button type="submit">Add</Button>
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