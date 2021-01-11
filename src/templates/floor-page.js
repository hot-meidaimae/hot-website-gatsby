import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Seats from "../components/Seats";
import Facility from "../components/Facility";

const PreLine = styled.p`
  white-space: pre-line;
`;

export const FloorPageTemplate = ({
  title,
  image,
  floorMapImage,
  description,
  seats,
  facility,
}) => {
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
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PreLine>{description}</PreLine>
              <Img fluid={floorMapImage.childImageSharp.fluid} />
              <Seats seats={seats} />
              <h2>設備のご案内</h2>
              <Facility facility={facility} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FloorPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <FloorPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        floorMapImage={frontmatter.floorMapImage}
        description={frontmatter.description}
        seats={frontmatter.seats}
        facility={frontmatter.facility}
      />
    </>
  );
};
export default FloorPage;

export const floorPageQuery = graphql`
  query FloorPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        floorMapImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        seats {
          name
          text
          image {
            childImageSharp {
              fluid(maxWidth: 512, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        facility {
          name
          text
          image {
            childImageSharp {
              fluid(maxWidth: 512, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
