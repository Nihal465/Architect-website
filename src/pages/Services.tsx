import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Lightbulb, Users, CheckCircle2, Building2, PenTool, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const mainServices = [
    {
      icon: Ruler,
      title: "Architectural Design",
      description: "Comprehensive design solutions from concept to completion, tailored to your vision.",
      features: [
        "Conceptual Design & Planning",
        "3D Modeling & Visualization",
        "Construction Documentation",
        "Interior Design Integration",
        "Sustainable Design Solutions"
      ],
      color: "#E8DCC8"
    },
    {
      icon: Lightbulb,
      title: "Planning & Consulting",
      description: "Strategic planning and expert consultation for complex architectural challenges.",
      features: [
        "Site Analysis & Feasibility Studies",
        "Zoning & Code Compliance",
        "Design Review & Optimization",
        "Budget Planning & Cost Analysis",
        "Regulatory Approvals Support"
      ],
      color: "#2A2A2A",
      isDark: true
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, timeline, and budget adherence.",
      features: [
        "Construction Administration",
        "Contractor Coordination",
        "Quality Control & Inspections",
        "Timeline & Budget Management",
        "Post-Construction Support"
      ],
      color: "#E3DFE8"
    }
  ];

  const additionalServices = [
    {
      icon: Building2,
      title: "Master Planning",
      description: "Large-scale community and urban development planning."
    },
    {
      icon: PenTool,
      title: "Renovation & Restoration",
      description: "Breathing new life into existing structures with care."
    },
    {
      icon: Blocks,
      title: "Space Planning",
      description: "Optimizing interior layouts for functionality and flow."
    }
  ];

  return (
    <>
      {/* Hero Section - Full Viewport with Animated Visualization */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated background representing innovation, collaboration, and timeless design */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Blueprint grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
              <defs>
                <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#services-grid)" />
            </svg>

            {/* Animated service icons/elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Design Tools - Ruler and Compass */}
              <div className="absolute top-1/4 left-1/4 opacity-20">
                <svg width="120" height="120" viewBox="0 0 120 120" className="animate-pulse" style={{animationDuration: '4s'}}>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <line x1="60" y1="10" x2="60" y2="110" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <line x1="10" y1="60" x2="110" y2="60" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                </svg>
              </div>

              {/* Planning Blueprint */}
              <div className="absolute top-1/3 right-1/4 opacity-25 animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
                <svg width="150" height="100" viewBox="0 0 150 100">
                  <rect x="10" y="10" width="130" height="80" fill="none" stroke="rgba(210, 180, 140, 0.7)" strokeWidth="2"/>
                  <rect x="20" y="20" width="40" height="30" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1"/>
                  <rect x="70" y="20" width="60" height="60" fill="rgba(210, 180, 140, 0.15)" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1"/>
                  <line x1="20" y1="60" x2="60" y2="60" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1" strokeDasharray="3,3"/>
                </svg>
              </div>

              {/* Construction Management Icon */}
              <div className="absolute bottom-1/3 left-1/3 opacity-20 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <polygon points="50,10 90,90 10,90" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="2"/>
                </svg>
              </div>

              {/* Consultation Network */}
              <div className="absolute bottom-1/4 right-1/3 opacity-20 animate-pulse" style={{animationDuration: '4.5s', animationDelay: '2s'}}>
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <circle cx="70" cy="70" r="20" fill="rgba(210, 180, 140, 0.3)" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <circle cx="30" cy="30" r="12" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                  <circle cx="110" cy="40" r="12" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                  <circle cx="100" cy="100" r="12" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                  <line x1="70" y1="70" x2="30" y2="30" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <line x1="70" y1="70" x2="110" y2="40" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <line x1="70" y1="70" x2="100" y2="100" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                </svg>
              </div>

              {/* Technical measurement lines */}
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
              
              {/* Vertical guidelines */}
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent" />

              {/* Floating service icons */}
              <div className="absolute top-20 right-20 w-16 h-16 border-2 border-accent/30 rounded-lg transform rotate-12 animate-pulse" 
                   style={{animationDuration: '3s'}} />
              <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-accent/40 transform -rotate-6 animate-pulse" 
                   style={{animationDuration: '4s', animationDelay: '1s'}} />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-sm uppercase tracking-widest text-accent mb-4 animate-fade-in">
                What We Offer
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto">
                Comprehensive architectural solutions tailored to your needs, from initial concept to final construction.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-medium px-8 animate-fade-in"
                onClick={() => {
                  document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section - Three Cards */}
      <section id="core-services" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-muted-foreground/30"></div>
              <div className="w-3 h-3 rounded-full border-2 border-muted-foreground/30"></div>
              <div className="w-8 h-px bg-muted-foreground/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-foreground">
              Core Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Three pillars of excellence that define our approach to architecture.
            </p>
          </div>

          {/* Three Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg overflow-hidden"
                style={{ backgroundColor: service.color }}
              >
                <CardContent className="p-8 lg:p-10 h-full">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${service.isDark ? 'bg-white' : 'bg-white'} rounded-full mb-6`}>
                    <service.icon className={`h-6 w-6 ${service.isDark ? 'text-[#2A2A2A]' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-medium mb-4 ${service.isDark ? 'text-white' : 'text-foreground'} leading-tight`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm ${service.isDark ? 'text-white/80' : 'text-muted-foreground/80'} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${service.isDark ? 'text-accent' : 'text-accent'}`} />
                        <span className={`text-sm ${service.isDark ? 'text-white/90' : 'text-foreground/90'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
              Additional Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise for unique architectural needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-foreground">
              Our Process
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures excellence at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, needs, and project goals" },
              { step: "02", title: "Design", desc: "Creating innovative solutions tailored to your requirements" },
              { step: "03", title: "Development", desc: "Refining designs and preparing detailed documentation" },
              { step: "04", title: "Delivery", desc: "Overseeing construction and ensuring quality execution" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-serif text-accent/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A2A2A] text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can bring your architectural vision to life.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-10"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;