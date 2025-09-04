import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    id: 1,
    title: " E-commerce Customer 360° Analytics",
    description: "Developed a Customer 360° Analytics solution to track customer behavior and purchasing patterns by integrating data from RDS MySQL (transactional data), DynamoDB (customer interactions), and S3 (historical data). Leveraged AWS Glue and Athena for data transformation and reporting.",
    image: project1,
    tags: ["AWS Glue", "Athena", "MySQL", "DynamoDB", "S3"],
    demoUrl: "https://github.com/raavirahul/AWS-Customer-360-Analytics",
    githubUrl: "https://github.com/raavirahul/AWS-Customer-360-Analytics",
  },
  {
    id: 2,
    title: "Supply Chain Visibility (Lakehouse Implementation)",
    description:
      "Developed supply chain analytics platform to enhance inventory visibility, optimize logistics, and improve demand forecasting.",
    image: project2,
    tags: ["AWS Lake Formation", "S3", "Glue", "QuickSight"],
    demoUrl: "https://github.com/raavirahul/Add-Supplychain-Visibility",
    githubUrl: "https://github.com/raavirahul/Add-Supplychain-Visibility",
  },
  {
    id: 3,
    title: "Real-Time Point-of-Sale (POS) using Snowflake",
    description:
      "Point-of-sale (POS) analytics involves collecting and analyzing data generated during retail transactions",
    image: project3,
    tags: ["Snowflake", "AWS Lambda", "Kinesis", "QuickSight"],
    demoUrl: "https://github.com/raavirahul/Aws-Project-03",
    githubUrl: "https://github.com/raavirahul/Aws-Project-03",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent-text)" }}>
          <span
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Featured Projects
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300 w-fit flex items-center mx-auto gap-2 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]"
            target="_blank"
            href="https://github.com/raavirahul"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};