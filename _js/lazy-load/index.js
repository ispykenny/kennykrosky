import { setBackgroundImages } from "./backgrounds";
import { getImageRatio , initDomImages } from "./images";
const all_images = document.querySelectorAll('img');
const background_images = document.querySelectorAll('.section-bg');


if(all_images.length) {
  getImageRatio(all_images);
}

window.onload = () => {
  if(all_images) {
    let allImages = document.querySelectorAll('img');
    initDomImages(allImages)
  }
  if(background_images.length) {
    setBackgroundImages();
  }
};