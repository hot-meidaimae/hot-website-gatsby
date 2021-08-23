import React, { useState, useEffect } from "react";
import { Link, PageProps } from "gatsby";

import classes from "./Navbar.module.scss";

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
          <div
            className={`navbar-end has-text-centered ${classes.SocialIcons}`}
          >
            <a
              title="line"
              href="https://lin.ee/OwLfsCc"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.SocialIcon}
            >
              <div className={classes.LineIcon} />
            </a>
            <a
              title="twitter"
              href="https://twitter.com/hotmeidaimae"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.SocialIcon}
            >
              <div className={classes.TwitterIcon} />
            </a>
            <a
              title="instagram"
              href="https://www.instagram.com/hotmeidai/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.SocialIcon}
            >
              <div className={classes.InstagramIcon} />
            </a>
            <a
              title="facebook"
              href="https://www.facebook.com/hotmeidaimae/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.SocialIcon}
            >
              <div className={classes.FacebookIcon} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
