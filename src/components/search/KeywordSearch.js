import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: stretch;
`;

const KeywordSearch = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    axios
      .get(
        "https://hot-meidaimae.com/laravel/public/api/search?key_type=both&keyword=" +
          event.target[0].value
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <TextField
          id="keyword"
          label="キーワード検索"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          検索
        </Button>
      </Form>
    </>
  );
};

export default KeywordSearch;
