import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, Code2, Target, BookOpen, CheckCircle } from "lucide-react"

export default function SpringBeanLifecyclePage() {
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
              Spring Core
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6 break-words">
            Spring Bean 생명주기와 BeanFactory vs ApplicationContext
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span className="font-medium">김찬진</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>2025-09-13</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>15분 읽기</span>
            </div>
          </div>
        </header>

        <div className="px-6 lg:px-8 py-8 space-y-8">
          {/* 인트로 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">학습 목표</h2>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  Spring Bean의 생명주기 과정을 단계별로 이해하고, BeanFactory와 ApplicationContext의 차이점을 실무 관점에서 완전히 익힌다.
                </p>
              </div>
            </div>
          </div>

          {/* Spring Bean 소개 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">1. Spring Bean이란?</h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                <strong>Spring Bean</strong>은 Spring IoC 컨테이너에 의해 관리되는 객체입니다. 
                일반적인 Java 객체와 달리 Spring 컨테이너가 <span className="font-semibold">생성, 초기화, 소멸까지 전체 생명주기</span>를 관리합니다.
              </p>
            </div>

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
    
    @Autowired
    private UserRepository userRepository;
    
    @PostConstruct
    public void init() {
        System.out.println("UserService 초기화 완료");
    }
    
    @PreDestroy
    public void destroy() {
        System.out.println("UserService 소멸 중");
    }
}`}</code>
              </pre>
            </div>
          </section>

          {/* Bean 생명주기 과정 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">2. Bean 생명주기 과정</h2>
            
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
              <p className="text-green-800 dark:text-green-200 font-medium">
                Spring Bean의 생명주기는 다음과 같은 <strong>6단계</strong>로 이루어집니다:
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Bean 정의 로드</h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    @Component, @Configuration 등의 어노테이션을 스캔하여 Bean 정의 정보를 로드
                  </p>
                </Card>
                
                <Card className="p-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">2</div>
                  <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Bean 인스턴스 생성</h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    리플렉션을 통해 Bean의 인스턴스를 생성 (생성자 호출)
                  </p>
                </Card>
                
                <Card className="p-6 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
                  <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">의존성 주입</h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    @Autowired, @Resource 등을 통해 필요한 의존성을 주입
                  </p>
                </Card>
                
                <Card className="p-6 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">4</div>
                  <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Bean 이름 설정</h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">
                    BeanNameAware 인터페이스 구현 시 setBeanName() 메서드 호출
                  </p>
                </Card>
                
                <Card className="p-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">5</div>
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">초기화</h3>
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    @PostConstruct, InitializingBean.afterPropertiesSet() 호출
                  </p>
                </Card>
                
                <Card className="p-6 bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">6</div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">사용 및 소멸</h3>
                  <p className="text-gray-800 dark:text-gray-200 text-sm">
                    Bean 사용 후 컨테이너 종료 시 @PreDestroy, destroy() 호출
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* BeanFactory vs ApplicationContext */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">3. BeanFactory vs ApplicationContext</h2>
            
            <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">핵심 차이점</h3>
              <p className="text-yellow-800 dark:text-yellow-200">
                BeanFactory는 기본적인 IoC 컨테이너 기능만 제공하고, ApplicationContext는 엔터프라이즈 애플리케이션에 필요한 추가 기능들을 모두 포함합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🔧 BeanFactory</h3>
                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4">특징</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• Lazy Loading (지연 로딩)</li>
                    <li>• 기본적인 DI 기능만 제공</li>
                    <li>• 메모리 사용량 적음</li>
                    <li>• 단순한 IoC 컨테이너</li>
                  </ul>
                </Card>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🚀 ApplicationContext</h3>
                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4">특징</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• Eager Loading (즉시 로딩)</li>
                    <li>• 국제화 (i18n) 지원</li>
                    <li>• 이벤트 발행/구독</li>
                    <li>• AOP 통합</li>
                    <li>• 웹 애플리케이션 컨텍스트</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">📊 비교 표</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">구분</th>
                      <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">BeanFactory</th>
                      <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">ApplicationContext</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Bean 로딩</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Lazy Loading</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Eager Loading</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-850">
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">국제화</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">❌ 미지원</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">✅ 지원</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">이벤트 발행</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">❌ 미지원</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">✅ 지원</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-850">
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">AOP</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">❌ 수동 설정</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">✅ 자동 지원</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">사용 권장</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">제한적 환경</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">엔터프라이즈</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 실무 예제 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">4. 실무 활용 예제</h2>
            
            <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-3">완전한 Bean 생명주기 예제</h3>
              <p className="text-emerald-800 dark:text-emerald-200">
                실제 프로젝트에서 Bean 생명주기를 활용한 데이터베이스 연결 관리 예제입니다.
              </p>
            </div>

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
public class DatabaseConnectionManager implements BeanNameAware, InitializingBean, DisposableBean {
    
    private DataSource dataSource;
    private String beanName;
    
    @Autowired
    public DatabaseConnectionManager(DataSource dataSource) {
        System.out.println("1. 생성자 호출 - 의존성 주입");
        this.dataSource = dataSource;
    }
    
    @Override
    public void setBeanName(String name) {
        System.out.println("2. setBeanName 호출: " + name);
        this.beanName = name;
    }
    
    @PostConstruct
    public void postConstruct() {
        System.out.println("3. @PostConstruct 호출");
        // 초기화 로직 (캐시 준비, 설정 검증 등)
    }
    
    @Override
    public void afterPropertiesSet() {
        System.out.println("4. afterPropertiesSet 호출");
        // 추가 초기화 로직
        validateConfiguration();
    }
    
    @PreDestroy
    public void preDestroy() {
        System.out.println("5. @PreDestroy 호출");
        // 리소스 정리 (캐시 클리어, 임시 파일 삭제 등)
    }
    
    @Override
    public void destroy() {
        System.out.println("6. destroy 호출");
        // 최종 정리 작업
    }
    
    private void validateConfiguration() {
        if (dataSource == null) {
            throw new IllegalStateException("DataSource가 설정되지 않았습니다.");
        }
    }
}`}</code>
              </pre>
            </div>
          </section>

          {/* 요약 */}
          <section>
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">핵심 정리</h2>
                  <div className="space-y-2 text-slate-700 dark:text-slate-300">
                    <p>• Spring Bean은 IoC 컨테이너가 생명주기를 완전 관리</p>
                    <p>• 생명주기: 정의로드 → 생성 → 의존성주입 → 이름설정 → 초기화 → 사용/소멸</p>
                    <p>• ApplicationContext는 BeanFactory보다 풍부한 엔터프라이즈 기능 제공</p>
                    <p>• @PostConstruct/@PreDestroy로 초기화/소멸 로직 구현</p>
                    <p>• 실무에서는 ApplicationContext 사용 권장</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="px-6 lg:px-8 pb-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #Spring
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #Bean
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #BeanFactory
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #ApplicationContext
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #생명주기
            </Badge>
          </div>
        </footer>
      </article>
    </Card>
  )
}