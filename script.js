var searchButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')
var firstName = document.getElementById('name')
var userName = document.getElementById('userName')
var table = document.getElementById('table')
var submit = document.getElementById('submit')
var namePrefix = document.getElementById('namePrefix')
var notification = document.getElementById('notification')

function addText() {
    let text = inputText.value
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-warning')
    newButton.classList.add('m-2')
    newButton.setAttribute('type', 'button')
    newButton.innerText = text
    output.appendChild(newButton)
}
searchButton.addEventListener('click', addText)

// inputText.addEventListener('blur', addText)

function getData(data) {
    let newData = data.value
    let col = document.createElement('div')
    col.classList.add('col-4')
    col.classList.add('border')
    col.classList.add('border-warning')
    col.classList.add('text-center')
    col.innerText = newData
    output.appendChild(col)
}

function addText() {
    getData(namePrefix)
    getData(firstName)
    getData(userName)
    noti()
}

let count = 0

function noti() {
    count = count + 1
    notification.innerText = count
}

submit.addEventListener('click', addText)