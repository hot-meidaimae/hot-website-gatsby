import React from "react";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import Seats from "../components/Seats";
import Facility from "../components/Facility";
import classes from "./floor-page.module.scss";

type TemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: Props;
    };
  };
};
type Props = {
  title: string;
  image: { childImageSharp: { fluid: FluidObject } };
  floorMapImage: { childImageSharp: { fluid: FluidObject } };
  description: string;
  seats: {
    name: string;
    text: string;
    image: { childImageSharp: { fluid: FluidObject } };
  }[];
  facility: {
    name: string;
    text: string;
    image: { childImageSharp: { fluid: FluidObject } };
  }[];
  movieChannel: {
    title: string;
    text: string;
    url: string;
  }[];
  movieChannelImage: { childImageSharp: { fluid: FluidObject } };
};

export const FloorPageTemplate: React.FC<Props> = ({
  title,
  image,
  floorMapImage,
  description,
  seats,
  facility,
  movieChannel,
  movieChannelImage,
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
              <p className={classes.Description}>{description}</p>
              <Img fluid={floorMapImage.childImageSharp.fluid} />
              <Seats seats={seats} />
              <h2>設備のご案内</h2>
              <Facility facility={facility} />
              <h3>映画・動画チャンネルのご案内</h3>
              <Img
                fluid={movieChannelImage.childImageSharp.fluid}
                className={classes.MovieChannelImage}
              />
              <ul>
                {movieChannel.map((el) => (
                  <li>
                    {el.title}
                    <ul>
                      <li>{el.text}</li>
                      <li>
                        <a href={el.url}>番組表はこちら</a>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FloorPage: React.FC<TemplateProps> = ({ data }) => {
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
        movieChannel={frontmatter.movieChannel}
        movieChannelImage={frontmatter.movieChannelImage}
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
        movieChannel {
          title
          text
          url
        }
        movieChannelImage {
          childImageSharp {
            fluid(maxWidth: 512, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
