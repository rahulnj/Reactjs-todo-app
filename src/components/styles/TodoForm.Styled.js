import styled from "styled-components"

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color:  rgba(153, 0, 255, 0.959);
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 0.5px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`
export const Select = styled.select`
  max-width: 100%;
  padding: 10px;
  background: #f9f9fa;
  color:  rgba(153, 0, 255, 0.959);
  margin: 5px;
  border-radius: 20px;
  outline: 0;
  border: 0.5px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
 
`

export const Button = styled.button`
border-radius: 50px;
border:none;
box-shadow: 0 0 10px rgba(o,o,1);
cursor: pointer;
font-size: 12px;
font-weight: 500;
padding: 10px 25px;
margin-left: 5px;
margin-right: 5px;
background-color:  rgba(153, 0, 255, 0.959);
color: #fff;

&:hover{
    opacity: 0.9;
    transform: scale(0.98);
    
}
`