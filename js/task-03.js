const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.gap = "20px";
list.style.marginLeft = "auto";
list.style.marginRight = "auto";


const markup = images.map(image => `<li class="item"><img class="img-item" src="${image.url}" alt="${image.alt}"></li>`).join("");

list.insertAdjacentHTML("beforeend", markup);

// const liElements = document.querySelectorAll(".item");
// for (const element of liElements) {
//   element.style.width = "200px";
//   element.style.height = "150px";
//   element.style.listStyle = "none";
//   element.style.borderColor = "red";
//   element.style.borderStyle = "dashed";
//   element.style.borderWidth = "2px";
//   element.firstElementChild.style.width = "100%";
//   element.firstElementChild.style.height = "100%";
// }