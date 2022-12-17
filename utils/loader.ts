interface ImageLoader {
  src: string;
  width: number;
  quality: string;
}

export default function imageLoader({ src, width, quality }: ImageLoader) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
