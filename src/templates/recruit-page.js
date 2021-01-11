import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'

const PreLine = styled.p`
  white-space: pre-line;
`;

export const RecruitPageTemplate = ({ title, image, description }) => {
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RecruitPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <RecruitPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        description={frontmatter.description}
      />
    </>
  );
};
export default RecruitPage;

export const RecruitPageQuery = graphql`
  query recruitPage($id: String!) {
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
        description
      }
    }
  }
`;
