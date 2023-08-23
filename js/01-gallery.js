import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onImageClick);
//! створення галлереї
function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>
        `;
    }).join('');
} 
//! делегування + обробка та показ basicLightbox

let modalIsOpen = false;
let modal;
function onImageClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('gallery__image')) {
        const originalImageUrl = target.dataset.source;
        modal = basicLightbox.create(`
        <img src="${originalImageUrl}" width="800" height="600">
        `);
        modal.show();
        modalIsOpen = true;
    }
    document.addEventListener('keydown', keyDown);
}
//! закриття по Escape
function keyDown(event) {
    if (event.key === `Escape` && modalIsOpen) { 
        modal.close();
        modalIsOpen = false;
        document.removeEventListener('keydown', keyDown);
    }
}

console.log(galleryItems);
