"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronRight } from "lucide-react"

interface Category {
  id: string
  name: string
  posts: { id: string; title: string; date: string }[]
}

const categories: Category[] = [
  {
    id: "spring-core",
    name: "Spring Core",
    posts: [
      { id: "3", title: "순환 참조 문제와 해결책, @Configuration/@ComponentScan 완전 분석", date: "2024-01-22" },
      { id: "2", title: "Spring IoC/DI의 3가지 방식 완전 정복", date: "2024-01-21" },
      { id: "1", title: "Spring Bean 생명주기와 BeanFactory vs ApplicationContext", date: "2024-01-20" },
    ],
  },
]

interface BlogSidebarProps {
  selectedCategory: string | null
  onCategorySelect: (categoryId: string | null) => void
  onPostSelect: (postId: string) => void
}

export function BlogSidebar({ selectedCategory, onCategorySelect, onPostSelect }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <aside className="w-80 bg-sidebar border-r border-sidebar-border p-4 lg:p-6 space-y-4 lg:space-y-6 h-screen overflow-y-auto">
      {/* Search */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sidebar-foreground text-sm lg:text-base">검색</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="검색어를 입력하세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-input border-border text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sidebar-foreground text-sm lg:text-base">카테고리</h3>
        <div className="space-y-1">
          <button
            onClick={() => onCategorySelect(null)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              selectedCategory === null
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            }`}
          >
            전체 글
          </button>

          {categories.map((category) => (
            <div key={category.id} className="space-y-1">
              <div className="flex items-center">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-sidebar-foreground hover:bg-sidebar-accent/50"
                >
                  {expandedCategories.has(category.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span>{category.name}</span>
                  <span className="text-xs text-muted-foreground ml-auto">({category.posts.length})</span>
                </button>
              </div>

              {expandedCategories.has(category.id) && (
                <div className="ml-6 space-y-1">
                  {category.posts.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => onPostSelect(post.id)}
                      className="w-full text-left px-3 py-2 rounded-md text-xs transition-colors text-muted-foreground hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
                    >
                      <div className="space-y-1">
                        <div className="font-medium leading-tight">{post.title}</div>
                        <div className="text-xs opacity-70">{post.date}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
