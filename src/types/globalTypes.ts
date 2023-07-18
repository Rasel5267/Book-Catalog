export interface IBook {
  _id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  genre: string;
  publicationDate: string;
  publisher: string;
  reviews?: object[];
  createdAt?: Date;
}

export interface IReview {
  review: string;
  reviewer: object;
}
