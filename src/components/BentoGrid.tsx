import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User } from 'lucide-react';

interface BentoCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type: 'article' | 'tool' | 'playbook' | 'featured';
  author?: string;
  readTime?: string;
  date?: string;
  gradient?: string;
  onClick: (id: string) => void;
}

interface BentoGridProps {
  cards: BentoCardProps[];
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  id,
  title,
  description,
  image,
  icon,
  size,
  type,
  author,
  readTime,
  date,
  gradient,
  onClick
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2'
  };

  const typeColors = {
    article: 'bg-blue-50 text-blue-700 border-blue-200',
    tool: 'bg-purple-50 text-purple-700 border-purple-200',
    playbook: 'bg-green-50 text-green-700 border-green-200',
    featured: 'bg-orange-50 text-orange-700 border-orange-200'
  };

  const backgroundStyle = gradient 
    ? { background: gradient }
    : image 
    ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <Card 
      className={`
        ${sizeClasses[size]} 
        group cursor-pointer overflow-hidden
        bg-white/80 backdrop-blur-sm border border-gray-200/60
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-500 ease-out
        rounded-3xl
      `}
      onClick={() => onClick(id)}
      style={backgroundStyle}
    >
      <div className={`h-full flex flex-col ${image ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent' : ''}`}>
        <CardContent className="p-6 flex-1 flex flex-col justify-between relative">
          {/* Content Overlay for Images */}
          {image && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl" />}
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <Badge className={`${typeColors[type]} rounded-full px-3 py-1 text-xs font-medium`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
              {icon && (
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                  {icon}
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className={`
              font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors
              ${size === 'large' ? 'text-2xl md:text-3xl' : size === 'medium' ? 'text-xl' : 'text-lg'}
              ${image ? 'text-white' : 'text-gray-900'}
            `}>
              {title}
            </h3>

            {/* Description */}
            <p className={`
              leading-relaxed mb-6 line-clamp-3
              ${size === 'large' ? 'text-base' : 'text-sm'}
              ${image ? 'text-gray-200' : 'text-gray-600'}
            `}>
              {description}
            </p>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {author && (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${image ? 'text-white' : 'text-gray-900'}`}>
                      {author}
                    </p>
                    {date && readTime && (
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{date}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{readTime}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className={`
                rounded-full p-2 group-hover:bg-blue-600 group-hover:text-white
                transition-all duration-300 hover:scale-110
                ${image ? 'text-white hover:bg-white/20' : 'text-gray-600'}
              `}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const BentoGrid: React.FC<BentoGridProps> = ({ cards, className = '' }) => {
  return (
    <div className={`
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6
      gap-6 auto-rows-[200px]
      ${className}
    `}>
      {cards.map((card) => (
        <BentoCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default BentoGrid;
export type { BentoCardProps };