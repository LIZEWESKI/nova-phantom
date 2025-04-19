import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, Shield, Users, BarChart, Layers, Puzzle, MessageCircleHeart, TabletSmartphone, Palette, Link, BadgeX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
const FeaturesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Custom Showcase Website",
      description:
        "Highlight your products in a clean, modern layout that reflects your brand.",
      icon: <Puzzle className="size-5 text-success" />,
    },
    {
      title: "WhatsApp Order Button",
      description:
        "Let customers order instantly with a pre-filled WhatsApp message for each product.",
      icon: <MessageCircleHeart className="size-5 text-success" />,
    },
    {
      title: "Mobile-First Design",
      description:
        "Looks great on any device — optimized for the phones your customers are using.",
      icon: <TabletSmartphone className="size-5 text-success" />,
    },
    {
      title: "Personalized Style",
      description:
        "Colors, fonts, and layout that match your shop’s vibe — not a generic template.",
      icon: <Palette className="size-5 text-success" />,
    },
    {
      title: "Link-Friendly and Shareable",
      description:
        "Share your site on social media, business cards, or even with a QR code.",
      icon: <Link className="size-5 text-success" />,
    },
    {
      title: "No Hosting or Monthly Fees",
      description:
        "One-time setup. Static site. No servers. No surprises.",
      icon: <BadgeX className="size-5 text-success" />,
    },
  ];
  return (
    <section id="features" className="w-full py-12 md:py-20">
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
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our comprehensive platform provides all the tools you need to
            streamline your workflow, boost productivity, and achieve your
            goals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
