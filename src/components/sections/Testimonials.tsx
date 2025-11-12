import React from 'react'
import { AnimatedTestimonials } from '../ui/animated-testimonials'

interface TestimonialData {
  id: string
  name: string
  title: string
  content: string
  avatar: string
  rating: number
}

interface TestimonialsData {
  title: string
  subtitle: string
  testimonials: TestimonialData[]
}

interface TestimonialsProps {
  data: TestimonialsData
}

export const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  // Transform the data to match AnimatedTestimonials interface
  const transformedTestimonials = data.testimonials.map((testimonial) => ({
    quote: testimonial.content,
    name: testimonial.name,
    designation: testimonial.title,
    src: testimonial.avatar
  }))

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <AnimatedTestimonials 
          testimonials={transformedTestimonials}
          autoplay={true}
          autoplayDelay={6000}
        />
      </div>
    </section>
  )
} 