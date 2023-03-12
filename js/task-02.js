const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findIngredients = document.querySelector('#ingredients');


const addItem = ingredients => {
  return ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = el;

  return itemEl;
});
};

const ingredientsEl = addItem(ingredients);
findIngredients.append(...ingredientsEl);

console.log(findIngredients);