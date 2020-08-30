import { LoadHeroBackground, setHomeHeroHeight } from './home-hero';
import lazyLoad from './lazy-load/index';
import debounce from './debounce';
import toggleNav from './nav';
import { workNavIndicator } from './work';
import animateInSinglePost from './single-post';
import runAboutPage from './about';
import instagramFeed from './instagram';
import {containerToggle, setInitalClasses } from './pe';

const body = document.getElementsByTagName("body")[0];



window.addEventListener('load', () => {
  body.classList.add('loaded');
  if(!body.classList.contains('page-template-home')) {
    body.classList.add('set')
  }
  LoadHeroBackground();
  setHomeHeroHeight();
  workNavIndicator();
  animateInSinglePost();
  runAboutPage();
  if(document.querySelector('.instagram-feed')) {
    instagramFeed();
    setInitalClasses()
  }
})

window.addEventListener('resize', debounce(function() {  
  setHomeHeroHeight();  
  workNavIndicator();
}, 250))

document.querySelector('.menu-trigger').addEventListener('click', toggleNav);

document.querySelectorAll('.pe__nav li')
  .forEach(element => element.addEventListener('click', event => containerToggle(event)))