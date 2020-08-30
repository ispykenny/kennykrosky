import sleeveTheText from "./sleeve-text";

const body = document.getElementsByTagName("body")[0];
let hasScrolled = false;
const runAboutPage = () => {
  if(body.classList.contains('page-template-about')) {
    const circle = document.querySelector('.circle')
    const updateScroll = () => {
      hasScrolled = true;
    }
    const runTicker = () => {
      if(hasScrolled) {
        circle.style.transform = `translateY(${window.pageYOffset / 4}%)`
        hasScrolled = false
      }
      requestAnimationFrame(runTicker)
    }
  
    requestAnimationFrame(runTicker);
    window.addEventListener('scroll', updateScroll);
    sleeveTheText('.me-section__item-inner');
    setTimeout(() => body.classList.add('init-about'), 500)


  }
}

export default runAboutPage