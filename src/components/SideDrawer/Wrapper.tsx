import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 10px;
  border: 1px solid #808080ba;
  border-radius: 8px;
  background-color: #f6151521;
`;


interface Props {
  label: string;
}

const Wrapper: React.FC<Props> = ({ label, children }) => {
  return (
    <Container>
      <h5>{label}</h5>
      {children}
    </Container>
  );
};

export default Wrapper;
