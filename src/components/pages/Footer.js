import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab)

const footer = () => (
  <div className="footer">
  <div className="section1">
  <h2>contact</h2>
  <h4>Post:</h4>
  <p>PO Box 509</p>
  <h4>Phone:</h4>
  <p>1300 12 12 97</p>
  <h4>Newsletter:</h4>
  <a target="_blank" rel="noopener noreferrer" href="https://worldsbiggestgaragesale.com.au/contact-us/newsletter/">Sign up</a>
  </div>
  <div className="section2">
  <h2>Social</h2>
  <a target="_blank" rel="noopener noreferrer" className="Icon" href="https://www.facebook.com/worldsbiggestgaragesale"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
  <a target="_blank" rel="noopener noreferrer" className="Icon" href="https://twitter.com/WBGS_Global"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
  <a  target="_blank"rel="noopener noreferrer" className="Icon" href="https://www.instagram.com/wbgs_global/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
  </div>
  <div className="section3">
  <a target="_blank"  rel="noopener noreferrer" href="https://worldsbiggestgaragesale.com.au"><img src="/Assets/WBGS-logo.png" alt="wbgs logo" className="FooterLogo" /></a>
  </div>
  </div>



)

export default footer