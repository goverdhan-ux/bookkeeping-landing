import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Your Bookkeeping</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-gray-600 hover:text-primary-600">Services</a>
              <a href="#about" className="text-gray-600 hover:text-primary-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Professional Bookkeeping Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We handle your books so you can focus on growing your business. 
              Accurate, reliable, and tailored to your needs.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition">
                Get Started
              </a>
              <a href="#services" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive bookkeeping solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Financial Reporting",
                desc: "Detailed reports and analytics to help you understand your business financial health"
              },
              {
                icon: "🧾",
                title: "Tax Preparation",
                desc: "Organized books and documents ready for tax season"
              },
              {
                icon: "💼",
                title: "Business Advisory",
                desc: "Expert insights to help you make informed financial decisions"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                {[
                  "Accurate & Error-Free Records",
                  "Quick Turnaround Times",
                  "Dedicated Account Manager",
                  "Secure & Confidential",
                  "Affordable Pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Starting from</p>
                <p className="text-5xl font-bold text-primary-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></p>
                <p className="text-gray-600 mb-6">Tailored packages for businesses of all sizes</p>
                <a href="#contact" className="block bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let us handle your books so you can focus on what matters most — your business.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
            />
            <textarea
              placeholder="Tell us about your needs..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
            />
            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-xl font-bold text-white">Your Bookkeeping</span>
              </div>
              <p className="text-gray-400">
                Professional bookkeeping services for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 email@example.com</li>
                <li>📞 (555) 123-4567</li>
                <li>📍 Your City, State</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2025 Your Bookkeeping. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
