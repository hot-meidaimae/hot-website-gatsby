import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: stretch;
`;

const SearchBox = styled.div`
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  color: #9e2236;
  background: #fff;
  border: solid 3px #f4b4d0;
  border-radius: 10px;
`;

const KeywordSearch = (props) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value.trim() === "") {
      return;
    }
    setLoading(true);
    // console.log(event.target[0].value);
    axios
      .get(
        "https://laravel.hot-meidaimae.com/api/search?key_type=both&keyword=" +
          event.target[0].value
      )
      .then((res) => {
        // console.log(res);
        setResult(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  let resultDom = null;
  if (loading) {
    resultDom = <>検索中…</>;
  } else if (result) {
    if (result.length) {
      const editedResult = result.filter(
        (x, i, self) => self.findIndex((el) => el.title === x.title) === i
      );
      resultDom = (
        <>
          <p>検索結果：</p>
          <ul>
            {editedResult.map((el) => (
              <li key={el.title}>
                {el.title} {el.author}：*{el.shelf}
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      resultDom = (
        <>
          <p>検索結果：</p>
          <p>お探しのキーワードのマンガは見つかりませんでした。</p>
        </>
      );
    }
  }

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
      {(loading || result) && (
        <SearchBox>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {resultDom}
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={
                  !!props.floorMapImage.childImageSharp
                    ? props.floorMapImage.childImageSharp.fluid.src
                    : props.floorMapImage
                }
                alt="floorMap"
              />
            </Grid>
          </Grid>
        </SearchBox>
      )}
    </>
  );
};

export default KeywordSearch;
