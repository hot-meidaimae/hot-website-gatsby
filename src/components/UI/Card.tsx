import React from "react";
import Img, { FluidObject } from "gatsby-image";

import classes from "./Card.module.scss";

type Props = {
  name: string;
  text: string;
  image: { childImageSharp: { fluid: FluidObject } } | string;
};

const Card: React.FC<Props> = (props) => (
  <div className={"card " + classes.CardBox}>
    <div className="card-image">
      {typeof props.image === "string" ? (
        <img src={props.image} />
      ) : (
        <Img fluid={props.image.childImageSharp.fluid} />
      )}
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
        </div>
      </div>

      <div className={"content " + classes.CardText}>{props.text}</div>
    </div>
  </div>
);

export default Card;
