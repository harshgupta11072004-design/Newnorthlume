import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 mt-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 text-center">
         

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Have a question, need support, or want to know more about
            NORTHLUME? Our team is here to help.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-5">

          {/* Left Contact Information */}
          <div className="space-y-6 lg:col-span-2">

            {/* Support Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-white">
                Contact Information
              </h2>

              <div className="space-y-5">

                <ContactItem
                  icon="✉"
                  title="Email"
                  value="support@northlume.in"
                  href="mailto:support@northlume.in"
                />

                <ContactItem
                  icon="🌐"
                  title="Website"
                  value="www.northlume.in"
                  href="https://www.northlume.in"
                />

                <ContactItem
                  icon="⌖"
                  title="Company"
                  value="NORTHLUME (OPC) PRIVATE LIMITED"
                />

              </div>
            </div>

            {/* Grievance Officer */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
                  ✓
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Grievance Officer
                  </p>

                  <h2 className="text-lg font-semibold text-white">
                    Ankush Dabas
                  </h2>
                </div>
              </div>

              <div className="space-y-4">

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Entity
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    NORTHLUME (OPC) PRIVATE LIMITED
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:admin@northlume.in"
                    className="mt-1 block break-all text-sm text-gray-300 transition hover:text-white"
                  >
                    admin@northlume.in
                  </a>
                </div>

              </div>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-gray-500">
                Registered Office
              </p>

              <p className="text-sm leading-7 text-gray-300">
                E-135 t/f front, left side om vihar phase5,
                uttam nagar, new delhi, west delhi, delhi,
                india, 110059.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:col-span-3">

            <div className="mb-7">
              <h2 className="text-2xl font-semibold text-white">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form below and our support team will get back to
                you as soon as possible.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:bg-white/[0.06]"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:bg-white/[0.06]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-white/30 focus:bg-white/[0.06]"
                >
                  <option value="" disabled className="bg-black">
                    Select a subject
                  </option>

                  <option value="general" className="bg-black">
                    General Inquiry
                  </option>

                  <option value="course" className="bg-black">
                    Course Related
                  </option>

                  <option value="membership" className="bg-black">
                    Membership
                  </option>

                  <option value="payment" className="bg-black">
                    Payment / Refund
                  </option>

                  <option value="technical" className="bg-black">
                    Technical Support
                  </option>

                  <option value="grievance" className="bg-black">
                    Grievance
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                //   Rows="6"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:bg-white/[0.06]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-gray-200 active:scale-[0.99]"
              >
                Send Message
              </button>

              <p className="text-center text-xs leading-5 text-gray-600">
                By submitting this form, you agree to be contacted regarding
                your inquiry.
              </p>

            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:p-8">
          <h3 className="text-xl font-semibold text-white">
            Need immediate assistance?
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Email our support team directly and we’ll help you with your
            query.
          </p>

          <a
            href="mailto:support@northlume.in"
            className="mt-5 inline-flex rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            support@northlume.in
          </a>
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
   Contact Item Component
--------------------------------- */

function ContactItem({ icon, title, value, href }:any) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {title}
        </p>

        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="mt-1 block break-all text-sm leading-6 text-gray-300 transition hover:text-white"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm leading-6 text-gray-300">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}