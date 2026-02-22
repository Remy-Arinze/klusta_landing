import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Sign up — Klusta",
  description: "Create your Klusta account to book shortlets or list your property in Nigeria.",
};

export default function SignupPage() {
  return (
    <PageLayout title="Sign up">
      <div className="max-w-md mx-auto px-6 lg:px-10 py-12">
        <p className="text-text-muted text-center mb-8">
          Create an account to book shortlets or list your property.
        </p>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1.5">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-accent text-black font-medium hover:bg-accent-dark transition-colors"
          >
            Create account
          </button>
        </form>
        <p className="mt-6 text-center text-text-muted text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-accent font-medium hover:underline">
            Sign in
          </Link>
        </p>
        <Link
          href="/"
          className="inline-flex items-center mt-10 text-text-muted hover:text-text-dark transition text-sm"
        >
          ← Back to home
        </Link>
      </div>
    </PageLayout>
  );
}
