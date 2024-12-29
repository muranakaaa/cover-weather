import Image from 'next/image';

type Book = {
  title: string;
  authors: string[];
  thumbnail: string;
  description: string;
};

const BookCard: React.FC<Book> = ({ title, authors, thumbnail, description }) => {
  const highResThumbnail = thumbnail.replace("&zoom=1", "&zoom=2");

  return (
    <div className="border rounded p-4 sm:flex space-x-4">
      <div className="w-48 h-64 relative min-w-56"> 
        <Image
          src={highResThumbnail}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{authors.join(", ")}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
