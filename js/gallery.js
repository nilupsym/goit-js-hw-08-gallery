import galleryItems from './gallery-items.js';
// console.log(galleryItems);

// Создание и рендер разметки по массиву данных и предоставленному шаблону
const galleryList = document.querySelector('.js-gallery');

const galleryListItem = galleryItem => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = galleryItem.original;

    const img = document.createElement('img');
    img.classList.add('gallery__image')
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    img.dataset.source = galleryItem.original;

    a.appendChild(img);
    li.appendChild(a);
    return li;
}

const galleryImages = galleryItems.map(galleryItem => galleryListItem(galleryItem));

galleryList.append(...galleryImages);
console.log(galleryList);