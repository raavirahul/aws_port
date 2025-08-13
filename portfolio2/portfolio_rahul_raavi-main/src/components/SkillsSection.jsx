import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "AWS S3", category: "AWS-Cloud Services" },
  { name: "AWS Lambda", category: "AWS-Cloud Services" },
  { name: "AWS Glue", category: "AWS-Cloud Services" },
  { name: "AWS Redshift", category: "AWS-Cloud Services" },
  { name: "AWS EMR", category: "AWS-Cloud Services" },
  { name: "Apache Spark", category: "Data Engineering" },
  { name: "Python", category: "Data Engineering" },
  { name: "SQL", category: "Data Engineering" },
  { name: "Airflow", category: "Data Engineering" },
  { name: "ETL Pipelines", category: "Data Engineering" },
  { name: "Apache Airflow", category: "Orchestration & Automation" },
  { name: "AWS Step Functions", category: "Orchestration & Automation" },
  { name: "AWS Lambda", category: "Orchestration & Automation" },
  { name: "AWS CloudWatch Events", category: "Orchestration & Automation" },
  { name: "Git", category: "DevOps & Tools" },
  { name: "GitHub", category: "DevOps & Tools" },
  { name: "Infrastructure as Code (Terraform)", category: "DevOps & Tools" },
  { name: "CI/CD", category: "DevOps & Tools" },
  { name: "Docker", category: "DevOps & Tools" },
  { name: "Power BI", category: "Other Skills" },
  { name: "Agile Methodology (Scrum, Scrumban & Kanban)", category: "Other Skills" },
];

const categories = [
  "AWS-Cloud Services",
  "Data Engineering",
  "Orchestration & Automation",
  "DevOps & Tools",
  "Other Skills",
];

export const SkillsSection = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section id="skills" className="py-24 px-4 relative section">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent-text)" }}>
          <span
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            AWS CLOUD & DATA ENGINEERING SKILLS
          </span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-semibold gradient-border card-hover",
                openCategory === category
                  ? "bg-[var(--secondary-text)] text-white shadow-[var(--secondary-text)/40]"
                  : "bg-[var(--card-bg)] text-[var(--primary-text)] hover:bg-[var(--secondary-text)/20] hover:shadow-[var(--secondary-text)/50]"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Collapsible Skills List */}
        <div
          className={cn(
            "max-w-md mx-auto overflow-hidden rounded-lg border border-[var(--card-border)] bg-card p-6 shadow-md transition-all duration-500 ease-in-out fade-in",
            openCategory ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          {openCategory &&
            skills
              .filter((skill) => skill.category === openCategory)
              .map((skill) => (
                <div
                  key={skill.name}
                  className="mb-3 flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer select-none hover:bg-[var(--secondary-text)/10] hover:scale-[1.03] transition-transform duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    style={{ color: "var(--secondary-text)" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "var(--primary-text)" }}>
                    {skill.name}
                  </span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};