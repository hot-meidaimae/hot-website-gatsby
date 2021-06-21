import React, { useState, useEffect } from "react";
import { Link, PageProps } from "gatsby";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  location: PageProps["location"];
};

const Navbar: React.FC<Props> = ({ location }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [location.pathname]);

  const toggleHamburger = () => {
    setActive((prev) => !prev);
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            ほっとステーション明大前店
          </Link>
          {/* eslint-disable-next-line */}
          <div
            className={`navbar-burger burger ${active ? "is-active" : ""}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${active ? "is-active" : ""}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/pricing">
              料金
            </Link>
            <Link className="navbar-item" to="/floor">
              席・設備
            </Link>
            <Link className="navbar-item" to="/shower">
              シャワー
            </Link>
            <Link className="navbar-item" to="/search">
              コミック検索
            </Link>
            <Link className="navbar-item" to="/tags/入荷予定表">
              新刊コミック
            </Link>
            <Link className="navbar-item" to="/blog">
              お知らせ
            </Link>
            <Link className="navbar-item" to="/access">
              アクセス
            </Link>
            <Link className="navbar-item" to="/recruit">
              アルバイト募集
            </Link>
          </div>
          <div className={`navbar-end has-text-centered`}>
            <a
              title="twitter"
              href="https://twitter.com/hotmeidaimae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <TwitterIcon style={{ fill: "#fff" }} />
              </IconButton>
            </a>
            <a
              title="instagram"
              href="https://www.instagram.com/hotmeidai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <InstagramIcon style={{ fill: "#fff" }} />
              </IconButton>
            </a>
            <a
              title="facebook"
              href="https://www.facebook.com/hotmeidaimae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <FacebookIcon style={{ fill: "#fff" }} />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
