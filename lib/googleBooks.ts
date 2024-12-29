const API_URL = "https://www.googleapis.com/books/v1/volumes";

interface BookItem {
  volumeInfo: {
    title?: string;
    description?: string;
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

interface GoogleBooksResponse {
  items?: BookItem[];
}

export const searchBooks = async (query: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  const response = await fetch(`${API_URL}?q=${query}&key=${API_KEY}`);
  const data: GoogleBooksResponse = await response.json();

  if (!data.items) {
    return [];
  }

  return data.items.map((item) => ({
    title: item.volumeInfo?.title || "",
    description: item.volumeInfo?.description || "",
    authors: item.volumeInfo?.authors || [],
    thumbnail: item.volumeInfo?.imageLinks?.thumbnail || "",
  }));
};
