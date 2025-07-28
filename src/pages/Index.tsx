
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, Trophy, Target, Star, Shield, Users, Calendar, Video, Loader2 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showLoadingDialog, setShowLoadingDialog] = useState(false);
  const [showAdvanceWarning, setShowAdvanceWarning] = useState(false);

  const challenges = [
    "Sentimento de estar sempre \"com pressa\" para perder peso",
    "Desconforto físico ao vestir roupas",
    "Vergonha de não conseguir acompanhar o ritmo dos outros",
    "Insegurança ao interagir socialmente devido sua aparência",
    "Culpa após comer",
    "Nunca passei por nada disso"
  ];

  const handleChallengeChange = (challenge: string) => {
    setSelectedChallenges(prev => 
      prev.includes(challenge) 
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedChallenges.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsFinished(true);
        setShowSuccess(true);
      }, 2000);
    }
  };

  const handleAdvanceClick = () => {
    if (!isFinished) {
      setShowAdvanceWarning(true);
      setTimeout(() => setShowAdvanceWarning(false), 3000);
      return;
    }
    
    setShowLoadingDialog(true);
    setTimeout(() => {
      navigate('/page2');
      window.scrollTo(0, 0);
      setShowLoadingDialog(false);
    }, 2500);
  };

  const features = [
    { icon: Target, text: "Acompanhamento diário e personalizado" },
    { icon: Trophy, text: "Sistema de recompensas por metas atingidas" },
    { icon: CheckCircle, text: "Comprovado e aprovado por especialistas" },
    { icon: Video, text: "Com acesso a vídeos motivacionais diários" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center">
            {/* Step 1 - Current */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            
            {/* Progress Line 1 - Half completed */}
            <div className="relative w-20 h-3 bg-gray-300 mx-4 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
            
            {/* Step 2 - Next */}
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            </div>
            
            {/* Progress Line 2 - Not started */}
            <div className="w-20 h-3 bg-gray-300 mx-4 rounded-full"></div>
            
            {/* Step 3 - Final with gift */}
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">🎁</span>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Parabéns... Você quebrou o{' '}
            <span className="text-green-600 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              ciclo de falhas.
            </span>
          </h1>
          
          {/* Message Box - Destaque Principal */}
          <div className="max-w-5xl mx-auto mb-12">
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 shadow-2xl border-0 rounded-3xl hover-scale">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10"></div>
              <CardContent className="relative p-12 md:p-16">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-8 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-800 font-medium">
                      Você quer emagrecer? O resumo é simples: <span className="text-green-600 font-bold">mudar a mentalidade</span>. 
                      Mas disso você já sabe...
                    </p>
                    
                    <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-800 font-medium">
                      Então, por que, após tantas tentativas, você ainda se sente <span className="font-semibold text-red-600">voltando ao mesmo lugar</span>?
                    </p>
                    
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-2xl shadow-xl">
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                        Lembre-se: você não precisa emagrecer rápido. 
                        <br />
                        <span className="text-green-100">Você precisa aprender a nunca mais voltar pro ponto de partida.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Challenge Form */}
        <Card className="max-w-4xl mx-auto mb-16 shadow-2xl border-0 bg-gradient-to-r from-green-500 to-green-600">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Você passa ou já passou por algo assim?👇
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Checkbox
                      id={`challenge-${index}`}
                      checked={selectedChallenges.includes(challenge)}
                      onCheckedChange={() => handleChallengeChange(challenge)}
                      className="data-[state=checked]:bg-white data-[state=checked]:text-green-600 border-white"
                    />
                    <label 
                      htmlFor={`challenge-${index}`}
                      className="text-white text-lg font-medium leading-relaxed cursor-pointer flex-1"
                    >
                      {challenge}
                    </label>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4 space-y-4">
                <Button 
                  type="submit"
                  size="lg"
                  disabled={selectedChallenges.length === 0 || isLoading || isFinished}
                  className="h-16 px-12 text-xl font-bold bg-white text-green-600 hover:bg-green-50 rounded-2xl shadow-2xl hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isFinished ? "Finalizado" : "Finalizar"}
                </Button>

                {isLoading && (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span className="text-white text-lg">Processando dados</span>
                  </div>
                )}
              </div>

              {showSuccess && (
                <div className="bg-white/20 border border-white/30 text-white px-6 py-4 rounded-xl animate-fade-in">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    <span className="text-lg font-medium">Dados registrados! Prepare-se para ter resultados duradouros!</span>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Explanation Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Card className="p-8 hover-scale bg-green-50 border-0 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Por que dizemos que com a gente você emagrece da forma certa?
            </h3>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Emagrecer da forma certa não é sobre alcançar números na balança. É sobre <span className="text-green-600 font-bold">transformar sua vida</span>, superar as frustrações, e deixar para trás as inseguranças. Com a gente é muito mais do que perder peso – é sobre <span className="text-green-600 font-bold">criar hábitos</span> sustentáveis que te acompanham para o resto da vida.
              <br /><br />
              Nós sabemos que seguir dietas da moda só te leva a um ciclo de frustração. Não prometemos atalhos, e sim te ensinar a controlar e respeitar sem culpa, o seu corpo e, o mais importante, <span className="font-bold text-red-600">nunca mais voltar ao ponto de partida</span>. Não é sobre perder peso por perder. É sobre ganhar <span className="font-bold text-green-600">autocontrole, autoconfiança</span>, é uma nova maneira de viver e se relacionar com o corpo. Esse é o nosso compromisso com você: o emagrecimento que você tanto quer, mas da <span className="text-green-600 font-bold">forma certa</span>.
            </p>
          </Card>
        </div>

        {/* First Avançar Button */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          {showAdvanceWarning && (
            <div className="mb-4 animate-fade-in">
              <p className="text-green-600 font-bold text-lg">
                ⬆️Clique em "Finalizar" primeiro!⬆️
              </p>
            </div>
          )}
          <Button 
            size="lg"
            onClick={handleAdvanceClick}
            className="h-24 px-20 text-3xl font-bold bg-green-600 text-white hover:bg-green-700 rounded-3xl shadow-2xl hover-scale animate-pulse-scale"
          >
            Avançar
          </Button>
        </div>

        {/* Social Proof */}
        <Card className="max-w-4xl mx-auto mb-16 p-8 bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-2xl">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">
              Mais de 3000 pessoas já transformaram suas vidas!
            </h3>
          </div>
        </Card>

        {/* Updated Tool Date */}
        <Card className="max-w-4xl mx-auto mb-16 p-8 bg-white border-0 shadow-2xl">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Ferramenta Atualizada: julho de 2025
            </h3>
          </div>
        </Card>

        {/* Security Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gray-50 border-0 shadow-lg">
            <div className="text-center">
              <img 
                src="/lovable-uploads/b23d89f2-4a71-45c5-b613-3172fb0a99ce.png" 
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

        {/* Second Avançar Button */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          {showAdvanceWarning && (
            <div className="mb-4 animate-fade-in">
              <p className="text-green-600 font-bold text-lg">
                ⬆️Clique em "Finalizar" primeiro!⬆️
              </p>
            </div>
          )}
          <Button 
            size="lg"
            onClick={handleAdvanceClick}
            className="h-24 px-20 text-3xl font-bold bg-green-600 text-white hover:bg-green-700 rounded-3xl shadow-2xl hover-scale animate-pulse-scale"
          >
            Avançar
          </Button>
        </div>

        {/* Progress Bar Bottom */}
        <div className="max-w-md mx-auto mb-16">
          <div className="flex items-center justify-center">
            {/* Step 1 - Current */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            
            {/* Progress Line 1 - Half completed */}
            <div className="relative w-20 h-3 bg-gray-300 mx-4 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
            
            {/* Step 2 - Next */}
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            </div>
            
            {/* Progress Line 2 - Not started */}
            <div className="w-20 h-3 bg-gray-300 mx-4 rounded-full"></div>
            
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
            
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
