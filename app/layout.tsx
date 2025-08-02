import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Random Link',
  description: 'Click to visit a random website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}