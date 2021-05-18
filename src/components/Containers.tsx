import styled from "styled-components";
import background from "../background.svg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 0 8px 10px;
`;

const ChartContainer = styled.div`
  background-color: #f2e9b4;
  border-radius: 7px;
  width: 100%;
`;

export { Container, ChartContainer };
