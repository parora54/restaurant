import * as css from './style.css'
import { dishesLoad, blurbLoad, titleLoad } from './home'

const container = document.querySelector('#content')

// default homepage logic (upon webapp boot)
container.appendChild(titleLoad())
container.appendChild(blurbLoad())
container.appendChild(dishesLoad())
