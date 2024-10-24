export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  publishedAt: string;
  author: {
    data: {
      attributes: Author;
    };
  };
  category: {
    data: {
      attributes: Category;
    };
  };
}

export interface Author {
  name: string;
  email: string;
  bio: string;
}

export interface Category {
  name: string;
  slug: string;
}