import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import PageTemplate from "./PageTemplate";

type TemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: Props;
      html: string;
    };
  };
};
type Props = {
  title: string;
  image: { childImageSharp: { fluid: FluidObject } };
  content: string;
};

export const ShowerPageTemplate: React.FC<Props> = ({
  title,
  image,
  content,
}) => {
  return (
    <PageTemplate title={title} image={image}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageTemplate>
  );
};

const ShowerPage: React.FC<TemplateProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <ShowerPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        content={data.markdownRemark.html}
      />
    </>
  );
};
export default ShowerPage;

export const showerPageQuery = graphql`
  query ShowerPage($id: String!) {
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
      }
    }
  }
`;
