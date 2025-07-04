import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sun State HOA",
  description: "Modern HOA site for transparency and community management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.png" // adjust path if using subfolder like /assets/logo.png
            alt="Sun State HOA"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold text-gray-800">Sun State HOA</span>
        </a>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/faq" className="hover:text-blue-600">FAQ</a>
          <a href="/learn-more" className="hover:text-blue-600">About</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}


function Footer() {
  return (
    <footer className="bg-white border-t text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Sun State HOA. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:text-gray-700">Privacy</a>
          <a href="/terms" className="hover:text-gray-700">Terms</a>
        </div>
      </div>
    </footer>
  );
}
