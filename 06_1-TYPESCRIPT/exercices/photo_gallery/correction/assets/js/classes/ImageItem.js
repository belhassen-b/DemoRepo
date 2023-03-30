export default class ImageItem {
    constructor(imageSrc, imageAlt, imageCaption) {
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt;
        this.imageCaption = imageCaption;
        this.id = ++ImageItem.imagesCount;
    }
}
