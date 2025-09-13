import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, Code2, Target, BookOpen, CheckCircle, AlertTriangle } from "lucide-react"

export default function SpringIocDiPage() {
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
            Spring IoC/DI의 3가지 방식 완전 정복
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
              <span>12분 읽기</span>
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
                  Spring Framework의 핵심인 IoC와 DI 개념을 완전히 이해하고, 3가지 의존성 주입 방식의 차이점과 실무 적용 방법을 익힌다.
                </p>
              </div>
            </div>
          </div>

          {/* IoC란 무엇인가 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">1. IoC (Inversion of Control)란?</h2>
            <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border border-purple-200 dark:border-purple-800 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">제어의 역전</h3>
              <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                IoC는 객체의 생성과 관리 제어권이 개발자에서 Spring Container로 넘어가는 것을 의미합니다. 
                전통적인 방식과 달리 객체는 자신의 의존성을 직접 생성하지 않고, 외부(컨테이너)에서 주입받습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🔴 기존 방식 (강한 결합)</h3>
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
                    <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`public class UserService {
    
    private UserRepository userRepository;
    
    public UserService() {
        // 직접 생성 - 강한 결합!
        this.userRepository = new JdbcUserRepository();
    }
    
    public void saveUser(User user) {
        userRepository.save(user);
    }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🟢 Spring IoC 방식 (느슨한 결합)</h3>
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
    
    private final UserRepository userRepository;
    
    // Spring이 의존성을 주입해줌!
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public void saveUser(User user) {
        userRepository.save(user);
    }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* DI 방식들 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">2. 의존성 주입(DI) 3가지 방식</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ 생성자 주입</h3>
                <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                  Spring 권장 방식
                </p>
                <div className="text-xs text-green-700 dark:text-green-300">
                  • 불변성 보장<br/>
                  • 순환 참조 방지<br/>
                  • 필수 의존성 보장
                </div>
              </Card>
              
              <Card className="p-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">⚠️ Setter 주입</h3>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-3">
                  선택적 의존성에 사용
                </p>
                <div className="text-xs text-yellow-700 dark:text-yellow-300">
                  • 선택적 의존성<br/>
                  • 런타임 변경 가능<br/>
                  • 테스트 용이성
                </div>
              </Card>
              
              <Card className="p-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ 필드 주입</h3>
                <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                  사용 지양
                </p>
                <div className="text-xs text-red-700 dark:text-red-300">
                  • 테스트 어려움<br/>
                  • 불변성 미보장<br/>
                  • 순환 참조 위험
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🟢 1. 생성자 주입 (Constructor Injection) - 권장</h3>
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
    
    private final UserRepository userRepository;
    private final PaymentService paymentService;
    private final NotificationService notificationService;
    
    // 생성자가 하나일 때 @Autowired 생략 가능 (Spring 4.3+)
    public OrderService(UserRepository userRepository, 
                       PaymentService paymentService,
                       NotificationService notificationService) {
        this.userRepository = userRepository;
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }
    
    public void processOrder(Order order) {
        // 비즈니스 로직
        User user = userRepository.findById(order.getUserId());
        paymentService.process(order.getPayment());
        notificationService.sendOrderConfirmation(user, order);
    }
}`}</code>
                  </pre>
                </div>
                
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">장점</h4>
                  <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                    <li>• <strong>불변성 보장:</strong> final 키워드 사용 가능</li>
                    <li>• <strong>필수 의존성 보장:</strong> 객체 생성 시점에 모든 의존성 주입</li>
                    <li>• <strong>순환 참조 방지:</strong> 컴파일/런타임에 순환 참조 감지</li>
                    <li>• <strong>테스트 용이:</strong> Mock 객체 주입 쉬움</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🟡 2. Setter 주입 (Setter Injection)</h3>
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
public class EmailService {
    
    private NotificationTemplate template;
    private EmailValidator validator;
    
    // 선택적 의존성 - 기본값 설정 가능
    @Autowired(required = false)
    public void setTemplate(NotificationTemplate template) {
        this.template = template != null ? template : new DefaultTemplate();
    }
    
    @Autowired
    public void setValidator(EmailValidator validator) {
        this.validator = validator;
    }
    
    public void sendEmail(String to, String content) {
        if (validator.isValid(to)) {
            String formatted = template.format(content);
            // 이메일 발송 로직
        }
    }
}`}</code>
                  </pre>
                </div>
                
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">언제 사용하나?</h4>
                  <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>• <strong>선택적 의존성:</strong> 없어도 동작하는 의존성</li>
                    <li>• <strong>런타임 변경:</strong> 실행 중 의존성 교체가 필요한 경우</li>
                    <li>• <strong>순환 참조 해결:</strong> 불가피한 순환 참조 상황</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🔴 3. 필드 주입 (Field Injection) - 비권장</h3>
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
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository; // 필드 직접 주입
    
    @Autowired
    private PriceCalculator priceCalculator;
    
    @Autowired
    private InventoryService inventoryService;
    
    public Product getProduct(Long id) {
        return productRepository.findById(id);
    }
    
    // 테스트 시 Mock 객체 주입이 어려움
    // final 키워드 사용 불가
    // 순환 참조 감지 어려움
}`}</code>
                  </pre>
                </div>
                
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">왜 사용하면 안 될까?</h4>
                      <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                        <li>• <strong>테스트 어려움:</strong> Mock 객체 주입 복잡</li>
                        <li>• <strong>불변성 미보장:</strong> final 키워드 사용 불가</li>
                        <li>• <strong>의존성 은닉:</strong> 클래스의 의존성이 명확하지 않음</li>
                        <li>• <strong>순환 참조:</strong> 런타임에야 순환 참조 발견</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 실무 적용 가이드 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">3. 실무 적용 가이드</h2>
            
            <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-3">실전 적용 예제</h3>
              <p className="text-emerald-800 dark:text-emerald-200">
                실제 프로젝트에서 생성자 주입을 활용한 완전한 서비스 계층 구현 예제입니다.
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
                <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`@Service
@RequiredArgsConstructor // Lombok으로 생성자 자동 생성
public class UserManagementService {
    
    private final UserRepository userRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final AuditService auditService;
    
    @Transactional
    public User registerUser(UserRegistrationDto dto) {
        // 1. 비즈니스 검증
        validateUserRegistration(dto);
        
        // 2. 사용자 생성
        User user = User.builder()
            .email(dto.getEmail())
            .password(passwordEncoder.encode(dto.getPassword()))
            .name(dto.getName())
            .status(UserStatus.ACTIVE)
            .build();
        
        // 3. 저장
        User savedUser = userRepository.save(user);
        
        // 4. 부가 작업 (이메일 발송, 감사 로그)
        emailService.sendWelcomeEmail(savedUser);
        auditService.logUserRegistration(savedUser);
        
        return savedUser;
    }
    
    @Transactional(readOnly = true)
    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    private void validateUserRegistration(UserRegistrationDto dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new DuplicateUserException("이미 존재하는 이메일입니다: " + dto.getEmail());
        }
    }
}`}</code>
              </pre>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">📋 실무 체크리스트</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-4">✅ 권장 사항</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• 생성자 주입을 기본으로 사용</li>
                    <li>• Lombok의 @RequiredArgsConstructor 활용</li>
                    <li>• final 키워드로 불변성 보장</li>
                    <li>• 단일 생성자일 때 @Autowired 생략</li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-4">❌ 피해야 할 것</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• 필드 주입 (@Autowired 필드)</li>
                    <li>• 과도한 의존성 (7개 이상)</li>
                    <li>• 순환 참조 설계</li>
                    <li>• 불필요한 @Autowired(required = false)</li>
                  </ul>
                </Card>
              </div>
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
                    <p>• IoC는 제어권이 Spring Container로 넘어가는 것</p>
                    <p>• 생성자 주입은 불변성과 필수 의존성을 보장하는 최고의 선택</p>
                    <p>• Setter 주입은 선택적 의존성이나 런타임 변경이 필요할 때만 사용</p>
                    <p>• 필드 주입은 테스트와 유지보수 관점에서 피해야 할 방식</p>
                    <p>• Lombok의 @RequiredArgsConstructor로 보일러플레이트 코드 제거</p>
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
              #IoC
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #DI
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #의존성주입
            </Badge>
            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600">
              #생성자주입
            </Badge>
          </div>
        </footer>
      </article>
    </Card>
  )
}