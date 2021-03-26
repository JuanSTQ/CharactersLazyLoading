const getContainer = ()=>{
  const container = document.createElement('section')
  container.className = "Characters"
  document.body.appendChild(container)
  return container
};

export default getContainer;