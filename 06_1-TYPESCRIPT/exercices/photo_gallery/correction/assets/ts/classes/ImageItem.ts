export default class ImageItem {
  static imagesCount: number;
  public id: number;
  
  constructor(public imageSrc: string, public imageAlt: string, public imageCaption: string) {
    this.id = ++ImageItem.imagesCount
  }
}