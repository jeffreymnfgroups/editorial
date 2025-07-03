
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowDown, Mail, Search, FileText, BarChart3, CircleArrowRight, TrendingUp, Users, Download, Play, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
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
      description: "Welcome to Editorial Excellence. Check your inbox for confirmation.",
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
    { name: "Technology", count: 142 },
    { name: "Business", count: 98 },
    { name: "Leadership", count: 76 },
    { name: "Innovation", count: 54 },
    { name: "Analytics", count: 89 },
    { name: "Strategy", count: 67 },
    { name: "Marketing", count: 43 },
    { name: "Finance", count: 32 }
  ];

  const filteredArticles = [
    {
      title: "AI Analytics Beyond the Hype",
      excerpt: "Separating reality from marketing in AI analytics space",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      topic: "Technology",
      readTime: "8 min"
    },
    {
      title: "Remote Work Economics",
      excerpt: "How distributed teams reshape global economic models",
      author: "Elena Rodriguez", 
      date: "Dec 10, 2024",
      topic: "Business",
      readTime: "12 min"
    },
    {
      title: "Leadership in Digital Age",
      excerpt: "Evolving management strategies for modern teams",
      author: "Sarah Chen",
      date: "Dec 8, 2024",
      topic: "Leadership",
      readTime: "10 min"
    }
  ].filter(article => selectedTopic === 'All' || article.topic === selectedTopic);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/40">
        <div className="container-premium flex items-center justify-between h-16">
          <div className="text-xl font-semibold tracking-tight">Editorial</div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('latest')} className="text-muted-foreground hover:text-foreground transition-colors">Latest</button>
            <button onClick={() => scrollToSection('playbooks')} className="text-muted-foreground hover:text-foreground transition-colors">Playbooks</button>
            <button onClick={() => scrollToSection('tools')} className="text-muted-foreground hover:text-foreground transition-colors">Tools</button>
            <button onClick={() => scrollToSection('reports')} className="text-muted-foreground hover:text-foreground transition-colors">Reports</button>
          </div>
          <Button 
            onClick={() => scrollToSection('subscribe')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Subscribe
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-sm" />
        </div>
        
        <div className="container-premium relative z-10 text-center animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Editorial Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Curated insights, exclusive frameworks, and data-driven intelligence for forward-thinking professionals
            </p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/70 backdrop-blur-sm border border-border/60 rounded-xl"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </form>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('latest')}
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
                placeholder="Search articles, playbooks, and insights..."
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

      {/* Bento Grid Section - Latest Insights */}
      <section id="latest" className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Stay informed with our most recent analysis and actionable insights
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
                  <BarChart3 className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors duration-500" />
                  <div className="absolute top-4 right-4">
                    <Play className="h-8 w-8 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">Featured</Badge>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      Digital Transformation Outlook 2024
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      Comprehensive analysis of how organizations are adapting to technological change and future workforce dynamics.
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
                <div className="text-3xl font-light text-primary mb-2">12.4k</div>
                <div className="text-sm text-muted-foreground">Active Readers</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-light text-primary mb-2">89%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
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

      {/* Playbooks Bento Grid */}
      <section id="playbooks" className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Premium Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Exclusive frameworks and guides from industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Strategy Framework",
                description: "Complete guide to building transformation strategies",
                downloads: "2.1k",
                image: playbookCover,
                fileSize: "4.2 MB"
              },
              {
                title: "Revenue Growth Playbook", 
                description: "Proven tactics for scaling in competitive markets",
                downloads: "1.8k",
                image: playbookCover,
                fileSize: "3.8 MB"
              },
              {
                title: "Leadership Excellence",
                description: "Modern approaches to high-performance teams",
                downloads: "3.2k",
                image: playbookCover,
                fileSize: "5.1 MB"
              }
            ].map((playbook, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={playbook.image} 
                    alt={playbook.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                    {playbook.fileSize}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{playbook.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {playbook.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{playbook.downloads} downloads</span>
                  </div>
                  <Button 
                    onClick={() => handleDownload(playbook.title)}
                    variant="outline" 
                    className="w-full rounded-2xl border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Bento Grid */}
      <section id="tools" className="section-padding bg-surface-secondary/50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Interactive Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Enhance your workflow with intelligent utilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Search className="h-10 w-10" />,
                title: "Market Research Assistant",
                description: "AI-powered competitive analysis and market insights",
                status: "Beta"
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Strategy Canvas",
                description: "Visual business model development and planning",
                status: "New"
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: "Report Generator",
                description: "Automated business insights and executive summaries",
                status: "Popular"
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
                    Launch Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Income Reports */}
      <section id="reports" className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Performance Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Transparent insights into our growth and reader engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Monthly Revenue", value: "$47.2k", change: "+12.5%", trend: "up" },
              { metric: "Subscriber Growth", value: "3,247", change: "+18.3%", trend: "up" },
              { metric: "Engagement Rate", value: "94.7%", change: "+2.1%", trend: "up" },
              { metric: "Content Views", value: "127k", change: "+24.8%", trend: "up" }
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

      {/* Topics Grid */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Browse Topics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Explore our comprehensive content library
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topics.map((topic, index) => (
              <Card 
                key={index} 
                onClick={() => setSelectedTopic(topic.name)}
                className={`bg-gradient-to-br from-card to-surface-elevated border border-border/40 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 ${
                  selectedTopic === topic.name ? 'ring-2 ring-primary ring-offset-2 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <h3 className={`font-semibold mb-2 transition-colors ${
                    selectedTopic === topic.name ? 'text-primary' : 'group-hover:text-primary'
                  }`}>
                    {topic.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{topic.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section id="subscribe" className="section-padding bg-surface-secondary/30">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Stay Informed</h2>
            <p className="text-xl text-muted-foreground mb-8 font-light">
              Join thousands of professionals receiving our weekly insights
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-xl"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl">
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
          <div className="text-center">
            <div className="text-2xl font-semibold mb-4">Editorial</div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Premium insights for forward-thinking professionals
            </p>
            <div className="flex justify-center space-x-6">
              <button className="text-muted-foreground hover:text-primary transition-colors">About</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Privacy</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Terms</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
