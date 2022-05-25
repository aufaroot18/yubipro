import styled from "styled-components";

const Box = styled.div`
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};

  padding: ${({ p }) => p && `${p}rem`};
  padding-bottom: ${({ pb }) => pb && `${pb}rem`};
  padding-top: ${({ pt }) => pt && `${pt}rem`};
  padding-right: ${({ pr }) => pr && `${pr}rem`};
  padding-left: ${({ pl }) => pl && `${pl}rem`};
`;

export default Box;
