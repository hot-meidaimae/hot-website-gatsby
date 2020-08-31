import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import styled from "styled-components";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

SwiperCore.use([EffectFade, Autoplay]);

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
  z-index: 10;
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
    top: 52px;
    left: 0;
    transform: translate(0);
    border-radius: 0;
  }
`;

const Slide = styled.div`
  height: 100vh;
  margin-top: -52px;
  background-image: url(${(props) =>
    !!props.el.image.childImageSharp
      ? props.el.image.childImageSharp.fluid.src
      : props.el.image});
  background-size: cover;
  background-position: center;
`;

export const IndexPageTemplate = ({
  image,
  photos,
  heading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Logo>
      <img
        src={`${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }`}
        alt="Logo"
      />
    </Logo>
    <Swiper
      effect="fade"
      loop={true}
      speed={2000}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      {photos.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <Slide el={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
    <div
      className="is-vcentered"
      style={{
        backgroundColor: "#f3f5f6",
        textAlign: "center",
      }}
    >
      <div className="column" style={{ whiteSpace: "pre-line" }}>
        <h1 className="title">{mainpitch.title}</h1>
        <h3 className="subtitle">{mainpitch.description}</h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">お知らせ</h3>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    もっと見る
                  </Link>
                </div>
              </div>
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/products">
                    詳しく見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  photos: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        photos={frontmatter.photos}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photos {
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        heading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
