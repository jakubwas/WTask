// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Header = styled.div`
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 600;
  align-self: flex-start;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
`;
// React Component
const StatusSectionHeader = (props) => {
  return <Header>{props.children}</Header>;
};

export default StatusSectionHeader;
