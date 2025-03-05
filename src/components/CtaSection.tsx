
import React, { useEffect, useState } from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const benefits = [
  "**Financial analysts:** Get up to date, product level information on how tariffs are being implemented",
  "**Supply Chain Operators:** Understand how much of your business is at risk from tariff disruptions",
  "**Import / Export teams:** Identify legal loopholes in how tariffs are being implemented",
  "**Grocery Operators:** Understand how tariffs might impact your most popular items",
  "**Legal teams:** Expedite your ability to understand HTS changes"
];

const CtaSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.querySelector('.cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section w-full py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto glass-morphism rounded-3xl p-8 md:p-12 relative">
        <div 
          className={cn(
            "grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Try now for <span className="text-tariff-blue">free</span></h2>
            <p className="text-tariff-gray">
              Join thousands of businesses that trust TariffTrak to navigate the complexities of international trade regulations.
            </p>
            
            <ul className="space-y-3 pt-2">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex items-center transition-all duration-500",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    "delay-[" + (index * 150 + 300) + "ms]"
                  )}
                >
                  <CheckCircle2 size={18} className="text-green-500 mr-2 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: benefit.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          </div>
          
          <div 
            className={cn(
              "lg:col-span-2 flex flex-col justify-center transition-all duration-1000 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-3 pt-2">
                <Button className="w-full rounded-full" size="lg">
                  Book demo
                  <Calendar size={16} className="ml-2" />
                </Button>
              </div>
              
              <p className="text-xs text-center text-tariff-gray pt-2">
                By signing up, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-3 -right-3 w-20 h-20 bg-tariff-blue/10 rounded-full blur-xl -z-10"></div>
        <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
      </div>
    </section>
  );
};

export default CtaSection;
