// import createTask from "./createTask.js"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector(".bottom ul")

const spanClasses = ["fa-pencil", "fa-trash", "fa-check"]

form.onsubmit = (e) => {
  e.preventDefault()
  const taskLi = document.createElement("li")

  const iconsWrapper = document.createElement("div")

  taskLi.innerHTML = input.value

  createTask(iconsWrapper, 3, spanClasses)

  taskLi.appendChild(iconsWrapper)

  ul.appendChild(taskLi)
  clearInput()
}



function createTask(div, limit, classesArray) {
  for (let i = 0; i < limit; i++) {
    const anchor = document.createElement("a")
    anchor.classList.add("icon")
    anchor.href = ''

    const icon = document.createElement("span")
    icon.classList.add("fa-solid", classesArray[i])
    anchor.appendChild(icon)
    div.appendChild(anchor)
  }
}


function clearInput() {
  input.value = ''
  input.focus()
}