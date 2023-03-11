const allItem = document.querySelectorAll(".item");
// console.log(allItem);

const numberItem = allItem.length;
console.log(`Number of categories: ${numberItem}`);

allItem.forEach(item => {
    const titleItem = item.firstElementChild.textContent;
    const valueItem = item.lastElementChild.children.length;

console.log(`Category: ${titleItem}`);
console.log(`Elements: ${valueItem}`);
});