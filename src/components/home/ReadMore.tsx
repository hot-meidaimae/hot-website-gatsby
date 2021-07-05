import React from "react";
import Chip from "@material-ui/core/Chip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const ReadMore = () => (
  <Chip
    icon={<ArrowDownwardIcon />}
    color="primary"
    label="MORE"
    style={{
      backgroundColor: "#15116f",
      height: "50px",
      padding: "10px",
      borderRadius: "100px",
      fontSize: "1.1rem",
    }}
  />
);

export default ReadMore;
