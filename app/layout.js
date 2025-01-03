import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true} className={`${inter.className}`}>
          {/* Header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-100 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❣️ by Prince</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
