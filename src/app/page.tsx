import Link from "next/link";

"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your Formspree form ID or API endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#FDFCFB]/80 backdrop-blur-md z-50 border-b border-[#E8E6E4]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D3436] to-[#636E72] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-semibold text-[#2D3436]">Rishabh Bookkeeping</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-[#636E72] hover:text-[#2D3436] transition text-sm font-medium">Services</a>
              <a href="#about" className="text-[#636E72] hover:text-[#2D3436] transition text-sm font-medium">About</a>
              <a href="#contact" className="text-[#636E72] hover:text-[#2D3436] transition text-sm font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#2D3436] rounded-full"></span>
            <span className="text-sm text-[#636E72]">Trusted by 100+ businesses</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2D3436] mb-6 leading-tight">
            Books that make
            <br />
            <span className="bg-gradient-to-r from-[#2D3436] to-[#636E72] bg-clip-text text-transparent">
              business sense
            </span>
          </h1>
          <p className="text-xl text-[#636E72] mb-10 max-w-2xl mx-auto leading-relaxed">
            Stress-free bookkeeping that keeps your finances organized, accurate, and ready for tax season. Focus on growth — we&apos;ll handle the numbers.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-[#2D3436] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1E2526] transition shadow-lg shadow-[#2D3436]/20">
              Get Started
            </a>
            <a href="#services" className="bg-white text-[#2D3436] px-8 py-4 rounded-full font-medium hover:bg-[#F0F0F0] transition border border-[#E8E6E4]">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "$2M+", label: "Transactions Processed" },
              { number: "99.9%", label: "Accuracy Rate" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-[#2D3436] mb-1">{stat.number}</p>
                <p className="text-sm text-[#636E72]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#636E72] text-sm font-medium mb-3">WHAT WE OFFER</p>
            <h2 className="text-4xl font-bold text-[#2D3436] mb-4">Services tailored to your needs</h2>
            <p className="text-[#636E72] max-w-xl mx-auto">
              From startups to established businesses, we provide comprehensive bookkeeping solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Monthly Bookkeeping",
                desc: "Complete reconciliation of all accounts, financial statements, and regular updates to keep your books in order."
              },
              {
                icon: "🧾",
                title: "Tax Preparation",
                desc: "Organized financial records ready for tax filings. We work with your CPA to ensure smooth tax seasons."
              },
              {
                icon: "💰",
                title: "Financial Reporting",
                desc: "Custom reports and dashboards to help you understand your business financial health and make informed decisions."
              },
              {
                icon: "🚀",
                title: "Startup Advisory",
                desc: "Specialized bookkeeping setup for new businesses. Foundation for scalable financial management."
              },
              {
                icon: "⚡",
                title: "QuickBooks Setup",
                desc: "We set up and optimize QuickBooks to streamline your bookkeeping processes efficiently."
              },
              {
                icon: "🔍",
                title: "Audit Support",
                desc: "Prepare your financial records with confidence. We ensure accuracy and compliance for audits."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[#E8E6E4] hover:shadow-xl hover:shadow-[#2D3436]/5 transition-all duration-300 group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#2D3436] mb-2">{service.title}</h3>
                <p className="text-[#636E72] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 px-6 bg-[#2D3436]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B2BEC3] text-sm font-medium mb-3">WHY RISHABH BOOKKEEPING</p>
              <h2 className="text-4xl font-bold text-white mb-6">
                Your partner in financial clarity
              </h2>
              <p className="text-[#B2BEC3] mb-8 leading-relaxed">
                We believe bookkeeping shouldn&apos;t be stressful. Our approach combines accuracy with simplicity, giving you confidence in your numbers without the headache.
              </p>
              <div className="space-y-4">
                {[
                  "Certified professionals with 5+ years experience",
                  "Weekly or monthly sync calls included",
                  "Secure, encrypted data handling",
                  "Flat-rate pricing — no surprise fees"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#636E72] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-[#DFE6E9]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#636E72] to-[#2D3436] rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 mb-4">
                  <p className="text-sm text-[#636E72] mb-2">Starting from</p>
                  <p className="text-5xl font-bold text-[#2D3436]">$199<span className="text-lg text-[#636E72]">/mo</span></p>
                </div>
                <p className="text-center text-[#B2BEC3]">Perfect for small businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#636E72] text-sm font-medium mb-3">LET&apos;S CONNECT</p>
            <h2 className="text-4xl font-bold text-[#2D3436] mb-4">Ready to get started?</h2>
            <p className="text-[#636E72]">
              Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8E6E4] text-[#2D3436] placeholder-[#B2BEC3] focus:outline-none focus:border-[#2D3436] transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8E6E4] text-[#2D3436] placeholder-[#B2BEC3] focus:outline-none focus:border-[#2D3436] transition"
              />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8E6E4] text-[#2D3436] placeholder-[#B2BEC3] focus:outline-none focus:border-[#2D3436] transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your bookkeeping needs..."
              rows={5}
              required
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8E6E4] text-[#2D3436] placeholder-[#B2BEC3] focus:outline-none focus:border-[#2D3436] transition resize-none"
            />
            {status === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                ✅ Message sent successfully! We&apos;ll get back to you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                ❌ Something went wrong. Please try again or email us directly.
              </div>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#2D3436] text-white py-4 rounded-xl font-medium hover:bg-[#1E2526] transition shadow-lg shadow-[#2D3436]/20 disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F9FA] border-t border-[#E8E6E4] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2D3436] to-[#636E72] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-lg font-semibold text-[#2D3436]">Rishabh Bookkeeping</span>
            </div>
            <div className="flex gap-6 text-sm text-[#636E72]">
              <a href="#" className="hover:text-[#2D3436] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#2D3436] transition">Terms of Service</a>
            </div>
            <p className="text-sm text-[#B2BEC3]">
              © 2025 Rishabh Bookkeeping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
