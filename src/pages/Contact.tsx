import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add the form name manually to the data being sent
    formData.append("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
      setProjectType("");
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <defs>
                <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="rgba(210, 180, 140, 0.5)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
                <svg width="250" height="250" viewBox="0 0 250 250" className="animate-pulse" style={{animationDuration: '5s'}}>
                  <circle cx="125" cy="125" r="30" fill="rgba(210, 180, 140, 0.4)" stroke="rgba(210, 180, 140, 0.8)" strokeWidth="2.5"/>
                  <circle cx="125" cy="125" r="50" fill="none" stroke="rgba(210, 180, 140, 0.3)" strokeWidth="1.5"/>
                  <circle cx="125" cy="125" r="70" fill="none" stroke="rgba(210, 180, 140, 0.25)" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
          </div>
          
          <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 px-6 text-center max-w-4xl mx-auto">
            <div className="text-sm uppercase tracking-widest text-accent mb-4 animate-fade-in">Contact Us</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">Get In Touch</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto">Let's discuss how we can bring your architectural vision to life</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-medium px-8 animate-fade-in" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section id="contact-form" className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Start Your Project</h2>
              
              {/* NETLIFY FORM SETTINGS */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* REQUIRED HIDDEN INPUTS FOR NETLIFY */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden><label>Don't fill this out: <input name="bot-field" /></label></div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="h-12" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98229 35060" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type *</Label>
                    <Select onValueChange={(value) => setProjectType(value)} required>
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
                    {/* Hidden input to ensure Select value is picked up by Netlify */}
                    <input type="hidden" name="project-type" value={projectType} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project..." required className="min-h-[150px] resize-none" />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-foreground font-medium px-12">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="animate-fade-up space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Office Location</h3>
                      <p className="text-muted-foreground">Honey Indra Apartment Block no.204, 2nd floor<br />Shastri Nagar Square, Nagpur, 440008</p>
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
                      <a href="mailto:info@architect.com" className="text-muted-foreground hover:text-accent transition-colors">info@architect.com</a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-0">
        <div className="w-full h-[400px] md:h-[500px]">
    <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.284758994511!2d79.1303867750346!3d21.141062080536787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7333d455447%3A0xc47b973347c4091a!2sNishant%20Pethe%20And%20Associates!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Office Location"
/>
        </div>
      </section>
    </>
  );
};

export default Contact;