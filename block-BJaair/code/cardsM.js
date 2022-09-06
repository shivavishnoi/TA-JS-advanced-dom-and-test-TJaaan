let ul = document.querySelector(`ul`)
let form = document.querySelector(`form`)

let cardsData = []
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let title = e.target.elements.title.value;
  let category = e.target.elements.category.value;
  cardsData.push({ title, category });
  createUI()

})

function handleEdit(event, info, id, label) {
  let elm = event.target;
  let input = document.createElement(`input`);
  input.value = info;
  input.addEventListener(`blur`, (e) => {
    let updatedValue = e.target.value;
    cardsData[id][label] = updatedValue;
    createUI();
  })
  let parent = event.target.parentElement;
  parent.replaceChild(input, elm)
}

function createUI(data = cardsData, root = ul) {
  root.innerHTML = ``;
  let fragment = new DocumentFragment();
  data.forEach((cardInfo, index) => {
    let li = document.createElement(`li`);
    let p = document.createElement(`p`);
    p.addEventListener(`click`, (event) => {
      console.log(`click`)
      handleEdit(event, cardInfo.category, index, `category`)
    });
    p.innerText = cardInfo.category;
    let h2 = document.createElement(`h2`)
    h2.innerText = cardInfo.title;
    h2.addEventListener(`dblclick`, (event) => {
      console.log(`click`)
      handleEdit(event, cardInfo.title, index, `title`)
    })
    li.append(p, h2)
    fragment.append(li)
  })
  root.append(fragment)
}

createUI();