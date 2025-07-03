import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowDown, FileText, BarChart3, CircleArrowRight, TrendingUp, Users, Download, Play, Zap, Code, Layers } from 'lucide-react';

// Components
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';

// Assets
import author1 from '@/assets/author-1.jpg';
import author2 from '@/assets/author-2.jpg';
import playbookCover from '@/assets/playbook-1.jpg';

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);
  const { toast } = useToast();

  const allArticles = [
    {
      id: 1,
      title: "Building Scalable SaaS Architecture",
      excerpt: "Modern patterns for building resilient, scalable applications",
      fullContent: "In this comprehensive guide, we'll explore the fundamental principles of building scalable SaaS architecture. From microservices to database sharding, learn how to design systems that can handle millions of users while maintaining performance and reliability.",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      topic: "Development",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop"
    },
    {
      id: 2,
      title: "Product-Led Growth Strategies",
      excerpt: "How to build products that sell themselves through user experience",
      fullContent: "Product-led growth is revolutionizing how companies acquire, activate, and retain customers. Discover the strategies used by companies like Slack, Dropbox, and Zoom to create viral growth loops and reduce customer acquisition costs.",
      author: "Elena Rodriguez", 
      date: "Dec 10, 2024",
      topic: "Product",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
    },
    {
      id: 3,
      title: "Design Systems at Scale",
      excerpt: "Creating consistent, maintainable design languages for growing teams",
      fullContent: "As your team grows, maintaining design consistency becomes increasingly challenging. Learn how to build and maintain design systems that scale with your organization while empowering designers and developers to work more efficiently.",
      author: "Sarah Chen",
      date: "Dec 8, 2024",
      topic: "Design",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop"
    },
    {
      id: 4,
      title: "Building Your First SaaS in 30 Days",
      excerpt: "A step-by-step guide to launching your minimum viable product",
      fullContent: "From idea to launch in just 30 days. This practical guide walks you through every step of building and launching your first SaaS product, including market validation, MVP development, and customer acquisition strategies.",
      author: "Alex Rivera",
      date: "Dec 14, 2024",
      topic: "Tutorial",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
    },
    {
      id: 5,
      title: "The Psychology of Product Pricing",
      excerpt: "How to price your product for maximum conversion and growth",
      fullContent: "Pricing is both an art and a science. Understand the psychological principles behind effective pricing strategies and learn how to optimize your pricing for different customer segments and market conditions.",
      author: "Maya Patel",
      date: "Dec 13, 2024", 
      topic: "Strategy",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop"
    },
    {
      id: 6,
      title: "No-Code vs Low-Code: Which to Choose?",
      excerpt: "Comparing platforms and making the right choice for your project",
      fullContent: "The no-code and low-code movement is democratizing software development. Learn the key differences between these approaches and how to choose the right platform for your specific use case and technical requirements.",
      author: "Jordan Kim",
      date: "Dec 12, 2024",
      topic: "Development",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=450&fit=crop"
    }
  ];

  const topics = [
    { name: "All", count: 541 },
    { name: "Development", count: 142 },
    { name: "Design", count: 98 },
    { name: "Product", count: 76 },
    { name: "Growth", count: 54 },
    { name: "Analytics", count: 89 },
    { name: "Strategy", count: 67 },
    { name: "Marketing", count: 43 },
    { name: "Startup", count: 32 }
  ];

  useEffect(() => {
    let filtered = allArticles;

    // Filter by topic
    if (selectedTopic !== 'All') {
      filtered = filtered.filter(article => article.topic === selectedTopic);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [selectedTopic, searchQuery]);

  const handleDownload = (title: string) => {
    toast({
      title: "Download started",
      description: `Downloading "${title}"...`,
    });
  };

  const handleToolLaunch = (toolName: string) => {
    toast({
      title: "Tool launched",
      description: `Opening ${toolName}...`,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleArticleClick = (articleId: number) => {
    toast({
      title: "Article opened",
      description: "Navigating to full article...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation onSectionClick={scrollToSection} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background via-surface-elevated to-surface-secondary">
        <div className="container-premium relative z-10 text-center animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              MakerStack
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Premium insights, tools, and frameworks for makers building the future
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <NewsletterSignup variant="hero" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('featured')}
                variant="outline" 
                className="bg-background/70 backdrop-blur-sm border border-border/60 hover:bg-background/90 text-foreground px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <ArrowDown className="mr-3 h-4 w-4" />
                Explore Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="section-padding bg-surface-secondary/50">
        <div className="container-premium">
          <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
          {searchQuery && (
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Found {filteredArticles.length} results for "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Featured Content</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Handpicked insights and resources for ambitious makers
            </p>
          </div>
          
          {/* Topic Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {topics.slice(0, 6).map((topic) => (
              <button
                key={topic.name}
                onClick={() => setSelectedTopic(topic.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTopic === topic.name
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-surface-elevated hover:bg-surface-secondary text-muted-foreground hover:text-foreground'
                }`}
                aria-pressed={selectedTopic === topic.name}
              >
                {topic.name} ({topic.count})
              </button>
            ))}
          </div>
          
          {/* Featured Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                fullContent={article.fullContent}
                author={article.author}
                date={article.date}
                topic={article.topic}
                readTime={article.readTime}
                image={article.image}
                searchQuery={searchQuery}
                onClick={() => handleArticleClick(article.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Playbooks Section - 70/30 Split */}
      <section id="playbooks" className="section-padding bg-surface-secondary/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Maker Playbooks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Step-by-step guides and frameworks from successful makers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            {/* Left Side - 70% */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Playbook Card */}
              <Card className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={playbookCover} 
                    alt="SaaS Launch Playbook"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    Premium
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    The Complete SaaS Launch Playbook
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    From idea validation to first paying customers. A comprehensive guide covering market research, MVP development, pricing strategy, and growth tactics.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">4.2k downloads</span>
                    <Badge className="bg-primary/10 text-primary border-primary/20">142 pages</Badge>
                  </div>
                  <Button 
                    onClick={() => handleDownload("SaaS Launch Playbook")}
                    className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Playbook
                  </Button>
                </CardContent>
              </Card>

              {/* Three Sub-cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Product Hunt Launch Guide",
                    downloads: "1.8k",
                    pages: "24"
                  },
                  {
                    title: "No-Code MVP Builder",
                    downloads: "2.1k", 
                    pages: "36"
                  },
                  {
                    title: "Maker Marketing Toolkit",
                    downloads: "1.5k",
                    pages: "28"
                  }
                ].map((playbook, index) => (
                  <Card key={index} className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{playbook.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{playbook.downloads} downloads</span>
                        <span>{playbook.pages} pages</span>
                      </div>
                      <Button 
                        onClick={() => handleDownload(playbook.title)}
                        variant="outline" 
                        size="sm"
                        className="w-full rounded-xl border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Side - 30% Trending Topics */}
            <div className="lg:col-span-3">
              <Card className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6">Trending Topics</h3>
                  <div className="space-y-4">
                    {[
                      { topic: "AI Integration", engagement: "94%", trend: "+12%" },
                      { topic: "No-Code Tools", engagement: "87%", trend: "+8%" },
                      { topic: "Product Strategy", engagement: "82%", trend: "+15%" },
                      { topic: "Growth Hacking", engagement: "79%", trend: "+6%" },
                      { topic: "User Research", engagement: "76%", trend: "+11%" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTopic(item.topic)}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-elevated transition-colors duration-300 cursor-pointer group text-left"
                        aria-label={`View ${item.topic} articles`}
                      >
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">{item.topic}</p>
                          <p className="text-sm text-muted-foreground">{item.engagement} engagement</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{item.trend}</p>
                          <TrendingUp className="h-4 w-4 text-green-600 ml-auto" />
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Maker Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Powerful utilities to accelerate your building process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers className="h-10 w-10" />,
                title: "Stack Builder",
                description: "Curate and compare tech stacks for your next project",
                status: "New"
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Analytics Dashboard",
                description: "Track your product metrics and user engagement",
                status: "Popular"
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "API Explorer",
                description: "Discover and test APIs for your applications",
                status: "Featured"
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Automation Builder",
                description: "Create workflows without writing code",
                status: "Premium"
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: "Documentation Generator",
                description: "Auto-generate docs from your codebase",
                status: "Beta"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Team Collaboration Hub",
                description: "Coordinate projects with your team members",
                status: "Coming Soon"
              }
            ].map((tool, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-8">
                  <div className="relative">
                    <div className="bg-primary/10 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary">
                        {tool.icon}
                      </div>
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-primary/10 text-primary border-primary/20 rounded-full text-xs">
                      {tool.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {tool.description}
                  </p>
                  <Button 
                    onClick={() => handleToolLaunch(tool.title)}
                    variant="outline" 
                    className="w-full rounded-2xl border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Income Reports */}
      <section id="reports" className="section-padding bg-surface-secondary/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Growth Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Transparent insights into our community growth and engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Monthly Revenue", value: "$67.4k", change: "+18.2%", trend: "up" },
              { metric: "Active Makers", value: "24.7k", change: "+24.1%", trend: "up" },
              { metric: "Tools Created", value: "156", change: "+31.5%", trend: "up" },
              { metric: "Community Growth", value: "89.3%", change: "+12.7%", trend: "up" }
            ].map((report, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{report.metric}</div>
                  <div className="text-3xl font-light mb-2">{report.value}</div>
                  <div className={`text-sm flex items-center ${report.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {report.change}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles - 2x3 Bento Grid */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Fresh insights and tutorials from the maker community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                fullContent={article.fullContent}
                author={article.author}
                date={article.date}
                topic={article.topic}
                readTime={article.readTime}
                image={article.image}
                searchQuery={searchQuery}
                onClick={() => handleArticleClick(article.id)}
              />
            ))}
          </div>
          
          {filteredArticles.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching "{searchQuery}"
              </p>
              <Button 
                onClick={handleClearSearch}
                variant="outline"
                className="mt-4"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section id="subscribe" className="section-padding bg-surface-secondary/50">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Join the Community</h2>
            <p className="text-xl text-muted-foreground mb-8 font-light">
              Get weekly insights, tools, and resources delivered to your inbox
            </p>
            <NewsletterSignup variant="footer" className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-surface-secondary/30 backdrop-blur-xl">
        <div className="container-premium py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-semibold mb-4">MakerStack</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering makers with premium insights, tools, and community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Content</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('featured')} className="block text-muted-foreground hover:text-primary transition-colors text-sm">Articles</button>
                <button onClick={() => scrollToSection('playbooks')} className="block text-muted-foreground hover:text-primary transition-colors text-sm">Playbooks</button>
                <button onClick={() => scrollToSection('tools')} className="block text-muted-foreground hover:text-primary transition-colors text-sm">Tools</button>
                <button onClick={() => scrollToSection('reports')} className="block text-muted-foreground hover:text-primary transition-colors text-sm">Reports</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Discord</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Newsletter</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">About</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Terms</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Contact</button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 MakerStack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;