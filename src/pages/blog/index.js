import React from "react";

import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/DSC00754_h800-min.jpg')`,
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
            お知らせ
          </h2>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </>
    );
  }
}
