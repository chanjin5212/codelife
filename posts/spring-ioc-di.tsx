import { Code2 } from "lucide-react"

export default function SpringIocDiPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Spring IoC/DI의 3가지 방식 완전 정복
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>Spring Core</span>
              <span>•</span>
              <span>2024-01-21</span>
              <span>•</span>
              <span>12분 읽기</span>
              <span>•</span>
              <span>김스프링</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Spring Framework의 핵심인 IoC와 DI를 완전히 이해하고, 3가지 의존성 주입 방식의 차이점과 실무 적용법을 살펴봅시다.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* IoC란? */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">IoC(제어의 역전)란?</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>IoC(Inversion of Control)</strong>는 객체의 생성과 관리를 개발자가 직접 하는 것이 아니라 
                  <span className="font-semibold text-blue-700">Spring 컨테이너가 대신 해주는 것</span>을 의미합니다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  이를 통해 객체 간의 결합도를 낮추고, 더 유연하고 테스트하기 쉬운 코드를 만들 수 있습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">❌ 전통적인 방식</h3>
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
                      <code className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">{`public class OrderService {
    private UserService userService;
    private PaymentService paymentService;
    
    public OrderService() {
        // 직접 객체를 생성 (강한 결합)
        this.userService = new UserService();
        this.paymentService = new PaymentService();
    }
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ IoC 방식</h3>
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
    private final PaymentService paymentService;
    
    // Spring이 의존성을 주입해줌 (느슨한 결합)
    public OrderService(UserService userService, 
                       PaymentService paymentService) {
        this.userService = userService;
        this.paymentService = paymentService;
    }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* DI의 3가지 방식 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-3">DI(의존성 주입)의 3가지 방식</h2>
              <div className="bg-purple-50 p-4 rounded-lg mb-8">
                <p className="text-gray-700 font-medium">
                  Spring에서 의존성을 주입하는 <strong>3가지 주요 방법</strong>을 알아봅시다:
                </p>
              </div>

              <div className="space-y-8">
                {/* 1. 생성자 주입 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">1</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">생성자 주입 (Constructor Injection)</h3>
                      <p className="text-green-600 font-medium">✅ 권장 방식</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">📋 기본 예제</h4>
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
    private final PaymentService paymentService;
    
    // 생성자가 하나면 @Autowired 생략 가능 (Spring 4.3+)
    public OrderService(UserService userService, PaymentService paymentService) {
        this.userService = userService;
        this.paymentService = paymentService;
    }
    
    public void createOrder(Order order) {
        User user = userService.findById(order.getUserId());
        paymentService.processPayment(order.getPaymentInfo());
        // 주문 처리 로직...
    }
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">🎯 장점</h4>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        <strong>불변성:</strong> final 키워드로 객체의 불변성 보장
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        <strong>필수 의존성:</strong> 객체 생성 시점에 모든 의존성이 주입됨을 보장
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        <strong>순환 참조 방지:</strong> 컴파일 시점에 순환 참조 감지
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        <strong>테스트 용이:</strong> Mock 객체 주입이 쉬움
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2. 세터 주입 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">2</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">세터 주입 (Setter Injection)</h3>
                      <p className="text-orange-600 font-medium">⚠️ 선택적 의존성에 사용</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">📋 기본 예제</h4>
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
    private NotificationService notificationService;
    private TemplateService templateService;
    
    // 선택적 의존성 - 없어도 기본 동작 가능
    @Autowired(required = false)
    public void setNotificationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
    
    @Autowired
    public void setTemplateService(TemplateService templateService) {
        this.templateService = templateService;
    }
    
    public void sendEmail(String to, String subject, String content) {
        String finalContent = templateService != null 
            ? templateService.applyTemplate(content) 
            : content;
            
        // 이메일 발송 로직...
        
        if (notificationService != null) {
            notificationService.notifyEmailSent(to);
        }
    }
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-800 mb-3">👍 장점</h4>
                      <ul className="space-y-2 text-orange-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">▶</span>
                          선택적 의존성 처리 가능
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">▶</span>
                          런타임에 의존성 변경 가능
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-800 mb-3">👎 단점</h4>
                      <ul className="space-y-2 text-red-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">▶</span>
                          의존성이 없어도 객체 생성됨
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">▶</span>
                          불변성 보장 불가능
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. 필드 주입 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">3</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">필드 주입 (Field Injection)</h3>
                      <p className="text-red-600 font-medium">❌ 비권장 방식</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">📋 기본 예제</h4>
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
    private ProductRepository productRepository;
    
    @Autowired
    private CategoryService categoryService;
    
    @Autowired
    private PriceCalculator priceCalculator;
    
    public Product createProduct(ProductDto productDto) {
        Category category = categoryService.findById(productDto.getCategoryId());
        double calculatedPrice = priceCalculator.calculate(productDto.getBasePrice());
        
        Product product = new Product(productDto.getName(), category, calculatedPrice);
        return productRepository.save(product);
    }
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">🚫 왜 비권장인가?</h4>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">▶</span>
                        <strong>테스트 어려움:</strong> Mock 객체 주입이 복잡함
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">▶</span>
                        <strong>불변성 불가:</strong> final 키워드 사용 불가능
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">▶</span>
                        <strong>숨겨진 의존성:</strong> 의존성이 명확하지 않음
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">▶</span>
                        <strong>Spring 의존성:</strong> Spring 없이는 동작하지 않음
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 비교 및 권장사항 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-3">3가지 방식 비교 및 권장사항</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📊 상세 비교표</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left font-semibold">특징</th>
                        <th className="border border-gray-300 p-3 text-center font-semibold text-green-700">생성자 주입</th>
                        <th className="border border-gray-300 p-3 text-center font-semibold text-orange-700">세터 주입</th>
                        <th className="border border-gray-300 p-3 text-center font-semibold text-red-700">필드 주입</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">불변성 보장</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">✅</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">순환 참조 방지</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">✅</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">테스트 용이성</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">✅</td>
                        <td className="border border-gray-300 p-3 text-center text-orange-600">△</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">의존성 명확성</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">✅</td>
                        <td className="border border-gray-300 p-3 text-center text-orange-600">△</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">선택적 의존성</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">✅</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">코드 간결성</td>
                        <td className="border border-gray-300 p-3 text-center text-orange-600">△</td>
                        <td className="border border-gray-300 p-3 text-center text-orange-600">△</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  💡 실무 권장사항
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-3">🎯 이럴 때 사용하세요</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <strong className="text-green-700">생성자 주입:</strong>
                        <p className="text-gray-600 text-sm mt-1">필수 의존성, 대부분의 경우 (99%)</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <strong className="text-orange-700">세터 주입:</strong>
                        <p className="text-gray-600 text-sm mt-1">선택적 의존성, 런타임 변경이 필요한 경우</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-red-200">
                        <strong className="text-red-700">필드 주입:</strong>
                        <p className="text-gray-600 text-sm mt-1">테스트 코드에서만 제한적으로</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">🛠️ 베스트 프랙티스</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">1.</span>
                        <strong>생성자 주입을 기본</strong>으로 사용하세요
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">2.</span>
                        <strong>final 키워드</strong>로 불변성을 보장하세요
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">3.</span>
                        <strong>Lombok @RequiredArgsConstructor</strong>로 코드를 간소화하세요
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">4.</span>
                        선택적 의존성만 <strong>세터 주입</strong>을 사용하세요
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">5.</span>
                        <strong>필드 주입은 피하세요</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 실무 예제 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-teal-200 pb-3">실무 활용 예제</h2>
              
              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 mb-6">
                <h3 className="text-xl font-bold text-teal-800 mb-4">🏗️ Lombok을 활용한 깔끔한 코드</h3>
                <p className="text-gray-700">실무에서는 Lombok의 <code className="bg-gray-100 px-2 py-1 rounded">@RequiredArgsConstructor</code>를 활용하여 생성자 주입 코드를 간소화합니다.</p>
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
@RequiredArgsConstructor  // final 필드에 대한 생성자 자동 생성
public class EcommerceService {
    
    // 필수 의존성들 - final로 불변성 보장
    private final UserService userService;
    private final ProductService productService;
    private final OrderService orderService;
    private final PaymentService paymentService;
    private final InventoryService inventoryService;
    
    // 선택적 의존성 - 세터 주입 사용
    private EmailService emailService;
    private SmsService smsService;
    
    @Autowired(required = false)
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
    
    @Autowired(required = false) 
    public void setSmsService(SmsService smsService) {
        this.smsService = smsService;
    }
    
    public OrderResult processOrder(OrderRequest request) {
        // 1. 사용자 검증
        User user = userService.validateUser(request.getUserId());
        
        // 2. 상품 확인 및 재고 체크
        Product product = productService.findById(request.getProductId());
        boolean available = inventoryService.checkStock(product.getId(), request.getQuantity());
        
        if (!available) {
            throw new OutOfStockException("재고가 부족합니다.");
        }
        
        // 3. 주문 생성
        Order order = orderService.createOrder(user, product, request.getQuantity());
        
        // 4. 결제 처리
        PaymentResult paymentResult = paymentService.processPayment(
            order.getId(), 
            request.getPaymentInfo()
        );
        
        if (paymentResult.isSuccess()) {
            // 5. 재고 차감
            inventoryService.decreaseStock(product.getId(), request.getQuantity());
            
            // 6. 알림 발송 (선택적)
            sendNotifications(user, order);
            
            return OrderResult.success(order, paymentResult);
        } else {
            orderService.cancelOrder(order.getId());
            return OrderResult.failure(paymentResult.getErrorMessage());
        }
    }
    
    private void sendNotifications(User user, Order order) {
        // 이메일 알림 (선택적)
        if (emailService != null) {
            emailService.sendOrderConfirmation(user.getEmail(), order);
        }
        
        // SMS 알림 (선택적)
        if (smsService != null && user.isPhoneVerified()) {
            smsService.sendOrderNotification(user.getPhone(), order.getOrderNumber());
        }
    }
}`}</code>
                </pre>
              </div>
            </section>

            {/* 정리 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-3">📝 정리</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      🎯 핵심 포인트
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">▶</span>
                        <strong>생성자 주입</strong>이 가장 안전하고 권장되는 방식
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">▶</span>
                        <strong>불변성과 안정성</strong>이 코드 품질의 핵심
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">▶</span>
                        <strong>테스트 가능한 코드</strong>가 유지보수성을 높임
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      🚀 실무 적용법
                    </h3>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">1.</span>
                          <strong>생성자 주입</strong> + <strong>final</strong> 조합
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">2.</span>
                          <strong>@RequiredArgsConstructor</strong> 활용
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">3.</span>
                          선택적 의존성은 <strong>세터 주입</strong>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">4.</span>
                          <strong>필드 주입 지양</strong>하기
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