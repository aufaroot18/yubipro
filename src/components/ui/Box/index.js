import styled from "styled-components";

const Box = styled.div`
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
`;

export default Box;
