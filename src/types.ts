export type Comment = {
  id: string;
  name: string;
  text: string;
}

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
  categories: string[];
  comments: Comment[];
}
