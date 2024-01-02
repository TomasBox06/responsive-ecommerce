const imageContainer = document.querySelector(".gallery-image__container");

const previousButton = document.querySelector(".gallery-previous");
const nextButton = document.querySelector(".gallery-next");

let imgIndex = 0;
const images = [
  "../../images/image-product-1.jpg",
  "../../images/image-product-2.jpg",
  "../../images/image-product-3.jpg",
  "../../images/image-product-4.jpg",
];

nextButton.addEventListener("click", () => {
  nextImage(imageContainer);
});
previousButton.addEventListener("click", () => {
  previousImage(imageContainer);
});

/*-------------SHOW IMAGE MODAL-------------*/

const modalGallery = document.querySelector(".modal-gallery__bg");
const closeModal = document.querySelector(".modal-gallery__close");

imageContainer.addEventListener("click", () => {
  modalGallery.style.display = `grid`;
  modalImgContainer.style.backgroundImage = `url(${images[0]})`;
});

closeModal.addEventListener("click", () => {
  modalGallery.style.display = `none`;
});

/*--------CHANGE IMAGES BY THUMBNAILS-----------*/

const thumbnails = document.querySelectorAll(".gallery-thumbnail");

const thumbnailsArray = [...thumbnails];

thumbnailsArray.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    imageContainer.style.backgroundImage = `url(${images[e.target.id]})`;
  });
});

/*-------CHANGE BY THUMBNAILS IN MODAL----------*/

const modalThumbnails = document.querySelectorAll(".modal-gallery__thumbnail");
const modalImgContainer = document.querySelector(
  ".modal-gallery__image-container"
);

const modalThumbnailsArray = [...modalThumbnails];

modalThumbnailsArray.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    modalImgContainer.style.backgroundImage = `url(${images[e.target.id]})`;
  });
});

/*--------NEXT/PREVIOUS MODAL BUTTONS-----------*/

const previousModalButton = document.querySelector(".modal-gallery__previous");
const nextModalButton = document.querySelector(".modal-gallery__next");

previousModalButton.addEventListener("click", () => {
  previousImage(modalImgContainer);
});
nextModalButton.addEventListener("click", () => {
  nextImage(modalImgContainer);
});

/*------------SHOW MODAL NAVBAR-------------*/

const headerMenu = document.querySelector(".header-menu");
const modalNavbar = document.querySelector(".modal-navbar__bg");
const modalNavbarClose = document.querySelector(".modal-navbar__close-icon");

headerMenu.addEventListener("click", () => {
  modalNavbar.style.display = `block`;
});
modalNavbarClose.addEventListener("click", () => {
  modalNavbar.style.display = "none";
});

/*----------------FUNCTIONS------------------*/

const nextImage = (imgContainer) => {
  if (imgIndex === 3) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }

  imgContainer.style.backgroundImage = `url(${images[imgIndex]})`;
};
const previousImage = (imgContainer) => {
  if (imgIndex === 0) {
    imgIndex = 3;
  } else {
    imgIndex--;
  }

  imgContainer.style.backgroundImage = `url(${images[imgIndex]})`;
};
