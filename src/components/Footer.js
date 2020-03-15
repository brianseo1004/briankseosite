import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
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
      </div>
    )
  }
}

export default Footer
