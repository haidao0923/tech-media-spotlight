
export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string[];
  imageUrl: string;
  date: string;
  author: string;
  isGenerated?: boolean;
  sourceUrls?: string[];
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface GenerateArticleRequest {
  topic: string;
  category: string;
}
