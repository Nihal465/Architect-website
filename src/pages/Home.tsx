import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Lightbulb, Users, ChevronDown, MapPin, Mail, Phone, Linkedin, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroImage from "@/assets/hero-main.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectResidential1 from "@/assets/project-residential1.jpg";
import DiscoverOurDesigns from "@/components/DiscoverOurDesigns";
import { useRef, useEffect } from "react";

const Home = () => {
  // 3D Canvas Animation
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 500;
    const height = canvas.height = 500;
    
    let rotation = 0;
    
    const draw3DBuilding = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      
      rotation += 0.003;
      
      const project = (x, y, z) => {
        const scale = 200 / (200 + z);
        return {
          x: x * scale,
          y: y * scale,
          scale: scale
        };
      };
      
      const rotateY = (x, y, z, angle) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
          x: x * cos - z * sin,
          y: y,
          z: x * sin + z * cos
        };
      };
      
      const buildings = [
        {
          base: [
            [-120, 80, -40],
            [-80, 80, -40],
            [-80, 80, 40],
            [-120, 80, 40]
          ],
          top: [
            [-120, -100, -40],
            [-80, -100, -40],
            [-80, -100, 40],
            [-120, -100, 40]
          ],
          color: 'rgba(210, 180, 140, 0.3)'
        },
        {
          base: [
            [-30, 80, -50],
            [30, 80, -50],
            [30, 80, 50],
            [-30, 80, 50]
          ],
          top: [
            [-30, -120, -50],
            [30, -120, -50],
            [30, -120, 50],
            [-30, -120, 50]
          ],
          color: 'rgba(210, 180, 140, 0.4)'
        },
        {
          base: [
            [80, 80, -30],
            [120, 80, -30],
            [120, 80, 30],
            [80, 80, 30]
          ],
          top: [
            [80, -80, -30],
            [120, -80, -30],
            [120, -80, 30],
            [80, -80, 30]
          ],
          color: 'rgba(210, 180, 140, 0.35)'
        }
      ];
      
      buildings.forEach((building, buildingIdx) => {
        const rotatedBase = building.base.map(v => rotateY(v[0], v[1], v[2], rotation));
        const rotatedTop = building.top.map(v => rotateY(v[0], v[1], v[2], rotation));
        
        const projectedBase = rotatedBase.map(v => project(v.x, v.y, v.z));
        const projectedTop = rotatedTop.map(v => project(v.x, v.y, v.z));
        
        const faces = [
          { points: [projectedBase[0], projectedBase[1], projectedTop[1], projectedTop[0]], z: rotatedBase[0].z, color: building.color },
          { points: [projectedBase[1], projectedBase[2], projectedTop[2], projectedTop[1]], z: rotatedBase[1].z, color: building.color },
          { points: [projectedBase[2], projectedBase[3], projectedTop[3], projectedTop[2]], z: rotatedBase[2].z, color: building.color },
          { points: [projectedBase[3], projectedBase[0], projectedTop[0], projectedTop[3]], z: rotatedBase[3].z, color: building.color },
          { points: [projectedTop[0], projectedTop[1], projectedTop[2], projectedTop[3]], z: rotatedTop[0].z, color: building.color }
        ];
        
        faces.sort((a, b) => a.z - b.z);
        
        faces.forEach((face, idx) => {
          ctx.beginPath();
          ctx.moveTo(face.points[0].x, face.points[0].y);
          face.points.forEach(p => ctx.lineTo(p.x, p.y));
          ctx.closePath();
          
          const brightness = 0.6 + (idx * 0.1);
          ctx.fillStyle = face.color.replace('0.3', `${0.2 + brightness * 0.2}`).replace('0.4', `${0.2 + brightness * 0.2}`).replace('0.35', `${0.2 + brightness * 0.2}`);
          ctx.fill();
          
          ctx.strokeStyle = 'rgba(210, 180, 140, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
        
        const windowCount = buildingIdx === 1 ? 8 : 6;
        for (let floor = 0; floor < windowCount; floor++) {
          const y = 80 - ((80 - (buildingIdx === 1 ? -120 : buildingIdx === 0 ? -100 : -80)) / windowCount) * floor - 15;
          
          for (let i = 0; i < 2; i++) {
            const baseX = building.base[i][0];
            const baseZ = building.base[i][2];
            const rotated = rotateY(baseX, y, baseZ, rotation);
            const projected = project(rotated.x, rotated.y, rotated.z);
            
            if (rotated.z > 0) {
              ctx.fillStyle = 'rgba(255, 223, 186, 0.3)';
              ctx.fillRect(projected.x - 8 * projected.scale, projected.y - 6 * projected.scale, 16 * projected.scale, 12 * projected.scale);
              ctx.strokeStyle = 'rgba(210, 180, 140, 0.4)';
              ctx.strokeRect(projected.x - 8 * projected.scale, projected.y - 6 * projected.scale, 16 * projected.scale, 12 * projected.scale);
            }
          }
        }
      });
      
      ctx.strokeStyle = 'rgba(210, 180, 140, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-200, 80);
      ctx.lineTo(200, 80);
      ctx.stroke();
      
      for (let i = -200; i <= 200; i += 40) {
        ctx.strokeStyle = 'rgba(210, 180, 140, 0.15)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(i, -200);
        ctx.lineTo(i, 200);
        ctx.stroke();
      }
      
      ctx.restore();
      requestAnimationFrame(draw3DBuilding);
    };
    
    draw3DBuilding();
  }, []);

  const heroSlides = [
    {
      image: heroSlide1,
      title: "Modern Architectural Excellence",
      category: "Commercial",
      location: "Seattle, WA"
    },
    {
      image: heroSlide2,
      title: "Contemporary Residential Design",
      category: "Residential",
      location: "Los Angeles, CA"
    },
    {
      image: heroSlide3,
      title: "Elegant Corporate Spaces",
      category: "Commercial",
      location: "San Francisco, CA"
    },
    {
      image: heroSlide4,
      title: "Timeless Institutional Architecture",
      category: "Institutional",
      location: "Washington, DC"
    }
  ];

  const projects = [
  {
    id: 1,
    image: projectResidential,
    title: "Luxury Residential Tower",
    category: "Residential",
    location: "Wardha, MH",
    area: "8000",
    floors:"G+3"
  },
  {
    id: 2,
    image: projectResidential1,
    title: "Modern Residential Complex",
    category: "Residential",
    location: "Nagpur, MH",
    area: "5000",
    floors: "G+7"
  },
  {
    id: 3,
    image: project3,
    title: "Cultural Center",
    category: "Institutional",
    location: "Nagpur, MH"
  }
];

  const services = [
    {
      icon: Ruler,
      title: "Architectural Design",
      description: "Comprehensive design solutions from concept to completion, tailored to your vision."
    },
    {
      icon: Lightbulb,
      title: "Planning & Consulting",
      description: "Strategic planning and expert consultation for complex architectural challenges."
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, timeline, and budget adherence."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Carousel Section - Full Viewport */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full min-h-screen">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${slide.image})`
                    }}
                  />
                  
                  <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 px-6"> 
                    <div className="text-center max-w-4xl mx-auto">
                      <div className="text-sm uppercase tracking-widest text-accent mb-4 animate-fade-in">
                        {slide.category}
                      </div>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in">
                        {slide.location}
                      </p>
                      <Link to="/projects">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-medium px-8 animate-fade-in">
                          Explore Our Work
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" />
          <CarouselNext className="right-4 md:right-8 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" />
        </Carousel>
        
        {/* Carousel Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/50 transition-all duration-300"
            />
          ))}
        </div>
      </section>

      {/* About Preview Section - Comfortable Viewport */}
      <section className="min-h-screen flex items-center py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="animate-fade-up">
              <div className="mb-6">
                <span className="inline-block px-5 py-2 bg-accent text-foreground text-sm font-semibold tracking-widest uppercase">
                  EST. 2000
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif mb-6 text-foreground leading-tight">
                Design Excellence Since 2000
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                We are a full-service architecture firm dedicated to creating spaces that inspire, function beautifully, and stand the test of time. Our approach combines innovative design thinking with meticulous attention to detail.
              </p>
              
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-2 hover:bg-accent hover:border-accent hover:text-foreground px-8 mb-12"
                >
                  Learn More About Us
                </Button>
              </Link>
              
              {/* Stats Row - Horizontal layout */}
              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-muted">
                <div>
                  <div className="text-3xl md:text-4xl xl:text-5xl font-serif text-accent mb-2">20+</div>
                  <div className="text-xs text-muted-foreground leading-tight">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl xl:text-5xl font-serif text-accent mb-2">200+</div>
                  <div className="text-xs text-muted-foreground leading-tight">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl xl:text-5xl font-serif text-accent mb-2">25</div>
                  <div className="text-xs text-muted-foreground leading-tight">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl xl:text-5xl font-serif text-accent mb-2">15</div>
                  <div className="text-xs text-muted-foreground leading-tight">Design Awards</div>
                </div>
              </div>
            </div>
            
            {/* Right side - 3D Architectural Visualization */}
            <div className="animate-fade-up flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <canvas 
                  ref={canvasRef}
                  className="w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/60 font-mono">
                  3D VISUALIZATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiscoverOurDesigns />

     {/* Services Overview - Three Cards Horizontal + Bottom Text */}
<section className="relative min-h-screen flex flex-col justify-between py-20 lg:py-24 bg-background">
  <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
    
    {/* Top Decorative Line */}
    <div className="flex items-center gap-3 mb-12">
      <div className="w-8 h-px bg-muted-foreground/30"></div>
      <div className="w-3 h-3 rounded-full border-2 border-muted-foreground/30"></div>
      <div className="w-8 h-px bg-muted-foreground/30"></div>
    </div>

    {/* Our Services Heading */}
    <div className="text-center mb-12 animate-fade-up">
      <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Our Services</h2>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        Comprehensive architectural solutions tailored to your needs.
      </p>
    </div>

    {/* Middle - Three Cards Horizontal (Centered) */}
    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full">
        
        {/* Card 1 - Architectural Design (Beige) */}
        <div className="relative bg-[#E8DCC8] p-8 lg:p-10 flex flex-col justify-between min-h-[480px]">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-8">
              <Ruler className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-medium mb-6 text-foreground leading-tight">
              Architectural Design
            </h3>
          </div>

          {/* Architectural Design Sketch */}
          <div className="w-full max-w-[180px] mx-auto my-4 opacity-60">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" fill="none" strokeWidth="1.5" className="text-muted-foreground">
                {/* Main building outline */}
                <rect x="80" y="150" width="240" height="180" />
                
                {/* Roof */}
                <path d="M 60 150 L 200 80 L 340 150" strokeWidth="2" />
                
                {/* Windows - Top row */}
                <rect x="110" y="170" width="45" height="50" />
                <rect x="177" y="170" width="45" height="50" />
                <rect x="245" y="170" width="45" height="50" />
                
                {/* Windows - Bottom row */}
                <rect x="110" y="245" width="45" height="50" />
                <rect x="245" y="245" width="45" height="50" />
                
                {/* Door */}
                <rect x="177" y="260" width="45" height="70" />
                <circle cx="210" cy="295" r="3" fill="currentColor" />
                
                {/* Window crossbars */}
                <line x1="110" y1="195" x2="155" y2="195" />
                <line x1="132.5" y1="170" x2="132.5" y2="220" />
                
                <line x1="177" y1="195" x2="222" y2="195" />
                <line x1="199.5" y1="170" x2="199.5" y2="220" />
                
                <line x1="245" y1="195" x2="290" y2="195" />
                <line x1="267.5" y1="170" x2="267.5" y2="220" />
                
                <line x1="110" y1="270" x2="155" y2="270" />
                <line x1="132.5" y1="245" x2="132.5" y2="295" />
                
                <line x1="245" y1="270" x2="290" y2="270" />
                <line x1="267.5" y1="245" x2="267.5" y2="295" />
                
                {/* Ground line */}
                <line x1="40" y1="330" x2="360" y2="330" strokeWidth="2" />
                
                {/* Dimension lines */}
                <line x1="70" y1="140" x2="330" y2="140" strokeWidth="0.8" strokeDasharray="4 2" />
                <line x1="70" y1="135" x2="70" y2="145" strokeWidth="0.8" />
                <line x1="330" y1="135" x2="330" y2="145" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground/80 mb-6 leading-relaxed">
              Comprehensive design solutions from concept to completion, tailored to your vision.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors group/link"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Card 2 - Planning & Consulting (Dark) */}
        <div className="relative bg-[#2A2A2A] text-white p-8 lg:p-10 flex flex-col justify-between min-h-[480px]">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-8">
              <Lightbulb className="h-5 w-5 text-[#2A2A2A]" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-medium mb-6 text-white leading-tight">
              Planning & Consulting
            </h3>
          </div>

          {/* Planning & Consulting Sketch */}
          <div className="w-full max-w-[200px] mx-auto my-4 opacity-70">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" fill="none" strokeWidth="1.2" className="text-white">
                {/* Blueprint style layout */}
                <rect x="100" y="120" width="200" height="220" />
                <line x1="100" y1="200" x2="300" y2="200" />
                <line x1="100" y1="270" x2="300" y2="270" />
                
                <rect x="60" y="160" width="40" height="180" />
                <line x1="60" y1="240" x2="100" y2="240" />
                
                <rect x="120" y="140" width="50" height="45" />
                <rect x="230" y="140" width="50" height="45" />
                <line x1="145" y1="140" x2="145" y2="185" />
                <line x1="255" y1="140" x2="255" y2="185" />
                <line x1="120" y1="162" x2="170" y2="162" />
                <line x1="230" y1="162" x2="280" y2="162" />
                
                <rect x="120" y="215" width="50" height="45" />
                <rect x="230" y="215" width="50" height="45" />
                <line x1="145" y1="215" x2="145" y2="260" />
                <line x1="255" y1="215" x2="255" y2="260" />
                <line x1="120" y1="237" x2="170" y2="237" />
                <line x1="230" y1="237" x2="280" y2="237" />
                
                <line x1="100" y1="200" x2="80" y2="185" strokeWidth="2" />
                <line x1="300" y1="200" x2="320" y2="185" strokeWidth="2" />
                <line x1="80" y1="185" x2="320" y2="185" strokeWidth="2" />
                
                <rect x="170" y="290" width="60" height="50" />
                <line x1="200" y1="290" x2="200" y2="340" />
                
                <line x1="70" y1="170" x2="75" y2="170" />
                <line x1="70" y1="180" x2="75" y2="180" />
                <line x1="70" y1="190" x2="75" y2="190" />
                <line x1="70" y1="200" x2="75" y2="200" />
                <line x1="70" y1="210" x2="75" y2="210" />
                
                <line x1="40" y1="340" x2="360" y2="340" strokeWidth="2" />
                
                <line x1="90" y1="120" x2="100" y2="120" />
                <line x1="300" y1="120" x2="310" y2="120" />
                <line x1="100" y1="110" x2="300" y2="110" strokeWidth="1.5" />
                <path d="M 100 120 L 100 110 M 300 120 L 300 110" />
              </g>
            </svg>
          </div>
          
          <div>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Strategic planning and expert consultation for complex architectural challenges.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center text-sm font-medium text-white hover:text-white/70 transition-colors group/link"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Card 3 - Project Management (Light Purple) */}
        <div className="relative bg-[#E3DFE8] p-8 lg:p-10 flex flex-col justify-between min-h-[480px]">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-8">
              <Users className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-medium mb-6 text-foreground leading-tight">
              Project Management
            </h3>
          </div>

          {/* Project Management Sketch - Timeline/Gantt Chart Style */}
          <div className="w-full max-w-[200px] mx-auto my-4 opacity-60">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" fill="none" strokeWidth="1.5" className="text-muted-foreground">
                {/* Timeline bars */}
                <rect x="80" y="120" width="180" height="30" fill="currentColor" fillOpacity="0.15" />
                <rect x="80" y="165" width="240" height="30" fill="currentColor" fillOpacity="0.15" />
                <rect x="80" y="210" width="150" height="30" fill="currentColor" fillOpacity="0.15" />
                <rect x="80" y="255" width="200" height="30" fill="currentColor" fillOpacity="0.15" />
                
                {/* Timeline grid lines */}
                <line x1="80" y1="110" x2="80" y2="300" strokeWidth="2" />
                <line x1="80" y1="300" x2="340" y2="300" strokeWidth="2" />
                
                {/* Vertical markers */}
                <line x1="150" y1="295" x2="150" y2="305" strokeDasharray="2 2" strokeWidth="1" />
                <line x1="220" y1="295" x2="220" y2="305" strokeDasharray="2 2" strokeWidth="1" />
                <line x1="290" y1="295" x2="290" y2="305" strokeDasharray="2 2" strokeWidth="1" />
                
                {/* Task labels (dots) */}
                <circle cx="70" cy="135" r="4" fill="currentColor" />
                <circle cx="70" cy="180" r="4" fill="currentColor" />
                <circle cx="70" cy="225" r="4" fill="currentColor" />
                <circle cx="70" cy="270" r="4" fill="currentColor" />
                
                {/* Progress indicators */}
                <rect x="80" y="120" width="120" height="30" fill="currentColor" fillOpacity="0.4" />
                <rect x="80" y="165" width="180" height="30" fill="currentColor" fillOpacity="0.4" />
                <rect x="80" y="210" width="100" height="30" fill="currentColor" fillOpacity="0.4" />
                <rect x="80" y="255" width="140" height="30" fill="currentColor" fillOpacity="0.4" />
                
                {/* Milestone markers */}
                <path d="M 260 125 L 270 135 L 260 145 L 250 135 Z" fill="currentColor" />
                <path d="M 320 170 L 330 180 L 320 190 L 310 180 Z" fill="currentColor" />
                
                {/* Title text area */}
                <rect x="90" y="320" width="220" height="35" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="100" y1="330" x2="180" y2="330" strokeWidth="0.8" />
                <line x1="100" y1="340" x2="150" y2="340" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground/80 mb-6 leading-relaxed">
              End-to-end project oversight ensuring quality, timeline, and budget adherence.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors group/link"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom - Text Content and Button */}
    <div className="mt-16 text-center max-w-3xl mx-auto">
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
        Welcome to Nishant Pethe Associates, where innovation meets elegance in architectural design. With a rich history and a forward-thinking approach, we transform visions into reality.
      </p>
      
      <Link to="/services">
        <Button 
          size="lg" 
          variant="outline"
          className="border-2 hover:bg-accent hover:border-accent hover:text-foreground px-8"
        >
          View All Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>

  </div>
</section>

       {/* Recent Works Section - Inspired by buildahome.in */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 lg:px-8">
    {/* Header with Title and Button */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
          Our Recent Works
        </h2>
        <p className="text-lg text-gray-600">Cherished By Customers</p>
      </div>
      
      <Link to="/projects">
        <Button 
          variant="outline"
          className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors px-8 py-3 rounded-md font-semibold whitespace-nowrap"
        >
          View All Projects
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>

    {/* Projects Grid - 3 columns like buildahome.in */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link key={project.id} to="/projects" className="group">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-accent text-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </div>
            </div>

            {/* Project Info */}
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              {/* Details Grid */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Location</span>
                  <span className="text-black font-semibold flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {project.location}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Total Area</span>
                  <span className="text-black font-semibold">8000 sqft</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Floors</span>
                  <span className="text-black font-semibold">G+3</span>
                </div>
              </div>

              {/* Read More Button */}
              <button className="w-full bg-gray-100 hover:bg-accent hover:text-white text-black font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center group/btn">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section - Redesigned to Match Screenshot */}
      <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Fog/Mist Overlay */}
        <div className="absolute inset-0 bg-white/5 mix-blend-multiply"></div>
        
        {/* Background Image (use heroSlide1 or upload a foggy house image as cta-bg.jpg) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroSlide1})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Left Text Overlay */}
        <div className="absolute left-6 md:left-12 bottom-32 md:bottom-40 z-10 max-w-lg text-white animate-fade-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-95">
            Let's collaborate to transform your vision into an architectural masterpiece. Our team is ready to bring your ideas to life.
          </p>
        </div>
        
        {/* Right Overlay Cards */}
        <div className="absolute right-6 md:right-12 top-1/4 md:top-1/3 w-48 md:w-64 lg:w-80 space-y-4 z-10">
          {/* Card 1: Innovative Designs */}
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex items-center justify-between">
            <span className="text-white text-xs md:text-sm font-medium">Innovative Designs •</span>
            <div 
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-md bg-cover bg-center ml-2"
              style={{ backgroundImage: `url(${project1})` }}
            />
          </div>
          
          {/* Card 2: Art Integration */}
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex items-center justify-between">
            <span className="text-white text-xs md:text-sm font-medium">Art Integration •</span>
            <div 
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-md bg-cover bg-center ml-2"
              style={{ backgroundImage: `url(${project2})` }}
            />
          </div>
          
          {/* Card 3: Client-Centric Approach */}
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex items-center justify-between">
            <span className="text-white text-xs md:text-sm font-medium">Client-Centric Approach •</span>
            <div 
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-md bg-cover bg-center ml-2"
              style={{ backgroundImage: `url(${project3})` }}
            />
          </div>
        </div>
        
        {/* Yellow CTA Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-10 py-3 rounded-lg shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {/* Bottom Left Decorative Arrow */}
        <div className="absolute bottom-8 left-6 md:left-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
          <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
        </div>
      </section>
    </div>
  );
};

export default Home;