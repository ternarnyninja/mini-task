let tea = [
  
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


let select = document.getElementById("select-tea");
let btn = document.querySelector("button");
let out = document.querySelector(".product__info");
let tCost = document.querySelector(".product__text__total");
let input = document.querySelector("input");

function renderOptions(arr) {
  let options = arr.map(item => `<option id="${item.id}" value="${item.name}">${item.name}</option>`).join(" ");
  select.innerHTML = options;
}

renderOptions(tea);

select.addEventListener("change", () => {
  // debugger;
  checkOpiton();
});


function setInfo(array, el) {
  let info = array.filter(item => item.name === el);
  let renderInfo = info.map(item => {
    return `<div class="product__year">
    <div class="div__product__text">Год:</div>
    <div class="div__product__text">${item.year}</div>
    </div>
    <div class="product__remainder">
    <div class="div__product__text">Остаток в граммах:</div>
    <div class="div__product__text">${item.grams}</div>
    </div>
    <div class="product__price">
    <div class="div__product__text">Цена за грамм:</div>
    <div class="div__product__text">${item.price}</div>
    </div>
    <div class="product__category">
    <div class="div__product__text">Категория</div>
    <div class="div__product__text">${item.category}</div>
    </div>`
  });
  out.innerHTML = renderInfo;
}

function checkOpiton() {

  switch(select.value) {

    case "Выберите позицию":
      console.log(123);
      break;

    case "Дун-Дин":
      setInfo(tea, select.value);
      calculateCost(tea, select.value, add);
      break;

    case "Шен-пуэр": 
      setInfo(tea, select.value);
      break;

    case "Шу-пуэр": 
      setInfo(tea, select.value);
      break;
    
    case "Габа-оренж":
      setInfo(tea, select.value);
      break;
  }

}


function calculateCost(array, teaPos, cal) {
  let itemPrice = array.filter(el => el.name === teaPos);
  let price = itemPrice.map(item => item.price).join("");
  cal(price);
}




