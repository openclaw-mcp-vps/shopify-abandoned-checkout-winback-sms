import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMS Winback — Recover Shopify Abandoned Checkouts",
  description: "Automatically send timed SMS sequences to customers who abandon Shopify checkouts. Recover lost revenue with customizable delays and discount codes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ce3d401d-e195-4c02-802c-f3fe6fed926b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
