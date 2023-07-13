const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    const listCategory = category.lastElementChild;
    console.log(`Elements: ${listCategory.children.length}`);
})
