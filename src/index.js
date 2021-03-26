import getChararters from './utils/getCharacters'
import getContainer from './utils/getContainer'

(function App(){
  const buttons = document.querySelector('section.buttons')

  const action = async (event)=>{
    event.stopPropagation();
    const person = document.querySelectorAll('div.person')
    if(event.target.nodeName === "BUTTON" || event.target.nodeName ==="#document"){
        const page = parseInt(event.target.innerText)
        const Characters = await getChararters(page);
        if(person.length > 0){
          document.querySelector('.Characters').remove()
          const container = getContainer()
          container.append(...Characters)
        }else{
          const container = getContainer();
          container.append(...Characters);
        }
    }
  }
  window.addEventListener('load', action)
  buttons.addEventListener('click', action)
})();