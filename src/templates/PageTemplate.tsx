import React from "react";
import { FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import classes from "./PageTemplate.module.scss";

type Props = {
  title: string;
  image: { childImageSharp: { fluid: FluidObject } };
};

const PageTemplate: React.FC<Props> = ({ title, image, children }) => {
  return (
    <div className="content">
      <BackgroundImage
        className="full-width-image-container margin-top-0"
        fluid={image.childImageSharp.fluid}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #222457, -0.5rem 0 0 #222457",
            backgroundColor: "#222457",
            color: "white",
            padding: "1rem",
          }}
        >
          {title}
        </h2>
      </BackgroundImage>
      <div className={classes.Content}>{children}</div>
    </div>
  );
};

export default PageTemplate;
