import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"

const CardBox = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  color: #4a4a4a;
  transition: transform 0.2s;
  transform: scale(1);
  border-radius: 15px;
  overflow: hidden;
`;

const Card = (props) => (
  <CardBox className="card">
    <div className="card-image">
      <Img fluid={props.image.childImageSharp.fluid} />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
        </div>
      </div>

      <div className="content">{props.text}</div>
    </div>
  </CardBox>
);

export default Card;
