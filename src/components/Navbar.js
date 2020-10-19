import React from "react";
import { Link } from "gatsby";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const Icons = styled.div`
  .MuiIconButton-colorPrimary {
    color: #fff;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
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
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/pricing">
                料金
              </Link>
              <Link className="navbar-item" to="/floor">
                席・設備
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
            <Icons className="navbar-end has-text-centered">
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
      </nav>
    );
  }
};

export default Navbar;
