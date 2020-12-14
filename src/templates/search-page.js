import React, { useState } from "react";
import { graphql } from "gatsby";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/Layout";
import KeywordSearch from "../components/search/KeywordSearch";
import CharSearch from "../components/search/CharSearch";
import MapDialog from "../components/search/MapDialog";

const Box = styled.div`
  margin-top: 1rem;
`;

export const SearchPageTemplate = ({
  title,
  image,
  description,
  floorMapImage,
  magazines,
}) => {
  const [value, setValue] = useState(0);
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
              <h3>キーワード検索</h3>
              <KeywordSearch floorMapImage={floorMapImage} />

              <h3>五十音検索</h3>
              <Tabs
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<MenuBookIcon />} label="タイトルで検索" />
                <Tab icon={<PersonIcon />} label="作者名で検索" />
              </Tabs>
              <Box>
                <CharSearch
                  floorMapImage={floorMapImage}
                  mode={value === 0 ? "title" : "author"}
                  magazines={magazines}
                />
              </Box>
            </div>
          </div>
        </div>
        <MapDialog floorMapImage={floorMapImage} />
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
        floorMapImage={frontmatter.floorMapImage}
        magazines={frontmatter.magazines}
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
        floorMapImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        magazines
      }
    }
  }
`;
