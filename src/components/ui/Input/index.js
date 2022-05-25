import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.8rem 0.8rem;
  border-radius: 5px;
  border: 1px solid #d6d4d5;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
`;

export default Input;
