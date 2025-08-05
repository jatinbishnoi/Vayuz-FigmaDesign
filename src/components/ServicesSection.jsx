import { useState } from "react";

const services = [
  {
    title: "Flutter App Development",
    content:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!",
  },
  {
    title: "UI/UX Design",
    content:
      "We craft visually stunning and user-friendly designs that enhance user experiences.",
  },
  {
    title: "Customization & Integration",
    content:
      "Tailored solutions and seamless integrations to fit your unique needs.",
  },
  {
    title: "Testing & Quality Assurance",
    content:
      "Comprehensive testing to ensure your application runs flawlessly.",
  },
  {
    title: "Maintenance & Support",
    content:
      "Ongoing support to keep your systems up-to-date and running smoothly.",
  },
  {
    title: "Consulting & Training",
    content: "Expert advice and training to empower your team.",
  },
  {
    title: "Migration & Upgrades",
    content:
      "Smooth migrations and efficient upgrades with zero downtime.",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="bg-dark text-white px-4 sm:px-6 lg:px-32 py-10 lg:py-16"
      id="services"
    >
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Our Dynamic Services Suite!
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-3 max-w-2xl mx-auto px-2">
          Step into innovation! Explore our range of services and let’s create
          something extraordinary together. Your vision, our expertise. Let’s
          begin!
        </p>
      </div>

      {/* Services & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Left - Accordion */}
        <div>
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex justify-between items-center w-full py-3 sm:py-4 text-left text-sm sm:text-base md:text-lg font-semibold hover:text-cyan-400 transition"
              >
                {service.title}
                <span className="text-lg sm:text-xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>
              {open === index && (
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed px-1">
                  {service.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/istockphoto-500954400-612x612.jpg"
            alt="Laptop"
            className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-sm md:max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
