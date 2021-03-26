const ApiURL = "https://rickandmortyapi.com/api/character/"
import {register} from './IntersectionObserver'
const getChararters = async(page)=>{
  try{
    const Data = await fetch(`${ApiURL}?page=${page}`).then(response => response.json());
    let arr=Data.results.map(character => {
      const container=document.createElement('div');
      const img = document.createElement('img'); 
      img.dataset.src = character.image
      const h2 = document.createElement('h2');
      h2.dataset.textContent = character.name
      container.append(img,h2)
      register(container)
      container.className= "person"
      return container
    })
    return arr
  }catch(error){
    console.log(error)
  }

};
 
export default getChararters;