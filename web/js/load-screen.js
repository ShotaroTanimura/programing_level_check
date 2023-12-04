// Control the display of the load screen
window.addEventListener('load', function () {
  const loader = document.getElementById('loadScreen');
  setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
          loader.style.display = 'none';
      }, 500); // half-second for fade out
  }, 2000); // assuming 2 seconds for loading
});
