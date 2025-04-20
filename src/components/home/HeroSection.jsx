"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import templatePreview from "@/assets/imgs/templatePreview.png"

export const HeroSection = () => {
  const { t } = useTranslation()
  const isRTL = document.documentElement.lang === "ar"

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full py-12 mt-16 md:mt-20 md:py-16 lg:py-20 overflow-hidden">
      <div className="container w-full px-4 md:px-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Main content */}
        <div className={`flex flex-col ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-start w-full max-w-2xl mx-auto"
          >
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-8 lg:mt-0 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={item}
              className={`flex flex-col sm:flex-row gap-4 ${isRTL ? "sm:flex-row-reverse" : ""} ${isRTL ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}
            >
              <a href="#contact">
                <Button
                  size="lg"
                  variant="default"
                  className="relative rounded-full h-12 px-8 text-base group overflow-hidden"
                >
                  <span className={`relative z-20 flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    {t("hero.GetToKnow")}
                    <ArrowRight
                      className={`size-4 transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-1 group-hover:-rotate-12" : "group-hover:translate-x-1 group-hover:rotate-12"}`}
                    />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </a>

              <a href="#features">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base group">
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {t("hero.ourFeatures")}
                  </span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              type: "spring",
              stiffness: 50,
            }}
            className="flex-1 relative w-full max-w-2xl mx-auto mt-8 lg:mt-0"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
              <img
                src={templatePreview || "/placeholder.svg"}
                width={1280}
                height={720}
                alt="SaaSify dashboard"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div>

            {/* Background blobs */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
            <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

            {/* Floating elements for visual interest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-background rounded-lg p-3 shadow-lg border border-border/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">100% {isRTL ? "متوافق" : "Compatible"}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
