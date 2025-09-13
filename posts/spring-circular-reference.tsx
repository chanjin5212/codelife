"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, AlertTriangle, CheckCircle, Code2, Lightbulb, Target, BookOpen } from "lucide-react"

export default function SpringCircularReferencePage() {
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

          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 text-balance leading-tight mb-6">
            순환 참조 문제와 해결책, @Configuration/@ComponentScan 완전 분석
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span className="font-medium">김스프링</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>2024-01-22</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>18분 읽기</span>
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
                  Spring Framework에서 발생할 수 있는 순환 참조 문제의 원인과 해결방법을 이해하고, 
                  @Configuration과 @ComponentScan 어노테이션의 동작 원리와 Profile/Property 관리 방법을 완전히 익힌다.
                </p>
              </div>
            </div>
          </div>

          {/* 순환 참조 문제 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">1. 순환 참조 문제 (Circular Reference)</h2>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800 mb-6">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">순환 참조란?</h3>
              <p className="text-red-800 dark:text-red-200">
                두 개 이상의 Bean이 서로를 의존하여 무한 루프가 발생하는 문제입니다. A가 B를 참조하고, B가 A를 참조하는 상황에서 발생합니다.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🔴 문제 상황 예제</h3>
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
public class UserService {
    
    @Autowired
    private OrderService orderService; // OrderService 참조
    
    public void processUser() {
        orderService.createOrder();
    }
}

@Service
public class OrderService {
    
    @Autowired
    private UserService userService; // UserService 참조 (순환!)
    
    public void createOrder() {
        userService.processUser();
    }
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">실행 시 발생하는 오류:</p>
                    <code className="text-sm text-yellow-900 dark:text-yellow-100 mt-2 block">
                      BeanCurrentlyInCreationException: Error creating bean with name 'userService'
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 순환 참조 해결책 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">2. 순환 참조 해결 방법</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ 해결책 1: @Lazy 사용</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  지연 초기화를 통해 순환 참조 문제 해결
                </p>
              </Card>
              <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">✅ 해결책 2: Setter 주입</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  생성자 주입 대신 Setter 주입으로 변경
                </p>
              </Card>
              <Card className="p-6 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">✅ 해결책 3: 설계 개선</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  중간 인터페이스나 이벤트 기반 설계
                </p>
              </Card>
              <Card className="p-6 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">✅ 해결책 4: ApplicationContext</h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  ApplicationContext에서 직접 Bean 조회
                </p>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🟢 해결책 1: @Lazy 어노테이션</h3>
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
public class UserService {
    
    @Autowired
    @Lazy // 지연 초기화
    private OrderService orderService;
    
    public void processUser() {
        orderService.createOrder();
    }
}

@Service
public class OrderService {
    
    @Autowired
    private UserService userService;
    
    public void createOrder() {
        userService.processUser();
    }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🟢 해결책 2: 설계 개선 (권장)</h3>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`// 중간 서비스 도입으로 순환 참조 해결
@Service
public class UserService {
    
    @Autowired
    private NotificationService notificationService;
    
    public void processUser() {
        // 비즈니스 로직 수행
        notificationService.sendNotification("User processed");
    }
}

@Service
public class OrderService {
    
    @Autowired
    private NotificationService notificationService;
    
    public void createOrder() {
        // 주문 생성 로직
        notificationService.sendNotification("Order created");
    }
}

@Service
public class NotificationService {
    public void sendNotification(String message) {
        // 알림 발송 로직
    }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* @Configuration */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">3. @Configuration 어노테이션</h2>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">@Configuration이란?</h3>
              <p className="text-yellow-800 dark:text-yellow-200">
                Java 기반 설정을 위한 어노테이션으로, XML 설정을 대체하여 Bean을 정의하고 구성할 수 있습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">📋 기본 사용법</h3>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Configuration
public class AppConfig {
    
    @Bean
    public DataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("user");
        dataSource.setPassword("password");
        return dataSource;
    }
    
    @Bean
    public UserRepository userRepository(DataSource dataSource) {
        return new JdbcUserRepository(dataSource);
    }
    
    @Bean
    @Primary // 같은 타입의 Bean이 여러 개일 때 우선순위 지정
    public UserService userService(UserRepository userRepository) {
        return new UserServiceImpl(userRepository);
    }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">⚙️ @Configuration 내부 동작 원리</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-4 border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">🔧 CGLIB 프록시</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      @Configuration 클래스는 CGLIB를 사용해 프록시로 생성되어 @Bean 메서드 호출 시 싱글톤을 보장합니다.
                    </p>
                  </Card>
                  <Card className="p-4 border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">📦 Bean 관리</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      @Bean 메서드가 여러 번 호출되어도 Spring Container는 동일한 인스턴스를 반환합니다.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* @ComponentScan */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">4. @ComponentScan 어노테이션</h2>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">@ComponentScan이란?</h3>
              <p className="text-blue-800 dark:text-blue-200">
                지정된 패키지에서 @Component, @Service, @Repository, @Controller 등의 어노테이션이 붙은 클래스들을 자동으로 스캔하여 Bean으로 등록합니다.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">📂 기본 설정</h3>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Configuration
@ComponentScan(basePackages = "com.example.myapp")
public class AppConfig {
    // 추가적인 Bean 설정
}

// 또는 여러 패키지 지정
@Configuration
@ComponentScan(basePackages = {
    "com.example.service", 
    "com.example.repository",
    "com.example.controller"
})
public class AppConfig {
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🎯 고급 설정 옵션</h3>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Configuration
@ComponentScan(
    basePackages = "com.example",
    includeFilters = @ComponentScan.Filter(
        type = FilterType.ANNOTATION, 
        classes = MyCustomAnnotation.class
    ),
    excludeFilters = @ComponentScan.Filter(
        type = FilterType.REGEX, 
        pattern = "com.example.exclude.*"
    ),
    useDefaultFilters = true,
    scopeResolver = AnnotationScopeMetadataResolver.class
)
public class AppConfig {
    // Configuration 내용
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">@Component</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">일반적인 컴포넌트</p>
                </Card>
                <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">@Service</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">비즈니스 로직 처리</p>
                </Card>
                <Card className="p-4 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">@Repository</h4>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">데이터 접근 계층</p>
                </Card>
                <Card className="p-4 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">@Controller</h4>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">웹 요청 처리</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Profile과 Property 관리 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">5. Profile과 Property 관리</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🏷️ Profile 기반 설정</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  개발, 테스트, 운영 환경별로 다른 설정을 적용할 수 있습니다.
                </p>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Configuration
@Profile("development")
public class DevConfig {
    
    @Bean
    public DataSource dataSource() {
        // 개발용 H2 데이터베이스 설정
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }
}

@Configuration
@Profile("production")
public class ProdConfig {
    
    @Bean
    public DataSource dataSource() {
        // 운영용 MySQL 데이터베이스 설정
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:mysql://prod-server:3306/myapp");
        return ds;
    }
}

// 여러 Profile 지정
@Configuration
@Profile({"test", "integration"})
public class TestConfig {
    // 테스트용 설정
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">📄 Property 관리</h3>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Configuration
@PropertySource("classpath:application.properties")
public class AppConfig {
    
    @Value("$` + `{database.url}")
    private String databaseUrl;
    
    @Value("$` + `{database.username:defaultUser}") // 기본값 설정
    private String databaseUsername;
    
    @Bean
    public DataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(databaseUrl);
        dataSource.setUsername(databaseUsername);
        return dataSource;
    }
}

// Environment를 통한 Property 접근
@Configuration
public class EnvironmentConfig {
    
    @Autowired
    private Environment environment;
    
    @Bean
    public MyService myService() {
        String apiKey = environment.getProperty("api.key");
        int timeout = environment.getProperty("api.timeout", Integer.class, 5000);
        return new MyService(apiKey, timeout);
    }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🔧 Profile 활성화 방법</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4 border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">JVM 옵션</h4>
                    <code className="text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                      -Dspring.profiles.active=production
                    </code>
                  </Card>
                  <Card className="p-4 border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">환경 변수</h4>
                    <code className="text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                      SPRING_PROFILES_ACTIVE=production
                    </code>
                  </Card>
                  <Card className="p-4 border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">application.properties</h4>
                    <code className="text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                      spring.profiles.active=production
                    </code>
                  </Card>
                  <Card className="p-4 border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">프로그래밍 방식</h4>
                    <code className="text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                      System.setProperty("spring.profiles.active", "dev")
                    </code>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* 실전 예제 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">6. 실전 종합 예제</h2>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-3">완전한 Spring 설정 예제</h3>
              <p className="text-emerald-800 dark:text-emerald-200">
                실무에서 사용할 수 있는 완전한 Spring Configuration 예제를 살펴봅시다.
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
                <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Configuration
@EnableTransactionManagement
@ComponentScan(basePackages = {
    "com.example.service",
    "com.example.repository"
})
@PropertySource({
    "classpath:application.properties",
    "classpath:application-$` + `{spring.profiles.active}.properties"
})
public class RootConfig {
    
    @Autowired
    private Environment env;
    
    @Bean
    @Profile("!test")
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(env.getProperty("database.url"));
        config.setUsername(env.getProperty("database.username"));
        config.setPassword(env.getProperty("database.password"));
        config.setMaximumPoolSize(env.getProperty("database.pool.size", Integer.class, 20));
        return new HikariDataSource(config);
    }
    
    @Bean
    @Profile("test")
    public DataSource testDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .addScript("classpath:schema.sql")
            .addScript("classpath:test-data.sql")
            .build();
    }
    
    @Bean
    public PlatformTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
    
    @Bean
    @ConditionalOnProperty(name = "cache.enabled", havingValue = "true")
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("users", "orders");
    }
}

// 메인 애플리케이션 설정
@SpringBootApplication
@Import(RootConfig.class)
public class Application {
    
    public static void main(String[] args) {
        ConfigurableApplicationContext context = 
            SpringApplication.run(Application.class, args);
        
        // Profile 확인
        String[] activeProfiles = context.getEnvironment().getActiveProfiles();
        System.out.println("Active Profiles: " + Arrays.toString(activeProfiles));
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
                    <p>• 순환 참조는 @Lazy, Setter 주입, 설계 개선으로 해결 가능</p>
                    <p>• @Configuration은 CGLIB 프록시로 싱글톤 보장</p>
                    <p>• @ComponentScan으로 자동 Bean 검색 및 등록</p>
                    <p>• Profile을 통해 환경별 설정 분리 관리</p>
                    <p>• @Value, Environment로 외부 Properties 주입</p>
                    <p>• 실무에서는 설계 개선을 통한 순환 참조 방지가 최선</p>
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
              #순환참조
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #Configuration
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #ComponentScan
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #Profile
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #Property
            </Badge>
          </div>
        </footer>
      </article>
    </Card>
  )
}