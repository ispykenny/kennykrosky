const animateInSinglePost = () => {
  const body = document.getElementsByTagName('body')[0];
  if(body.classList.contains('single-post') || body.classList.contains('single-products')) {
    let hasUserScrolled = false;
    let heroImage = document.querySelector('.single-blog-hero__content');
    document.getElementsByTagName('body')[0].classList.add('init-blog');

    let lastSleeve = document.querySelector('.single-blog-hero__an:last-of-type')
    
    setTimeout(() => {
      body.classList.add('show-content')
    }, 200)



    const runTickerr = () => {hasUserScrolled = true};

    const paralax = () => {
      if(hasUserScrolled) {
        heroImage.style.transform = `translateY(${window.pageYOffset / 35}%)`
        hasUserScrolled = false;
      }
      requestAnimationFrame(paralax);
    }

    requestAnimationFrame(paralax);
    window.addEventListener('scroll', runTickerr);
  }
}

export default animateInSinglePost;