
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight, TagIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TariffUpdate {
  id: number;
  country: string;
  product: string;
  percentChange: number;
  date: string;
}

// New tariff data as specified
const initialTariffs: TariffUpdate[] = [
  { id: 1, country: 'Canada', product: 'Orange Juice', percentChange: 18, date: '2023-10-15' },
  { id: 2, country: 'Canada', product: 'Chocolate Milk', percentChange: 14, date: '2023-10-15' },
  { id: 3, country: 'Mexico', product: 'Red Wine', percentChange: 6, date: '2023-10-15' },
];

const TariffMarquee: React.FC = () => {
  const [tariffs, setTariffs] = useState<TariffUpdate[]>(initialTariffs);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div 
        className={cn(
          "w-full bg-tariff-slate text-white py-3 overflow-hidden border-b border-tariff-blue/20 transition-opacity duration-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex items-center">
          <div className="inline-flex animate-marquee whitespace-nowrap">
            {tariffs.map((tariff) => (
              <div 
                key={tariff.id} 
                className="inline-flex items-center mx-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm"
              >
                <span className="font-medium mr-2">{tariff.country}</span>
                <span className="text-tariff-light/80 mr-2">{tariff.product}</span>
                <span 
                  className={`inline-flex items-center ${
                    tariff.percentChange > 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {tariff.percentChange > 0 ? (
                    <ArrowUpRight size={14} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={14} className="mr-1" />
                  )}
                  {Math.abs(tariff.percentChange)}%
                </span>
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="inline-flex animate-marquee whitespace-nowrap">
            {tariffs.map((tariff) => (
              <div 
                key={`dup-${tariff.id}`} 
                className="inline-flex items-center mx-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm"
              >
                <span className="font-medium mr-2">{tariff.country}</span>
                <span className="text-tariff-light/80 mr-2">{tariff.product}</span>
                <span 
                  className={`inline-flex items-center ${
                    tariff.percentChange > 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {tariff.percentChange > 0 ? (
                    <ArrowUpRight size={14} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={14} className="mr-1" />
                  )}
                  {Math.abs(tariff.percentChange)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Label moved below the marquee */}
      <div className="w-full bg-tariff-blue/10 border-b border-tariff-blue/20 py-2">
        <div className="container mx-auto px-4">
          <div className="font-semibold flex items-center gap-2 text-tariff-slate">
            <TagIcon size={14} className="text-tariff-blue" />
            <span>LATEST TARIFF UPDATES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffMarquee;
