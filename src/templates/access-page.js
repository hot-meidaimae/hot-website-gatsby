import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const PreLine = styled.p`
  white-space: pre-line;
`;

export const AccessPageTemplate = ({
  title,
  image,
  accessImage,
  description,
}) => {
  return (
    <div className="content">
        <BackgroundImage className="full-width-image-container margin-top-0" fluid={image.childImageSharp.fluid} >
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
              <iframe
                title="ほっとステーション明大前店マップ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.313661728085!2d139.64838431525857!3d35.669277980197045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f307819de791%3A0x8ec639cb17f07b30!2z44G744Gj44Go44K544OG44O844K344On44OzIOaYjuWkp-WJjeW6lw!5e0!3m2!1sja!2sjp!4v1601306926519!5m2!1sja!2sjp"
                width="100%"
                height="500"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
              ></iframe>
              <Img fluid={accessImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AccessPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <AccessPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        accessImage={frontmatter.accessImage}
        description={frontmatter.description}
      />
    </>
  );
};
export default AccessPage;

export const AccessPageQuery = graphql`
  query accessPage($id: String!) {
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
        accessImage {
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
