let navShowing = false;
let body = document.getElementsByTagName('body')[0];

const toggleNav = () => {
  if(!navShowing) {
    body.classList.add('nav-showing');
    setTimeout(() => body.classList.add('nav-showing-li'))
  } else {
    body.classList.remove('nav-showing-li');
    body.classList.remove('nav-showing');
  }
  navShowing = !navShowing;
}

export default toggleNav;