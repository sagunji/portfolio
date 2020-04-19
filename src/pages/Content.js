import { Avatar } from '../assets/images/images';

import { SOCIAL_MEDIA } from '../constants/user';

export default function Content() {
  return (
    <div id="header">
      <span className="avatar"><img src={Avatar} alt="" /></span>
      <ul className="icons">
        {
          SOCIAL_MEDIA.map(({ title, url, icon }) => (
            <li key={title}><a href={url} className={`icon style2 ${icon}`} target="_blank" rel="noopener"><span className="label">{title}</span></a></li>
          ))
        }
        <li><a href="mailto:karanjit.sagun01@gmail.com" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
      </ul>
    </div>
  );
}
