// Your code here.
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Get the initial mouse position
  startX = e.pageX - slider.offsetLeft;
  // Store the initial scroll position of the slider
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop the function from running if the mouse is not down
  e.preventDefault();
  // Get the new mouse position and calculate the distance moved
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
  // Update the scroll position of the slider
  slider.scrollLeft = scrollLeft - walk;
});

