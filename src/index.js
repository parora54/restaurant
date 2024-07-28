import * as css from './style.css'
import { dishesLoad, blurbLoad, titleLoad } from './home'
import { menuPageLoad } from './menu'
import { aboutLoad } from './about'
import { contactLoad } from './contact'

const container = document.querySelector('#content')

// Nav link Declarations
const menuButton = document.querySelector('button#Menu')
const homeButton = document.querySelector('button#Home')
const aboutButton = document.querySelector('button#About')
const contactButton = document.querySelector('button#Contact-Us')

// // default homepage logic (upon webapp boot)
// container.appendChild(titleLoad())
// container.appendChild(blurbLoad())
// container.appendChild(dishesLoad())

// Menu Button
menuButton.addEventListener('click', () => {
  container.innerHTML = "";
  container.appendChild(menuPageLoad())
})

// Home Button
homeButton.addEventListener('click', () => {
  container.innerHTML = "";
  container.appendChild(titleLoad())
  container.appendChild(blurbLoad())
  container.appendChild(dishesLoad())
})

// About Button
aboutButton.addEventListener('click', () => {
  container.innerHTML = "";
  container.appendChild(aboutLoad())
})

// Contact Button
contactButton.addEventListener('click', () => {
  container.innerHTML = "";
  container.appendChild(contactLoad())
})
