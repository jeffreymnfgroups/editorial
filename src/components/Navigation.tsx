import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Featured',
      id: 'featured',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Latest Articles', id: 'featured' },
        { name: 'Editor\'s Picks', id: 'featured' },
        { name: 'Trending Now', id: 'featured' }
      ]
    },
    {
      name: 'Playbooks',
      id: 'playbooks',
      hasDropdown: true,
      dropdownItems: [
        { name: 'SaaS Launch', id: 'playbooks' },
        { name: 'Product Hunt', id: 'playbooks' },
        { name: 'No-Code MVP', id: 'playbooks' },
        { name: 'Marketing Toolkit', id: 'playbooks' }
      ]
    },
    {
      name: 'Tools',
      id: 'tools',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Stack Builder', id: 'tools' },
        { name: 'Analytics Dashboard', id: 'tools' },
        { name: 'Market Validator', id: 'tools' },
        { name: 'API Explorer', id: 'tools' }
      ]
    },
    {
      name: 'Reports',
      id: 'reports',
      hasDropdown: false
    }
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container-premium flex items-center justify-between h-16">
        <div className="text-xl font-semibold tracking-tight">MakerStack</div>
        
        <div className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => onSectionClick(item.id)}
                className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-surface-elevated/50"
                aria-expanded={activeDropdown === item.name}
                aria-haspopup={item.hasDropdown}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                )}
              </button>
              
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl shadow-xl py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <button
                      key={dropdownItem.name}
                      onClick={() => onSectionClick(dropdownItem.id)}
                      className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated/50 transition-colors duration-150"
                    >
                      {dropdownItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <Button 
          onClick={() => onSectionClick('subscribe')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Upgrade
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;