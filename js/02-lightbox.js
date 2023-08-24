import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

//! створення галлереї
function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>
        </li>
        `;
    }).join('');
} 
//! підключення бібліотеки з параметрами
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250,
    close: false,
    enableKeyboard: true,
   
   
});
console.log(galleryItems);
