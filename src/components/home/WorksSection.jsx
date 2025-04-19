import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Palette, Rocket } from "lucide-react"

export default function WorksSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple Process, Beautiful Results</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Getting your retail business online is easy with our simple three-step process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 -translate-y-1/2 z-0"></div>

          {[
            {
              step: "01",
              title: "Choose Your Plan",
              description: "Pick the package that fits your needs — Basic, Standard, or Premium. Each one includes a quick WhatsApp link to get started instantly.",
              icon: <MessageSquare className="size-6 " />,
              color: "from-blue-500 to-indigo-600",
            },
            {
              step: "02",
              title: "Send Us Your Brand & Product Info",
              description: "Share your brand name, the type of website you want, and the products you'd like to showcase — we’ll take care of the rest.",
              icon: <Palette className="size-6" />,
              color: "from-purple-500 to-pink-600",
            },
            {
              step: "03",
              title: "Pay & Go Live",
              description:
                "Once everything’s ready, you’ll receive a preview of your site. Approve, pay, and your new storefront is live and ready to share.",
              icon: <Rocket className="size-6" />,
              color: "from-orange-500 to-red-600",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              {/* Step number with animated gradient background */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r animate-pulse opacity-70 blur-md"></div>
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-primary-foreground shadow-lg`}
                >
                  <div className="absolute inset-0.5 rounded-[10px]  bg-background flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-medium text-muted-foreground">STEP</span>
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 ">
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Icon floating above the step number */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-background to-background/90 p-2 rounded-full shadow-lg  border-border border-2">
                  {step.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connecting arrow for mobile */}
              {i < 2 && (
                <div className="md:hidden flex justify-center w-full">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
