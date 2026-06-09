import { useState, type ReactNode } from "react";

type FallbackImageProps = {
  src?: string;
  alt: string;
  className?: string;
  /** Shown when src is missing or fails to load. */
  fallback: ReactNode;
};

/** Renders an image, or a graceful placeholder when the file isn't there yet. */
export function FallbackImage({
  src,
  alt,
  className,
  fallback,
}: FallbackImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
