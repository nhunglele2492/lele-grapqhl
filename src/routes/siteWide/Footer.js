import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../Assets/images/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <Link className="footer__logo" to="/" label="logo"><img src={logo} alt=''/></Link>
          <ul className="footer__social-links social-links--inline text-center"><li><a className="hover-color-facebook" href="http://www.facebook.com/morethan.just.themes/">Facebook</a></li>
            <li><a className="hover-color-twitter" href="http://twitter.com/morethanthemes/">Twitter</a></li>
            <li><a className="hover-color-behance" href="https://www.behance.net/morethanthemes">Behance</a></li>
            <li><a className="hover-color-youtube" href="https://www.youtube.com/user/morethanthemes/videos">Youtube</a></li>
            <li><a className="hover-color-instagram" href="/">Instagram</a></li>
            <li><a className="hover-color-vimeo" href="/">Vimeo</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
