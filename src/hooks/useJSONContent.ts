import { useState, useEffect } from 'react'

interface HeroData {
  title: string
  subtitle: string
  booking: string
  email: string
  instagram: string
  youtube: string
}

interface Achievement {
  number: number
  label: string
  suffix: string
}

interface StatsData {
  title: string
  subtitle: string
  achievements: Achievement[]
}

interface ServiceData {
  id: string
  title: string
  description: string
}

interface ServicesData {
  title: string
  subtitle: string
  services: ServiceData[]
}

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

interface TestimonialItem {
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
  testimonials: TestimonialItem[]
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
}

interface BlogData {
  title: string
  subtitle: string
  posts: BlogPost[]
}

interface SocialData {
  platform: string
  url: string
  icon: string
}

interface ContactData {
  title: string
  subtitle: string
  email: string
  phone: string
  address: string
  social: SocialData[]
}

export interface ContentData {
  hero: HeroData
  stats: StatsData
  services: ServicesData
  portfolio: PortfolioData
  testimonials: TestimonialsData
  blog: BlogData
  contact: ContactData
}

export const useJSONContent = () => {
  const [content, setContent] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/data/content.json')
        if (!response.ok) {
          throw new Error('Failed to fetch content')
        }
        const data = await response.json()
        setContent(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return { content, loading, error }
} 