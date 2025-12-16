import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import Residential Projects
import resProject1 from "@/assets/projects/residential/res-project-10.webp";
import resProject2 from "@/assets/projects/residential/res-project-11.webp";
import resProject3 from "@/assets/projects/residential/res-project-12.webp";
import resProject4 from "@/assets/projects/residential/res-project-13.webp";
import resProject5 from "@/assets/projects/residential/res-project-14.webp";
import resProject6 from "@/assets/projects/residential/res-project-15.webp";
import resProject7 from "@/assets/projects/residential/res-project-16.webp";
import resProject8 from "@/assets/projects/residential/res-project-17.webp";
import resProject9 from "@/assets/projects/residential/res-project-18.webp";

// Import Commercial Projects
import comProject1 from "@/assets/projects/commercial/com-project-1.webp";
import comProject2 from "@/assets/projects/commercial/com-project-2.webp";
import comProject3 from "@/assets/projects/commercial/com-project-3.webp";
import comProject4 from "@/assets/projects/commercial/com-project-4.webp";
import comProject5 from "@/assets/projects/commercial/com-project-5.webp";
import comProject6 from "@/assets/projects/commercial/com-project-6.webp";
import comProject7 from "@/assets/projects/commercial/com-project-7.webp";
import comProject8 from "@/assets/projects/commercial/com-project-8.webp";
import comProject9 from "@/assets/projects/commercial/com-project-9.webp";

type Category = "All" | "Residential" | "Commercial";

interface Project {
  id: number;
  image: string;
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  year: string;
  area: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Residential", "Commercial"];

  const projects: Project[] = [
    // RESIDENTIAL PROJECTS
    {
      id: 1,
      image: resProject1,
      title: "Modern Residential Villa",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2024",
      area: "4,500 sq ft"
    },
    {
      id: 2,
      image: resProject2,
      title: "Luxury Family Home",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2024",
      area: "5,200 sq ft"
    },
    {
      id: 3,
      image: resProject3,
      title: "Contemporary Residence",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2023",
      area: "3,800 sq ft"
    },
    {
      id: 4,
      image: resProject4,
      title: "Elegant Villa Design",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2023",
      area: "6,000 sq ft"
    },
    {
      id: 5,
      image: resProject5,
      title: "Luxury Residential Estate",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2024",
      area: "7,500 sq ft"
    },
    {
      id: 6,
      image: resProject6,
      title: "Modern Family Residence",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2023",
      area: "4,200 sq ft"
    },
    {
      id: 7,
      image: resProject7,
      title: "Contemporary Villa",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2024",
      area: "5,800 sq ft"
    },
    {
      id: 8,
      image: resProject8,
      title: "Premium Residential Design",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2023",
      area: "4,800 sq ft"
    },
    {
      id: 9,
      image: resProject9,
      title: "Architectural Masterpiece",
      category: "Residential",
      location: "Nagpur, MH",
      year: "2024",
      area: "6,500 sq ft"
    },
    
    // COMMERCIAL PROJECTS
    {
      id: 10,
      image: comProject1,
      title: "Modern Commercial Complex",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2024",
      area: "15,000 sq ft"
    },
    {
      id: 11,
      image: comProject2,
      title: "Corporate Office Building",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2023",
      area: "25,000 sq ft"
    },
    {
      id: 12,
      image: comProject3,
      title: "Premium Retail Center",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2024",
      area: "18,000 sq ft"
    },
    {
      id: 13,
      image: comProject4,
      title: "Business Park",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2023",
      area: "35,000 sq ft"
    },
    {
      id: 14,
      image: comProject5,
      title: "Commercial Plaza",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2024",
      area: "22,000 sq ft"
    },
    {
      id: 15,
      image: comProject6,
      title: "Mixed-Use Development",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2024",
      area: "40,000 sq ft"
    },
    {
      id: 16,
      image: comProject7,
      title: "Tech Hub Complex",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2023",
      area: "28,000 sq ft"
    },
    {
      id: 17,
      image: comProject8,
      title: "Modern Shopping Center",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2024",
      area: "32,000 sq ft"
    },
    {
      id: 18,
      image: comProject9,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Nagpur, MH",
      year: "2023",
      area: "45,000 sq ft"
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section - Full Viewport matching Home page */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated architectural grid background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Floating architectural elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/20 transform -rotate-12 animate-pulse" 
                   style={{animationDuration: '4s'}} />
              <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-accent/30 transform rotate-45 animate-pulse" 
                   style={{animationDuration: '5s', animationDelay: '1s'}} />
              <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-accent/40 rounded-full animate-pulse" 
                   style={{animationDuration: '3s', animationDelay: '2s'}} />
              
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-sm uppercase tracking-widest text-accent mb-4 animate-fade-in">
                Portfolio
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">
                Our Projects
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto">
                A collection of distinctive architectural works that define spaces and inspire communities
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-medium px-8 animate-fade-in"
                onClick={() => {
                  document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="bg-background border-b border-border py-6">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "text-accent font-medium border-b-2 border-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                        <Badge className="mb-3 bg-accent text-foreground hover:bg-accent">
                          {project.category}
                        </Badge>
                        <div className="text-sm space-y-1 opacity-90">
                          <div>{project.area}</div>
                          <div>{project.year}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif mb-2 text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;