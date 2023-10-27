const texts = ["Hi, I am Aryaman Kalia, a programmer.", "I love coding and building things."];
let index = 0;
let isDeleting = false;
let textIndex = 0;
let delay = 100; // Adjust the typing speed here (in milliseconds)

function typeWriter() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    document.getElementById("intro-text").innerHTML = currentText.substring(0, index - 1);
    index--;
  } else {
    document.getElementById("intro-text").innerHTML = currentText.substring(0, index + 1);
    index++;
  }
  if (!isDeleting && index === currentText.length) {
    isDeleting = true;
    delay = 100; // Set the duration to pause after writing
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    delay = 100;
  }
  setTimeout(typeWriter, delay);
}

typeWriter();