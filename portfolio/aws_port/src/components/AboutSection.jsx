import { Briefcase, Code, User } from "lucide-react";
import tenLogo from "../assets/TEN.jpg";
import enfocusLogo from "../assets/enfocus.svg";
import quaLogo from "../assets/qua.jpg";
import vtuLogo from "../assets/vtu.jpg";
import iesegLogo from "../assets/ieseg.png";

const experiences = [
  {
    company: "Technip Energies",
    logo: tenLogo,
    role: "Data Engineer",
    duration: "August 2024 - March 2025",
  },
  {
    company: "Enfocus",
    logo: enfocusLogo,
    role: "Data Engineer",
    duration: "January 2024 - June 2024",
  },
  {
    company: "Qunated Technologies",
    logo: quaLogo,
    role: "System Engineer",
    duration: "April 2021 - July 2023",
  },
];

const education = [
  {
    degree: "Master's in Big Data Analytics for Business",
    institution: "IESEG School of Management, Lille, France",
    duration: "2023 - 2025",
    logo: iesegLogo,
  },
  {
    degree: "Bachelor's in Mechanical Engineering",
    institution: "VTU, Belagavi, India",
    duration: "2016 - 2020",
    logo: vtuLogo,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent-text)" }}>
          <span
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            About
          </span>{" "}
          <span
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side: Intro + Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
              AWS - Data Engineer & Cloud Solutions Specialist
            </h3>

            <p className="text-muted-foreground opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
              Certified AWS Data Engineer with hands-on experience in building scalable data pipelines, managing cloud operations, and implementing security & access controls.
            </p>

            <p className="text-muted-foreground opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
              If you’re looking for someone confident and skilled to elevate your data engineering needs, let’s connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
              <a
                href="#contact"
                className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get In Touch
              </a>

              <a
                href="/assets/RAHUL_RAAVI_RESUME.pdf"
                download="RAHUL_RAAVI_RESUME.pdf"
                className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            {/* Professional Experience */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent-text)" }}>
                <a
                  href="#experience"
                  className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Professional Experience
                </a>
              </h3>

              <div className="space-y-6">
                {experiences.map(({ company, logo, role, duration }, index) => (
                  <div
                    key={company}
                    className="flex items-center gap-6 bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={logo}
                      alt={`${company} logo`}
                      className="h-20 w-20 object-contain rounded"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
                        {company}
                      </h4>
                      <p className="font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                        {role}
                      </p>
                      <p className="text-sm text-muted" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                        {duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Skills + Education */}
          <div className="space-y-6">
            {/* Skills Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--secondary-text)/10]">
                    <Code className="h-6 w-6" style={{ color: "var(--secondary-text)" }} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
                      Data Engineering
                    </h4>
                    <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                      Designing and implementing robust ETL/ELT pipelines to handle large-scale data processing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--secondary-text)/10]">
                    <User className="h-6 w-6" style={{ color: "var(--secondary-text)" }} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
                      Cloud Architecture
                    </h4>
                    <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                      Expertise in AWS cloud services like S3, Lambda, Glue, and Redshift to build scalable data solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--secondary-text)/10]">
                    <Briefcase className="h-6 w-6" style={{ color: "var(--secondary-text)" }} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
                      Project Collaboration
                    </h4>
                    <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                      Coordinating with cross-functional teams to deliver data-driven projects efficiently using Agile methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent-text)" }}>
                <a
                  href="#education"
                  className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Education Background
                </a>
              </h3>

              <div className="space-y-6">
                {education.map(({ degree, institution, duration, logo }, index) => (
                  <div
                    key={degree}
                    className="flex items-center gap-4 bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={logo}
                      alt={`${institution} logo`}
                      className="h-16 w-16 object-contain rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
                        {degree}
                      </h4>
                      <p className="font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                        {institution}
                      </p>
                      <p className="text-sm text-muted" style={{ fontFamily: "'Inter', sans-serif", color: "var(--secondary-text)" }}>
                        {duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};