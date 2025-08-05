export default function ContactSection() {
  return (
    <section
      className="bg-dark text-white px-4 sm:px-6 lg:px-32 py-10 lg:py-16"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-between gap-6 lg:gap-0">
          {/* Top Nav Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-300 justify-center lg:justify-start">
            <a href="#">Events</a>
            <a href="#">Gen AI</a>
            <a href="#">Careers</a>
            <a href="#">Case study</a>
            <a href="#">SME Talks</a>
          </div>

          {/* Main Text */}
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-snug max-w-md mx-auto lg:mx-0">
              For any collaborative projects or enquiries feel free to connect with us.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
              vayuz.com
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm text-gray-400 justify-center lg:justify-start">
            <a href="#">About</a>
            <a href="#">Insights</a>
            <a href="#">Community</a>
            <a href="#">Privacy & Policies</a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 leading-tight text-center lg:text-left">
            Connect<br />With Us
          </h2>
          <form className="flex flex-col gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-gray-500 pb-2 outline-none focus:border-white transition text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-500 pb-2 outline-none focus:border-white transition text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-500 pb-2 outline-none focus:border-white transition text-sm sm:text-base"
            />
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-6 sm:px-8 py-2 rounded-full font-semibold text-sm sm:text-base"
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
