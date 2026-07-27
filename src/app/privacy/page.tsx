import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Klusta",
  description: "Klusta Privacy Policy. Klusta is a product of EdgeRim LLC.",
};

const EFFECTIVE_DATE = "July 1st, 2026";
const LAST_UPDATED = "July 1st, 2026";

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10 text-text-muted leading-relaxed">
        <p className="text-lg text-text-dark">
          How Klusta collects, uses, shares and protects personal information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <strong className="block text-text-dark text-sm mb-1">Platform</strong>
            Klusta
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <strong className="block text-text-dark text-sm mb-1">Company</strong>
            EdgeRim LLC
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <strong className="block text-text-dark text-sm mb-1">Jurisdiction</strong>
            Delaware, United States
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <strong className="block text-text-dark text-sm mb-1">Effective Date</strong>
            {EFFECTIVE_DATE}
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 sm:col-span-2">
            <strong className="block text-text-dark text-sm mb-1">Last Updated</strong>
            {LAST_UPDATED}
          </div>
        </div>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">1. Introduction</h2>
          <p className="mb-3">
            Klusta is a product and brand operated by EdgeRim LLC, a Delaware limited liability company. This Privacy Policy explains how Klusta collects, uses, discloses, stores and protects personal information when you use the Klusta website, mobile applications, marketplace, booking services, payment features, communication tools and related services.
          </p>
          <p>
            By using Klusta, you acknowledge that your personal information may be processed as described in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">2. Information We Collect</h2>

          <h3 className="font-sans font-semibold text-text-dark text-lg mt-6 mb-2">Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, telephone number and account credentials.</li>
            <li>Profile information, profile photographs and other information you choose to provide.</li>
            <li>Identity verification information and documents where verification is required.</li>
            <li>Booking, accommodation, service and transaction information.</li>
            <li>Payment and payout information processed through Klusta or third-party payment providers.</li>
            <li>Messages, enquiries, reviews, ratings, support requests and other communications.</li>
            <li>Information provided during host or professional service provider onboarding.</li>
          </ul>

          <h3 className="font-sans font-semibold text-text-dark text-lg mt-6 mb-2">Information Collected Automatically</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address, device type, operating system, browser type and application information.</li>
            <li>Usage information, pages viewed, features used, searches and interactions with the Platform.</li>
            <li>Approximate location information derived from technical data and, where permitted, precise location information if you enable location services.</li>
            <li>Cookies, pixels, SDKs and similar technologies.</li>
          </ul>

          <h3 className="font-sans font-semibold text-text-dark text-lg mt-6 mb-2">Information From Other Sources</h3>
          <p>
            We may receive information from payment providers, identity-verification providers, fraud-prevention services, analytics providers, business partners, publicly available sources and other users where necessary to operate and protect the Platform.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">3. How We Use Personal Information</h2>
          <p className="mb-3">We may use personal information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage accounts.</li>
            <li>Provide search, discovery, booking, negotiation and marketplace functionality.</li>
            <li>Process payments, refunds, payouts and other transactions.</li>
            <li>Verify identities, Listings, Hosts and Service Providers.</li>
            <li>Communicate with you about your account, Bookings, support requests and Platform updates.</li>
            <li>Prevent fraud, abuse, security incidents and other unlawful or harmful activity.</li>
            <li>Investigate disputes, complaints, chargebacks and policy violations.</li>
            <li>Personalise and improve the Platform and develop new products and features.</li>
            <li>Send marketing communications where permitted by law and in accordance with your preferences.</li>
            <li>Comply with legal obligations and respond to lawful requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">4. Legal Bases for Processing</h2>
          <p className="mb-3">
            Depending on the circumstances and applicable law, we may process personal information because it is necessary to perform a contract with you, to take steps at your request before entering into a contract, to comply with a legal obligation, to protect vital interests, to pursue legitimate business interests, or because you have provided consent.
          </p>
          <p>
            Where we rely on consent, you may withdraw consent where permitted by applicable law. Withdrawal of consent does not affect processing that occurred before withdrawal.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">5. How We Share Personal Information</h2>
          <p className="mb-3">We may share personal information with:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Hosts, Guests, Customers and Service Providers where necessary to facilitate a Booking or transaction.</li>
            <li>Payment processors, banks and financial service providers.</li>
            <li>Identity verification, fraud prevention, security and risk-management providers.</li>
            <li>Cloud hosting, technology, analytics, communications and customer-support providers.</li>
            <li>Professional advisers, auditors, insurers and service providers acting on our behalf.</li>
            <li>Government authorities, regulators, courts or law-enforcement bodies where required or permitted by law.</li>
            <li>Entities involved in a merger, acquisition, financing, restructuring, sale of assets or similar corporate transaction.</li>
          </ul>
          <p>
            We do not sell personal information in exchange for money. We may share information with service providers and partners as necessary to operate the Platform.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">6. Payments and Financial Information</h2>
          <p className="mb-3">
            Payments may be processed by third-party payment providers. Klusta may receive transaction details and limited payment information necessary to confirm and manage transactions, but payment-card information may be collected and processed directly by the applicable payment provider.
          </p>
          <p>
            Payment providers may process your information under their own privacy policies and terms.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">7. Cookies and Similar Technologies</h2>
          <p className="mb-3">
            Klusta may use cookies, software development kits, pixels, local storage and similar technologies to keep the Platform functioning, remember preferences, understand usage, improve performance, provide security and measure marketing effectiveness.
          </p>
          <p>
            You may be able to control cookies through your browser or device settings. Disabling certain technologies may affect Platform functionality.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">8. Communications</h2>
          <p className="mb-3">
            We may send service-related communications such as booking confirmations, security alerts, account notifications and support messages.
          </p>
          <p>
            Where permitted by law, we may also send marketing communications. You can unsubscribe from promotional emails by using the unsubscribe option in the relevant communication or by contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">9. Data Retention</h2>
          <p className="mb-3">
            We retain personal information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to provide services, maintain business and financial records, resolve disputes, enforce agreements, prevent fraud and comply with legal obligations.
          </p>
          <p>
            Retention periods may vary depending on the type of information, the purpose for which it was collected and applicable legal requirements.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">10. Data Security</h2>
          <p className="mb-3">
            We use reasonable administrative, technical and organisational safeguards designed to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.
          </p>
          <p>
            No method of transmission or storage is completely secure. We cannot guarantee absolute security of personal information.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">11. International Data Transfers</h2>
          <p className="mb-3">
            Because Klusta operates using technology, service providers and infrastructure that may be located in different countries, personal information may be transferred to and processed in countries other than the country in which you live.
          </p>
          <p>
            Where required by applicable law, we will use appropriate safeguards for international transfers of personal information.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">12. Your Privacy Rights</h2>
          <p className="mb-3">Depending on your location and applicable law, you may have rights to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Request access to personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of personal information in certain circumstances.</li>
            <li>Request restriction of certain processing.</li>
            <li>Object to certain processing.</li>
            <li>Request portability of certain information.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Opt out of certain marketing communications.</li>
          </ul>
          <p>
            We may need to verify your identity before processing a privacy request. Your rights may be subject to exceptions and limitations under applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">13. United States Privacy Rights</h2>
          <p className="mb-3">
            Depending on the state in which you reside and whether applicable thresholds are met, United States privacy laws may provide additional rights concerning access, correction, deletion, portability, opting out of certain targeted advertising or sale/sharing activities, and other forms of data processing.
          </p>
          <p>
            Any state-specific disclosures and rights will be provided where required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">14. Nigerian Data Protection</h2>
          <p>
            Where applicable, Klusta and EdgeRim LLC will process personal information in accordance with applicable Nigerian data-protection requirements, including requirements applicable to lawful processing, transparency, security, data-subject rights and international transfers.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">15. Children&apos;s Privacy</h2>
          <p>
            Klusta is not intended for children who are not legally permitted to use the Platform. We do not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided personal information improperly, please contact us.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">16. Third-Party Services and Links</h2>
          <p>
            The Platform may contain links to third-party websites, services or applications. We are not responsible for the privacy practices of third parties. You should review the privacy policies of third-party services before providing them with personal information.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">17. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Where required by law, we will provide notice of material changes. The updated version will be effective from the date stated at the top of the policy.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">18. Contact Us</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-2">
            <p>
              <strong className="text-text-dark">For questions regarding this policy or your privacy, contact EdgeRim LLC:</strong>
            </p>
            <p>
              <strong className="text-text-dark">Company:</strong> EdgeRim LLC
            </p>
            <p>
              <strong className="text-text-dark">Jurisdiction:</strong> Delaware, United States
            </p>
            <p>
              <strong className="text-text-dark">Mailing Address:</strong> 8 The Green #STE A, Dover, DE 19901, United States
            </p>
            <p>
              <strong className="text-text-dark">Email:</strong>{" "}
              <a href="mailto:support@klusta.co" className="text-accent hover:underline">
                support@klusta.co
              </a>
            </p>
            <p>
              <strong className="text-text-dark">Website:</strong>{" "}
              <a
                href="https://www.klusta.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.klusta.co
              </a>
            </p>
          </div>
          <p className="mt-4">
            <Link href="/terms" className="text-accent font-medium hover:underline">
              View Terms of Service
            </Link>
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
