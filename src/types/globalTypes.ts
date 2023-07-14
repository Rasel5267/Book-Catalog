export interface IBook {
  _id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  publicationDate: string | Date;
  publisher?: object;
  review: string[];
  reviewer?: object;
}
