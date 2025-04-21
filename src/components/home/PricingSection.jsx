import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingSection() {
  const packages = [
    {
      name: "Basic",
      price: "799 MAD",
      description: "Perfect for small retail businesses just getting started online.",
      features: [
        "1-page website",
        "Up to 10 products",
        "Mobile-friendly design",
        "3-day delivery",
        "Free maintenance for 1 year",
      ],
      cta: "Get Started",
    },
    {
      name: "Business",
      price: "2199 MAD",
      description: "Ideal for growing retail businesses with more products.",
      features: [
        "Multi-section website",
        "Up to 15 products",
        "Mobile-first + product gallery",
        "Basic customization (colors, logo)",
        "2 free edits post-delivery",
        "3–4 day delivery",
        "1-year free domain name",
        "Free maintenance for 1 year",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Premium",
      price: "3999 MAD",
      description: "For established retailers needing a comprehensive online presence.",
      features: [
        "Unlimited page responsive website",
        "Advanced online store (unlimited products)",
        "Custom design",
        "Advanced SEO optimization",
        "Product filtering and search",
        "1-year free domain name",
        "Free maintenance for 1 year",
        "Priority support",
      ],
      cta: "Contact Us",
    },
  ]

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Choose the package that's right for your retail business. All packages include a free domain name and
            maintenance for 1 year.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={pkg.popular ? "relative" : ""}
              >
                {pkg.popular && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10"></div>
                )}
                <Card
                  className={`relative overflow-hidden h-full ${
                    pkg.popular
                      ? "border-0 shadow-lg bg-gradient-to-b from-background to-muted/10 backdrop-blur m-[1.5px]"
                      : "border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground ml-1">one-time</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{pkg.description}</p>
                    <ul className="space-y-3 my-6 flex-grow">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-center">
                          <Check className="mr-2 size-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-auto">
                      {pkg.popular ? (
                        <div className="relative">
                          {/* Gradient border without glow */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                          <div className="absolute inset-[1.5px] rounded-full bg-background"></div>
                          <Button className="relative w-full rounded-full border-0">
                            <span className="relative z-20 flex items-center justify-center">{pkg.cta}</span>
                          </Button>
                        </div>
                      ) : (
                        <Button className="w-full rounded-full" variant={pkg.popular ? "default" : "outline"}>
                          {pkg.cta}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
