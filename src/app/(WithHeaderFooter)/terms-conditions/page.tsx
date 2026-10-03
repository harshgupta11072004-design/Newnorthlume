
import React from "react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 mt-12">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            Legal Information
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: 03 October 2026
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="leading-8 text-gray-300">
            These Terms & Conditions (“Terms”) govern access to and use of the
            NORTHLUME website, mobile experience, courses, memberships, and
            digital resources (together, the “Platform” or “Services”),
            operated by NORTHLUME (“NORTHLUME”, “we”, “us”).
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            By creating an account, subscribing, or purchasing any Service,
            you agree to these Terms. If you do not agree, please do not use
            the Platform.
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

        {/* Terms Sections */}
        <div className="space-y-6">

          {/* 01 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="01" title="Eligibility and Account Registration" />

            <p className="text-gray-300 leading-8">
              You must be at least 18 years old, or using the Platform under
              the supervision of a parent or legal guardian who agrees to
              these Terms on your behalf, to register an account or purchase
              Services.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              You are responsible for maintaining the confidentiality of your
              login credentials and for all activities that occur under your
              account. You agree not to share, resell, or transfer your
              account access. Notify us promptly at{" "}
              <a
                href="mailto:support@northlume.in"
                className="text-white underline underline-offset-4 hover:text-gray-400"
              >
                support@northlume.in
              </a>{" "}
              if you suspect any unauthorised use of your account.
            </p>
          </section>

          {/* 02 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="02" title="Nature of the Platform & Financial Disclaimer" />

            <p className="text-gray-300 leading-8">
              NORTHLUME is strictly an educational and informational platform
              providing courses, live classes, community discussions, market
              analysis, and recorded content on financial markets, technical
              analysis, and trading methodologies.
            </p>

            <InfoBlock title="No Financial Advice">
              NORTHLUME is not a stockbroker, portfolio manager, SEBI-registered
              research analyst, or investment adviser. Nothing on the Platform
              constitutes financial, investment, legal, or tax advice.
            </InfoBlock>

            <InfoBlock title="No Guarantee of Profit">
              We make no promises, guarantees, or representations regarding
              returns, profits, win rates, or trading performance. Past
              performance, backtests, or hypothetical trade examples do not
              guarantee future results.
            </InfoBlock>

            <InfoBlock title="Risk Acknowledgment">
              Trading and investing in financial markets involve substantial
              risk of loss. You are solely responsible for your own trading
              decisions and risk management.
            </InfoBlock>
          </section>

          {/* 03 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="03" title="Service Access and Licence" />

            <p className="text-gray-300 leading-8">
              On successful payment, we grant you a limited, non-exclusive,
              non-transferable, and revocable licence to access the purchased
              educational content or Premium Membership for your personal,
              non-commercial use.
            </p>

            <InfoBlock title="Device Limits">
              For security and anti-piracy purposes, access may be restricted
              to a maximum of two registered devices per user account.
            </InfoBlock>

            <InfoBlock title="Restrictions">
              You may not download, record, reproduce, redistribute, resell,
              or publicly share any NORTHLUME content, stream recordings, or
              member-only analysis without express written consent.
            </InfoBlock>
          </section>

          {/* 04 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="04" title="Pricing and Payments" />

            <p className="text-gray-300 leading-8">
              Prices for memberships, courses, one-on-one sessions, and digital
              products are displayed in Indian Rupees (INR) (or other
              applicable currencies) inclusive of applicable taxes, and are
              shown in full before checkout.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Payments are processed through secure third-party payment
              gateways (e.g., Razorpay/Stripe). NORTHLUME does not directly
              store full credit/debit card credentials or banking passwords.
              Recurring subscription renewals and cancellation conditions will
              be specified at the point of purchase.
            </p>
          </section>

          {/* 05 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="05" title="Live Classes and One-on-One Sessions" />

            <p className="text-gray-300 leading-8">
              Where a Service includes live sessions or one-on-one educational
              guidance:
            </p>

            <BulletList
              items={[
                "Sessions run on a published schedule via integrated tools or third-party meeting platforms.",
                "Schedules may occasionally change due to mentor availability or technical issues.",
                "Where reasonably possible, advance notice or access to session recordings (where applicable) will be provided.",
                "One-on-one sessions are strictly for educational doubt-clearing and guidance, not personalized portfolio management.",
              ]}
            />
          </section>

          {/* 06 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="06" title="Community Access and Acceptable Use" />

            <p className="text-gray-300 leading-8">
              Access to NORTHLUME communities (such as Telegram, Discord, or
              platform forums) is a privilege provided under our Acceptable
              Use rules. You agree not to:
            </p>

            <BulletList
              items={[
                "Upload or transmit unlawful, abusive, harassing, or harmful content.",
                "Share paid, proprietary, or confidential community content outside authorized channels.",
                "Solicit other members for unauthorised financial services, schemes, or commercial activities.",
                "Attempt to reverse-engineer, scrape, or disrupt the Platform's security or operations.",
                "Misrepresent your identity or impersonate any individual or entity.",
              ]}
            />

            <p className="mt-4 text-gray-300 leading-8">
              Violation of community rules may result in immediate termination
              of community access without refund.
            </p>
          </section>

          {/* 07 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="07" title="Refund Policy" />

            <p className="text-gray-300 leading-8">
              All purchases—including Premium Memberships, courses, live
              workshops, one-on-one sessions, and digital resources—are
              non-refundable once payment is completed.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Refunds will not be issued for change of mind, lack of
              participation, missed live sessions, dissatisfaction with market
              outcomes, or personal trading losses.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Any statutory rights that cannot be excluded under applicable
              consumer protection laws remain unaffected.
            </p>
          </section>

          {/* 08 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="08" title="Third-Party Services and Affiliate Disclosure" />

            <p className="text-gray-300 leading-8">
              NORTHLUME may integrate with or link to third-party services
              (such as charting software, communication tools, or broker
              platforms). We do not control or endorse these third-party
              platforms and are not liable for their availability, performance,
              or privacy practices.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Where NORTHLUME maintains an affiliate or referral relationship
              with a third-party service provider, compensation may be
              received. Users are advised to perform their own due diligence
              before signing up with third-party providers.
            </p>
          </section>

          {/* 09 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="09" title="Intellectual Property" />

            <p className="text-gray-300 leading-8">
              All Platform software, course materials, video lectures, charts,
              branding, logos, graphics, and proprietary educational frameworks
              are owned by or licensed to NORTHLUME and are protected by
              intellectual property laws.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Unauthorized distribution, copying, or commercial exploitation is
              strictly prohibited and subject to legal action.
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="10" title="Limitation of Liability" />

            <p className="text-gray-300 leading-8">
              To the maximum extent permitted by applicable law, NORTHLUME,
              its directors, employees, and partners shall not be liable for
              any indirect, incidental, consequential, or trading losses
              (including loss of capital, profits, or data) arising from your
              use of or inability to use the Platform.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Our total liability for any claim relating to the Platform is
              limited to the amount paid by you for the relevant Service in the
              twelve (12) months preceding the claim.
            </p>
          </section>

          {/* 11 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="11" title="Indemnification" />

            <p className="text-gray-300 leading-8">
              You agree to defend, indemnify, and hold harmless NORTHLUME and
              its operators from any claims, damages, liabilities, and expenses
              (including legal fees) arising out of your breach of these Terms,
              your trading/investment activities, or your violation of any
              third-party rights.
            </p>
          </section>

          {/* 12 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="12" title="Termination" />

            <p className="text-gray-300 leading-8">
              We reserve the right to suspend or terminate your account or
              access to the Platform immediately if you breach these Terms,
              engage in fraudulent activity, or misuse proprietary content.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              You may close your account at any time by contacting support,
              though account closure does not entitle you to a refund.
            </p>
          </section>

          {/* 13 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="13" title="Governing Law and Dispute Resolution" />

            <p className="text-gray-300 leading-8">
              These Terms are governed by and construed in accordance with the
              laws of India.
            </p>

            <p className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 leading-7 text-yellow-200">
              Any legal dispute, suit, or proceeding arising out of or relating
              to these Terms shall be subject to the exclusive jurisdiction of
              the courts located at{" "}
              <strong>[Insert City, e.g., New Delhi]</strong>, India.
            </p>
          </section>

          {/* 14 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="14" title="Changes to these Terms" />

            <p className="text-gray-300 leading-8">
              We may update these Terms from time to time to reflect
              operational, legal, or regulatory changes. Updated versions will
              be posted on the Website with a revised "Last updated" date.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              Continued use of the Platform after changes come into effect
              constitutes your acceptance of the updated Terms.
            </p>
          </section>

          {/* 15 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="15" title="Contact & Grievance Redressal" />

            <p className="mb-6 text-gray-300 leading-8">
              If you have any questions, concerns, or grievances regarding
              these Terms or the Platform, please contact us at:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">

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

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NORTHLUME. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}


/* -----------------------------
   Reusable Components
------------------------------ */

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


function InfoBlock({ title, children }:any) {
  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {children}
      </p>
    </div>
  );
}


function BulletList({ items }:any) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item:any, index:any) => (
        <li
          key={index}
          className="flex gap-3 text-gray-300 leading-7"
        >
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}


function ContactCard({ title, items }:any) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item:any, index:any) => (
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
