import _ from 'lodash';
import './style.css';
import Logo from './Capture.PNG';
function component() {
  const element = document.createElement('div');
  const image = new Image(200, 150);
  image.src = Logo;
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
