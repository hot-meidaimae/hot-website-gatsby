import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import classes from "./ReadMore.module.scss";

const ReadMore = () => (
  <div className={classes.Chip}>
    <ArrowDownwardIcon />
    MORE
  </div>
);

export default ReadMore;
