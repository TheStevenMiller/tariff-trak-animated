
import React, { useEffect, useState } from 'react';
import { 
  Bell, Globe, LineChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Bell className="text-tariff-blue" />,
    title: "Real-time Alerts",
    description: "Receive instant notifications on tariff changes affecting your products and markets."
  },
  {
    icon: <LineChart className="text-tariff-blue" />,
    title: "Grocery Focused",
    description: "Get sku and GTIN level granularity of specific products that will be impacted."
  },
  {
    icon: <Globe className="text-tariff-blue" />,
    title: "Canada & Mexico",
    description: "Access comprehensive tariff information from the most important trade partners for U.S. grocery retailers."
  }
];

const FeatureSection: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleFeatures(prev => [...prev, index]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-item').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={cn(
                "feature-item glass-morphism p-6 rounded-xl transition-all duration-700 ease-out",
                "flex-1 min-w-[280px]",
                visibleFeatures.includes(index) 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0",
                "delay-[" + (index * 100) + "ms]"
              )}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full mb-5 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-tariff-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
