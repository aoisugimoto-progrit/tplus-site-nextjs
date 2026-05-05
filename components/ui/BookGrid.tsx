'use client';

interface Book {
  image: string;
  description: string;
  priority: 1 | 2 | 3;
  url?: string;
}

interface BookGridProps {
  books: Book[];
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function BookGrid({ books }: BookGridProps) {
  const getStars = (priority: number) => {
    switch(priority) {
      case 1: return '★';
      case 2: return '★★';
      case 3: return '★★★';
      default: return '★';
    }
  };

  const BookCard = ({ book, index }: { book: Book; index: number }) => {
    const content = (
      <>
        <img
          src={`${BASE_PATH}${book.image}`}
          alt={book.description}
          className="w-full h-auto rounded shadow-md transition-all duration-500 group-hover:shadow-lg"
          style={{
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            transformStyle: 'preserve-3d'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) translateZ(5px) rotateX(1deg) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) translateZ(0) rotateX(0deg) scale(1)';
          }}
        />

        {/* 星評価ツールチップ */}
        <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[10000] px-3 py-2 bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400 text-lg font-bold rounded-xl shadow-2xl whitespace-nowrap" style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
          {getStars(book.priority)}
        </div>

        {/* 吹き出しの矢印 */}
        <div className="absolute bottom-[calc(100%+2px)] left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[10000] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900" style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}></div>

        {/* 書籍説明 */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 text-xs text-center rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
          {book.description}
        </div>
      </>
    );

    const WrapperTag = book.url ? 'a' : 'div';
    const wrapperProps = book.url
      ? { href: book.url, target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <WrapperTag
        {...wrapperProps}
        key={index}
        className="book-cover-wrapper relative flex-[0_0_calc(20%-13px)] cursor-pointer group"
        data-priority={book.priority}
        style={{
          order: book.priority,
          transformStyle: 'preserve-3d'
        }}
      >
        {content}
      </WrapperTag>
    );
  };

  return (
    <div className="flex flex-wrap gap-4 mt-5">
      {books.map((book, index) => (
        <BookCard key={index} book={book} index={index} />
      ))}
    </div>
  );
}
