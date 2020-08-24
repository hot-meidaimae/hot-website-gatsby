import React from "react";
import styled from "styled-components";

const Shadow = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Card = (props) => (
  <Shadow className="card">
    <div className="card-image">
      <CardImage
        src={
          !!props.image.childImageSharp
            ? props.image.childImageSharp.fluid.src
            : props.image
        }
        alt="Card"
      />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
        </div>
      </div>

      <div className="content">{props.text}</div>
    </div>
  </Shadow>
);

export default Card;
