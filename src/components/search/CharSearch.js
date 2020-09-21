import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const Root = styled.div`
  .MuiButtonBase-root {
    font-weight: bold;
    color: #9e2236;
    background-color: #f0f0f0;
  }
  .MuiPaper-root {
    color: #9e2236;
    margin-bottom: 5px;
    overflow: hidden;
  }
  .MuiAccordion-rounded {
    border-radius: 15px;
    &:first-child {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    &:last-child {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
  .MuiAccordion-root:before {
    display: none;
  }
`;

const CharSearch = (props) => {
  const [result, setResult] = useState();

  useEffect(() => {
    setResult(null);
    axios
      .get(
        "https://hot-meidaimae.com/laravel/public/api/" + props.mode + "index"
      )
      .then((res) => {
        console.log(res);
        delete res.data.message;
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.mode]);

  const sortedResult = [];
  if (result) {
    for (let i = 0; i < 10; i++) {
      const tmp = {};
      if (i < 7) {
        for (let j = 0; j < 5; j++) {
          const keyName = Object.keys(result)[5 * i + j];
          tmp[keyName] = { ...result[keyName] };
        }
      } else if (i === 7) {
        for (let j = 0; j < 3; j++) {
          const keyName = Object.keys(result)[35 + j];
          tmp[keyName] = { ...result[keyName] };
        }
      } else if (i === 8) {
        for (let j = 0; j < 5; j++) {
          const keyName = Object.keys(result)[38 + j];
          tmp[keyName] = { ...result[keyName] };
        }
      } else {
        for (let j = 0; j < 2; j++) {
          const keyName = Object.keys(result)[43 + j];
          tmp[keyName] = { ...result[keyName] };
        }
      }
      sortedResult.push(tmp);
    }
    console.log(sortedResult);
  }

  const authorResult = {};
  if (props.mode === "author" && result) {
    Object.keys(result).forEach((k) => {
      const tmp = {};
      result[k].forEach((el) => {
        if (!(el.author in tmp)) tmp[el.author] = [];
        tmp[el.author].push(el);
      });
      authorResult[k] = tmp;
    });
    console.log(authorResult);
  }

  return (
    <Root>
      <Grid container spacing={3}>
        {result ? (
          sortedResult.map((el, index) => (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <div>
                  {Object.keys(el).map((el) => (
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        {el}
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          {props.mode === "title"
                            ? result[el]
                                .filter(
                                  (x, i, self) =>
                                    self.findIndex(
                                      (el) => el.title === x.title
                                    ) === i
                                )
                                .map((el) => (
                                  <li key={el.title}>
                                    {el.title}*{el.shelf}
                                  </li>
                                ))
                            : Object.keys(authorResult[el]).map((k) => (
                                <li>
                                  <b>{k}</b>
                                  <ul>
                                    {authorResult[el][k].map((el) => (
                                      <li>
                                        {el.title}*{el.shelf}
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </Grid>
              {(index === 2 || index === 5 || index === 9) && (
                <img
                  src={
                    !!props.floorMapImage.childImageSharp
                      ? props.floorMapImage.childImageSharp.fluid.src
                      : props.floorMapImage
                  }
                  alt="floorMap"
                />
              )}
            </>
          ))
        ) : (
          <div>コミック一覧読み込み中…</div>
        )}
      </Grid>
    </Root>
  );
};

export default CharSearch;
