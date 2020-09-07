import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import KeywordSearch from "../components/search/KeywordSearch";

export const SearchPageTemplate = ({ title, image, description }) => {
  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
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
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3>キーワード検索</h3>
              <KeywordSearch />

              <h3>五十音検索</h3>
              {/* <Pricing pricing={pricing} description={description} /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SearchPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SearchPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        description={frontmatter.description}
      />
    </Layout>
  );
};
export default SearchPage;

export const searchPageQuery = graphql`
  query SearchPage($id: String!) {
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
