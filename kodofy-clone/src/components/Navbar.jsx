import { Link } from 'react-router-dom'
import { Code, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gradient">Kodofy</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Link 
              to="/editor" 
              className="gradient-bg px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Start Building
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
              <Link 
                to="/editor" 
                className="gradient-bg px-6 py-2 rounded-full font-semibold text-center"
              >
                Start Building
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
