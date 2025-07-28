import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Star, Users, CheckCircle, Shield, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();
  const [showLoadingDialog, setShowLoadingDialog] = useState(false);

  const handleAccessTool = () => {
    setShowLoadingDialog(true);
    setTimeout(() => {
      navigate('/page3');
      window.scrollTo(0, 0);
      setShowLoadingDialog(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50"
        onClick={() => window.scrollTo(0, 0)}
      >
        <Button 
          size="icon"
          className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </Link>

      <div className="container mx-auto px-4 py-8">
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center">
            {/* Step 1 - Completed */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            
            {/* Progress Line 1 - Completed */}
            <div className="relative w-20 h-3 bg-gray-300 mx-4 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
            
            {/* Step 2 - Current */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            
            {/* Progress Line 2 - Half completed */}
            <div className="relative w-20 h-3 bg-gray-300 mx-4 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
            
            {/* Step 3 - Final with gift */}
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">🎁</span>
            </div>
          </div>
        </div>

        {/* Anti-Sales Video Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-8 leading-tight">
              NÃO VAMOS TENTAR TE CONVENCER COM UM VÍDEO DE VENDAS!
            </h1>
            
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed mb-6">
              Sabemos que você não precisa disso - Já mostramos que seu objetivo pode ser{' '}
              <span className="text-green-600 font-bold">muito mais abrangente</span> do que parece.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed mb-12">
              Pode proporcionar muito mais que um simples "bem estar" ou "autoestima ao olhar o espelho".
            </p>
            
            <p className="text-3xl md:text-4xl lg:text-5xl text-green-600 font-bold mb-12">
              Veja os depoimentos de quem opta pela nossa ferramenta!
            </p>
            
            <div className="text-6xl mb-12 animate-bounce">↓</div>
            </div>
          </div>

          {/* Testimonials Image */}
          <div className="mb-16">
            <img 
              src="/lovable-uploads/5a92d1c1-1dbe-4e3d-8a75-b456b481aa48.png" 
              alt="Depoimentos e resultados de emagrecimento"
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
              style={{ minHeight: '800px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Tool Description Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-green-100 to-green-50 border-0 shadow-2xl rounded-3xl">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                Que tal ferramenta é essa?
              </h2>
              
              <div className="text-center space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 leading-relaxed">
                  Antes de liberar um curto acesso a nossa{' '}
                  <span className="text-green-600 font-bold">ferramenta poderosa</span>, saiba que tudo isso tem um preço - Investimos tempo e dinheiro para criar algo fora da curva para quem quer emagrecer, ninguém aguenta mais as{' '}
                  <span className="text-red-600 font-bold">propagandas</span> e{' '}
                  <span className="text-red-600 font-bold">produtos saturados</span> dentro do nicho de emagrecimento, mas todos querem emagrecer. Pensando nisso, criamos uma solução prática, de fácil acesso e personalizada para cada usuário, ou você achou que suas respostas na página anterior foram em vão? O valor que concordamos em disponibilizar a ferramenta foi de{' '}
                  <span className="line-through text-gray-600 text-lg sm:text-xl md:text-2xl">R$200,00</span>, mas reconhecemos a época em que estamos, inverno, baixa temporada e estamos liberando uma promo de{' '}
                  <span className="text-green-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">85%OFF</span> totalizando{' '}
                  <span className="text-green-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">R$29,90</span> somente durante esse período, após entrarmos em alta temporada o valor volta ao normal.
                </p>
                
                <div className="py-12">
                  <p className="text-4xl md:text-5xl text-green-600 font-bold mb-8">
                    Clique e navegue.
                  </p>
                  <div className="text-6xl mb-12">↓</div>
                  
                  <Button 
                    size="lg"
                    onClick={handleAccessTool}
                    className="h-16 sm:h-18 md:h-20 px-8 sm:px-12 md:px-16 text-xl sm:text-2xl md:text-3xl font-bold bg-green-600 text-white hover:bg-green-700 rounded-2xl shadow-2xl transition-transform w-full sm:w-auto"
                    style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}
                  >
                    Acessar Ferramenta
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-2xl mb-8">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">
                Mais de 3000 pessoas já transformaram suas vidas!
              </h3>
              <p className="text-xl opacity-90">
                Junte-se à comunidade que decidiu quebrar o ciclo de falhas
              </p>
            </CardContent>
          </Card>

          {/* Updated Tool Date */}
          <Card className="max-w-4xl mx-auto mb-8 p-8 bg-white border-0 shadow-2xl">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Ferramenta Atualizada: julho de 2025
              </h3>
            </div>
          </Card>

          {/* Security Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gray-50 border-0 shadow-lg">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/96ae7c8c-7258-4800-b734-6748f18f6dec.png" 
                  alt="Site Seguro SSL Verificado" 
                  className="w-48 h-32 mx-auto mb-6 object-contain"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  100% Seguro e Personalizado
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Seu progresso e dados pessoais são 100% seguros com nossa criptografia avançada.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Método 100% personalizado, sem promessas vazias.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>

        {/* Progress Bar Bottom */}
        <div className="max-w-md mx-auto mb-16">
          <div className="flex items-center justify-center">
            {/* Step 1 - Completed */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            
            {/* Progress Line 1 - Completed */}
            <div className="relative w-20 h-3 bg-gray-300 mx-4 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
            
            {/* Step 2 - Current */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            
            {/* Progress Line 2 - Half completed */}
            <div className="relative w-20 h-3 bg-gray-300 mx-4 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
            
            {/* Step 3 - Final with gift */}
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">🎁</span>
            </div>
          </div>
        </div>

      </div>

      {/* Loading Dialog */}
      <Dialog open={showLoadingDialog} onOpenChange={() => {}}>
        <DialogContent className="max-w-md mx-auto border-0 bg-white/95 backdrop-blur-sm shadow-2xl [&>button]:hidden">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="relative mb-8">
              <div className="w-16 h-16 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-green-400 animate-spin"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Carregando ferramenta...
            </h3>
            
            <p className="text-gray-600 text-center leading-relaxed">
              Preparando sua experiência personalizada. Aguarde alguns instantes...
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page2;