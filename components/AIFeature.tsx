import React, { useState } from 'react';
import { Sparkles, Utensils, RefreshCw, AlertCircle } from 'lucide-react';
import { generateMealSuggestion } from '../services/geminiService';
import { LoadingState } from '../types';

const AIFeature: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    setResult(null);

    try {
      const response = await generateMealSuggestion(input);
      setResult(response.suggestion);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  const suggestions = [
    "Café da manhã vegano rápido",
    "Lanche pós-treino proteico",
    "Jantar low carb leve",
    "Opção doce sem açúcar"
  ];

  return (
    <section id="ai-tool" className="py-24 bg-gradient-to-br from-primary-800 to-primary-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-100 text-sm font-semibold mb-6 border border-white/20">
              <Sparkles size={16} className="text-yellow-300" />
              <span>Powered by Gemini AI</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight">
              Precisa de inspiração para sua próxima refeição?
            </h2>
            <p className="text-primary-100 text-lg mb-8 leading-relaxed">
              Experimente minha ferramenta de IA exclusiva. Descreva o que você está procurando (ingredientes, tipo de dieta, momento do dia) e receba uma sugestão nutricional instantânea e equilibrada.
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-4">Experimente perguntar:</h4>
              <div className="flex flex-wrap gap-3">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/20 transition-colors text-sm text-white border border-white/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <Utensils size={20} />
                </div>
                <h3 className="font-serif text-xl font-bold">Nutri Assistant</h3>
              </div>

              <form onSubmit={handleGenerate} className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  O que você gostaria de comer?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ex: Café da manhã rico em fibras..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === LoadingState.LOADING || !input.trim()}
                    className="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {status === LoadingState.LOADING ? (
                      <RefreshCw size={20} className="animate-spin" />
                    ) : (
                      <Sparkles size={20} />
                    )}
                  </button>
                </div>
              </form>

              <div className="min-h-[160px] bg-gray-50 rounded-xl p-6 border border-gray-100 relative">
                {status === LoadingState.IDLE && (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                    <Utensils size={32} className="mb-2 opacity-50" />
                    <p className="text-sm">Sua sugestão aparecerá aqui.</p>
                  </div>
                )}

                {status === LoadingState.LOADING && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm rounded-xl z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-3"></div>
                      <p className="text-sm text-primary-700 font-medium">Consultando nutricionista virtual...</p>
                    </div>
                  </div>
                )}

                {status === LoadingState.ERROR && (
                  <div className="h-full flex flex-col items-center justify-center text-red-500 text-center">
                    <AlertCircle size={32} className="mb-2" />
                    <p className="text-sm font-medium">Ops, algo deu errado. Tente novamente.</p>
                  </div>
                )}

                {status === LoadingState.SUCCESS && result && (
                  <div className="prose prose-sm prose-emerald max-w-none animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px] text-primary-600">
                        <Sparkles size={20} fill="currentColor" className="opacity-50" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{result}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                *Esta é uma sugestão gerada por IA e não substitui uma consulta profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;