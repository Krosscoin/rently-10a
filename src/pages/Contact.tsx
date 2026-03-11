import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { ClipLoader } from "react-spinners";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      // Simulate API call for form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-primary">Contact Us</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            We'd love to hear from you! Send us a message or find us at our location.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email Address"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Subject of your message"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                aria-label="Your Message"
              />
            </div>

            <Button type="submit" className="w-full py-2 flex items-center justify-center gap-2" disabled={loading}>
              {loading && <ClipLoader size={20} color="hsl(var(--primary-foreground))" />}
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-center text-green-600 mt-4 text-lg" role="alert">
                Message sent successfully! We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-destructive mt-4 text-lg" role="alert">
                Failed to send message. Please try again.
              </p>
            )}
          </form>

          <div className="text-center mt-8 space-y-4">
            <h3 className="text-2xl font-semibold text-secondary-foreground">Our Location</h3>
            <p className="text-lg text-muted-foreground">
              The Golden Spoon<br />
              123 Culinary Lane, Foodie City, FC 56789<br />
              Phone: (123) 456-7890<br />
              Email: info@thegoldenspoon.com
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2081541334696!2d-122.41941578468165!3d37.7749292797615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087e5d8d8e1%3A0x6a2b2e88a3f8fe7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location on Google Maps"
                aria-label="Our restaurant location on Google Maps"
              ></iframe>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
