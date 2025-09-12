"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  categoryName: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

interface BlogPostListProps {
  posts: BlogPost[]
  onPostSelect: (postId: string) => void
}

function BlogPostList({ posts, onPostSelect }: BlogPostListProps) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="p-6 bg-card border-border hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onPostSelect(post.id)}
        >
          <article className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                {post.categoryName}
              </Badge>
            </div>

            <h2 className="text-xl font-semibold text-card-foreground text-balance leading-tight hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime} 읽기</span>
              </div>

              <div className="flex items-center gap-1 text-primary text-sm font-medium">
                <span>더 읽기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </article>
        </Card>
      ))}
    </div>
  )
}

export { BlogPostList as BlogPostListComponent }
