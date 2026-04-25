'use client';

interface Video {
  id: string;
  title: string;
  duration: string;
}

interface VideoGridProps {
  videos: Video[];
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 mt-5">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block bg-white rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden no-underline hover-lift scale-hover"
        >
          <div className="relative">
            <img
              src={`${BASE_PATH}/images/tabata-videos/${video.id}.jpg`}
              alt={video.title}
              className="w-full h-auto block transition-transform duration-300 hover:scale-105"
            />
            {/* YouTube icon - red background */}
            <div className="absolute top-2 left-2 w-7 h-5 bg-red-600 rounded z-10"></div>
            {/* YouTube icon - white play triangle */}
            <div className="absolute top-[14px] left-[18px] w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent z-20"></div>
          </div>
          <div className="p-2 text-xs leading-tight text-gray-800 font-medium min-h-[45px] max-h-[45px] overflow-hidden line-clamp-3 smooth-text">
            {video.title}
          </div>
          <div className="px-2 pb-2 text-[10px] text-gray-600 smooth-text">
            {video.duration}
          </div>
        </a>
      ))}
    </div>
  );
}
