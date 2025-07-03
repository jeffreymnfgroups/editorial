import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowDown, Mail, Search, FileText, BarChart3, CircleArrowRight, TrendingUp, Users, Download, Play, ExternalLink, Zap, Code, Layers } from 'lucide-react';
import author1 from '@/assets/author-1.jpg';
import author2 from '@/assets/author-2.jpg';
import playbookCover from '@/assets/playbook-1.jpg';

const Index = () => {
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to MakerStack. Check your inbox for confirmation.",
    });
    setEmail('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    toast({
      title: "Search initiated",
      description: `Searching for "${searchQuery}"...`,
    });
  };

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

  const filteredArticles = [
    {
      title: "Building Scalable SaaS Architecture",
      excerpt: "Modern patterns for building resilient, scalable applications",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      topic: "Development",
      readTime: "8 min"
    },
    {
      title: "Product-Led Growth Strategies",
      excerpt: "How to build products that sell themselves through user experience",
      author: "Elena Rodriguez", 
      date: "Dec 10, 2024",
      topic: "Product",
      readTime: "12 min"
    },
    {
      title: "Design Systems at Scale",
      excerpt: "Creating consistent, maintainable design languages for growing teams",
      author: "Sarah Chen",
      date: "Dec 8, 2024",
      topic: "Design",
      readTime: "10 min"
    }
  ].filter(article => selectedTopic === 'All' || article.topic === selectedTopic);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/40">
        <div className="container-premium flex items-center justify-between h-16">
          <div className="text-xl font-semibold tracking-tight">MakerStack</div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('featured')} className="text-muted-foreground hover:text-foreground transition-colors">Featured</button>
            <button onClick={() => scrollToSection('playbooks')} className="text-muted-foreground hover:text-foreground transition-colors">Playbooks</button>
            <button onClick={() => scrollToSection('tools')} className="text-muted-foreground hover:text-foreground transition-colors">Tools</button>
            <button onClick={() => scrollToSection('reports')} className="text-muted-foreground hover:text-foreground transition-colors">Reports</button>
          </div>
          <Button 
            onClick={() => scrollToSection('subscribe')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Upgrade
          </Button>
        </div>
      </nav>

      {/* Hero Section - Clean without background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background via-surface-elevated to-surface-secondary">
        <div className="container-premium relative z-10 text-center animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              MakerStack
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Premium insights, tools, and frameworks for makers building the future
            </p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/70 backdrop-blur-sm border border-border/60 rounded-xl h-12"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl h-12">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </form>
            
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
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, playbooks, and tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-2xl border-border/40 bg-background/80 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl"
                size="sm"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Section - Bento Grid */}
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
              >
                {topic.name} ({topic.count})
              </button>
            ))}
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Featured Article - Large */}
            <Card className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-card via-card to-surface-elevated border border-border/40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer">
              <div className="h-full flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Code className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors duration-500" />
                  <div className="absolute top-4 right-4">
                    <Play className="h-8 w-8 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">Featured</Badge>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      The Future of No-Code Development
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      How visual development platforms are democratizing software creation and empowering a new generation of makers.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={author1} alt="Author" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-medium">Sarah Chen</p>
                        <p className="text-sm text-muted-foreground">Dec 15, 2024 • 15 min read</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
                      <CircleArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Stats Cards */}
            <Card className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-light text-primary mb-2">24.7k</div>
                <div className="text-sm text-muted-foreground">Active Makers</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-light text-primary mb-2">156</div>
                <div className="text-sm text-muted-foreground">Tools Built</div>
              </CardContent>
            </Card>

            {/* Article Cards */}
            {filteredArticles.slice(0, 2).map((article, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <Badge className="w-fit mb-3 bg-surface-secondary text-muted-foreground border-border/40 rounded-full px-3 py-1 text-xs">
                    {article.topic}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={author2} alt="Author" className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-medium">{article.author}</p>
                        <p className="text-xs text-muted-foreground">{article.date} • {article.readTime}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
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

            {/* Right Side - 30% */}
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
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-elevated transition-colors duration-300 cursor-pointer group">
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">{item.topic}</p>
                          <p className="text-sm text-muted-foreground">{item.engagement} engagement</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{item.trend}</p>
                          <TrendingUp className="h-4 w-4 text-green-600 ml-auto" />
                        </div>
                      </div>
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
                icon: <Search className="h-10 w-10" />,
                title: "Market Validator",
                description: "Research and validate your product ideas",
                status: "Beta"
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
            {[
              {
                title: "Building Your First SaaS in 30 Days",
                excerpt: "A step-by-step guide to launching your minimum viable product",
                author: "Alex Rivera",
                date: "Dec 14, 2024",
                category: "Tutorial",
                readTime: "12 min"
              },
              {
                title: "The Psychology of Product Pricing",
                excerpt: "How to price your product for maximum conversion and growth",
                author: "Maya Patel",
                date: "Dec 13, 2024", 
                category: "Strategy",
                readTime: "8 min"
              },
              {
                title: "No-Code vs Low-Code: Which to Choose?",
                excerpt: "Comparing platforms and making the right choice for your project",
                author: "Jordan Kim",
                date: "Dec 12, 2024",
                category: "Development",
                readTime: "10 min"
              },
              {
                title: "User Onboarding That Converts",
                excerpt: "Design patterns and strategies for better user activation",
                author: "Sam Chen",
                date: "Dec 11, 2024",
                category: "UX Design",
                readTime: "15 min"
              },
              {
                title: "Scaling Your Side Project",
                excerpt: "When and how to transition from hobby to business",
                author: "Taylor Swift",
                date: "Dec 10, 2024",
                category: "Business",
                readTime: "11 min"
              },
              {
                title: "API-First Development Approach",
                excerpt: "Building scalable applications with API-first architecture",
                author: "Chris Park",
                date: "Dec 9, 2024",
                category: "Development",
                readTime: "14 min"
              }
            ].map((article, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-t-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <FileText className="h-12 w-12 text-primary/40 group-hover:text-primary/60 transition-colors duration-500" />
                </div>
                <CardContent className="p-6">
                  <Badge className="w-fit mb-3 bg-surface-secondary text-muted-foreground border-border/40 rounded-full px-3 py-1 text-xs">
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{article.author}</p>
                      <p className="text-xs text-muted-foreground">{article.date} • {article.readTime}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-xl h-12"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl h-12">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </form>
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
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Articles</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Playbooks</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Tools</button>
                <button className="block text-muted-foreground hover:text-primary transition-colors text-sm">Reports</button>
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