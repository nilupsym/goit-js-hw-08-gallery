import galleryItems from './gallery-items.js';
// console.log(galleryItems);

// Создание и рендер разметки по массиву данных и предоставленному шаблону
const galleryList = document.querySelector('.js-gallery');

const lightbox = document.querySelector('.js-lightbox');

const lightboxImage = document.querySelector('.lightbox__image');

const galleryListItem = galleryItem => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = galleryItem.original;

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    img.dataset.source = galleryItem.original;

    a.appendChild(img);
    li.appendChild(a);
    return li;
}

const galleryImages = galleryItems.map(galleryItem => galleryListItem(galleryItem));

galleryList.append(...galleryImages);
// console.log(galleryList);

galleryList.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    event.preventDefault();
    window.addEventListener('keydown', onPressEscape);
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    lightbox.classList.add('is-open');
    lightboxImage.src = event.target.dataset.source;
    lightboxImage.alt = event.target.alt;
    // console.log(lightboxImage.alt);
}

// закрытие модального окна по клику на кнопку
const closeLightbox = document.querySelector('button[data-action="close-lightbox"]');

closeLightbox.addEventListener('click', onCloseModal);

function onCloseModal() {
    window.removeEventListener('keydown', onPressEscape);
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
}

// Закрытие модального окна по клику на div.lightbox__overlay   
const lightboxOverlay = document.querySelector('.lightbox__overlay');

lightboxOverlay.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
        onCloseModal();
    }
});

// Закрытие модального окна по нажатию клавиши ESC
function onPressEscape(event) {
    if (event.code === 'Escape') {
            onCloseModal();
        }
}