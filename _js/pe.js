
const containers = document.querySelectorAll('.pe__containers-item')

const containerToggle = event => {
  const index = event.currentTarget.getAttribute('data-id');
  document.querySelectorAll('.pe__nav li')
  .forEach(element => element.classList.remove('active'));

  event.currentTarget.classList.add('active')

  if(containers[index].classList.contains('active')) return;

  containers.forEach((container) => {
    container.classList.remove('active')
  })
  
  containers[index].classList.add('active');  
}

const setInitalClasses = () => {
  if(document.getElementsByTagName('body')[0].classList.contains('page-template-work')) {
    containers[0].classList.remove('active')
    containers[1].classList.add('active')
    document.querySelectorAll('.pe__nav li')[0].classList.remove('active');
    document.querySelectorAll('.pe__nav li')[1].classList.add('active');
  }
}


export { containerToggle, setInitalClasses};
