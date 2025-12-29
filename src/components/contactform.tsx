import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://babbtidqvoqnphvrlycu.supabase.co",
  "sb_publishable_VGpXwkUJY87yoaGwSuOPWA_GOG6BW-R"
);

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const { error } = await supabase.from("contact_forms").insert([
      {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        project_type: (form.elements.namedItem("project_type") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("❌ Failed to send message");
    } else {
      alert("✅ Message sent successfully");
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <input name="phone" placeholder="Phone Number" />
      <input name="project_type" placeholder="What kind of project?" />
      <textarea name="message" placeholder="How can we help?" required />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
