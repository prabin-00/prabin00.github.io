import { Link } from 'react-router-dom'
import { Code, Zap, Layers, Globe, ArrowRight, CheckCircle } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Code-First Approach",
      description: "Build landing pages with clean, maintainable code. No bloated drag-and-drop builders."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for performance with modern frameworks and best practices built-in."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Reusable Components",
      description: "Create once, use everywhere. Build a library of components for your projects."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Deploy Anywhere",
      description: "Export your code and deploy to any platform - Vercel, Netlify, or your own server."
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for personal projects",
      features: ["5 Projects", "Basic Templates", "Community Support", "Export Code"],
      popular: false
    },
    {
      name: "Pro",
      price: "$19/mo",
      description: "For professional developers",
      features: ["Unlimited Projects", "Premium Templates", "Priority Support", "Custom Domains", "Analytics", "Team Collaboration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations",
      features: ["Everything in Pro", "Dedicated Support", "Custom Integrations", "SLA", "Advanced Security", "Training Sessions"],
      popular: false
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Landing Pages
            <br />
            <span className="text-gradient">With Code</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The developer-first platform for creating stunning, high-performance landing pages. 
            Write code, not drag-and-drop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/editor" 
              className="gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              Start Building Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#how-it-works"
              className="glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Kodofy?</h2>
            <p className="text-xl text-gray-300">Built by developers, for developers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl card-hover">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Three simple steps to your perfect landing page</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
              <p className="text-gray-400">Start with a professionally designed template or build from scratch</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Customize with Code</h3>
              <p className="text-gray-400">Edit components using React, Tailwind CSS, and your favorite tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Deploy Instantly</h3>
              <p className="text-gray-400">Export your code or deploy directly to your preferred hosting platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`glass-effect p-8 rounded-xl card-hover ${plan.popular ? 'border-primary border-2' : ''}`}
              >
                {plan.popular && (
                  <div className="text-primary font-semibold mb-2">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/editor"
                  className={`block w-full py-3 rounded-full font-semibold text-center transition-colors ${
                    plan.popular 
                      ? 'gradient-bg hover:opacity-90' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers creating beautiful landing pages with Kodofy
          </p>
          <Link 
            to="/editor" 
            className="gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Start Building Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
