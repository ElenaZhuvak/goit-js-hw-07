const lists = document.querySelectorAll('.item');
console.log(`Number of categories: ${lists.length}`);

lists.forEach(list => {
 const categoryTitle = list.querySelector('h2');
 console.log(`Category: ${categoryTitle.textContent}`);

 const listQuantity = list.querySelectorAll('ul li');
 console.log(`Elements: ${listQuantity.length}`);
})