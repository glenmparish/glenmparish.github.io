const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/enceladus.jpg') {
      myImage.setAttribute ('src','images/europa.jpg');
    } else {
      myImage.setAttribute ('src','images/enceladus.jpg');
    }
}

let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

myButton.onclick = function() {
    setUserName();
  }
