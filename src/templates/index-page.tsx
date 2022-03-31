import React from "react";
import { Link, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import circleLogo from "../img/HotStation_logo-min.png";
import Img, { FluidObject } from "gatsby-image";

import BlogRoll from "../components/BlogRoll";
import ReadMore from "../components/home/ReadMore";
import Facility from "../components/Facility";
import classes from "./index-page.module.scss";

SwiperCore.use([EffectFade, Autoplay]);

type TemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: Props;
    };
  };
};
type Props = {
  image: { childImageSharp: { fluid: FluidObject } } | string;
  slideImages:
    | { childImageSharp: { fluid: FluidObject } }[]
    | string[];
  newcomerHeading: string;
  newcomerImage: { childImageSharp: { fluid: FluidObject } } | string;
  heading: string;
  mainpitch: { title: string; description: string };
  description: string;
  intro: {
    name: string;
    text: string;
    image: { childImageSharp: { fluid: FluidObject } } | string;
  }[];
};

export const IndexPageTemplate: React.FC<Props> = ({
  image,
  slideImages,
  newcomerHeading,
  newcomerImage,
  heading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className={classes.Logo}>
      <picture>
        <source srcSet={circleLogo} media="(max-width:600px)" />
        <img
          src={`${
            typeof image === "string" ? image : image.childImageSharp.fluid.src
          }`}
          alt="Logo"
        />
      </picture>
    </div>
    <div className={classes.ReadMore}>
      <ReadMore />
    </div>
    <Swiper
      effect="fade"
      loop={true}
      speed={2000}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      {slideImages.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <div className={classes.Slide}>
              {typeof el === "string" ? (
                <img
                  src={el}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              ) : (
                <Img
                  fluid={el.childImageSharp.fluid}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
                />
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

    <section className="section section--gradient">
      <div className="container">
        <div>
          <h3 className={classes.Heading}>お知らせ</h3>
          <div className={classes.MainPitchContainer}>
            <h1 className="title">{mainpitch.title}</h1>
            <h3 className={classes.MainPitchDescription}>
              <div
                dangerouslySetInnerHTML={{ __html: mainpitch.description }}
              />
            </h3>
          </div>
          <BlogRoll isTop />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              もっと見る
            </Link>
          </div>
        </div>
        <div className={classes.MainPitchContainer}>
          <h3 className={classes.Heading}>{newcomerHeading}</h3>
          <a
            href={
              typeof newcomerImage === "string"
                ? newcomerImage
                : newcomerImage.childImageSharp.fluid.src
            }
          >
            {typeof newcomerImage === "string" ? (
              <img src={newcomerImage} />
            ) : (
              <Img fluid={newcomerImage.childImageSharp.fluid} />
            )}
          </a>
        </div>
        <div className="column is-12">
          <h3 className={classes.Heading}>{heading}</h3>
          <p className={classes.Description}>{description}</p>
          <Facility facility={intro} />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/floor">
              もっと見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const IndexPage: React.FC<TemplateProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <IndexPageTemplate
        image={frontmatter.image}
        slideImages={frontmatter.slideImages}
        newcomerHeading={frontmatter.newcomerHeading}
        newcomerImage={frontmatter.newcomerImage}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </>
  );
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
        slideImages {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        newcomerHeading
        newcomerImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
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
