"use client"
import { searchBooks } from "@/lib/googleBooks";
import { useState } from "react";
import BookCard from "./components/BookCard";
import MemoSection from "./components/MemoSection";
import SearchBar from "./components/SearchBar";

const Page = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">表紙びより</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex gap-4">
        <div className="grid grid-cols-1 gap-4 mt-4 w-fit">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
        <MemoSection />
      </div>
    </div>
  );
};

export default Page;
