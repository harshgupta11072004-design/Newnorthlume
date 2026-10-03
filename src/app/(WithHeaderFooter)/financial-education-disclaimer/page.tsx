import React from "react";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            Financial Education
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Financial Education Disclaimer
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: 03 October 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="leading-8 text-gray-300">
            This disclaimer applies to all courses, live classes, Premium
            Memberships, market analysis, digital resources, community
            discussions, and other content made available on NORTHLUME
            (the “Platform” or “Services”).
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            Please read it carefully before using the Platform.
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

        {/* Sections */}
        <div className="space-y-6">

          {/* 01 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="01" title="Educational Purpose Only" />

            <p className="leading-8 text-gray-300">
              All content, market commentary, charts, technical analysis,
              strategies, and materials provided on the Platform are intended
              solely for general educational, analytical, and informational
              purposes.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              They are designed to help learners understand analytical
              concepts, risk management, and trading methodologies.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-400">
                Nothing on the Platform is tailored to your individual
                financial situation, risk tolerance, or personal investment
                objectives.
              </p>
            </div>
          </section>

          {/* 02 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="02"
              title="Not Investment Advice & No SEBI Registration"
            />

            <p className="leading-8 text-gray-300">
              Nothing on the Platform constitutes financial, investment, tax,
              accounting, or legal advice, nor does it constitute a
              recommendation, endorsement, or solicitation to buy, sell, hold,
              or trade any security, derivative, currency, commodity, or
              financial instrument.
            </p>

            <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
              <p className="leading-7 text-gray-300">
                NORTHLUME (and its operators/instructors) is not registered as
                a Stockbroker, Investment Adviser (RIA), Research Analyst (RA),
                or Portfolio Manager (PMS) with the Securities and Exchange
                Board of India (SEBI) or any other financial regulatory body,
                and does not provide personalized investment or trading advice
                in any capacity.
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="03"
              title="No Brokerage or Fiduciary Relationship"
            />

            <p className="leading-8 text-gray-300">
              Using the Platform, subscribing to Premium Memberships, or
              participating in one-on-one educational sessions does not create
              an advisory, fiduciary, brokerage, or client relationship between
              you and NORTHLUME or any mentor.
            </p>

            <InfoList
              items={[
                "We do not hold client funds.",
                "We do not execute trades on behalf of users.",
                "We do not manage user portfolios.",
                "We do not access your personal brokerage or trading accounts.",
              ]}
            />
          </section>

          {/* 04 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="04"
              title="Markets Involve Substantial Risk"
            />

            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="leading-7 text-gray-300">
                Trading and investing in financial markets—including equities,
                derivatives, foreign exchange, commodities, and digital
                assets—involve substantial risk of loss, up to and including
                the complete loss of your capital.
              </p>
            </div>

            <InfoBlock title="No Guarantees">
              Case studies, historical trade setups, backtested results,
              charts, or trade logic discussed in our content are strictly for
              illustrative teaching purposes and do not represent guaranteed
              outcomes or win rates.
            </InfoBlock>

            <InfoBlock title="Past Performance">
              Historical performance or previous successful market scenarios
              are not indicative of future results or profitability.
            </InfoBlock>
          </section>

          {/* 05 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="05" title="Instructor & Mentor Views" />

            <p className="leading-8 text-gray-300">
              Content, live interactions, and market commentary are delivered
              by individual instructors or community facilitators and reflect
              their personal analytical perspectives and teaching approaches.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-400">
                Such views do not constitute institutional research, guaranteed
                market signals, or official representations by NORTHLUME.
              </p>
            </div>
          </section>

          {/* 06 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="06" title="Your Personal Responsibility" />

            <p className="leading-8 text-gray-300">
              All trading and investment decisions are made voluntarily and
              solely by you.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              You are responsible for conducting your own independent research
              and assessing your risk tolerance before entering any market
              transaction.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-300">
                We strongly encourage you to consult a qualified,
                SEBI-registered financial adviser before risking capital in
                financial markets.
              </p>

              <p className="mt-3 font-medium text-white">
                Never trade with money you cannot afford to lose.
              </p>
            </div>
          </section>

          {/* 07 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="07"
              title="No Guarantee of Financial Results"
            />

            <p className="leading-8 text-gray-300">
              Participation in NORTHLUME programs, community access, or
              completion of any educational modules does not guarantee any
              specific financial return, trading profit, job placement, or
              professional qualification recognized by regulatory authorities.
            </p>
          </section>

          {/* 08 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="08" title="Related Policies" />

            <p className="leading-8 text-gray-300">
              This Financial Education Disclaimer should be read together with
              our related policies:
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <PolicyLink href="/terms-conditions">
                Terms & Conditions
              </PolicyLink>

              <PolicyLink href="/privacy-policy">
                Privacy Policy
              </PolicyLink>

              <PolicyLink href="/refund-policy">
                Refund Policy
              </PolicyLink>
            </div>
          </section>

          {/* 09 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="09"
              title="Contact & Grievance Redressal"
            />

            <p className="mb-6 leading-8 text-gray-300">
              If you have any questions regarding this Disclaimer or our
              Services, please contact us at:
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

        {/* Bottom Disclaimer */}
        <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 text-center">
          <p className="text-sm leading-7 text-gray-400">
            Financial markets involve significant risk. Please conduct your
            own research and consider seeking advice from a qualified
            professional before making financial decisions.
          </p>
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


function InfoBlock({ title, children }:any) {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {children}
      </p>
    </div>
  );
}


function InfoList({ items }:any) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item: any, index: any) => (
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


function PolicyLink({ href, children }:any) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
    >
      {children}
      <span className="ml-2">→</span>
    </Link>
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