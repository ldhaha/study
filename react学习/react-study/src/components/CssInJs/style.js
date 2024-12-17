import styled from "styled-components";
const outVariable = "bold";
// attrs 设置默认值
export const AppWrapper = styled.div.attrs((props) => {
  return {
    tSize: props.fontSize || "36px",
  };
})`
  .title {
    color: ${(props) => props.color};
    font-size: ${(props) => props.tSize};
    font-weight: ${outVariable};
  }
`;
