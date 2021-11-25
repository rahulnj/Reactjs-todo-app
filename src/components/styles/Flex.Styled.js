import styled from "styled-components"

export const Flex = styled.div`
display: flex;
justify-content: center;
&>div{
    flex: 1;
}
`
export const Flex1 = styled.div`
display: flex;
flex-direction: column;
`

export const Flex2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

`
