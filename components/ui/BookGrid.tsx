'use client';

interface Book {
  image: string;
  description: string;
  priority: 1 | 2 | 3;
}

interface BookGridProps {
  books: Book[];
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-5">
      {books.map((book, index) => (
        <div
          key={index}
          className="book-cover-wrapper relative flex-[0_0_calc(20%-13px)] cursor-pointer group"
          data-priority={book.priority}
          style={{ order: book.priority }}
        >
          <img
            src={`${BASE_PATH}${book.image}`}
            alt={book.description}
            className="w-full h-auto rounded shadow-md transition-transform duration-300 group-hover:scale-105"
          />

          {/* 書籍説明 */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 text-xs text-center rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
            {book.description}
          </div>
        </div>
      ))}
    </div>
  );
}
