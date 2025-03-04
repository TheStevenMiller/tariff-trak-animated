
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-16 pb-8 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4">TariffTrak</h3>
            <p className="text-tariff-gray text-sm max-w-xs">
              The leading platform for global tariff monitoring and trade policy analysis.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-tariff-gray hover:text-tariff-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-tariff-gray hover:text-tariff-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-tariff-gray hover:text-tariff-blue transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-tariff-gray hover:text-tariff-blue transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-tariff-gray hover:text-tariff-blue text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tariff-gray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TariffTrak. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-tariff-gray hover:text-tariff-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-tariff-gray hover:text-tariff-blue text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-tariff-gray hover:text-tariff-blue text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
