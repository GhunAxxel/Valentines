var noButton = document.getElementById('hindi');
var textOptions = [
  "Isa ha",
  "Come on my pookie wookie",
  "Mag cry ako",
  "RASHENNN",
  "Ganyanan",
  "PLEASEEEE",
  "Pakyu ",
  "Pakyu../..",
  "please say yes na"

]; 
var currentIndex = 0;

function changeNoButtonText() {
  noButton.textContent = textOptions[currentIndex];
  currentIndex = (currentIndex + 1) % textOptions.length;
  if (currentIndex === 0) {

  }
}




function increaseYesButton() {
    var yesButton = document.getElementById('oo');

    var currentWidth = window.getComputedStyle(yesButton).getPropertyValue('width');
    var newWidth = (parseFloat(currentWidth) * 1.5) + 'px'; 
    yesButton.style.width = newWidth;

    var currentHeight = window.getComputedStyle(yesButton).getPropertyValue('height');
    var newHeight = (parseFloat(currentHeight) * 1.5) + 'px';
    yesButton.style.height = newHeight;

    var currentSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newSize = (parseFloat(currentSize) * 1.5) + 'px';
    yesButton.style.fontSize = newSize;

    yesButton.style.backgroundColor = 'darkgreen';

    changeNoButtonText();
}

noButton.addEventListener('click', changeNoButtonText);