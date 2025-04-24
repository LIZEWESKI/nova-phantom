import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next"

export default function CTASection() {
  const { t } = useTranslation()
  const cta = (value) => t(`cta.${value}`)
  const isRTL = document.documentElement.lang === "ar"
  return (
    <section className="w-full py-12 md:py-20 bg-card-foreground overflow-hidden" id="contact">
      <div className="container px-4 md:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl text-primary-foreground md:text-4xl lg:text-5xl font-bold tracking-tight">{cta("title")} </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">{cta("description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#contact">
              <Button
                size="lg"
                variant="secondary"
                className="relative rounded-full h-12 px-8 text-base"
              >
                <span className={`relative z-20 flex items-center transition-transform duration-300 group-hover:scale-110 ${isRTL ? "flex-row-reverse" : ""}`}>
                {cta("button")}
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
                </span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
