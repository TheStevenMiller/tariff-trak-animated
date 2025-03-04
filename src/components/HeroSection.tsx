
import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Globe, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div 
            className={cn(
              "space-y-6 transition-all duration-1000 delay-100",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-tariff-blue/10 text-tariff-blue rounded-full text-sm font-medium mb-2">
              <Shield size={14} className="mr-2" />
              Intelligent Tariff Monitoring
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Track global tariffs with <span className="text-gradient">precision</span>
            </h1>
            
            <p className="text-lg md:text-xl text-tariff-gray max-w-lg">
              Real-time monitoring and analysis of international trade policies and tariff changes. Stay informed, adapt quickly, and optimize your supply chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-full">
                Schedule a Demo
              </Button>
            </div>
            
            <div className="pt-8 flex items-center space-x-6">
              <p className="text-sm text-tariff-gray">Trusted by global leaders</p>
              <div className="flex space-x-6">
                <div className="h-8 w-20 bg-tariff-gray/20 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-tariff-gray/20 rounded animate-pulse"></div>
                <div className="h-8 w-16 bg-tariff-gray/20 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative z-10 glass-morphism rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold text-tariff-slate">Global Tariff Dashboard</h3>
                  <p className="text-sm text-tariff-gray">Live data overview</p>
                </div>
                <div className="flex space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-r from-tariff-blue/10 to-blue-500/10 rounded-lg flex items-end justify-between p-4">
                  <div className="h-12 w-6 bg-tariff-blue/40 rounded-t"></div>
                  <div className="h-20 w-6 bg-tariff-blue/60 rounded-t"></div>
                  <div className="h-16 w-6 bg-tariff-blue/50 rounded-t"></div>
                  <div className="h-24 w-6 bg-tariff-blue/70 rounded-t"></div>
                  <div className="h-32 w-6 bg-tariff-blue rounded-t"></div>
                  <div className="h-14 w-6 bg-tariff-blue/40 rounded-t"></div>
                  <div className="h-22 w-6 bg-tariff-blue/80 rounded-t"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/40 dark:bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Globe size={16} className="text-tariff-blue" />
                      <span className="text-sm font-medium">194</span>
                    </div>
                    <p className="text-xs text-tariff-gray mt-1">Countries tracked</p>
                  </div>
                  
                  <div className="bg-white/40 dark:bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <BarChart3 size={16} className="text-tariff-blue" />
                      <span className="text-sm font-medium">15.3K</span>
                    </div>
                    <p className="text-xs text-tariff-gray mt-1">Tariff updates/mo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-tariff-blue/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
