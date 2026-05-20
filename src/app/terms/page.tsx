import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — Klusta",
  description: "Klusta Terms and Conditions for short-let bookings and property listings. Operated by EdgeRim LLC.",
};

const EFFECTIVE_DATE = "May 17, 2026";

export default function TermsPage() {
  return (
    <PageLayout title="Terms & Conditions">
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10 text-text-muted leading-relaxed">
        <p className="text-lg text-text-dark">
          Effective date: {EFFECTIVE_DATE}
        </p>
        <p className="text-sm">
          Operated by <strong className="text-text-dark">EdgeRim LLC</strong>
        </p>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">1. About the Platform</h2>
          <p className="mb-3">
            Klusta is a technology marketplace connecting users with property owners. Users can:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Discover and book short-let accommodations.</li>
            <li>Negotiate rental prices directly with hosts.</li>
            <li>Communicate regarding bookings and access lifestyle services.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">2. Eligibility &amp; Accounts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-dark">Age:</strong> You must be at least <strong className="text-text-dark">18 years old</strong>.
            </li>
            <li>
              <strong className="text-text-dark">Responsibility:</strong> Users are responsible for all activities under their account and must keep login credentials secure.
            </li>
            <li>
              <strong className="text-text-dark">Accuracy:</strong> You must provide truthful and complete registration information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">3. Payments &amp; Cancellations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-dark">Processing:</strong> Payments are handled via Klusta or third-party providers.
            </li>
            <li>
              <strong className="text-text-dark">Refunds:</strong> Eligibility depends on the host&apos;s specific policy and the timing of the cancellation.
            </li>
            <li>
              <strong className="text-text-dark">Disputes:</strong> Klusta reserves the right to investigate disputes and determine refund eligibility.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">4. User Conduct</h2>
          <p className="mb-3">Users are prohibited from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the platform for unlawful purposes or fraud.</li>
            <li>Harassing other users or circumventing the platform to avoid fees.</li>
            <li>Using bots, scraping tools, or uploading malicious code.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">Contact &amp; Support</h2>
          <p className="mb-3">
            For questions regarding these terms, contact <strong className="text-text-dark">EdgeRim LLC</strong>:
          </p>
          <ul className="space-y-2">
            <li>
              <strong className="text-text-dark">Website:</strong>{" "}
              <a href="https://www.klusta.co" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                https://www.klusta.co
              </a>
            </li>
            <li>
              <strong className="text-text-dark">Email:</strong>{" "}
              <a href="mailto:support@klusta.co" className="text-accent hover:underline">
                support@klusta.co
              </a>
            </li>
          </ul>
          <p className="mt-4">
            <Link href="/privacy" className="text-accent font-medium hover:underline">
              View Privacy Policy
            </Link>
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
