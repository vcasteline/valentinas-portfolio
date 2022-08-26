import './style.css'

const colors = ['turquoise', 'orange', 'yellow', 'blue', 'red']

const sections = [...document.getElementsByTagName('section')]
const numbers = [...document.getElementsByClassName('link')]

window.addEventListener('scroll', function () {

  const scrollFromTop = window.pageYOffset

  for (let i = 0; sections.length > i; i++) {

    if (scrollFromTop <= sections[i].offsetTop ) {
      document.body.className = colors[i]; 
      numbers[i].classList.add('active') 

      break
    }
    else{
      numbers[i].classList.remove('active') 

    } 

  }

})