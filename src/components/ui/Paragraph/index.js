import styled from "styled-components";

const Paragprah = styled.p`
  font-size: ${({ size }) => size && `${size}rem`};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.gray};

  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
`;

export default Paragprah;
