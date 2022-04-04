let SELECTOR = document.getElementById("select__tea");
let TEA_CARD = document.querySelector(".product__description__card");
let TEA_DATA = [
  
  { 
    name: "Выберите товар",
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
    year: 2018,
    name: "Шен-пуэр",
    grams: 350,
    price: 23,
    category: "AA+"
  },

  { 
    id: 3,
    year: 2019,
    name: "Шу-пуэр",
    grams: 250,
    price: 21,
    category: "A"

  },

  {
    id: 4,
    year: 2021,
    name: "Габа-оранж",
    grams: 330,
    price: 18,
    category: "AA+"
  },

];
let RECEIVE_GRAMMS = document.querySelector(".input__from");
let BTN = document.querySelector("button");
let CHECK = document.querySelector(".product__text__total");
let inputGrams = document.querySelector(".from");
let SET__INPUT__VALUE = document.querySelector(".to");
let form = document.querySelector(".form");
let BAD__MESSAGE = document.querySelector(".slider__bad__message");

function renderOptions(arrayOfObjects) {
  let optionsList = arrayOfObjects
    .map(optionName => {
      return `<option id="${optionName.id}" value="${optionName.name}">${optionName.name}</option>`    
  }).join(" ");

  SELECTOR.innerHTML = optionsList;
}

renderOptions(TEA_DATA);

function checkAvailability(teainfo) {
  return teainfo === undefined ? "Неизвестно" : teainfo;
}

function setInfo(arrayOfObjects, currentOption) {
  let teaCardInfo = arrayOfObjects.filter(teaSort => teaSort.name === currentOption);
  let teaInfo = teaCardInfo.map(teaFaeture => {
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
}

function setGramsOnInput(arrayOfObjects, currentOption){
  let takeCurrentOption = arrayOfObjects.filter(teaSort => teaSort.name === currentOption);
  let setValue = takeCurrentOption[0].grams;
  SET__INPUT__VALUE.value = setValue ;
};

function getGramsFromTeaCard(teaCard, teaCardOption) {
  let takeCard = teaCard.filter(card => card.name === teaCardOption);
  let takeGrams = takeCard.map(grams => grams.grams).join("");
  return takeGrams;
}

function compareGrums(gramsValue) {
  if (Number(gramsValue) > getGramsFromTeaCard(TEA_DATA, SELECTOR.value)) {
    BAD__MESSAGE.style.color = "red";
  } else {
    BAD__MESSAGE.style.color = "white";
  }
  if (gramsValue === "") {
    BAD__MESSAGE.style.color = "white";
  }

}

inputGrams.addEventListener("input", () => {
  compareGrums(inputGrams.value);
});


SELECTOR.addEventListener("change", () => {
  setInfo(TEA_DATA, SELECTOR.value)
  setGramsOnInput(TEA_DATA, SELECTOR.value);
});



