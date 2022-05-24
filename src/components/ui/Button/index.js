import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem;
  border-radius: 5px;
  border: none;
  display: block;
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
