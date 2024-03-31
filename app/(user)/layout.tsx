import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISTAD E-Commerce Web",
  description: "We provide the best quality products for you.",
  openGraph: {
    title: "ISTAD E-Commerce Web",
    description: "We provide the best quality products for you.",
    images: 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable} h-screen flex flex-col`}
      >
        <header>
          <NavbarComponent />
        </header>
        <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
