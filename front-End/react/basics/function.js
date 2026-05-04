const box = () => {
  return React.createElement('div', {id: 'box'}, 'This is box')
}

export const circle = () => {
  return React.createElement('div', {id:'circle'}, 'This is circle')
}

// var root = ReactDOM.createRoot(document.querySelector("#box"))
// root.render(box())

export default box
