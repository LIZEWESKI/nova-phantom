import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-card-foreground overflow-hidden">
      <div className="container px-4 md:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl text-primary-foreground md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
            Join thousands of satisfied customers who have streamlined their
            processes and boosted productivity with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#contact">
              <Button
                size="lg"
                variant="secondary"
                className="relative rounded-full h-12 px-8 text-base"
              >
                <span className="relative z-20 flex items-center transition-transform duration-300 group-hover:scale-110">
                  Join us!
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
                </span>
              </Button>
            </a>
          </div>
          <p className="text-sm text-primary-foreground/80 mt-4">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
