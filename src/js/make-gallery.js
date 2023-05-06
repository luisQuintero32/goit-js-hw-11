export { renderGallery };

const gallery = document.querySelector('.gallery');

function renderGallery(images) {
  const markup = images
    .map(image => {
      const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
      return `
      <div class="photo-card">
          <a class="photo-item" href="${largeImageURL}">
              <img class="photo" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
          </div>
      </div>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
