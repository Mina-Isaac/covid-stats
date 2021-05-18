import React from "react";
import styled from "styled-components";
import { selectError } from "../store/dataReducer";
import { useAppSelector } from "../store/hooks";

const Wrapper = styled.div`
  background-color: var(--bgColor);
  width: 30%;
  height: 20%;
  margin: auto;
  color: #ac2020;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  font-size: 12px;
`;

const ErrorMessage: React.FC = () => {
  const errorMessage = useAppSelector(selectError);
  const message =
    typeof errorMessage === "string" ? errorMessage : errorMessage?.message;
  return (
    <Wrapper>
      <h2>{message || "Error"}</h2>
    </Wrapper>
  );
};
export default React.memo(ErrorMessage);
