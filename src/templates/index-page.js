import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import circleLogo from "../img/HotStation_logo-min.png";
import styled from "styled-components";
import Img from "gatsby-image"

import BlogRoll from "../components/BlogRoll";
import ReadMore from "../components/home/ReadMore";
import Facility from "../components/Facility";

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
    width: 60%;
  }
`;

const ReadMoreDiv = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Slide = styled.div`
  height: 100vh;
  margin-top: -52px;
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
      <picture>
        <source srcSet={circleLogo} media="(max-width:600px)" />
        <img
          src={`${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          }`}
          alt="Logo"
        />
      </picture>
    </Logo>
    <ReadMoreDiv>
      <ReadMore />
    </ReadMoreDiv>
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
            <Slide>
              <Img fluid={el.childImageSharp.fluid} style={{height: "100%"}} imgStyle={{objectFit: "cover", objectPosition: "50% 50%"}} />
            </Slide>
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
                  <Facility facility={intro} />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/floor">
                      もっと見る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <IndexPageTemplate
        image={frontmatter.image}
        photos={frontmatter.photos}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </>
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
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photos {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        mainpitch {
          title
          description
        }
        description
        intro {
          name
          text
          image {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
