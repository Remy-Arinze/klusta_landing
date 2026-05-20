import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Klusta",
  description: "Klusta Privacy Policy for short-let bookings and property listings. Operated by EdgeRim LLC.",
};

const EFFECTIVE_DATE = "May 17, 2026";

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10 text-text-muted leading-relaxed">
        <p className="text-lg text-text-dark">
          Effective date: {EFFECTIVE_DATE}
        </p>
        <p className="text-sm">
          Operated by <strong className="text-text-dark">EdgeRim LLC</strong>
        </p>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-dark">Personal data:</strong> Name, email, phone number, date of birth, and government ID where required.
            </li>
            <li>
              <strong className="text-text-dark">Usage data:</strong> IP addresses, device identifiers, and browser types.
            </li>
            <li>
              <strong className="text-text-dark">Location:</strong> Precise or approximate location to show nearby apartments.
            </li>
            <li>
              <strong className="text-text-dark">Communications:</strong> Messages between hosts and guests and support interactions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">2. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate bookings, negotiations, and process payments.</li>
            <li>To verify identities and prevent fraudulent activity.</li>
            <li>To provide personalized recommendations and analyze platform performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">3. Data Sharing &amp; Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-dark">Third parties:</strong> Information may be shared with payment processors, cloud hosting services, and analytics providers.
            </li>
            <li>
              <strong className="text-text-dark">Legal:</strong> Data may be disclosed to comply with court orders or law enforcement.
            </li>
            <li>
              <strong className="text-text-dark">Security:</strong> While we use technical safeguards, no system is 100% secure; users must protect their own credentials.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">4. Your Rights</h2>
          <p className="mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access or correct your personal information.</li>
            <li>Request data deletion or object to certain processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">Contact &amp; Support</h2>
          <p className="mb-3">
            For questions regarding this policy or your privacy, contact <strong className="text-text-dark">EdgeRim LLC</strong>:
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
            <Link href="/terms" className="text-accent font-medium hover:underline">
              View Terms &amp; Conditions
            </Link>
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
