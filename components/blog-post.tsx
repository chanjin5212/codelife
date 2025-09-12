import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, BookOpen, Code2 } from "lucide-react"
import type { JSX } from "react"

interface BlogPost {
  id: string
  title: string
  content: string
  category: string
  categoryName: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

interface BlogPostProps {
  post: BlogPost
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  const parseContent = (content: string) => {
    const parts = []
    let currentIndex = 0

    // 코드 블록을 찾기 위한 정규식
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
    let match

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // 코드 블록 이전의 텍스트 추가
      if (match.index > currentIndex) {
        const beforeText = content.slice(currentIndex, match.index).trim()
        if (beforeText) {
          parts.push({ type: "text", content: beforeText })
        }
      }

      // 코드 블록 추가
      const language = match[1] || "text"
      const code = match[2].trim()
      parts.push({ type: "code", language, content: code })

      currentIndex = match.index + match[0].length
    }

    // 마지막 남은 텍스트 추가
    if (currentIndex < content.length) {
      const remainingText = content.slice(currentIndex).trim()
      if (remainingText) {
        parts.push({ type: "text", content: remainingText })
      }
    }

    // 텍스트만 있는 경우
    if (parts.length === 0) {
      parts.push({ type: "text", content: content })
    }

    return parts.flatMap((part, index) => {
      if (part.type === "code") {
        return (
          <div key={index} className="my-6">
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-300 font-mono">{part.language}</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{part.content}</code>
              </pre>
            </div>
          </div>
        )
      }

      // 텍스트 파트 처리
      const textSections = part.content.split("\n\n")
      return textSections.map((section, sectionIndex) => {
        const key = `${index}-${sectionIndex}`

        // 헤딩 감지
        if (section.startsWith("#")) {
          const level = section.match(/^#+/)?.[0].length || 1
          const text = section.replace(/^#+\s*/, "")
          const HeadingTag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements

          return (
            <HeadingTag
              key={key}
              className={`font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4 ${
                level === 1 ? "text-2xl" : level === 2 ? "text-xl" : level === 3 ? "text-lg" : "text-base"
              }`}
            >
              {text}
            </HeadingTag>
          )
        }

        // 일반 텍스트
        return (
          <p key={key} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {section}
          </p>
        )
      })
    })
  }

  return (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
      <article className="max-w-4xl mx-auto">
        <header className="px-6 lg:px-8 pt-8 pb-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium"
            >
              <BookOpen className="w-3 h-3 mr-1" />
              {post.categoryName}
            </Badge>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 text-balance leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} 읽기</span>
            </div>
          </div>
        </header>

        <div className="px-6 lg:px-8 py-8">
          <div className="prose prose-slate max-w-none">{parseContent(post.content)}</div>
        </div>

        <footer className="px-6 lg:px-8 pb-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </footer>
      </article>
    </Card>
  )
}

export type { BlogPost }
