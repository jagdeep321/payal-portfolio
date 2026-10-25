"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className = "",
  containerClassName = "",
  fill,
  width,
  height,
  priority,
  sizes,
  ...rest
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#EAE2F5] via-[#FAF8F5] to-[#E8C7CB] animate-pulse" />
      )}
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#EAE2F5] p-6 text-center text-[#24212A] border border-[#B8A4D8]/20">
          <div className="w-10 h-10 rounded-full bg-[#B8A4D8]/30 flex items-center justify-center mb-2 text-xs font-semibold">
            PA
          </div>
          <span className="text-xs font-medium text-[#24212A]/70 max-w-[200px] line-clamp-2">
            {alt || "Portfolio visual showcase"}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          priority={priority}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"} ${className}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          {...rest}
        />
      )}
    </div>
  );
}
