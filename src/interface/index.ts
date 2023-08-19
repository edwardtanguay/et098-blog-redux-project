export interface IArticle {
  id: string;
  date: string;
  title: string;
  imgUrl: string;
  content: string;
  user: string;
  reactions: Record<string, number>;
}

export interface IUser {
  id: string;
  fullName: string;
}
