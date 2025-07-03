import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  fullContent?: string;
  author: string;
  date: string;
  topic: string;
  readTime: string;
  image?: string;
  onClick?: () => void;
  searchQuery?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  fullContent,
  author,
  date,
  topic,
  readTime,
  image,
  onClick,
  searchQuery
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-primary/20 text-primary rounded px-1">
          {part}
        </mark>
      ) : part
    );
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullContent) {
      setIsExpanded(!isExpanded);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Card 
      className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <Badge className="w-fit mb-3 bg-surface-secondary text-muted-foreground border-border/40 rounded-full px-3 py-1 text-xs">
          {topic}
        </Badge>
        
        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {highlightText(title, searchQuery)}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
          {highlightText(excerpt, searchQuery)}
        </p>
        
        {isExpanded && fullContent && (
          <div className="mb-4 p-4 bg-surface-elevated rounded-xl animate-in slide-in-from-top-2 duration-300">
            <p className="text-sm leading-relaxed text-foreground">
              {highlightText(fullContent, searchQuery)}
            </p>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-primary">
                {author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{author}</p>
              <p className="text-xs text-muted-foreground">{date} • {readTime}</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReadMore}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Show less' : 'Read more'}
          >
            {fullContent ? (
              <>
                {isExpanded ? 'Show Less' : 'Read More'}
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </>
            ) : (
              <>
                Read More
                <ExternalLink className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;