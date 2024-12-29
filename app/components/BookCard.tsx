type Book = {
  title: string;
  authors: string[];
  thumbnail: string;
  description: string;
};

const BookCard: React.FC<Book> = ({ title, authors, thumbnail, description }) => {
  return (
    <div className="border rounded p-4 flex space-x-4">
      <img src={thumbnail} alt={title} className="w-24 h-32 object-cover" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{authors.join(", ")}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
