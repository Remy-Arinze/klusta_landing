import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-section-light flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full text-center">
          <span className="inline-block font-sans text-[8rem] sm:text-[10rem] leading-none font-bold text-accent/20 select-none">
            404
          </span>
          <h1 className="font-sans text-2xl sm:text-3xl text-text-dark font-bold tracking-tight mt-4">
            Page not found
          </h1>
          <p className="text-text-muted mt-4 text-lg">
            This shortlet might have been checked out, or the link is broken. Head back home to find a place to stay or list your property.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-black font-semibold hover:bg-accent-dark transition-colors w-full sm:w-auto"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-gray-200 text-text-dark font-semibold hover:border-accent hover:text-accent transition-colors w-full sm:w-auto"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
