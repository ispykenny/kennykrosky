const workNavIndicator = () => {
  if(!document.querySelector('.indicator') ) return;
  const indicator = document.querySelector('.indicator');
  const options = document.querySelectorAll('.work-nav li');
  indicator.style.width = options[0].offsetWidth + 'px'
  indicator.style.transform = `translateX(${options[0].offsetLeft}px)`

  const moveIndicator = event => {
    fetchGroup(event.currentTarget.getAttribute('data-id'))
    options.forEach((item) => item.classList.remove('active'))
    event.currentTarget.classList.add('active');
    let moveDest = event.currentTarget;
    indicator.style.width = moveDest.offsetWidth + 'px'
    indicator.style.transform = `translateX(${moveDest.offsetLeft}px)`
  }

  options.forEach((element) => {
    element.addEventListener('click', event =>  moveIndicator(event))
  })


  const fetchGroup = index => {
    let containers = document.querySelectorAll('.work-containers__item')
    containers.forEach((item) => item.classList.remove('active'));
    containers[index].classList.add('active');

  }
}


export { workNavIndicator };