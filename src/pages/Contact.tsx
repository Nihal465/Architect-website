"use client";

import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
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
import { createClient } from "@supabase/supabase-js";

/* ✅ SUPABASE CLIENT */
const supabase = createClient(
  "https://babbtidqvoqnphvrlycu.supabase.co",
  "sb_publishable_VGpXwkUJY87yoaGwSuOPWA_GOG6BW-R"
);

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState("");

  /* ✅ FORM SUBMIT HANDLER */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const { error } = await supabase.from("contact_forms").insert([
      {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        project_type: projectType,
        message: formData.get("message"),
      },
    ]);

    if (error) {
      console.error(error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Message sent successfully!",
        description: "We will contact you soon.",
      });
      e.currentTarget.reset();
      setProjectType("");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-serif mb-4">Get In Touch</h1>
          <p className="mb-6 text-lg">
            Let’s discuss how we can bring your vision to life
          </p>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FORM */}
      <section id="contact-form" className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-8">Start Your Project</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Name *</Label>
                  <Input name="name" required placeholder="John Doe" />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Phone</Label>
                  <Input name="phone" placeholder="+91 98229 35060" />
                </div>
                <div>
                  <Label>Project Type *</Label>
                  <Select onValueChange={setProjectType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Institutional">Institutional</SelectItem>
                      <SelectItem value="Renovation">Renovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Message *</Label>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex gap-4">
                <MapPin />
                <p>
                  Honey Indra Apartment, Block 204, 2nd Floor
                  <br />
                  Shastri Nagar Square, Nagpur – 440008
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-4">
                <Mail />
                <p>nishantpethe@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
