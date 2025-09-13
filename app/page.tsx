"use client"

import { useState, useEffect } from "react"
import { BlogSidebar } from "@/components/blog-sidebar"
import BlogPostComponent from "@/components/blog-post"
import SpringBeanLifecyclePage from "@/posts/spring-bean-lifecycle"
import SpringIocDiPage from "@/posts/spring-ioc-di"
import SpringCircularReferencePage from "@/posts/spring-circular-reference"
import { Menu } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "Spring Bean 생명주기와 BeanFactory vs ApplicationContext",
    excerpt: "Spring의 핵심인 Bean의 생명주기를 깊이 있게 이해하고, BeanFactory와 ApplicationContext의 차이점을 실무 관점에서 살펴봅시다.",
    content: "",
    category: "spring-core",
    categoryName: "Spring Core",
    author: "김스프링",
    date: "2024-01-20",
    readTime: "15분",
    tags: ["Spring", "Bean", "BeanFactory", "ApplicationContext", "생명주기"],
    component: SpringBeanLifecyclePage,
  },
  {
    id: "2",
    title: "Spring IoC/DI의 3가지 방식 완전 정복",
    excerpt: "Spring Framework의 핵심인 IoC와 DI를 완전히 이해하고, 3가지 의존성 주입 방식의 차이점과 실무 적용법을 살펴봅시다.",
    content: "",
    category: "spring-core",
    categoryName: "Spring Core",
    author: "김스프링",
    date: "2024-01-21",
    readTime: "12분",
    tags: ["Spring", "IoC", "DI", "의존성주입", "생성자주입"],
    component: SpringIocDiPage,
  },
  {
    id: "3",
    title: "순환 참조 문제와 해결책, @Configuration/@ComponentScan 완전 분석",
    excerpt: "Spring의 순환 참조 문제 해결방법과 @Configuration, @ComponentScan의 동작 원리, Profile과 Property 관리까지 완전 정복합니다.",
    content: "",
    category: "spring-core",
    categoryName: "Spring Core",
    author: "김스프링",
    date: "2024-01-22",
    readTime: "18분",
    tags: ["Spring", "순환참조", "Configuration", "ComponentScan", "Profile", "Property"],
    component: SpringCircularReferencePage,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const latestPost = blogPosts[0] // 첫 번째 글이 가장 최신 글
  const currentPost = selectedPost ? blogPosts.find((post) => post.id === selectedPost) : latestPost

  // 글 선택 시 맨 위로 스크롤
  useEffect(() => {
    if (selectedPost) {
      window.scrollTo(0, 0)
    }
  }, [selectedPost])

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <div className="hidden lg:block lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <BlogSidebar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            onPostSelect={setSelectedPost}
          />
        </div>

        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)} />
            <div className="fixed left-0 top-0 h-full w-80 max-w-[80vw]">
              <BlogSidebar
                selectedCategory={selectedCategory}
                onCategorySelect={(category) => {
                  setSelectedCategory(category)
                  setIsMobileSidebarOpen(false)
                }}
                onPostSelect={(postId) => {
                  setSelectedPost(postId)
                  setIsMobileSidebarOpen(false)
                }}
              />
            </div>
          </div>
        )}

        <main className="flex-1 min-w-0 p-4 lg:p-8">
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              <Menu className="w-4 h-4" />
              메뉴
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <header className="mb-6 lg:mb-8">
              <h1 className="text-2xl lg:text-4xl font-bold text-foreground mb-2 text-balance">내 블로그</h1>
              <p className="text-muted-foreground text-base lg:text-lg">기술과 개발 이야기</p>
            </header>

            <div className="space-y-4 lg:space-y-6">
              {selectedPost && (
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  ← 최신 글로 돌아가기
                </button>
              )}
              {currentPost && (
                currentPost.component ? <currentPost.component /> : <BlogPostComponent post={currentPost} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
