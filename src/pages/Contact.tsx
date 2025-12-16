import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Hero Section - Full Viewport with Communication Visualization */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated background representing communication and connection */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Communication grid */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <defs>
                <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="rgba(210, 180, 140, 0.5)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>

            {/* Animated communication elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Central communication hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
                <svg width="250" height="250" viewBox="0 0 250 250" className="animate-pulse" style={{animationDuration: '5s'}}>
                  <circle cx="125" cy="125" r="30" fill="rgba(210, 180, 140, 0.4)" stroke="rgba(210, 180, 140, 0.8)" strokeWidth="2.5"/>
                  <circle cx="125" cy="125" r="50" fill="none" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="1.5"/>
                  <circle cx="125" cy="125" r="70" fill="none" stroke="rgba(210, 180, 140, 0.25)" strokeWidth="1.5"/>
                  <circle cx="125" cy="125" r="90" fill="none" stroke="rgba(210, 180, 140, 0.2)" strokeWidth="1.5"/>
                  <circle cx="125" cy="125" r="110" fill="none" stroke="rgba(210, 180, 140, 0.15)" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Email icon visualization */}
              <div className="absolute top-1/4 left-1/5 opacity-25 animate-pulse" style={{animationDuration: '4s'}}>
                <svg width="140" height="100" viewBox="0 0 140 100">
                  <rect x="10" y="20" width="120" height="80" rx="4" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <path d="M 10 20 L 70 60 L 130 20" fill="none" stroke="rgba(210, 180, 140, 0.7)" strokeWidth="2.5"/>
                  <line x1="10" y1="100" x2="50" y2="65" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="2"/>
                  <line x1="130" y1="100" x2="90" y2="65" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="2"/>
                  <circle cx="70" cy="60" r="4" fill="rgba(210, 180, 140, 0.6)"/>
                </svg>
              </div>

              {/* Phone icon visualization */}
              <div className="absolute top-1/3 right-1/5 opacity-25 animate-pulse" style={{animationDuration: '4.5s', animationDelay: '1s'}}>
                <svg width="100" height="140" viewBox="0 0 100 140">
                  <rect x="20" y="10" width="60" height="120" rx="8" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2.5"/>
                  <rect x="30" y="25" width="40" height="65" fill="rgba(210, 180, 140, 0.15)" stroke="rgba(210, 180, 140, 0.4)" strokeWidth="1"/>
                  <circle cx="50" cy="110" r="8" fill="none" stroke="rgba(210, 180, 140, 0.6)" strokeWidth="2"/>
                  <path d="M 30 40 Q 50 35 70 40" fill="none" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                  <path d="M 30 50 Q 50 45 70 50" fill="none" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                  <path d="M 30 60 Q 50 55 70 60" fill="none" stroke="rgba(210, 180, 140, 0.5)" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Location pin */}
              <div className="absolute bottom-1/3 left-1/4 opacity-25 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                <svg width="100" height="120" viewBox="0 0 100 120">
                  <path d="M 50 10 Q 70 10 80 25 Q 85 35 85 45 Q 85 65 50 100 Q 15 65 15 45 Q 15 35 20 25 Q 30 10 50 10 Z" 
                        fill="rgba(210, 180, 140, 0.2)" 
                        stroke="rgba(210, 180, 140, 0.7)" 
                        strokeWidth="2.5"/>
                  <circle cx="50" cy="42" r="12" fill="rgba(210, 180, 140, 0.4)" stroke="rgba(210, 180, 140, 0.8)" strokeWidth="2"/>
                  <circle cx="50" cy="100" r="15" fill="none" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="1.5" opacity="0.5"/>
                </svg>
              </div>

              {/* Dynamic connection lines */}
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-sm uppercase tracking-widest text-accent mb-4 animate-fade-in">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto">
                Let's discuss how we can bring your architectural vision to life
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-medium px-8 animate-fade-in"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contact-form" className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">
                Start Your Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98229 35060"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type *</Label>
                    <Select required>
                      <SelectTrigger id="project-type" className="h-12">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="institutional">Institutional</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-accent hover:bg-accent/90 text-foreground font-medium px-12"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-up space-y-8" style={{ animationDelay: "100ms" }}>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <Card className="hover-lift">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-foreground">Office Location</h3>
                        <p className="text-muted-foreground">
                          Honey Indra Apartment Block no.204, 2nd floor<br />
                          Shastri Nagar Square, Next to Mahindra Showroom<br />
                          Nagpur, Maharashtra 440008
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-foreground">Email</h3>
                        <a
                          href="mailto:info@architect.com"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          info@architect.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-foreground">Phone</h3>
                        <a
                          href="tel:+919822935060"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          +91 98229 35060
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-foreground">Office Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-0">
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.190723758703!2d79.12704737401279!3d21.144806883785087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4cba1fc6d083b%3A0xf4db26b4d9bb783d!2sNishant%20Pethe%20%26%20Associates!5e0!3m2!1sen!2sin!4v1765788517770!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Nishant Pethe & Associates Office Location"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;