import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Have questions or need more information? Our team is here to help.
            Fill out the form below and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <MapPin className="mr-2 size-5 text-primary" />
                    Our Office
                  </h3>
                  <p className="text-muted-foreground">
                    123 SaaS Avenue, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground flex items-center">
                      <Mail className="mr-2 size-4 text-primary" />
                      <span>hello@saasify.com</span>
                    </p>
                    <p className="text-muted-foreground flex items-center">
                      <Phone className="mr-2 size-4 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </p>
                    <p className="text-muted-foreground flex items-center">
                      <Clock className="mr-2 size-4 text-primary" />
                      <span>Monday - Friday, 9am - 5pm PST</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Facebook className="size-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="size-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="size-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                    <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="rounded-full relative bg-background hover:bg-background/80 text-foreground border-0 overflow-hidden group"
                        disabled={isSubmitting}
                      >
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                          <span className="absolute inset-0 rounded-full bg-[linear-gradient(40deg,#3b82f6,#8b5cf6,#ec4899)] opacity-70 blur-md group-hover:opacity-100 transition-opacity"></span>
                        </span>
                        <span className="absolute inset-[1.5px] rounded-full bg-background z-10"></span>
                        <span className="relative z-20 px-4">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
