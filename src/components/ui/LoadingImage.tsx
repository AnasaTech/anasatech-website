'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface LoadingImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function LoadingImage({ wrapperClassName = '', className = '', onLoad, fill, ...props }: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  // For fill images, don't add a wrapper — render inline with shimmer as sibling
  if (fill) {
    return (
      <>
        {!loaded && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse z-[1]" />
        )}
        <Image
          {...props}
          fill
          className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={(e) => {
            setLoaded(true);
            if (onLoad) onLoad(e);
          }}
        />
      </>
    );
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
      <Image
        {...props}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setLoaded(true);
          if (onLoad) onLoad(e);
        }}
      />
    </div>
  );
}
