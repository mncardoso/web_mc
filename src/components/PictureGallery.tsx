import { ReactNode } from 'react';

const PictureGallery = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-2 max-[480px]:grid-cols-2 max-[320px]:grid-cols-1 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-card-sm [&_img]:border [&_img]:border-border [&_img]:object-cover">
      {children}
    </div>
  );
};

export default PictureGallery;
