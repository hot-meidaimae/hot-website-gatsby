import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const BlogRoll = () => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 200, truncate: true)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "YYYY年MM月DD日")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    詳しく読む →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    </>
  );
};

export default BlogRoll;
