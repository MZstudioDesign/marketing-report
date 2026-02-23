"use client";

import NextImage, { type ImageProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Image({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${basePath}${src}`
      : src;
  return <NextImage {...props} src={resolvedSrc} />;
}
