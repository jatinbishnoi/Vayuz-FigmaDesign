// src/components/ContactSection.jsx
export default function ContactSection() {
  return (
    <section className="bg-dark text-white px-6 md:px-32 py-12 md:py-16" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="flex flex-col justify-between gap-8 md:gap-0">
          {/* Top Nav Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-300">
            <a href="#">Events</a>
            <a href="#">Gen AI</a>
            <a href="#">Careers</a>
            <a href="#">Case study</a>
            <a href="#">SME Talks</a>
          </div>

          {/* Main Text */}
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-light leading-snug max-w-md">
              For any collaborative projects or enquiries feel free to connect with us.
            </p>
            <p className="text-xl md:text-2xl font-semibold">vayuz.com</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-gray-400">
            <a href="#">About</a>
            <a href="#">Insights</a>
            <a href="#">Community</a>
            <a href="#">Privacy & Policies</a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-center md:text-left">
            Connect<br/>With Us
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-gray-500 pb-2 outline-none focus:border-white transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-500 pb-2 outline-none focus:border-white transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-500 pb-2 outline-none focus:border-white transition"
            />
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-2 rounded-full font-semibold"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
