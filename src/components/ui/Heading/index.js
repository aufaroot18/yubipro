import styled from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
  text-align: ${({ align }) => align && align};
`;

export default Heading;
