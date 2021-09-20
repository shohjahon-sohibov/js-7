let elForm = document.querySelector('.form');
let elShoppingInput = elForm.querySelector('.shopping-input');

let elShoppingList = document.querySelector('.shopping-list');

let shoppingList = [];

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  shoppingList.push(elShoppingInput.value.trim());
  elShoppingInput.focus();
  console.log(shoppingList);
  elShoppingList.innerHTML = '';
  
  for (var product of shoppingList) {
    var elNewProduct = document.createElement('li');
    elNewProduct.textContent = product;
    
    elShoppingList.appendChild(elNewProduct);
  }
})


// CHECK PRODUCT THAT AVAILABLE OR NOT

let elSearchForm = document.querySelector('.search-form');
let elSearchInput = elSearchForm.querySelector('.search-input');
let elSearchResult = elSearchForm.querySelector('.search-result');

elSearchForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

if (shoppingList.includes(elSearchInput.value.trim())) {
  elSearchResult.textContent = 'this product is available';
} else {
  elSearchResult.textContent = 'Add new product';
  elShoppingInput.value = elSearchInput.value; 
  elSearchInput.value = '';
  elShoppingInput.focus();
}
})











