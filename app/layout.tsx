import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empuls — Employee Engagement Platform",
  description: "Your people-first platform with all the tools you need to build a unique culture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-light-000">
        {children}
      </body>
    </html>
  );
}
