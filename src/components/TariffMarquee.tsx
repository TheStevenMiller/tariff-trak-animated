
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

// Sample tariff data for initial display
const initialTariffs: TariffUpdate[] = [
  { id: 1, country: 'USA', product: 'Aluminum', percentChange: 10.5, date: '2023-06-15' },
  { id: 2, country: 'EU', product: 'Steel Components', percentChange: -5.2, date: '2023-07-03' },
  { id: 3, country: 'China', product: 'Electronics', percentChange: 7.8, date: '2023-07-10' },
  { id: 4, country: 'Canada', product: 'Timber', percentChange: 3.2, date: '2023-08-01' },
  { id: 5, country: 'Japan', product: 'Automotive Parts', percentChange: -2.1, date: '2023-08-12' },
  { id: 6, country: 'UK', product: 'Textiles', percentChange: 8.3, date: '2023-08-20' },
  { id: 7, country: 'Mexico', product: 'Agricultural Goods', percentChange: 1.5, date: '2023-09-01' },
  { id: 8, country: 'Australia', product: 'Minerals', percentChange: -3.7, date: '2023-09-15' },
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
    <div 
      className={cn(
        "w-full bg-tariff-slate text-white py-3 overflow-hidden border-b border-tariff-blue/20 transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex items-center">
        <div className="min-w-max px-4 font-semibold flex items-center gap-2 border-r border-tariff-blue/20">
          <TagIcon size={14} className="text-tariff-blue" />
          <span>LATEST TARIFF UPDATES</span>
        </div>
        
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
  );
};

export default TariffMarquee;
