import { ReactNode } from 'react';

const VideoGallery = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-2 max-md:grid-cols-1 [&>div]:relative [&>div]:overflow-hidden [&>div]:rounded-card-sm [&>div]:border [&>div]:border-border [&>div]:pb-[56.25%] [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0">
      {children}
    </div>
  );
};

export default VideoGallery;
