import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import ServicePricing from "../components/Pricing";
import ShowerPricing from "../components/PricingShower";

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
  servicePricing: number;
  showerPricing: number;
  description: string;
  showerDescription: string;
};

export const PricingPageTemplate: React.FC<Props> = ({
  title,
  image,
  servicePricing,
  showerPricing,
  description,
  showerDescription,
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
              <ServicePricing
                pricing={servicePricing}
                description={description}
              />
              <ShowerPricing
                pricing={showerPricing}
                description={showerDescription}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingPage: React.FC<TemplateProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <PricingPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        servicePricing={frontmatter.servicePricing}
        showerPricing={frontmatter.showerPricing}
        description={frontmatter.description}
        showerDescription={frontmatter.showerDescription}
      />
    </>
  );
};
export default PricingPage;

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
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
        showerDescription
        servicePricing {
          name
          boothPrice
          boothPriceTax
          openPrice
          openPriceTax
        }
        showerPricing {
          name
          price
        }
      }
    }
  }
`;
