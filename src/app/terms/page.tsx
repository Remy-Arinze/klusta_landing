import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions — Klusta",
  description:
    "Klusta Terms and Conditions. Klusta is a product of EdgeRim LLC.",
};

export default function TermsPage() {
  return (
    <PageLayout title="Terms and Conditions">
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10 text-text-muted leading-relaxed">
        <section>
          <p className="text-lg text-text-dark font-medium mb-6">
            Effective Date: 01 July 2026
          </p>
          <p className="mb-3">
            These Terms and Conditions (&quot;Terms&quot;) form a legally binding agreement between you (&quot;User&quot;) and EdgeRim LLC, a Delaware limited liability company, operating the Klusta platform and related services (&quot;Klusta,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), and govern your access and use of the Platform and its related services (the &quot;Service&quot;).
          </p>
          <p>
            By accessing or using the Service, you agree to these Terms, the{" "}
            <Link href="/privacy" className="text-accent font-medium hover:underline">
              Privacy Policy
            </Link>
            , and the Community Guidelines.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">1. Introduction and Scope</h2>
          <p className="mb-3">
            Klusta operates a digital marketplace and technology platform that enables users to discover, compare, negotiate, book and pay for short-let accommodation, professional services and other services made available through the Platform by independent hosts, professionals, businesses and service providers.
          </p>
          <p className="mb-3">
            These Terms apply to all use of the Klusta website, mobile applications, software, marketplace, booking tools, payment functionality, messaging tools, verification systems, customer-support channels and related services (collectively, the &quot;Platform&quot;).
          </p>
          <p>
            If you do not agree to these Terms, you must not access or use the Platform.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">2. Definitions</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-text-dark">&quot;Booking&quot;</strong>: means a confirmed reservation or engagement for an Accommodation or Service through the Platform.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Booking Amount&quot;</strong>: means the amount payable by a Guest or Customer for a Booking, including any applicable taxes, charges or Platform fees displayed before confirmation.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Check-In&quot;</strong>: means the point at which a Guest takes possession of or arrives at an Accommodation, or the equivalent commencement of a booked Service.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Guest&quot; or &quot;Customer&quot;</strong>: means a person who searches for, requests, books or purchases an Accommodation or Service through the Platform.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Host&quot;</strong>: means a person or entity offering an Accommodation through the Platform.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Professional&quot; or &quot;Service Provider&quot;</strong>: means an independent person or entity offering a professional or other service through the Platform.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Listing&quot;</strong>: means an Accommodation or Service profile published on the Platform.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Platform&quot;</strong>: means the Klusta website, mobile applications, software, marketplace, payment systems and related services.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Payout&quot;</strong>: means the amount released to a Host or Service Provider after deduction of applicable Klusta commissions, fees, adjustments, refunds or other permitted amounts.
            </li>
            <li>
              <strong className="text-text-dark">&quot;Verification&quot;</strong>: means a review or validation process performed by Klusta or its designated representatives, which may include identity, documentation, physical inspection, qualification or listing verification.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">3. The Klusta Marketplace</h2>
          <p className="mb-3">
            Klusta is a technology marketplace and booking facilitator. Except where Klusta expressly states otherwise, Klusta is not the owner, operator, landlord, employer, agent, employee, insurer, professional provider or direct supplier of the Accommodation or Service booked through the Platform.
          </p>
          <p className="mb-3">
            Hosts and Service Providers are independent third parties. They are responsible for the accuracy of their Listings, the legality and quality of their offerings, their qualifications, licences, permits, insurance, personnel, taxes and compliance with applicable law.
          </p>
          <p className="mb-3">
            Klusta may provide tools for discovery, communication, negotiation, booking, payment collection, escrow-style holding of funds, verification, reviews, dispute intake and customer support. The availability of any particular tool may vary by market, product, payment provider and applicable law.
          </p>
          <p>
            A verification badge or verified status means only that the particular verification process identified by Klusta was completed. It is not an unlimited guarantee of identity, ownership, competence, safety, legality, quality or future conduct.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">4. Account Registration and Eligibility</h2>
          <p className="mb-3">
            You must provide accurate, complete and current information when creating or maintaining an account. You must promptly update information that becomes inaccurate or incomplete.
          </p>
          <p className="mb-3">
            You must be legally capable of entering into a binding agreement under the laws applicable to you. Unless otherwise permitted by applicable law and properly supervised by a parent or legal guardian, users must be at least 18 years old.
          </p>
          <p className="mb-3">
            You are responsible for maintaining the confidentiality of your account credentials and for activity conducted through your account. You must notify Klusta promptly of suspected unauthorised access.
          </p>
          <p>
            You must not create an account using another person&apos;s identity, transfer your account without permission, create accounts to evade enforcement, or provide false identity or business information.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">5. Host / Service Provider Onboarding and Verification</h2>
          <p className="mb-3">
            Before a Listing is published, Klusta may require the Host or Service Provider to complete an onboarding and verification process.
          </p>
          <p className="mb-3">
            For Accommodation Listings, this may include physical inspection or remote verification of location, ownership or lawful occupancy rights, facilities, photographs, amenities, safety features and other material information.
          </p>
          <p className="mb-3">
            A Host may be required to provide valid identity documentation, proof of ownership or lawful tenancy rights, contact information and other documents reasonably requested by Klusta.
          </p>
          <p className="mb-3">
            A Service Provider may be required to provide evidence of professional qualifications, licences, registrations, certifications, insurance or other legally required authorisations.
          </p>
          <p className="mb-3">
            Klusta may conduct periodic re-verification. A Host or Service Provider must notify Klusta if information previously supplied becomes materially inaccurate, expired, suspended, revoked or otherwise invalid.
          </p>
          <p>
            Klusta may refuse to publish, temporarily hide, restrict or remove a Listing where verification is incomplete, information is materially inaccurate, safety concerns arise, or the Listing otherwise fails Klusta&apos;s standards.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">6. Listings, Pricing and Availability</h2>
          <p className="mb-3">
            Hosts and Service Providers are solely responsible for ensuring that Listings are accurate, current and not misleading.
          </p>
          <p className="mb-3">
            Listings should accurately describe the Accommodation or Service, including material limitations, location, facilities, amenities, availability, pricing, duration, requirements and cancellation conditions.
          </p>
          <p className="mb-3">
            Hosts must keep availability calendars current and must not accept Bookings where the Accommodation is unavailable or subject to a double-booking conflict.
          </p>
          <p className="mb-3">
            Klusta may display prices in the local currency of the city or market in which the Accommodation or Service is offered. Currency conversion, if displayed, may be indicative and may not reflect the final amount charged by a payment provider.
          </p>
          <p className="mb-3">
            Klusta may require Hosts and Service Providers to use pricing that is competitive with comparable direct or offline offerings. Klusta does not guarantee any minimum number of bookings or revenue.
          </p>
          <p>
            Klusta may permit Guests and Customers to negotiate pricing through approved in-Platform tools. A negotiated price is not binding until confirmed through the Platform.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">7. Bookings and Booking Confirmation</h2>
          <p className="mb-3">
            A request to book does not necessarily constitute a confirmed Booking. A Booking becomes confirmed only when Klusta or the relevant Host or Service Provider confirms it through the Platform or by another authorised method.
          </p>
          <p className="mb-3">
            The Booking terms may include the Listing description, agreed price, dates, times, location, duration, cancellation rules and any additional terms shown before confirmation.
          </p>
          <p className="mb-3">
            A Host or Service Provider must honour a confirmed Booking except where cancellation is reasonably necessary due to circumstances permitted by these Terms, applicable policy or law.
          </p>
          <p>
            A Guest or Customer must review the Listing and Booking details before confirmation and must ensure that the Accommodation or Service is suitable for the Guest&apos;s or Customer&apos;s needs.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">8. Payments, Escrow and Payouts</h2>
          <p className="mb-3">
            All Booking payments may be processed through Klusta or a third-party payment processor integrated with the Platform.
          </p>
          <p className="mb-3">
            Where Klusta&apos;s escrow-style payment model applies, the Guest or Customer may be required to pay the full Booking Amount before the Booking is confirmed. Klusta may hold the applicable funds pending Check-In, confirmation, the expiry of a dispute period, or another release event specified by Klusta.
          </p>
          <p className="mb-3">
            Once the Guest confirms satisfactory Check-In, or once the applicable dispute period expires without a valid dispute, Klusta may release the applicable Payout to the Host, less Klusta&apos;s commission, applicable fees, refunds, chargebacks, adjustments or other amounts permitted under these Terms.
          </p>
          <p className="mb-3">
            Klusta&apos;s commission may be between 5% and 10% of the applicable listed or agreed Booking amount, or another percentage communicated to the Host before the relevant Booking. The applicable commission may vary by product, market, category, promotion or commercial agreement.
          </p>
          <p className="mb-3">
            Klusta may delay, suspend, reduce or withhold a Payout where reasonably necessary to investigate fraud, payment reversals, chargebacks, policy violations, disputes, identity concerns, legal requirements or other risks.
          </p>
          <p className="mb-3">
            Payment processing may be subject to the terms and privacy practices of third-party payment processors. Klusta may not directly store complete payment-card details.
          </p>
          <p>
            No user may knowingly use a stolen, fraudulent, unauthorised or unlawfully obtained payment method.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">9. Negotiated Pricing and In-Platform Communications</h2>
          <p className="mb-3">
            Klusta may provide an in-chat or other communication feature that allows Guests and Hosts, or Customers and Service Providers, to discuss the scope, timing and price of a potential Booking.
          </p>
          <p className="mb-3">
            Users must not use the communication tools to send unlawful, abusive, fraudulent, malicious or misleading content.
          </p>
          <p className="mb-3">
            Users must not use Klusta&apos;s communication tools to deliberately circumvent Klusta&apos;s payment, booking, safety, verification or commission systems.
          </p>
          <p>
            Klusta may retain and review communications where reasonably necessary for safety, fraud prevention, customer support, dispute resolution, legal compliance or enforcement of these Terms, subject to applicable privacy law.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">10. Guest / Customer Responsibilities</h2>
          <p className="mb-3">
            Guests and Customers must review the Listing and Booking details before booking and must raise material questions before confirmation where reasonably possible.
          </p>
          <p className="mb-3">
            Guests must provide accurate information required for the Booking and must comply with reasonable check-in, identification and access requirements.
          </p>
          <p className="mb-3">
            A Guest should inspect the Accommodation promptly upon arrival and notify Klusta immediately, and in any event within the applicable dispute window, if the Accommodation materially differs from the Listing or fails agreed standards.
          </p>
          <p className="mb-3">
            Guests and Customers are responsible for their own conduct, safety and wellbeing and for the conduct of persons they bring to an Accommodation or Service.
          </p>
          <p>
            Guests and Customers must comply with applicable law, building rules, property rules and reasonable instructions relating to safety and access.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">11. Host / Service Provider Responsibilities</h2>
          <p className="mb-3">
            Hosts and Service Providers must provide the Accommodation or Service substantially as described in the confirmed Listing and Booking.
          </p>
          <p className="mb-3">
            Hosts must ensure that Accommodations are reasonably clean, safe, habitable, available and prepared at the time of Check-In, subject to the nature of the Accommodation and applicable law.
          </p>
          <p className="mb-3">
            Hosts must maintain accurate photographs, amenities, descriptions, pricing and availability information.
          </p>
          <p className="mb-3">
            Hosts must not materially misrepresent an Accommodation or Service, accept a Booking they cannot fulfil, or knowingly conceal material defects or limitations.
          </p>
          <p className="mb-3">
            Hosts and Service Providers must cooperate with Klusta&apos;s onboarding, verification, inspection, investigation and dispute-resolution processes.
          </p>
          <p>
            Hosts and Service Providers are responsible for complying with all laws and regulations applicable to their operations, including licensing, tax, safety, employment, professional and business requirements.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">12. Check-In, Acceptance and Confirmation</h2>
          <p className="mb-3">
            The Guest should confirm Check-In and satisfaction through the Platform as soon as reasonably possible after arrival.
          </p>
          <p className="mb-3">
            If the Guest confirms satisfaction without raising a material dispute, Klusta may treat the Booking as accepted and may release the applicable Payout to the Host.
          </p>
          <p className="mb-3">
            Failure to raise a dispute promptly may affect the availability of a refund or other remedy, except where applicable law requires otherwise or the issue could not reasonably have been discovered at Check-In.
          </p>
          <p>
            A confirmation of satisfaction does not waive rights that cannot legally be waived.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">13. Disputes, Refunds and Service Failures</h2>
          <p className="mb-3">
            A Guest or Customer may submit a dispute where the Accommodation or Service is materially different from the confirmed Listing or Booking, is not reasonably available, or fails a material agreed requirement.
          </p>
          <p className="mb-3">
            Disputes should be submitted promptly through Klusta&apos;s designated support or dispute channel, with relevant evidence such as photographs, videos, messages, receipts or other documentation.
          </p>
          <p className="mb-3">
            Klusta may review a dispute within a target period such as 48 hours after receiving sufficient information. The actual time may vary depending on complexity, availability of evidence, the parties&apos; responses and the need for investigation.
          </p>
          <p className="mb-3">
            Where a dispute is upheld, the remedy may include a full refund, partial refund, credit, alternative Booking, payment adjustment or another remedy reasonably determined by Klusta, subject to applicable law.
          </p>
          <p className="mb-3">
            Klusta may consider the severity of the issue, whether the issue was disclosed, whether the Guest attempted to resolve it, the time of notification and whether the issue materially affected the Booking.
          </p>
          <p>
            Klusta does not guarantee that every complaint will result in a refund.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">14. Cancellations and No-Shows</h2>
          <p className="mb-3">
            The cancellation terms displayed at the time of Booking will generally govern, subject to mandatory rights under applicable law.
          </p>
          <p className="mb-3">
            A Guest or Customer may be charged a cancellation fee where the applicable Booking terms permit such a charge.
          </p>
          <p className="mb-3">
            If a Host or Service Provider cancels a confirmed Booking, Klusta may provide a refund, assist with alternative arrangements, impose account consequences or take other appropriate action.
          </p>
          <p className="mb-3">
            A no-show may be treated as a cancellation or completed Booking according to the applicable Booking terms.
          </p>
          <p>
            Klusta may make exceptions where cancellation results from serious emergencies, safety concerns, force majeure or other circumstances recognised under applicable policy or law.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">15. Damages, Theft, Safety and Post-Check-In Events</h2>
          <p className="mb-3">
            Once a Guest has checked in and confirmed satisfaction, Klusta&apos;s escrow-style Booking responsibility generally ends, subject to unresolved disputes, mandatory legal obligations, payment reversals, fraud investigations and other rights expressly reserved under these Terms.
          </p>
          <p className="mb-3">
            Klusta is generally not responsible for theft, damage, noise, personal disagreements, injury, misconduct or other incidents occurring after Check-In that are unrelated to a failure of the Booking itself.
          </p>
          <p className="mb-3">
            Nothing in this section prevents Klusta from investigating serious safety, fraud or misconduct reports or taking action to protect users and the Platform.
          </p>
          <p>
            Users should contact appropriate emergency services or relevant authorities where an immediate threat to life, health or safety exists.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">16. Prohibited Conduct and Off-Platform Circumvention</h2>
          <p>
            Users must not use Klusta for unlawful, fraudulent, deceptive, abusive or unsafe conduct.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">Contact &amp; Support</h2>
          <p className="mb-3">
            For questions regarding these Terms, this Policy or your privacy, contact <strong className="text-text-dark">EdgeRim LLC</strong>:
          </p>
          <ul className="space-y-2">
            <li>
              <strong className="text-text-dark">Website:</strong>{" "}
              <a
                href="https://www.klusta.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
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
