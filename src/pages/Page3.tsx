import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Page3 = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(19);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://go.pepperpay.com.br/9vmgi';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const contentCards = [
    {
      title: "Receitas Saudáveis",
      description: "Receitas para não sofrer, e continuar comendo o que gosta.",
      emoji: "🥗",
      gradient: "from-green-200 to-yellow-200"
    },
    {
      title: "Mova-se em casa", 
      description: "Com treinos simples e eficazes, você consegue resultados visíveis. Transforme sua rotina e conquiste o corpo dos seus sonhos no conforto do seu lar.",
      emoji: "🤸‍♀️",
      gradient: "from-orange-200 to-red-200"
    },
    {
      title: "Sono de Qualidade",
      description: "O segredo para ter um bom rendimento durante o dia é ter uma boa noite de sono!",
      emoji: "🛏️", 
      gradient: "from-blue-200 to-purple-200"
    },
    {
      title: "30 Dias para emagrecer",
      description: "Programa que vai transformar seu corpo em apenas um mês. Alimentação balanceada e exercícios fáceis de seguir. Sem complicação!",
      emoji: "📅",
      gradient: "from-green-200 to-lime-200"
    },
    {
      title: "Mindfulness e Meditação",
      description: "Técnicas de relaxamento e mindfulness para reduzir o estresse e aumentar seu bem-estar mental.",
      emoji: "🧘‍♀️",
      gradient: "from-indigo-200 to-pink-200"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentCards.length) % contentCards.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-6">
          {/* Mobile Layout */}
          <div className="block md:hidden space-y-4">
            <h1 className="text-2xl font-bold text-center">
              TRANSFORME SUA VIDA
            </h1>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 px-3 py-2 rounded-lg">
                <span className="text-white font-bold text-lg">{timeLeft}s</span>
              </div>
              <span className="text-yellow-300 font-bold text-lg bg-red-600 px-3 py-1 rounded-lg shadow-lg border-2 border-yellow-300 animate-pulse">
                ⚠️ VERSÃO MOSTRUÁRIO ⚠️
              </span>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 px-3 py-2 rounded-lg">
                <span className="text-white font-bold text-lg">{timeLeft}s</span>
              </div>
              <span className="text-yellow-300 font-bold text-xl bg-red-600 px-4 py-2 rounded-lg shadow-lg border-2 border-yellow-300 animate-pulse">
                ⚠️ VERSÃO MOSTRUÁRIO ⚠️
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center flex-1">
              TRANSFORME SUA VIDA
            </h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Minigames Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 bg-white px-6 py-3 rounded-2xl shadow-lg inline-block">
              Minigames
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Flappy Bird */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl flex items-center justify-center relative overflow-hidden blur-md">
                    <div className="absolute inset-0 bg-gray-400/50"></div>
                    <span className="text-4xl">🐦</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                      Imagem bloqueada!
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flappy Bird</h3>
                <p className="text-gray-600 mb-4">Em breve...</p>
                
                <Button 
                  disabled
                  className="w-full bg-gray-400 text-gray-700 cursor-not-allowed"
                >
                  Bloqueado!
                </Button>
              </CardContent>
            </Card>

            {/* Geometry Dash */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center relative overflow-hidden blur-md">
                    <div className="absolute inset-0 bg-gray-400/50"></div>
                    <span className="text-4xl">🔷</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                      Imagem bloqueada!
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Geometry Dash</h3>
                <p className="text-gray-600 mb-4">Em breve...</p>
                
                <Button 
                  disabled
                  className="w-full bg-gray-400 text-gray-700 cursor-not-allowed"
                >
                  Bloqueado!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conteúdos Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 bg-white px-6 py-3 rounded-2xl shadow-lg inline-block">
              Conteúdos
            </h2>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 text-gray-700 hover:text-gray-900"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 text-gray-700 hover:text-gray-900"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Carousel Content */}
            <div className="overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentCards.map((card, index) => (
                  <div key={index} className="min-w-full flex justify-center">
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow max-w-md w-full">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className={`h-48 bg-gradient-to-br ${card.gradient} rounded-t-lg relative overflow-hidden blur-md`}>
                            <div className="absolute inset-0 bg-gray-400/50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-6xl">{card.emoji}</span>
                            </div>
                          </div>
                          <div className="absolute top-4 left-4 right-4 text-center">
                            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                              Imagem bloqueada!
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                          <p className="text-gray-600 mb-4">
                            {card.description}
                          </p>
                          
                          <Button 
                            disabled
                            className="w-full bg-gray-400 text-gray-700 cursor-not-allowed"
                          >
                            Bloqueado!
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {contentCards.map((_, slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentSlide(slide)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === slide ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Jon, o assistente inteligente */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 bg-white px-6 py-3 rounded-2xl shadow-lg inline-block">
              Jon, o assistente inteligente
            </h2>
          </div>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              {/* Chat Area */}
              <div className="min-h-[400px] flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🤖</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-6 py-4 flex-1">
                      <p className="text-gray-800 text-lg">
                        Olá! Eu sou o Jon, seu assistente inteligente para saúde e bem-estar. Como posso ajudá-lo hoje? Posso orientá-lo sobre exercícios, alimentação, sono e muito mais!
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Digite sua pergunta aqui... Ex: Como posso melhorar meu sono?"
                      className="w-full px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-14"
                    />
                    <MessageCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  </div>
                  
                  <Button 
                    disabled
                    className="w-full bg-gray-400 text-gray-700 cursor-not-allowed rounded-2xl py-4 text-lg font-semibold"
                  >
                    Bloqueado!
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 Organize Sua Vida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
