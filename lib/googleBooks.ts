
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  const response = await fetch(`${API_URL}?q=${query}&key=${API_KEY}`);
  const data = await response.json();

  if (!data.items) {
    return [];
  }

  
  return data.items.map((item: any) => ({
    title: item.volumeInfo.title || "",
    description: item.volumeInfo.description || "",
    link: item.volumeInfo.infoLink || "#",
    authors: item.volumeInfo.authors || [],
    thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
  }));
};
