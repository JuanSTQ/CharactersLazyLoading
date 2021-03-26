const isIntersecting = (entry)=>{
  return entry.isIntersecting //si la entrada (container) esta dentro del viewPort
}
const loadImage = (entry)=>{
  console.log(entry)
  const container = entry.target
  const img = container.firstChild
  const url = img.dataset.src
  img.src = url
  const h2 = container.lastChild
  const text = h2.dataset.textContent
  h2.textContent = text
  container.style.height = "330px"
  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries)=>{
  entries.filter(isIntersecting).forEach(loadImage)
})

export const register = (character)=>{
  observer.observe(character)
}