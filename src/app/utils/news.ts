export class News {
  imagesource: string;
  header: string;
  content: string;
  tag: string;
  date: string;

  constructor(
    imagesource: string,
    header: string,
    content: string,
    tag: string,
    date: string
  ) {
    this.header = header;
    this.content = content;
    this.tag = tag;
    this.date = date;
    this.imagesource = imagesource;
  }
}
