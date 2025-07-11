import "./globals.css";
import { Metadata } from "next";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Sun State HOA – Self‑Service Compliance Sites",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Launch a Chapter 720‑compliant HOA website in minutes. Generate a sub‑domain, invite members, and control your documents—no developers needed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen font-sans antialiased text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-md sticky top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Sun State HOA" className="h-8 w-auto" />
          <span className="sr-only">Sun State HOA</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/features" className="hover:text-sky-600">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-sky-600">
            Pricing
          </Link>
        </nav>
        <Link
          href="/start"
          className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-700"
        >
          Get&nbsp;Started
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-500 space-y-2">
        <p>
          &copy; {new Date().getFullYear()} Sun&nbsp;State&nbsp;HOA. All rights
          reserved.
          <span className="mx-2">|</span>
          <a
            href="mailto:admin@sunstatehoa.com"
            className="hover:text-gray-700"
          >
            admin@sunstatehoa.com
          </a>
        </p>
        <div className="text-sm text-center text-gray-600">
          Navigate:{" "}
          <Link href="/features" className="hover:text-gray-700">
            Features
          </Link>{" "}
          &middot;{" "}
          <Link href="/pricing" className="hover:text-gray-700">
            Pricing
          </Link>{" "}
          &middot; <LogoutButton />
        </div>
      </div>
    </footer>
  );
}
