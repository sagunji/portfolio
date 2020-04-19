import React from 'react';

import { Avatar } from '../../public/images/images';

const HomePage = () => {
  return (
    <div id="wrapper">
      <header id="header">
        <span className="avatar"><img src={Avatar} alt="" /></span>
        <h1>This is <strong>Visualize</strong>, a responsive site template designed by <a href="http://templated.co">TEMPLATED</a><br />
						and released for free under the Creative Commons License.</h1>
        <ul className="icons">
          <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon style2 fa-500px"><span className="label">500px</span></a></li>
          <li><a href="#" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
        </ul>
      </header>
      <footer id="footer">
        <p>&copy; Untitled. All rights reserved. Design: <a href="http://templated.co">TEMPLATED</a>. Demo Images: <a href="http://unsplash.com">Unsplash</a>.</p>
      </footer>

    </div>
  );
}

export default HomePage;
