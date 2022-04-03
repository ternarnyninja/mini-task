const SELECTOR = document.getElementById("select-tea");
const TEA_INFO = document.querySelector(".product__info");
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

function renderOptions(arrayOfObjects) {
  const optionsList = arrayOfObjects
    .map(optionName => {
      return `<option id="${optionName.id}" value="${optionName.name}">${optionName.name}</option>`    
  }).join(" ");

  SELECTOR.innerHTML = optionsList;
}

renderOptions(TEA_DATA);

// Надо как-то оптимизировать

function setInfo(arrayOfObjects, currentOption) {
  const teaCardInfo = arrayOfObjects
    .filter(teaSort => teaSort.name === currentOption);
  const teaInfo = teaCardInfo
    .map(teaFaeture => {
    return `<div class="product__year">
    <div class="div__product__text">Год:</div>
    <div class="div__product__text">${teaFaeture.year}</div>
    </div>
    <div class="product__remainder">
    <div class="div__product__text">Остаток в граммах:</div>
    <div class="div__product__text">${teaFaeture.grams}</div>
    </div>
    <div class="product__price">
    <div class="div__product__text">Цена за грамм:</div>
    <div class="div__product__text">${teaFaeture.price}</div>
    </div>
    <div class="product__category">
    <div class="div__product__text">Категория</div>
    <div class="div__product__text">${teaFaeture.category}</div>
    </div>`
  });
  TEA_INFO.innerHTML = teaInfo;
}

let total = {};

function checkOpiton() {
  setInfo(TEA_DATA, SELECTOR.value);
  getGramsFromTeaCard(TEA_DATA, SELECTOR.value);
};

function getGramsFromTeaCard(teaCard, teaCardOption) {
  const takeCard = teaCard.filter(card => card.name === teaCardOption);
  const takeGrams = takeCard.map(grams => grams.grams).join("");
  total.allGrams = takeGrams;
}

function getGramsFromField() {
  total.takeGrams = this.value;
}

function sumOrder() {
  CHECK.innerHTML = total.takeGrams * total.allGrams;
}

RECEIVE_GRAMMS.addEventListener("change", getGramsFromField, false);

SELECTOR.addEventListener("change", () => {
  checkOpiton();
});

BTN.addEventListener("click", () => {
  sumOrder();
});



