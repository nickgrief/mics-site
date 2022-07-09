import img1 from '../images/joruno.jpg';
import img2 from '../images/jotaro.png';
import img3 from '../images/stone-ocean.jpg';
import img4 from '../images/alljojos.webp';
import img5 from '../images/jotaro2.jpeg';

const images = [img1, img2, img3, img4, img5];

export default function addImageSlider(
  parent = document.querySelector('body')
) {
  const imageSlider = document.createElement('div');
  imageSlider.classList.toggle('image-slider');
  imageSlider.style.width = '100%';
  imageSlider.style.border = '2px solid black';
  imageSlider.style.display = 'flex';
  // imageSlider.style.gap = '1rem';
  imageSlider.style.overflow = 'hidden';

  // Load images
  images.forEach((imageURL) => {
    const image = document.createElement('img');
    image.src = imageURL;
    image.style.boxSizing = 'border-box';
    image.style.height = '75vh';
    image.style.padding = '3rem';

    imageSlider.appendChild(image);
  });

  parent.appendChild(imageSlider);

  let scrollDirection = 1;
  setInterval(() => {
    if (scrollDirection > 0) {
      if (
        imageSlider.scrollWidth <=
        imageSlider.scrollLeft + imageSlider.clientWidth
      ) {
        scrollDirection *= -1;
        imageSlider.scrollLeft = imageSlider.scrollWidth - 1;
      }
    } else if (imageSlider.scrollLeft <= 0) {
      scrollDirection *= -1;
      imageSlider.scrollLeft = 1;
    }
    imageSlider.scrollLeft += scrollDirection;
  }, 5);
}
