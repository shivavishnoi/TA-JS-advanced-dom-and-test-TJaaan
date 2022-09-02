// <li>
//   <h5 class="category">Sports</h5>
//   <h3 class="title">Play Basketball</h3>
// </li>
let root = document.querySelector(`.cards`)
class Card {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
  createCardUI() {
    let li = document.createElement(`li`)
    let h5 = document.createElement(`h5`)
    h5.classList.add(`category`)
    h5.tabIndex = `1`
    h5.innerText = this.category;
    let input1 = document.createElement(`input`)
    input1.style.display = `none`
    input1.value = h5.innerText;
    let h3 = document.createElement(`h3`)
    h3.innerText = this.title;
    h3.classList.add(`title`)
    h3.tabIndex = `2`;
    let input2 = document.createElement(`input`)
    input2.style.display = `none`
    input2.value = h3.innerText;
    li.append(h5, input1, h3, input2)
    return li
  }
}

class CardList {
  constructor(list = [], root) {
    this.list = list;
    this.root = root;
  }
  add(title, category) {
    let card = new Card(title, category)
    this.list.push(card)
    console.log(this.list)
  }
  createListUI() {
    this.root.innerHTML = ''
    this.list.forEach((card, index) => {
      let ui = card.createCardUI();
      console.log(ui)
      let catHead = ui.querySelector(`h5`);
      let inputs = ui.querySelectorAll(`input`);
      catHead.addEventListener(`focus`, () => {
        catHead.style.display = `none`;
        inputs[0].style.display = `block`
      })
      inputs[0].onblur = function () {
        inputs[0].style.display = `none`;
        catHead.style.display = `block`;
        catHead.innerText = inputs[0].value
        this.list[index].category = inputs[0].value;
      }.bind(this)
      let titleHead = ui.querySelector(`h3`)
      titleHead.addEventListener(`focus`, () => {
        titleHead.style.display = `none`;
        inputs[1].style.display = `block`
      })
      inputs[1].onblur = function () {
        inputs[1].style.display = `none`;
        titleHead.style.display = `block`;
        titleHead.innerText = inputs[1].value
        this.list[index].title = inputs[1].value;
        console.log(this.list)
      }.bind(this)
      this.root.append(ui)
    })
  }
}

let cc = new CardList([], root)

document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault()
  let cardTitle = e.target.title.value;
  let cardCategory = e.target.category.value;
  cc.add(cardTitle, cardCategory)
  cc.createListUI()
  e.target.title.value = ``;
  e.target.category.value = ``;
})

 //h5.addEventListener(`focus`, () => {
    //   h5.style.display = `none`
    //   input1.style.display = `block`
    // })
    // input1.onblur = function () {
    //   input1.style.display = `none`;
    //   h5.style.display = `block`
    //   h5.innerText = input1.value
    // }