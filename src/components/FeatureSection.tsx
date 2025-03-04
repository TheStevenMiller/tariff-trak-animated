
import React, { useEffect, useState } from 'react';
import { 
  Bell, CheckCircle2, Globe, LineChart, Zap, 
  TrendingUp, ArrowUpRight, Settings
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
    title: "Trend Analysis",
    description: "Visualize historical tariff data to identify patterns and predict future changes."
  },
  {
    icon: <Globe className="text-tariff-blue" />,
    title: "Global Coverage",
    description: "Access comprehensive tariff information from 194 countries and customs territories."
  },
  {
    icon: <CheckCircle2 className="text-tariff-blue" />,
    title: "Compliance Tools",
    description: "Ensure your imports and exports meet all regulatory requirements with our compliance checkers."
  },
  {
    icon: <Zap className="text-tariff-blue" />,
    title: "API Integration",
    description: "Connect our tariff data directly to your ERP, supply chain, or custom systems."
  },
  {
    icon: <Settings className="text-tariff-blue" />,
    title: "Customizable Dashboard",
    description: "Tailor your monitoring interface to focus on the regions and products that matter to you."
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 bg-tariff-blue/10 text-tariff-blue rounded-full text-sm font-medium mb-6">
            <TrendingUp size={14} className="mr-2" />
            Comprehensive Monitoring
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to <span className="text-gradient">stay ahead</span></h2>
          <p className="text-lg text-tariff-gray max-w-2xl mx-auto">
            Our platform offers comprehensive tools to monitor, analyze, and respond to global tariff changes in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={cn(
                "feature-item glass-morphism p-6 rounded-xl transition-all duration-700 ease-out",
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
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-tariff-blue text-sm font-medium hover:underline group">
                  Learn more 
                  <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
