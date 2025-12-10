import React, { useState, useCallback } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  selectedImage: string;
  onImageSelect: (image: string) => void;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, selectedImage, onImageSelect }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const showNextImage = useCallback(() => {
    setLightboxImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPrevImage = useCallback(() => {
    setLightboxImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const currentSelectedImageIndex = images.indexOf(selectedImage);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="w-full aspect-square rounded-lg overflow-hidden cursor-pointer shadow-lg"
        onClick={() => openLightbox(currentSelectedImageIndex !== -1 ? currentSelectedImageIndex : 0)}
      >
        <img
          src={selectedImage}
          alt="Selected product view"
          className="w-full h-full object-contain bg-background-light transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full aspect-square rounded-md overflow-hidden ring-2 ${image === selectedImage ? 'ring-primary' : 'ring-transparent'} cursor-pointer hover:ring-primary-foreground transition-all duration-200 ease-in-out`}
            onClick={() => onImageSelect(image)}
            tabIndex={0}
            role="button"
            aria-label={`Select image ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ')
                onImageSelect(image);
            }}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 border-none bg-transparent shadow-none">
          <div className="relative flex items-center justify-center h-[80vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              onClick={showPrevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </Button>
            <img
              src={images[lightboxImageIndex]}
              alt="Product in lightbox"
              className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              onClick={showNextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-20 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <XIcon className="h-6 w-6 text-foreground" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
