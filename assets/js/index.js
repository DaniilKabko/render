"use strict";
const messages = [];
const form = document.forms.rootForm;
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //при нажатии на кнопку Send, добавлять значение из инпута в массив,
  //в том случае, если оно не пустое
  const inputValue = e.target.elements.inputText.value.trim();
  if (inputValue) {
    messages.push(inputValue);
    //добавить автоматическую очистку формы
    e.target.reset();
  }
  //HOMEWORK
  //рендерить в список list все сообщения из массива
  const message = renderElement(
    "li",
    { classNames: ["message"] },
    document.createTextNode(inputValue)
  );
  list.append(message);

  console.log(messages);
});

function renderElement(tag, { classNames = [] }, ...children) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  element.append(...children);
  return element;
}
