import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
}

interface PortfolioData {
  title: string
  subtitle: string
  items: PortfolioItem[]
}

interface PortfolioProps {
  data: PortfolioData
}

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 cursor-interactive overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
            {item.title.charAt(0)}
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {item.title}
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
        <div className="text-xs text-muted-foreground mt-2">
          {item.category}
        </div>
      </CardHeader>
    </Card>
  )
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
} 