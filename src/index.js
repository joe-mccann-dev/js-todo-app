import './style.css';
import testImage from './images/150.png'

function component() {
  const element = document.createElement('div');

  element.textContent = 'Hello World!'
  element.classList.add('hello');


  const image = new Image();
  image.src = testImage;

  element.appendChild(image);

  return element;
}

document.body.appendChild(component());