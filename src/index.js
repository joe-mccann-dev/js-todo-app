import './style.css';
import Todo from './todo';
// import testImage from './images/150.png'

function home() {
  const content = document.querySelector('#content');

  const todo = Todo('clean room')
  todo.setTitle('new title')
  content.textContent = todo.title;
  return content;
}

home();