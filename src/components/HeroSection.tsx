
import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
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
        <div className="flex flex-col items-center text-center">
          <div 
            className={cn(
              "space-y-6 transition-all duration-1000 delay-100 max-w-3xl",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-tariff-blue/10 text-tariff-blue rounded-full text-sm font-medium mb-2">
              <Shield size={14} className="mr-2" />
              Intelligent Tariff Monitoring
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight flex flex-col">
              <span>Track tariff changes in</span>
              <span className="text-tariff-blue">real time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-tariff-gray max-w-2xl mx-auto">
              Real-time monitoring and analysis of international trade policy that specifically impacts key U.S industries like grocery, retail & manufacturing. Map tariff changes to your product SKUs and GTINs to understand how much of your revenue is at risk.
            </p>
            
            <div className="flex justify-center pt-4">
              <Button size="lg" variant="outline" className="rounded-full">
                Book Demo
                <Calendar size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
