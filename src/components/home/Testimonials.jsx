import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "They created exactly the website I wanted for my jewelry store. My online sales have increased by 40% since launching the new site!",
      author: "Sarah Johnson",
      role: "Owner, Elegant Gems Jewelry",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=38",
    },
    {
      quote:
        "The website they built for my clothing boutique perfectly captures our brand. The mobile shopping experience is fantastic and our customers love it.",
      author: "Michael Chen",
      role: "Founder, Urban Style Clothing",
      rating: 4, 
      image: "https://i.pravatar.cc/100?img=52",
    },
    {
      quote:
        "The free maintenance has been a lifesaver. I can focus on running my shoe store while they keep my website updated and running smoothly.",
      author: "Lisa Patel",
      role: "Owner, Step Forward Footwear",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=49",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Local Businesses</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Don't just take our word for it. See what our clients have to say about their websites.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="size-10 text-primary/20" />
                  </div>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          className={`size-5 ${j < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted stroke-muted fill-none"}`}
                        />
                      ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-lg mb-8 flex-grow italic">{testimonial.quote}</p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                    <div className="relative size-12 overflow-hidden rounded-full bg-muted">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
