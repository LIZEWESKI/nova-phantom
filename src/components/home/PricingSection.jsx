import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function PricingSection() {
  const { t } = useTranslation()
  const packages = t("pricing.plans", { returnObjects: true })
  const pricing = (value) => t(`pricing.${value}`)
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
          {pricing("section")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{pricing("title")}</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">{pricing("description")}</p>
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
                      {pricing("mostPopular")}
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{pkg.type}</h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{pkg.price} {pricing("currency")}</span>
                      <span className="text-muted-foreground mx-1">{pricing("oneTime")}</span>
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
                            <span className="relative z-20 flex items-center justify-center">{pkg.button}</span>
                          </Button>
                        </div>
                      ) : (
                        <Button className="w-full rounded-full" variant={pkg.popular ? "default" : "outline"}>
                          {pkg.button}
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
