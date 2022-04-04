"use scritct";

const SELECTOR = document.getElementById("select__tea");
const TEA_CARD = document.querySelector(".product__description__card");
const TEA_DATA = [
  
  { 
    name: "Выберите позицию",
  }, 

  { 
    id: 1,
    year: 2013,
    name: "Дун-Дин",
    grams: 25,
    price: 31,
    category: "AAA"
  }, 

  { 
    id: 2,
    name: "Шен-пуэр",
    grams: 350,
    price: 23,
  
  },

  { 
    id: 3,
    name: "Шу-пуэр",
    grams: 250,
    price: 21,

  },

  {
    id: 4,
    name: "Габа-оренж",
    grams: 330,
    price: 18,

  },

];
const RECEIVE_GRAMMS = document.querySelector("input");
const BTN = document.querySelector("button");
const CHECK = document.querySelector(".product__text__total");
const SET__INPUT__VALUE = document.querySelector(".input__item");
const form = document.querySelector(".form");

function renderOptions(arrayOfObjects) {
  const optionsList = arrayOfObjects
    .map(optionName => {
      return `<option id="${optionName.id}" value="${optionName.name}">${optionName.name}</option>`    
  }).join(" ");

  SELECTOR.innerHTML = optionsList;
}

renderOptions(TEA_DATA);

// Надо как-то оптимизировать

function checkAvailability(teainfo) {
  return teainfo === undefined ? "Неизвестно" : teainfo;
}

function setInfo(arrayOfObjects, currentOption) {
  const teaCardInfo = arrayOfObjects.filter(teaSort => teaSort.name === currentOption);
  const teaInfo = teaCardInfo.map(teaFaeture => {
    return `<div class="product__item">
              <div class="product__text">Название:</div>
              <div class="product__text">${checkAvailability(teaFaeture.name)}</div>
            </div>
            <div class="product__item">
              <div class="product__text">Год:</div>
              <div class="product__text">${checkAvailability(teaFaeture.year)}</div>
            </div>
            <div class="product__item">
              <div class="product__text">Цена за грамм:</div>
              <div class="product__text">${checkAvailability(teaFaeture.price)}</div>
            </div>
            <div class="product__item">
              <div class="product__text">Остаток в граммах:</div>
              <div class="product__text">${checkAvailability(teaFaeture.grams)}</div>
            </div>`
  });

  TEA_CARD.innerHTML = teaInfo;
  setGramsOnInput(arrayOfObjects, currentOption);
}

function setGramsOnInput(arrayOfObjects, currentOption){
  const takeCurrentOption = arrayOfObjects.filter(teaSort => teaSort.name === currentOption);
  const setValue = takeCurrentOption.map(totalGrams => {
    return `От:<input type="text" class="from" value="0">
            До:<input type="text" class="to" value="${totalGrams.grams}">`;
  });
  SET__INPUT__VALUE.innerHTML = setValue;
};

let total = {};

function checkOpiton() {
  setInfo(TEA_DATA, SELECTOR.value);
};

function getGramsFromTeaCard(teaCard, teaCardOption) {
  const takeCard = teaCard.filter(card => card.name === teaCardOption);
  const takeGrams = takeCard.map(grams => grams.grams).join("");
  return takeGrams;
}

function getGramsFromField() {
  console.log(this.value);
}

function sumOrder() {
  let firstOperand = getGramsFromTeaCard(TEA_DATA, SELECTOR.value);
  let secondOperand = getGramsFromField(this.value);
  console.log(firstOperand);
  console.log(secondOperand);
}

RECEIVE_GRAMMS.addEventListener("change", () => {
  console.log(Number(RECEIVE_GRAMMS.value));
});

console.log(RECEIVE_GRAMMS);

SELECTOR.addEventListener("change", () => {
  checkOpiton();
});

BTN.addEventListener("click", () => {
  // sumOrder();
  event.preventDefault();
});



