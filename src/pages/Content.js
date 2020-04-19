import { Avatar } from '../../public/images/images';

import { SOCIAL_MEDIA } from '../constants/user';

export default function Content() {
  return (
    <div id="header">
      <span className="avatar"><img src={Avatar} alt="" /></span>
      {/* <h1>This is <strong>Visualize</strong>, a responsive site template designed by <a href="http://templated.co">TEMPLATED</a><br />
						and released for free under the Creative Commons License.</h1> */}
      <ul className="icons">
        {
          SOCIAL_MEDIA.map(({ title, url, icon }) => (
            <li><a href={url} className={`icon style2 ${icon}`}><span className="label">{title}</span></a></li>
          ))
        }
      </ul>
    </div>
  );
}
