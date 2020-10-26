import React from "react";
import Chip from "@material-ui/core/Chip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styled from "styled-components";

const Root = styled.div`
  .MuiChip-root {
    height: 50px;
    padding: 10px;
    background-color: #15116f;
    border-radius: 100px;
    font-size: 1.1rem;
  }
`;

const ReadMore = () => (
  <Root>
    <Chip icon={<ArrowDownwardIcon />} color="primary" label="MORE" />
  </Root>
);

export default ReadMore;
