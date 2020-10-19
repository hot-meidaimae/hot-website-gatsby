import React from "react";
import { Link } from "gatsby";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

import logo from "../img/HotStation_logo-min.png";

const Icons = styled.div`
  text-align: center;
  
  .MuiIconButton-colorPrimary {
    color: #fff;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="HotStation"
            style={{ width: "14em", height: "14em" }}
          />
        </div>
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/pricing">
                        料金
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/floor">
                        席・設備
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/search">
                        コミック検索
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        お知らせ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/access">
                        アクセス
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <Icons className="column is-4 social">
                <a
                  title="twitter"
                  href="https://twitter.com/hotmeidaimae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="primary">
                    <TwitterIcon />
                  </IconButton>
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/hotmeidai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="primary">
                    <InstagramIcon />
                  </IconButton>
                </a>
                <a
                  title="facebook"
                  href="https://www.facebook.com/hotmeidaimae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="primary">
                    <FacebookIcon />
                  </IconButton>
                </a>
              </Icons>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
