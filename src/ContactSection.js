import React, { useState } from "react";

export default function ContactSection() {
  const backgroundStyle = {
    backgroundColor: "rgba(212, 213, 214, 0.4)",
    backgroundImage: `
      radial-gradient(circle at top left, rgba(0,0,0,0.58) 0%, transparent 80%),
      radial-gradient(circle at top right, rgba(0,0,0,0.58) 0%, transparent 80%),
      radial-gradient(circle at bottom left, rgba(0,0,0,0.58) 0%, transparent 80%),
      radial-gradient(circle at bottom right, rgba(0,0,0,0.58) 0%, transparent 80%),
      radial-gradient(#2C2C2C 0.45px, transparent 0.6px),
      radial-gradient(#2C2C2C 0.45px, #EAEBEB 0.6px)
    `,
    backgroundSize: "auto, auto, auto, auto, 24px 24px, 24px 24px",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 6px 12px",
    backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
  };

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/mnnpkqzj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      const { error } = await res.json();
      alert(error || "Oops! There was a problem sending your message.");
    }
  }

  return (
    <div className="bg-[#F7F7F7] py-12 px-4 sm:px-8 relative" style={backgroundStyle}>
      {/* SVG Transition from About */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,0 C600,200 600,10 1200,0 L1200,120 L0,120 Z" fill="#EAEBEB" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#FF925C] mt-8 mb-6">
          <span className="[text-shadow:_0_0_1px_#EAEBEB,_0_0_2px_#2c2c2c55]">G</span>
          <span className="text-[#EAEBEB]">et in Touch</span>          
        </h2>

        {submitted ? (
          <p className="text-lg text-[#EAEBEB] mb-6">
            Thanks! Your message has been sent. 🙌
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#317FD8]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#317FD8]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#317FD8]"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#317FD8] text-white py-3 px-8 rounded-lg font-semibold min-w-[150px] mx-auto shadow-md hover:shadow-lg hover:bg-[#1F6EC3] transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#317FD8]"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}

        {/* Social / Other Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-xl">
          <a href="mailto:your.ha13ed@gmail.com" className="text-[#FF925C] hover:underline font-bold">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-ali-abedi-2ba0438b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF925C] hover:underline font-bold"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ha13ed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF925C] hover:underline font-bold"
          >
            GitHub
          </a>
          <a
            href="https://www.kaggle.com/hamedabedi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF925C] hover:underline font-bold"
          >
            Kaggle
          </a>
          <a href="https://t.me/ha13ed" target="_blank" rel="noopener noreferrer" className="text-[#FF925C] hover:underline font-bold">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}