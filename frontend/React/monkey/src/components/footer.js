import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div id="footer">
        <div class="footer container">
          <div class="brand"><h1><span>KEMPEL</span>'S <span>WEB</span>SITE</h1></div>
          <h2>Its All Good Just Chilling</h2>
          <div class="social-icon">
            <div class="social-item">
              <Link to="#"><img alt="facebook mini logo" src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"/></Link>
            </div>
            <div class="social-item">
              <Link to="#"><img alt="instagram mini logo" src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"/></Link>
            </div>
            <div class="social-item">
              <Link to="#"><img alt="twitter mini logo" src="https://img.icons8.com/bubbles/100/000000/twitter.png"/></Link>
            </div>
            <div class="social-item">
              <Link to="#"><img alt="behance mini logo" src="https://img.icons8.com/bubbles/100/000000/behance.png"/></Link>
            </div>
          </div>
          <p>Copyright © 2021 Kempel. All rights reserved</p>
        </div>
      </div>
    )
}

export default Footer
