import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Brian Seo</strong>
            <br />
          </h1>
          <h5>
            Full-Stack Software Engineer | Investor
            <br />
          </h5>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/KCSFreedom"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/brian-seo-03a6b475/"
                className="icon fa-linkedin"
              >
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:brian.k.seo@seolutionangel.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
