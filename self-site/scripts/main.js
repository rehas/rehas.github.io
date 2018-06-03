var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/selfie.JPG') {
      myImage.setAttribute ('src','images/selfie2.JPG');
    } else {
      myImage.setAttribute ('src','images/selfie.JPG');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
