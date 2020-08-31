import sleeveTheText from "./sleeve-text";
const body = document.getElementsByTagName("body")[0];

const getTransitionEndEventName = () => {
  let transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
   }
  let bodyStyle = document.body.style;
  for(let transition in transitions) {
      if(bodyStyle[transition] != undefined) {
          return transitions[transition];
      } 
  }
}


const LoadHeroBackground = () => {
  let transitionType = getTransitionEndEventName();
  if(!body.classList.contains('page-template-home')) return;
    let lastSleeve = document.querySelector('.sleeves__item:last-of-type')
    lastSleeve.addEventListener(transitionType, () => {
      body.classList.add('set')
    });
    sleeveTheText('.hdr-home .hdr-content__inner')
}

const setHomeHeroHeight = () => {
  if(!body.classList.contains('page-template-home')) return;
    const homeHero = document.querySelector('.hdr-home');
    const homeHeroContent = homeHero.querySelector('.hdr-content');
    let setHeight = homeHeroContent.offsetHeight + 'px';
    homeHero.style.minHeight = setHeight
    homeHero.querySelector('.inner').style.minHeight = setHeight
}



export {LoadHeroBackground, setHomeHeroHeight}