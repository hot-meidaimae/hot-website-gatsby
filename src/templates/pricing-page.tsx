import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import PageTemplate from "./PageTemplate";
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
  image: { childImageSharp: { fluid: FluidObject } } | string;
  servicePricing: {
    name: string;
    boothPrice: number;
    boothPriceTax: number;
    openPrice: number;
    openPriceTax: number;
  }[];
  showerPricing: {
    name: string;
    price: number;
  }[];
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
    <PageTemplate title={title} image={image}>
      <ServicePricing pricing={servicePricing} description={description} />
      <ShowerPricing pricing={showerPricing} description={showerDescription} />
    </PageTemplate>
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
