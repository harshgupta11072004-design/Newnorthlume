import React from "react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 mt-12">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            Payments & Refunds
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cancellation & Refund Policy
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: 19 August 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="leading-8 text-gray-300">
            This Refund Policy outlines the terms governing purchases made on
            NORTHLUME (“we”, “us”, “our”), including courses, Premium
            Memberships, live sessions, one-on-one sessions, and digital
            resources (together, the “Platform” or “Services”).
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            It forms an integral part of our{" "}
            <span className="font-medium text-white">
              Terms & Conditions
            </span>
            .
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            NORTHLUME is a brand operated by{" "}
            <span className="font-medium text-white">
              NORTHLUME (OPC) PRIVATE LIMITED
            </span>{" "}
            (CIN: U85500DC2026OPC474199), a company incorporated under the
            Companies Act, 2013, with its registered office at E-135 t/f
            front, left side om vihar phase5, uttam nagar, new delhi, west
            delhi, delhi, india, 110059.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">

          {/* 01 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="01" title="General No-Refund Policy" />

            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="leading-7 text-gray-300">
                Except as expressly provided in Section 4 of this policy, all
                purchases made on NORTHLUME—including Premium Memberships,
                self-paced courses, live educational sessions, one-on-one
                sessions, community access, and digital content—are strictly
                non-refundable once payment processing is complete.
              </p>
            </div>

            <p className="mt-5 leading-8 text-gray-300">
              By completing a purchase, you acknowledge and agree to this
              Strict No-Refund Policy.
            </p>
          </section>

          {/* 02 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="02" title="Ineligibility Grounds" />

            <p className="mb-5 leading-8 text-gray-300">
              Refunds will not be issued or considered under any of the
              following circumstances:
            </p>

            <RefundCard
              title="Change of Mind"
              description="Decisions to discontinue learning, lack of personal interest, or change in personal schedules."
            />

            <RefundCard
              title="Non-Usage"
              description="Failure to attend live sessions, access course materials, or log into the Telegram/Platform community."
            />

            <RefundCard
              title="Dissatisfaction with Outcomes"
              description="Disagreement with market analysis, inability to achieve expected trading profits, trading losses, or general performance outcomes in financial markets."
            />

            <RefundCard
              title="Community Removal"
              description="Revocation of access or removal from community channels due to a violation of our Terms & Conditions or Community Guidelines."
            />

            <RefundCard
              title="Promotional Purchases"
              description="Any program, membership, or resource purchased using a special discount code, offer, or promotional bundle explicitly marked as non-refundable."
            />
          </section>

          {/* 03 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="03"
              title="One-on-One & Live Educational Sessions"
            />

            <p className="leading-8 text-gray-300">
              Fees paid for live workshops, masterclasses, or one-on-one
              doubt-solving sessions are non-refundable once scheduled.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              If a participant misses a scheduled session, NORTHLUME is under
              no obligation to issue a refund or reschedule.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-400">
                Rescheduling may be considered solely at our discretion,
                subject to mentor availability.
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="04"
              title="Exceptional Circumstances & Duplicate Payments"
            />

            <p className="mb-5 leading-8 text-gray-300">
              Refunds or credits may only be evaluated on a case-by-case basis
              under the following technical exceptions:
            </p>

            <ExceptionCard
              title="Duplicate Charges"
              description="If your payment instrument was charged multiple times for a single order due to a payment gateway glitch."
            />

            <ExceptionCard
              title="Technical Inaccessibility"
              description="If a verifiable technical issue on our end permanently prevents you from accessing purchased content, and our technical support team is unable to resolve it within a reasonable timeframe."
            />
          </section>

          {/* 05 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="05"
              title="How to Raise an Exception Request"
            />

            <p className="mb-5 leading-8 text-gray-300">
              If you experience a duplicate charge or a technical access
              error, please follow these steps:
            </p>

            <div className="space-y-3">
              <Step number="01">
                Email our support team at{" "}
                <a
                  href="mailto:support@northlume.in"
                  className="font-medium text-white underline underline-offset-4 hover:text-gray-400"
                >
                  support@northlume.in
                </a>{" "}
                within 48 hours of the transaction.
              </Step>

              <Step number="02">
                Provide your full name, registered email ID, transaction
                reference/order ID, and screenshot/proof of payment.
              </Step>

              <Step number="03">
                Our team will verify the claim and notify you of the outcome
                within 3–5 business days.
              </Step>
            </div>
          </section>

          {/* 06 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="06" title="Refund Processing Time" />

            <p className="leading-8 text-gray-300">
              If an exception request or duplicate payment refund is approved
              by NORTHLUME, refunds will be processed back to the original
              payment method used during checkout via our payment gateway
              partners, such as Razorpay or Stripe.
            </p>

            <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <p className="leading-7 text-gray-300">
                Approved refunds typically take{" "}
                <span className="font-semibold text-white">
                  5 to 10 business days
                </span>{" "}
                to reflect in your account, depending on your bank, credit
                card issuer, or payment provider.
              </p>
            </div>
          </section>

          {/* 07 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="07" title="Changes to This Policy" />

            <p className="leading-8 text-gray-300">
              NORTHLUME reserves the right to modify or update this Refund
              Policy at any time.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              The policy version active at the time of your purchase will
              apply to that transaction.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              Updated versions will be published on www.northlume.in with a
              revised "Last updated" date.
            </p>
          </section>

          {/* 08 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="08" title="Contact & Grievance Redressal" />

            <p className="mb-6 leading-8 text-gray-300">
              For any payment issues, refund inquiries, or grievances, please
              contact us at:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Support */}
              <ContactCard
                title="NORTHLUME Support"
                items={[
                  {
                    label: "Website",
                    value: "www.northlume.in",
                  },
                  {
                    label: "Email",
                    value: "support@northlume.in",
                    href: "mailto:support@northlume.in",
                  },
                ]}
              />

              {/* Grievance Officer */}
              <ContactCard
                title="Grievance Officer"
                items={[
                  {
                    label: "Name",
                    value: "Ankush Dabas",
                  },
                  {
                    label: "Entity",
                    value: "NORTHLUME (OPC) PRIVATE LIMITED",
                  },
                  {
                    label: "Email",
                    value: "admin@northlume.in",
                    href: "mailto:admin@northlume.in",
                  },
                ]}
              />

            </div>

            {/* Address */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="mb-2 text-sm font-medium text-gray-400">
                Registered Office
              </p>

              <p className="leading-7 text-gray-300">
                E-135 t/f front, left side om vihar phase5, uttam nagar,
                new delhi, west delhi, delhi, india, 110059.
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NORTHLUME. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}


/* --------------------------------
   Reusable Components
--------------------------------- */

function SectionTitle({ number, title }:any) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-gray-400">
        {number}
      </span>

      <h2 className="pt-1 text-xl font-semibold leading-7 text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}


function RefundCard({ title, description }:any) {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
}


function ExceptionCard({ title, description }:any) {
  return (
    <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-300">
        {description}
      </p>
    </div>
  );
}


function Step({ number, children }:any) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
      <span className="flex h-8 min-w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-semibold text-gray-400">
        {number}
      </span>

      <p className="leading-7 text-gray-300">
        {children}
      </p>
    </div>
  );
}


function ContactCard({ title, items }:any) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item: any, index: any) => (
          <div key={index}>
            <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
              {item.label}
            </p>

            {item.href ? (
              <a
                href={item.href}
                className="break-all text-sm text-gray-300 transition hover:text-white"
              >
                {item.value}
              </a>
            ) : (
              <p className="break-words text-sm leading-6 text-gray-300">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}