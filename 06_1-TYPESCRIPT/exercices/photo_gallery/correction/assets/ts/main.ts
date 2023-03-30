import ImageItem from "./classes/ImageItem";

const imageEl = document.querySelector("#movingPicture") as HTMLImageElement;
const imageCaptionEl = document.querySelector(
  "#imageCaption"
) as HTMLParagraphElement;
const imagesSelectorEl = document.querySelector(
  "#picturesSelector"
) as HTMLDivElement;

const images: ImageItem[] = [
  new ImageItem(
    "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
    "Dog Face A",
    "Photo of a Cute Dog"
  ),
  new ImageItem(
    "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-732x549.jpg",
    "Dog Face B",
    "Photo of a Another Dog"
  ),
];

let selectedPicture: ImageItem = images[0];

const renderSelector = () => {
  imagesSelectorEl.innerHTML = "";
  images.forEach((image) => {
    const newButton = document.createElement('button')
    newButton.className = selectedPicture === image ? "btn btn-info w-100 p-2 px-4 my-1" : "btn btn-outline-info w-100 p-2 px-4 my-1";
    newButton.textContent = image.imageAlt
    newButton.addEventListener('click', () => {
      selectedPicture = image;
      renderSelector();
    })

    imagesSelectorEl.appendChild(newButton);
  });

  imageEl.src = selectedPicture.imageSrc;
  imageEl.alt = selectedPicture.imageAlt;
  imageCaptionEl.textContent = selectedPicture.imageCaption;
};

document.querySelector("#prevButton").addEventListener('click', () => {
  if (selectedPicture === images[0]) {
    selectedPicture = images[images.length - 1]
  } else {
    selectedPicture = images[images.indexOf(selectedPicture) - 1]
  }

  renderSelector();
})

document.querySelector("#nextButton").addEventListener('click', () => {
  if (selectedPicture === images[images.length - 1]) {
    selectedPicture = images[0]
  } else {
    selectedPicture = images[images.indexOf(selectedPicture) + 1]
  }

  renderSelector();
})

renderSelector();
