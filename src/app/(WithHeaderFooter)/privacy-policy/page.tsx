
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 mt-12">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            Privacy & Data Protection
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: 03 October 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="leading-8 text-gray-300">
            This Privacy Policy explains how NORTHLUME (“we”, “us”, “our”)
            collects, uses, shares, stores, and protects your personal
            information when you access or use our website, mobile experience,
            courses, memberships, digital resources, and related services
            (together, the “Platform” or “Services”).
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            By creating an account, subscribing, or using the Platform, you
            agree to the practices described in this Privacy Policy.
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
            <SectionTitle number="01" title="Information We Collect" />

            <p className="mb-5 leading-8 text-gray-300">
              We collect personal information directly provided by you,
              automatically through your device, or via authorized third-party
              platforms.
            </p>

            <InfoBlock title="Account & Profile Information">
              Name, email address, phone number, and account password (stored
              securely in encrypted/hashed format).
            </InfoBlock>

            <InfoBlock title="Purchase & Billing Data">
              Order details, subscription tier, course purchases, and payment
              status. Complete payment card details, UPI credentials, or
              net-banking information are directly processed and handled by
              integrated secure payment processors like Razorpay/Stripe. We do
              not store raw financial credentials.
            </InfoBlock>

            <InfoBlock title="User-Submitted Content">
              Messages, inquiries, feedback, quiz responses, assignment
              submissions, community posts, or support ticket communications.
            </InfoBlock>

            <InfoBlock title="Third-Party & Community Data">
              Identifiers associated with third-party messaging and interaction
              channels used to deliver Premium Membership benefits, such as
              Telegram handle, Discord ID, or video-conferencing tool details.
            </InfoBlock>

            <InfoBlock title="Device & Usage Analytics">
              IP address, browser type, device identifiers used for
              multi-device login/access controls, operating system, log data,
              and site navigation patterns.
            </InfoBlock>
          </section>

          {/* 02 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="02" title="How We Use Your Information" />

            <p className="mb-5 leading-8 text-gray-300">
              We process your personal information for legitimate business
              purposes, including to:
            </p>

            <BulletList
              items={[
                "Create, manage, and secure your account and grant access to purchased educational programs or Premium Memberships.",
                "Process transactions, issue invoices, and send order confirmations.",
                "Organize live educational sessions, track learning progress, and issue completion certificates where applicable.",
                "Respond to customer support inquiries, technical issues, and feedback.",
                "Maintain Platform security, protect against fraud, and enforce device/access restrictions.",
                "Send operational notices, service updates, policy changes, and educational material.",
                "Deliver promotional and marketing communications where explicit consent has been provided.",
                "Comply with statutory, tax, legal, and accounting obligations in India.",
              ]}
            />
          </section>

          {/* 03 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="03" title="Cookies and Tracking Technologies" />

            <p className="leading-8 text-gray-300">
              We use cookies, web beacons, and similar tracking tools to
              maintain active session logins, remember user preferences,
              analyze traffic performance, and improve user experience on
              www.northlume.in.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-400">
                You can control or restrict cookie settings directly through
                your browser, though disabling cookies may affect certain
                functionality on the Platform.
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="04" title="How We Share Your Information" />

            <p className="mb-5 leading-8 text-gray-300">
              We do not sell, rent, or trade your personal data to third
              parties. We share information only with authorized entities
              necessary to run the Platform.
            </p>

            <InfoBlock title="Payment Processors">
              Third-party payment gateways such as Razorpay and Stripe to
              securely process fees and subscriptions.
            </InfoBlock>

            <InfoBlock title="Infrastructure & Hosting Providers">
              Secure cloud services and database servers used to store and
              process data safely.
            </InfoBlock>

            <InfoBlock title="Communication Tools">
              Email delivery platforms, SMS gateways, and messaging services
              such as Telegram and video conferencing applications to deliver
              class links, updates, and community access.
            </InfoBlock>

            <InfoBlock title="Analytics Services">
              Analytical partners used to evaluate web traffic and improve
              Platform performance and optimization.
            </InfoBlock>

            <InfoBlock title="Legal & Regulatory Authorities">
              Law enforcement agencies, regulators, or courts when required
              by law, subpoena, or to enforce our legal rights and protect
              user safety.
            </InfoBlock>
          </section>

          {/* 05 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="05" title="Data Retention" />

            <p className="leading-8 text-gray-300">
              We retain your personal and transaction data for as long as your
              account remains active and for a reasonable period thereafter to
              comply with statutory tax, legal retention laws, and dispute
              resolution needs.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              When data is no longer required, it is safely deleted or
              anonymized.
            </p>
          </section>

          {/* 06 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="06" title="Your Rights" />

            <p className="mb-5 leading-8 text-gray-300">
              Under applicable Indian data protection laws, including the
              Digital Personal Data Protection Act, 2023, you have the right
              to:
            </p>

            <InfoBlock title="Access">
              Request a summary of the personal information held by us.
            </InfoBlock>

            <InfoBlock title="Correction">
              Request corrections or updates to inaccurate or incomplete
              personal details.
            </InfoBlock>

            <InfoBlock title="Erasure">
              Request deletion of your personal data and closure of your
              account, subject to legal retention requirements.
            </InfoBlock>

            <InfoBlock title="Opt-Out">
              Withdraw consent for marketing emails or promotional
              notifications at any time via unsubscribe links or by contacting
              us.
            </InfoBlock>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="leading-7 text-gray-300">
                To exercise any of these rights, please email us at{" "}
                <a
                  href="mailto:support@northlume.in"
                  className="font-medium text-white underline underline-offset-4 transition hover:text-gray-400"
                >
                  support@northlume.in
                </a>
                .
              </p>
            </div>
          </section>

          {/* 07 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="07" title="Data Security" />

            <p className="leading-8 text-gray-300">
              We implement reasonable technical, operational, and
              organizational security measures—including SSL/TLS encryption
              for data in transit, restricted administrative access, and
              hashed password storage—to protect your personal information
              against unauthorized access, loss, or disclosure.
            </p>

            <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
              <p className="leading-7 text-yellow-200">
                However, no online transmission or system is 100% secure, and
                absolute security cannot be guaranteed.
              </p>
            </div>
          </section>

          {/* 08 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="08" title="Children’s Privacy" />

            <p className="leading-8 text-gray-300">
              The Platform is not intended for individuals under the age of 18
              without parental or legal guardian supervision and consent.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              If a parent or guardian discovers that a minor has submitted
              personal data without authorization, please contact us
              immediately to have the information removed.
            </p>
          </section>

          {/* 09 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="09" title="International Data Transfers" />

            <p className="leading-8 text-gray-300">
              Our primary operations are based in India. However, web
              infrastructure, cloud hosting, or communication tool servers
              may be located internationally.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              Where cross-border data transfer occurs, we ensure third-party
              vendors adhere to comparable levels of data protection.
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="10" title="Changes to This Privacy Policy" />

            <p className="leading-8 text-gray-300">
              We reserve the right to modify or update this Privacy Policy
              from time to time. Any material changes will be published on our
              website (www.northlume.in) with an updated "Last updated" date,
              or notified to you via email.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              Continued use of the Platform signifies acceptance of the
              revised policy.
            </p>
          </section>

          {/* 11 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle number="11" title="Contact & Grievance Redressal" />

            <p className="mb-6 leading-8 text-gray-300">
              If you have questions, concerns, privacy complaints, or wish to
              exercise your data rights under the Information Technology Act,
              2000, IT Rules, and the Digital Personal Data Protection Act
              (DPDP Act, 2023), please contact our designated Grievance
              Officer.
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


function BulletList({ items }:any) {
  return (
    <ul className="space-y-3">
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
