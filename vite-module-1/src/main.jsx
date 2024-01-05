import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
  'a',
  {
    href: 'https://powtorkazreacta.pl',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  'Powtórka z Reacta'
);

const elementInJSX = (
  <a
    href="https://powtórkazreacta.pl"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powtórka z Reacta
  </a>
);
console.log(elementInJSX);
console.log(element);
ReactDOM.createRoot(document.getElementById('root')).render(element);

// getting current time
const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log(currentDate, hours, minutes);

const timer = <div className="timer">{hours}</div>;

ReactDOM.createRoot(document.getElementById('root')).render(timer);
// const timerElement = document.querySelector('.timer');

// timerElement.textContent = `Learn, although now is ${hours} : ${minutes} late!`;
