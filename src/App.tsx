import React, { useState } from "react";
import {
  ChevronDown,
  Target,
  LayoutTemplate,
  Zap,
  Star,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { BackgroundPattern } from "./components/BackgroundPattern";

interface FAQItem {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

interface Service {
  image: string;
  title: string;
  description: string;
  features: string[];
}

export default function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: "Como funciona a consultoria gratuita?",
      answer:
        "Agendar uma chamada estratégica de 30 minutos onde analisamos seu negócio, identificamos oportunidades de crescimento e criamos um plano personalizado de tráfego pago.",
    },
    {
      question: "Qual é o investimento mínimo em anúncios?",
      answer:
        "Recomendamos um investimento mínimo de R$ 3.000/mês em mídia paga para resultados consistentes. Nossos serviços de gestão são calculados com base no seu volume de investimento.",
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer:
        "Os primeiros resultados começam a aparecer entre 7-14 dias. Porém, a otimização completa e escala acontecem entre 30-60 dias de operação contínua.",
    },
    {
      question: "Vocês trabalham com qual tipo de negócio?",
      answer:
        "Atendemos e-commerces, infoprodutores, prestadores de serviço B2B e B2C que já possuem produto validado e buscam escalar com tráfego pago.",
    },
    {
      question:
        "Qual a diferença da Full digital marketing para outras agências?",
      answer:
        "Trabalhamos com estratégia baseada em dados, não achismos. Usamos metodologias proprietárias, tracking avançado e foco total em ROI e CAC sustentável.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Mendes",
      role: "CEO, TechStart Solutions",
      content:
        "A Full digital marketing transformou nosso funil de vendas. Em 3 meses, aumentamos o faturamento em 340% e reduzimos o CAC em 60%. Equipe altamente profissional.",
      avatar:
        "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ3MzE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      role: "Fundadora, Beleza Natural Store",
      content:
        "Nunca imaginei que meu e-commerce pudesse crescer tanto. As landing pages criadas pela Full digital marketing têm taxa de conversão de 8.5%. Recomendo demais!",
      avatar:
        "https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NzQ3MzU5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
    },
    {
      name: "Rafael Oliveira",
      role: "Diretor, Grupo Investidor Pro",
      content:
        "ROI de 12x no primeiro trimestre. A automação de vendas implementada pela Full digital marketing é simplesmente impecável. Melhor decisão que tomamos em 2024.",
      avatar:
        "https://images.unsplash.com/photo-1561515075-551b90143acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njc1MTEwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
    },
  ];

  const services: Service[] = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      title: "Gestão de Tráfego",
      description:
        "Estratégias de performance em Google Ads, Meta Ads e TikTok Ads com foco em ROI máximo.",
      features: [
        "Análise de mercado e concorrência",
        "Criação de campanhas segmentadas",
        "Otimização contínua de CAC",
        "Relatórios semanais detalhados",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      title: "Landing Pages de Alta Conversão",
      description:
        "Páginas otimizadas com base em psicologia de vendas e testes A/B constantes.",
      features: [
        "Design focado em conversão",
        "Copywriting persuasivo",
        "Integração com CRM",
        "Mobile-first responsivo",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      title: "Automação de Vendas",
      description:
        "Funis automatizados que nutrem leads e convertem 24/7 sem intervenção manual.",
      features: [
        "Sequências de e-mail marketing",
        "Chatbots inteligentes",
        "Retargeting estratégico",
        "Integração multi-plataforma",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Mobile Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-black rounded-lg"></div>
              <span className="text-white font-bold text-lg">
                Full digital marketing
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#servicos"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Serviços
              </a>
              <a
                href="#depoimentos"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                FAQ
              </a>
              <button className="w-full px-4 py-3 bg-green-500 hover:bg-green-700 text-white rounded-lg transition-all">
                Consultoria Grátis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/60 to-gray-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 relative">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-green-400 text-xs sm:text-sm">
                  🚀 Agência Parceira Google & Meta
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Escalamos seu faturamento com estratégias de
                tráfego pago baseadas em dados
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                Pare de queimar dinheiro com anúncios. Criamos
                funis de vendas de alta performance para
                negócios que buscam escala real.
              </p>

              <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-700 text-white text-sm sm:text-base rounded-xl transition-all border-glow animate-pulse">
                    Quero uma Consultoria Gratuita
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/50 border-2 border-gray-700 hover:border-green-500 text-white text-sm sm:text-base rounded-xl transition-all hover:bg-gray-800">
                    Ver Cases de Sucesso
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-3 sm:gap-4 pt-6">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-black border-2 border-gray-900"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      +150 empresas escaladas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-3xl opacity-20"></div>
                <div className="relative rounded-xl overflow-hidden border border-gray-800 border-glow-subtle">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzY3NDMwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dashboard Analytics"
                    className="w-full h-auto"
                  />
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex gap-3 sm:gap-4">
                    <div className="flex-1 bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-xl p-3 sm:p-4">
                      <p className="text-green-400 text-xs sm:text-sm">
                        ROI Médio
                      </p>
                      <p className="text-xl sm:text-2xl text-white mt-1">
                        8.5x
                      </p>
                    </div>
                    <div className="flex-1 bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-xl p-3 sm:p-4">
                      <p className="text-green-400 text-xs sm:text-sm">
                        Conversão
                      </p>
                      <p className="text-xl sm:text-2xl text-white mt-1">
                        12.8%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gray-800 bg-gray-800/30 backdrop-blur-sm py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
            Plataformas que dominamos
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-2 sm:gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">
                  G
                </span>
              </div>
              <span className="text-gray-300 text-base sm:text-lg">
                Google Ads
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">
                  M
                </span>
              </div>
              <span className="text-gray-300 text-base sm:text-lg">
                Meta Ads
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">
                  T
                </span>
              </div>
              <span className="text-gray-300 text-base sm:text-lg">
                TikTok Ads
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="servicos"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-gray-800/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Soluções completas para transformar seu
              investimento em mídia paga em máquina de vendas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all hover:border-glow-subtle group h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/0 transition-colors z-10"></div>
                   <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className="text-white mb-3 text-xl font-bold">
                    {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm sm:text-base flex-1">
                    {service.description}
                    </p>
                    <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                        <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                        >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                    <button className="w-full mt-6 px-4 py-3 bg-gray-700/50 hover:bg-green-500 text-white rounded-xl transition-all border border-gray-600 hover:border-green-500 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-green-900/20">
                      Falar com Especialista
                      <MessageCircle className="w-4 h-4" />
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section
        id="depoimentos"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">
              O que dizem nossos clientes
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-4">
              Resultados reais de empresas que confiaram na
              Full digital marketing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-6 sm:p-8 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>
                <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-500/30 flex-shrink-0"
                  />
                  <div>
                    <p className="text-white text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-16 sm:py-20 lg:py-24 bg-gray-800/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-4">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <h4 className="text-white pr-4 text-sm sm:text-base lg:text-lg">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-400 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            {/* Neon Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Glass Container */}
            <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-green-500 rounded-2xl p-8 sm:p-14 text-center shadow-[0_0_50px_-12px_rgba(34,197,94,0.25)]">
              <h2 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">escalar seu negócio?</span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Agende uma consultoria gratuita e descubra como
                podemos multiplicar seu faturamento com tráfego
                pago estratégico
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all text-base sm:text-lg font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 flex items-center justify-center gap-3">
                  Quero uma Consultoria Gratuita
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                </button>
                
                <a 
                  href="https://wa.me/5511987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-green-500/50 hover:border-green-400 hover:bg-green-500/10 text-white rounded-xl transition-all text-base sm:text-lg font-semibold flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
                 <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    Resposta em até 24h
                 </span>
                 <span className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    Estratégia Personalizada
                 </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
            <div className="sm:col-span-2 lg:col-span-5">
              <h3 className="text-white mb-3 sm:mb-4 text-lg sm:text-xl">
                Full digital marketing
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Agência de performance digital especializada em
                escalar negócios através de estratégias de
                tráfego pago baseadas em dados.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="break-all">
                    contato@fulldigital.com.br
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>+55 11 98765-4321</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white mb-3 sm:mb-4 text-base sm:text-lg">
                Serviços
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Gestão de Tráfego
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Automação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Consultoria
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <h4 className="text-white mb-3 sm:mb-4 text-base sm:text-lg">
                Newsletter
              </h4>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Receba dicas semanais sobre tráfego pago e
                performance digital
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 text-sm sm:text-base"
                />
                <button className="px-4 sm:px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all text-sm sm:text-base whitespace-nowrap">
                  Enviar
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2026 Full digital marketing. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Full Digital IA - Built to Scale
            </p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511987654321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-green-500/50 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}