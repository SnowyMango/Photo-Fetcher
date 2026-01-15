const button = document.getElementById('fetch-button');
const grayscaleToggle = document.getElementById('toggle-button');
const images = document.querySelectorAll('.photo');

// const bgButton = document.getElementById('bgColor');

// bgButton.addEventListener("click", function(){
//   document.body.style.backgroundColor = "rgb(" +
//     Math.floor(Math.random() * 256) + "," +
//     Math.floor(Math.random() * 256) + "," +
//     Math.floor(Math.random() * 256) + ")";
// })


async function fetchImages() {
  images.forEach(async (img) => {
    const response = await fetch('https://picsum.photos/300');
    img.src = response.url;
  });
}
fetchImages();
button.addEventListener('click', fetchImages);

grayscaleToggle.addEventListener('change', function () {
  images.forEach(img => {
    img.style.filter = this.checked ? 'grayscale(100%)' : 'none';
  });
});
