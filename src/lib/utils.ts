import { type ClassValue, clsx } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
}

export function constructMetadata({
  title = 'PixieCases - Custom High-Quality Phone Cases',
  description = 'Design and create custom high-quality phone cases in minutes with PixieCases. Protect your phone with personalized style.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@soulaimane020',
    },
    icons,
    metadataBase: new URL('https://pixiecases.vercel.app/'),
  };
}
