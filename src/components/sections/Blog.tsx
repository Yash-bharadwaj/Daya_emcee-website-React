import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { formatDate } from '@/lib/utils'

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

interface BlogProps {
  data: BlogData
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-interactive">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatDate(post.date)}
          </span>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription>
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-primary font-medium group-hover:underline">
          Read more • {post.readTime}
        </div>
      </CardContent>
    </Card>
  )
}

export const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <section id="blog" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, stories, and updates from the music industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
} 