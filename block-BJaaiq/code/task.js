document.addEventListener(`DOMContentLoaded`, () => {
  alert(`page is loading`)
})
let index = 0
document.addEventListener(`scroll`, () => {
  let div = document.createElement(`div`)
  div.innerText = `${quotes[index].quoteText}--${quotes[index].quoteAuthor}`
  document.querySelector(`section`).append(div)
  index++
})
