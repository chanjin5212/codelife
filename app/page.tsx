"use client"

import { useState } from "react"
import { BlogSidebar } from "@/components/blog-sidebar"
import BlogPostComponent from "@/components/blog-post"
import SpringBeanLifecyclePage from "@/posts/spring-bean-lifecycle"
import SpringIocDiPage from "@/posts/spring-ioc-di"
import SpringCircularReferencePage from "@/posts/spring-circular-reference"
import { Menu } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "React useState Hook 완벽 가이드",
    excerpt:
      "React의 가장 기본적이면서도 중요한 Hook인 useState를 깊이 있게 알아보고, 실제 예제를 통해 활용법을 익혀봅시다.",
    content: `React의 useState Hook은 함수형 컴포넌트에서 상태를 관리할 수 있게 해주는 가장 기본적인 Hook입니다. 클래스 컴포넌트의 this.state와 this.setState를 대체하는 역할을 합니다.

# useState 기본 사용법

useState는 배열을 반환하며, 첫 번째 요소는 현재 상태값, 두 번째 요소는 상태를 업데이트하는 함수입니다.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
      <button onClick={() => setCount(count - 1)}>
        감소
      </button>
    </div>
  );
}
\`\`\`

# 객체 상태 관리

useState로 객체를 관리할 때는 주의해야 할 점이 있습니다. React는 상태 변경을 감지하기 위해 참조를 비교하므로, 객체를 직접 수정하면 안 됩니다.

\`\`\`javascript
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateName = (newName) => {
    // 잘못된 방법 - 직접 수정
    // user.name = newName;
    // setUser(user);

    // 올바른 방법 - 새 객체 생성
    setUser(prevUser => ({
      ...prevUser,
      name: newName
    }));
  };

  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <p>안녕하세요, {user.name}님!</p>
    </div>
  );
}
\`\`\`

# 함수형 업데이트

상태 업데이트가 이전 상태에 의존할 때는 함수형 업데이트를 사용하는 것이 좋습니다. 이는 특히 비동기 상황에서 중요합니다.

\`\`\`javascript
function AsyncCounter() {
  const [count, setCount] = useState(0);

  const incrementAsync = () => {
    setTimeout(() => {
      // 함수형 업데이트 사용
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={incrementAsync}>
        1초 후 증가
      </button>
    </div>
  );
}
\`\`\`

useState는 React 개발의 핵심이므로 이러한 패턴들을 잘 익혀두시기 바랍니다. 다음 글에서는 useEffect Hook에 대해 알아보겠습니다.`,
    category: "tech",
    categoryName: "기술",
    author: "김개발",
    date: "2024-01-16",
    readTime: "7분",
    tags: ["React", "useState", "Hook", "JavaScript", "프론트엔드"],
  },
  {
    id: "2",
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
    id: "3",
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
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const latestPost = blogPosts[0] // 첫 번째 글이 가장 최신 글
  const currentPost = selectedPost ? blogPosts.find((post) => post.id === selectedPost) : latestPost

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
