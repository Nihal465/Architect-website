import { Award, Target, Users, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue the highest standards in every project, from initial concept to final execution."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions that address contemporary challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients and partners to achieve shared visions and goals."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to environmentally responsible design that benefits future generations."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section - Full Viewport with Animated Visualization */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated background representing innovation, collaboration, and timeless design */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Timeless grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
              <defs>
                <pattern id="about-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="1" fill="rgba(210, 180, 140, 0.4)"/>
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-grid)" />
            </svg>

            {/* Animated elements representing collaboration and innovation */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Innovation - Connected nodes network */}
              <div className="absolute top-1/4 left-1/5 opacity-25">
                <svg width="200" height="200" viewBox="0 0 200 200" className="animate-pulse" style={{animationDuration: '4s'}}>
                  {/* Central innovation hub */}
                  <circle cx="100" cy="100" r="25" fill="rgba(210, 180, 140, 0.3)" stroke="rgba(210, 180, 140, 0.7)" strokeWidth="2"/>
                  
                  {/* Connected innovation points */}
                  <circle cx="50" cy="50" r="15" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="1.5"/>
                  <circle cx="150" cy="50" r="15" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="1.5"/>
                  <circle cx="50" cy="150" r="15" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="1.5"/>
                  <circle cx="150" cy="150" r="15" fill="rgba(210, 180, 140, 0.2)" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="1.5"/>
                  
                  {/* Connection lines */}
                  <line x1="100" y1="100" x2="50" y2="50" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1.5"/>
                  <line x1="100" y1="100" x2="150" y2="50" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1.5"/>
                  <line x1="100" y1="100" x2="50" y2="150" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1.5"/>
                  <line x1="100" y1="100" x2="150" y2="150" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Collaboration - Interlocking circles */}
              <div className="absolute top-1/3 right-1/4 opacity-20 animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
                <svg width="180" height="120" viewBox="0 0 180 120">
                  <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <circle cx="90" cy="60" r="40" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <circle cx="120" cy="60" r="40" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <circle cx="75" cy="60" r="8" fill="rgba(210, 180, 140, 0.4)"/>
                  <circle cx="105" cy="60" r="8" fill="rgba(210, 180, 140, 0.4)"/>
                </svg>
              </div>

              {/* Timeless Design - Classical proportions (Golden Ratio) */}
              <div className="absolute bottom-1/3 left-1/3 opacity-20 animate-pulse" style={{animationDuration: '6s', animationDelay: '0.5s'}}>
                <svg width="160" height="160" viewBox="0 0 160 160">
                  {/* Golden rectangle */}
                  <rect x="10" y="10" width="100" height="140" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <rect x="10" y="10" width="100" height="61.8" fill="rgba(210, 180, 140, 0.1)" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1"/>
                  
                  {/* Golden spiral suggestion */}
                  <path d="M 110 71.8 Q 110 10, 48.2 10" fill="none" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                  <circle cx="79.1" cy="40.9" r="3" fill="rgba(210, 180, 140, 0.6)"/>
                </svg>
              </div>

              {/* Excellence - Award star */}
              <div className="absolute bottom-1/4 right-1/3 opacity-20 animate-pulse" style={{animationDuration: '4.5s', animationDelay: '2s'}}>
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <polygon points="60,10 73,43 110,43 80,65 93,98 60,76 27,98 40,65 10,43 47,43" 
                           fill="rgba(210, 180, 140, 0.2)" 
                           stroke="rgba(210, 180, 140, 0.6)" 
                           strokeWidth="2"/>
                  <circle cx="60" cy="60" r="15" fill="none" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Architectural compass rose */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse" style={{animationDuration: '8s'}}>
                  <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="1"/>
                  <line x1="150" y1="30" x2="150" y2="270" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <line x1="30" y1="150" x2="270" y2="150" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <line x1="75" y1="75" x2="225" y2="225" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="1"/>
                  <line x1="225" y1="75" x2="75" y2="225" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="1"/>
                </svg>
              </div>

              {/* Floating architectural elements */}
              <div className="absolute top-20 right-32 w-20 h-20 border border-accent/30 transform rotate-45 animate-pulse" 
                   style={{animationDuration: '3s'}} />
              <div className="absolute bottom-40 left-32 w-16 h-16 rounded-full border-2 border-accent/25 animate-pulse" 
                   style={{animationDuration: '4s', animationDelay: '1s'}} />
              
              {/* Dynamic connection lines */}
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-sm uppercase tracking-widest text-accent mb-4 animate-fade-in">
                Our Story
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto">
                Creating architectural excellence through innovation, collaboration, and timeless design
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-medium px-8 animate-fade-in"
                onClick={() => {
                  document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Introduction */}
      <section id="our-story" className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2000, Nishant Pethe And Associates in Nagpur is one of the leading businesses in the Interior Designers. Also known for Architects, Civil Contractors, Interior Designers, Civil Contractors For Turnkey Project, Commercial Building Contractors, Kitchen Designing Services, Computer Designers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Nishant Pethe And Associates, Nagpur.                </p>
                <p>
                  Among the eminent architectural firms in the city is Nishant Pethe And Associates in Wardhaman Nagar, Nagpur. Armed with an in-depth knowledge and extensive expertise in the realm of architecture and design, this architect and the firm is known for transforming basic brick and mortar into extraordinary spaces. This professional enterprise visualizes, ideates and implements residential, commercial and/or industrial projects that redefine particular areas’ architectural landscape at large. It has the know-how to cater to a diverse set of industries spanning hospitality, education, healthcare, IT, and retail. Each architectural project this firm undertakes employs a dedication to design excellence, efficient delivery and sophistication in building technology.
                </p>
                <p>
                  Every project we undertake is approached with fresh eyes and an open mind, allowing us to craft solutions that are as unique as our clients themselves. Our work has been recognized with numerous design awards, but our greatest satisfaction comes from seeing our buildings come to life and serve their communities.
                </p>
              </div>
            </div>

            <div className="animate-fade-up space-y-8" style={{ animationDelay: "100ms" }}>
              <div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To design exceptional architectural solutions that balance beauty, functionality, and sustainability while exceeding our clients' expectations and contributing positively to the built environment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be recognized as a leading architectural firm that shapes the future of design through innovation, craftsmanship, and a deep commitment to creating spaces that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-up text-center p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are a diverse team of architects, designers, and project managers united by a shared passion for exceptional design. Our collaborative approach brings together different perspectives and expertise, resulting in innovative solutions that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a combined experience of over 25 years in the industry, our team has the knowledge and skills to handle projects of any scale and complexity. We believe in continuous learning and staying at the forefront of architectural innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center animate-fade-up">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-up" style={{ animationDelay: "0ms" }}>
                <div className="text-5xl font-serif mb-4 text-accent">01</div>
                <h3 className="text-xl font-serif mb-3">Listen</h3>
                <p className="opacity-90">
                  We begin by understanding your vision, needs, and aspirations for the project.
                </p>
              </div>
              <div className="text-center animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="text-5xl font-serif mb-4 text-accent">02</div>
                <h3 className="text-xl font-serif mb-3">Design</h3>
                <p className="opacity-90">
                  Our team develops creative solutions that balance aesthetics with functionality.
                </p>
              </div>
              <div className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="text-5xl font-serif mb-4 text-accent">03</div>
                <h3 className="text-xl font-serif mb-3">Deliver</h3>
                <p className="opacity-90">
                  We oversee every detail to ensure flawless execution of your architectural vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;