import { Code2 } from "lucide-react"

export default function SpringBeanLifecyclePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Spring Bean 생명주기와 BeanFactory vs ApplicationContext
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>Spring Core</span>
              <span>•</span>
              <span>2024-01-20</span>
              <span>•</span>
              <span>15분 읽기</span>
              <span>•</span>
              <span>김스프링</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Spring의 핵심인 Bean의 생명주기를 깊이 있게 이해하고, BeanFactory와 ApplicationContext의 차이점을 실무 관점에서 살펴봅시다.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Spring Bean 소개 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">Spring Bean이란?</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Spring Bean</strong>은 Spring IoC 컨테이너에 의해 관리되는 객체입니다. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  일반적인 Java 객체와 달리 Spring 컨테이너가 <span className="font-semibold text-blue-700">생성, 초기화, 소멸까지 전체 생명주기</span>를 관리합니다.
                </p>
              </div>
            </section>

            {/* Bean 생명주기 과정 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-3">Bean 생명주기 과정</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 font-medium">
                  Spring Bean의 생명주기는 다음과 같은 <strong>6단계</strong>로 이루어집니다:
                </p>
              </div>

              <div className="space-y-6">
                {/* 1. Bean 정의 로드 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Bean 정의 로드
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    컨테이너가 시작되면서 <code className="bg-gray-100 px-2 py-1 rounded text-sm">@Configuration</code>, 
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">@Component</code> 등의 어노테이션이나 XML 설정을 통해 Bean 정의를 로드합니다.
                  </p>
                  
                  <div className="my-6">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-300 font-mono">java</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Component
public class UserService {
    // Bean으로 등록될 클래스
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* 2. Bean 인스턴스화 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Bean 인스턴스화
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    컨테이너가 Bean 정의를 바탕으로 <strong>실제 객체 인스턴스</strong>를 생성합니다. 이때 <span className="font-semibold text-green-700">리플렉션</span>을 사용하여 생성자를 호출합니다.
                  </p>
                </div>

                {/* 3. 의존성 주입 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    의존성 주입
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    생성된 Bean에 필요한 <strong>의존성을 주입</strong>합니다. 
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">@Autowired</code>, 
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">@Inject</code> 등의 어노테이션을 통해 의존성이 주입됩니다.
                  </p>
                  
                  <div className="my-6">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-300 font-mono">java</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Service
public class OrderService {
    private final UserService userService;
    
    // 생성자 주입
    public OrderService(UserService userService) {
        this.userService = userService;
    }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* 4. Bean 초기화 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Bean 초기화
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Bean이 생성되고 의존성이 주입된 후 <strong>초기화 과정</strong>이 실행됩니다. 여러 가지 방법으로 초기화를 할 수 있습니다:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="pl-4 border-l-3 border-orange-300">
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">📌 @PostConstruct 어노테이션</h4>
                      <div className="my-4">
                        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                          <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                            <div className="flex items-center gap-2">
                              <Code2 className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-slate-300 font-mono">java</span>
                            </div>
                            <div className="flex gap-1">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <pre className="p-4 overflow-x-auto">
                            <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Component
public class DatabaseService {
    
    @PostConstruct
    public void init() {
        System.out.println("DatabaseService 초기화 완료");
        // 데이터베이스 연결 설정 등
    }
}`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Bean 사용 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Bean 사용
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    초기화가 완료된 Bean은 <strong>애플리케이션에서 사용할 수 있는 상태</strong>가 됩니다.
                  </p>
                </div>

                {/* 6. Bean 소멸 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                    Bean 소멸
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    애플리케이션 컨텍스트가 종료될 때 Bean이 <strong>소멸</strong>됩니다. 소멸 과정도 여러 방법으로 제어할 수 있습니다:
                  </p>
                  
                  <div className="pl-4 border-l-3 border-red-300">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">🗑️ @PreDestroy 어노테이션</h4>
                    <div className="my-4">
                      <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <div className="flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-300 font-mono">java</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Component
public class DatabaseService {
    
    @PreDestroy
    public void cleanup() {
        System.out.println("DatabaseService 정리 작업");
        // 데이터베이스 연결 해제 등
    }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BeanFactory vs ApplicationContext */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-3">BeanFactory vs ApplicationContext</h2>
              <div className="bg-purple-50 p-4 rounded-lg mb-8">
                <p className="text-gray-700 font-medium">
                  Spring에는 <strong>두 가지 주요 컨테이너</strong>가 있습니다: BeanFactory와 ApplicationContext
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    🏭 BeanFactory
                  </h3>
                  <p className="text-gray-700 mb-4">가장 기본적인 IoC 컨테이너입니다:</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">L</span>
                      <div>
                        <strong className="text-blue-700">지연 로딩(Lazy Loading):</strong>
                        <br /><span className="text-gray-600">Bean이 실제로 요청될 때만 생성</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">M</span>
                      <div>
                        <strong className="text-blue-700">최소한의 기능:</strong>
                        <br /><span className="text-gray-600">Bean 생성과 의존성 주입만 제공</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">💾</span>
                      <div>
                        <strong className="text-blue-700">메모리 효율성:</strong>
                        <br /><span className="text-gray-600">필요한 Bean만 메모리에 로드</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    🚀 ApplicationContext
                  </h3>
                  <p className="text-gray-700 mb-4">BeanFactory를 확장한 더 완전한 컨테이너입니다:</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">⚡</span>
                      <div>
                        <strong className="text-green-700">즉시 로딩:</strong>
                        <br /><span className="text-gray-600">컨테이너 시작시 모든 싱글톤 Bean을 미리 생성</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">🎯</span>
                      <div>
                        <strong className="text-green-700">풍부한 기능:</strong>
                        <br /><span className="text-gray-600">국제화, 이벤트 발행, AOP 등 다양한 기능 제공</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">📝</span>
                      <div>
                        <strong className="text-green-700">편의성:</strong>
                        <br /><span className="text-gray-600">어노테이션 기반 설정 지원</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 비교 테이블 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">주요 차이점 비교</h3>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">특징</th>
                      <th className="border border-gray-300 p-3 text-left">BeanFactory</th>
                      <th className="border border-gray-300 p-3 text-left">ApplicationContext</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Bean 생성 시점</td>
                      <td className="border border-gray-300 p-3">지연 로딩 (요청시)</td>
                      <td className="border border-gray-300 p-3">즉시 로딩 (시작시)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">메모리 사용량</td>
                      <td className="border border-gray-300 p-3">적음</td>
                      <td className="border border-gray-300 p-3">많음</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">기능</td>
                      <td className="border border-gray-300 p-3">기본 IoC/DI</td>
                      <td className="border border-gray-300 p-3">IoC/DI + 추가 기능들</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">어노테이션 지원</td>
                      <td className="border border-gray-300 p-3">제한적</td>
                      <td className="border border-gray-300 p-3">완전 지원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 실무 활용 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-3">실무에서의 활용</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">💡 ApplicationContext가 권장되는 이유</h3>
                <p className="text-gray-700 mb-4">현대 Spring 애플리케이션에서는 <strong>ApplicationContext</strong>를 사용하는 것이 일반적입니다:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">⚙️</span>
                      <strong className="text-indigo-700">설정의 편의성</strong>
                    </div>
                    <p className="text-gray-600 text-sm">@ComponentScan, @Configuration 등 현대적 설정 방식 지원</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🔄</span>
                      <strong className="text-indigo-700">AOP 지원</strong>
                    </div>
                    <p className="text-gray-600 text-sm">@Transactional, @Cacheable 등 AOP 기능 완전 지원</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">📡</span>
                      <strong className="text-indigo-700">이벤트 처리</strong>
                    </div>
                    <p className="text-gray-600 text-sm">ApplicationEvent를 통한 느슨한 결합 구현</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🌐</span>
                      <strong className="text-indigo-700">국제화</strong>
                    </div>
                    <p className="text-gray-600 text-sm">MessageSource를 통한 다국어 지원</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 정리 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-3">📝 정리</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      🎯 핵심 포인트
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">▶</span>
                        Spring Bean의 생명주기 이해는 Spring 개발의 필수
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">▶</span>
                        리소스 관리와 초기화 로직의 적절한 처리
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">▶</span>
                        안정적이고 효율적인 애플리케이션 구축 가능
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      🛠️ 실무 권장사항
                    </h3>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <strong>ApplicationContext</strong> 사용
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <strong>@PostConstruct</strong>로 초기화
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <strong>@PreDestroy</strong>로 정리 작업
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <strong>생성자 주입</strong> 방식 활용
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}