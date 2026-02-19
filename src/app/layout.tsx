import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CustomLayout from "@/layout-provider";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "Shey-Organic-Foods",
  description: "A simple online marketplace for farmers to sell their products and buyers to buy fresh organic foods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body
      >
       <CustomLayout>
         <Suspense fallback={null}>
         {children}
         </Suspense>
       </CustomLayout>
       <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
   </ClerkProvider>
  );
}
