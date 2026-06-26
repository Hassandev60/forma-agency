"use client";

import { useActionState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { submitContact, ContactFormState } from "@/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

const services = [
  "Brand Identity",
  "Web Design & Development",
  "UI/UX Design",
  "Motion & Animation",
  "Digital Strategy",
  "Not sure yet",
];

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info */}
        <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <p className="text-[#c8f65d] text-xs uppercase tracking-[0.3em] mb-4 font-medium">
    Contact
  </p>

  <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6 leading-[1.1] tracking-tight">
    Let's build something great
  </h1>

  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md mb-10">
    Fill in the form and we'll get back to you within 24 hours. Or just drop us an email directly.
  </p>

  {/* Contact details */}
  <div className="space-y-6 mb-10">
    {[
      { label: "Email", value: "hello@forma.studio" },
      { label: "Based in", value: "Remote — worldwide" },
      { label: "Response time", value: "Within 24 hours" },
    ].map((item) => (
      <div key={item.label} className="group">
        <p className="text-white/30 text-[11px] uppercase tracking-[0.25em] mb-1">
          {item.label}
        </p>

        <p className="text-white text-sm md:text-base font-medium group-hover:text-[#c8f65d] transition-colors">
          {item.value}
        </p>
      </div>
    ))}
  </div>

  {/* Social */}
  <div className="flex gap-3">
    {["Twitter", "Dribbble", "LinkedIn"].map((s) => (
      <a
        key={s}
        href="#"
        className="
          px-4 py-2.5 rounded-full
          border border-white/10
          text-white/50
          text-xs font-medium
          hover:text-white
          hover:border-white/30
          hover:bg-white/5
          transition-all
        "
      >
        {s}
      </a>
    ))}
  </div>
</motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl border border-white/8 bg-white/2">
              <form ref={formRef} action={formAction} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c8f65d]/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c8f65d]/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company (optional)"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c8f65d]/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm focus:outline-none focus:border-[#c8f65d]/50 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#111]">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#111]">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c8f65d]/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Feedback */}
                {state.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-4 py-3 rounded-xl text-sm ${
                      state.success
                        ? "bg-[#c8f65d]/10 border border-[#c8f65d]/30 text-[#c8f65d]"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                  >
                    {state.success ? "✓ " : "✕ "}{state.message}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: isPending ? 1 : 1.02 }}
                  whileTap={{ scale: isPending ? 1 : 0.98 }}
                  className="w-full py-4 bg-[#c8f65d] text-[#0a0a0a] font-semibold rounded-xl hover:bg-[#d4ff6a] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full inline-block"
                      />
                      Sending...
                    </>
                  ) : (
                    "Send message →"
                  )}
                </motion.button>

                <p className="text-white/25 text-xs text-center">
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}