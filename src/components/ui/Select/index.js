import styled from "styled-components";

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.8rem 0.8rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: #fff;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
`;

export default Select;
