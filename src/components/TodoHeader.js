import { Flex } from "./styles/Flex.Styled"
import { ContainerHeader } from "./styles/Container.Styled"

export default function TodoHeader() {
    return (
        <ContainerHeader>
            <Flex>
                <h1>ToDo List</h1>
            </Flex>
        </ContainerHeader>
    )
}
