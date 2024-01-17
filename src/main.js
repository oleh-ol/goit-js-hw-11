'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = "https://pixabay.com/api/?";
const API_KEY = "41837495-d070c30be5c0243a4bb3b397a";
const form = document.querySelector('.search-form');
const galleryBox = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
});

form.addEventListener("submit", event => {
    event.preventDefault();

    galleryBox.innerHTML =
        `<li>
        <span class="loader"></span>
    </li>`

    const value = event.target.elements.keywords.value;

    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    fetch(`${BASE_URL}${searchParams}`)
        .then(response => {
            if (!response.ok)
                throw new Error(response.status);
            return response.json();
        })
        .then(addImages)
        .catch(showError)
});

const addImages = images => {
    if (images.hits.length === 0) throw new Error(images.status);
    galleryBox.innerHTML = images.hits.reduce((html, { largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => html + `
    <li class="img">
       <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
      <ul class="img-info">
        <li class="img-info-item"><span>Likes</span> ${likes}</li>
        <li class="img-info-item"><span>Views</span> ${views}</li>
        <li class="img-info-item"><span>Comments</span> ${comments}</li>
        <li class="img-info-item"><span>Downloads</span> ${downloads}</li>
      </ul>
    </li>`, '');

    gallery.refresh();
}

const showError = () => {
    iziToast.show({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        maxWidth: 432,
        iconUrl: './img/error-icon.svg',
        iconColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        position: 'topRight'
    });
    imagesContainer.innerHTML = '';
}