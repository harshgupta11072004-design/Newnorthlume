import React from "react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 mt-12">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            Website Cookies & Tracking
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cookie Policy
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: 03 October 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="leading-8 text-gray-300">
            This Cookie Policy explains how NORTHLUME (“we”, “us”, “our”)
            uses cookies and similar tracking technologies when you visit or
            use our website (www.northlume.in), mobile experience, courses,
            memberships, and digital resources (together, the “Platform”),
            and how you can manage your cookie preferences.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            This Cookie Policy should be read alongside our{" "}
            <span className="font-medium text-white">
              Privacy Policy
            </span>{" "}
            and{" "}
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

        {/* Sections */}
        <div className="space-y-6">

          {/* 01 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="01" title="What Are Cookies?" />

            <p className="leading-8 text-gray-300">
              Cookies are small text files placed on your computer,
              smartphone, or other internet-connected device when you visit a
              website.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              They are widely used to make websites work efficiently, remember
              your preferences, keep you logged in across sessions, analyze
              site performance, and support security features.
            </p>
          </section>

          {/* 02 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="02" title="Types of Cookies We Use" />

            <p className="mb-5 leading-8 text-gray-300">
              We use the following categories of cookies and similar
              technologies on our Platform:
            </p>

            <CookieCard
              title="Essential / Strictly Necessary Cookies"
              badge="Required"
            >
              These cookies are vital for the proper functioning of the
              Platform. They enable core features such as maintaining your
              login session, securing checkout flows, managing account
              authentication, and enforcing our security and multi-device
              access control measures.
              <br />
              <br />
              These cookies cannot be disabled, as the Platform cannot
              function correctly without them.
            </CookieCard>

            <CookieCard
              title="Analytics & Performance Cookies"
              badge="Analytics"
            >
              These cookies help us understand how users interact with
              www.northlume.in—such as which pages are visited most frequently,
              time spent on educational modules, and potential technical
              errors.
              <br />
              <br />
              The data collected is aggregated and anonymized, helping us
              optimize website performance and user experience without
              building individual advertising profiles.
            </CookieCard>

            <CookieCard
              title="Functionality Cookies"
              badge="Functional"
            >
              These allow the Platform to remember choices you make, such as
              language, region, or display settings, to provide a more
              personalized and seamless learning experience.
            </CookieCard>

            <CookieCard
              title="Marketing & Targeted Cookies"
              badge="Optional"
            >
              Where enabled, these cookies measure the effectiveness of our
              marketing campaigns and help deliver relevant updates or
              announcements regarding new courses, workshops, or membership
              features.
              <br />
              <br />
              These are set only with your consent where required by applicable
              law.
            </CookieCard>
          </section>

          {/* 03 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="03" title="Third-Party Cookies" />

            <p className="mb-5 leading-8 text-gray-300">
              Some cookies set on our Platform originate from authorized
              third-party service providers. These include:
            </p>

            <CookieCard title="Payment Processors">
              Secure gateways such as Razorpay and Stripe that set necessary
              cookies during the payment/checkout process to ensure secure
              transaction processing and fraud prevention.
            </CookieCard>

            <CookieCard title="Analytics Providers">
              Tools such as Google Analytics that assist us in analyzing
              traffic and user behavior patterns on the site.
            </CookieCard>

            <CookieCard title="Video & Media Hosting Tools">
              Embedded video players or session platforms used to deliver
              educational content and live streams.
            </CookieCard>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-400">
                These third-party service providers operate under their
                respective privacy and cookie policies, which we encourage you
                to review.
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="04" title="Managing Your Cookie Preferences" />

            <p className="mb-5 leading-8 text-gray-300">
              You have the right to control and manage cookie preferences.
            </p>

            <CookieCard title="Browser Settings">
              Most modern web browsers allow you to block, manage, or delete
              cookies via their settings or preferences menu.
              <br />
              <br />
              Please note that blocking or deleting essential cookies may
              impact your ability to log in, access paid membership content,
              or complete purchases on the Platform.
            </CookieCard>

            <CookieCard title="Consent Banner / Settings">
              Where applicable, you can adjust your consent for non-essential
              cookies, such as analytics and marketing cookies, using our
              cookie consent banner when you first visit the Platform or
              through your account settings.
            </CookieCard>
          </section>

          {/* 05 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="05" title="Changes to This Cookie Policy" />

            <p className="leading-8 text-gray-300">
              We may update this Cookie Policy from time to time to reflect
              operational updates, technology changes, or legal requirements.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              Updated versions will be published on our website
              (www.northlume.in) with a revised "Last updated" date.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-400">
                We encourage you to review this policy periodically to stay
                informed about how cookies and tracking technologies are used.
              </p>
            </div>
          </section>

          {/* 06 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="06" title="Contact & Grievance Officer" />

            <p className="mb-6 leading-8 text-gray-300">
              If you have any questions or concerns regarding our Cookie
              Policy or how we handle cookies, please contact us at:
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


function CookieCard({ title, badge, children }:any) {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>

        {badge && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400">
            {badge}
          </span>
        )}
      </div>

      <p className="leading-7 text-gray-400">
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
