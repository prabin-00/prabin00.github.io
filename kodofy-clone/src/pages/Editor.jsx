import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Type, Image, Layout, Code, Save, Download, Eye, 
  Monitor, Smartphone, Tablet, Trash2, MoveUp, MoveDown,
  ChevronLeft
} from 'lucide-react'

const Editor = () => {
  const [components, setComponents] = useState([
    { id: 1, type: 'header', content: { title: 'Welcome to My Landing Page', subtitle: 'Build something amazing today' } },
    { id: 2, type: 'text', content: { text: 'This is a sample paragraph. Edit me to add your own content!' } },
    { id: 3, type: 'button', content: { text: 'Get Started', link: '#' } },
  ])
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [previewMode, setPreviewMode] = useState('desktop')
  const [showCode, setShowCode] = useState(false)

  const addComponent = (type) => {
    const newComponent = {
      id: Date.now(),
      type,
      content: getDefaultContent(type)
    }
    setComponents([...components, newComponent])
    setSelectedComponent(newComponent.id)
  }

  const getDefaultContent = (type) => {
    switch(type) {
      case 'header':
        return { title: 'New Header', subtitle: 'Add your subtitle here' }
      case 'text':
        return { text: 'Add your text content here' }
      case 'image':
        return { src: 'https://via.placeholder.com/800x400', alt: 'Placeholder image' }
      case 'button':
        return { text: 'Click Me', link: '#' }
      case 'feature':
        return { title: 'Feature', description: 'Describe your feature' }
      default:
        return {}
    }
  }

  const updateComponent = (id, newContent) => {
    setComponents(components.map(comp => 
      comp.id === id ? { ...comp, content: newContent } : comp
    ))
  }

  const deleteComponent = (id) => {
    setComponents(components.filter(comp => comp.id !== id))
    if (selectedComponent === id) {
      setSelectedComponent(null)
    }
  }

  const moveComponent = (id, direction) => {
    const index = components.findIndex(comp => comp.id === id)
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === components.length - 1)) {
      return
    }
    
    const newComponents = [...components]
    const newIndex = direction === 'up' ? index - 1 : index + 1
    ;[newComponents[index], newComponents[newIndex]] = [newComponents[newIndex], newComponents[index]]
    setComponents(newComponents)
  }

  const generateCode = () => {
    return `import React from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      ${components.map(comp => generateComponentCode(comp)).join('\n      ')}
    </div>
  )
}`
  }

  const generateComponentCode = (comp) => {
    switch(comp.type) {
      case 'header':
        return `<header className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">${comp.content.title}</h1>
        <p className="text-xl text-gray-600">${comp.content.subtitle}</p>
      </header>`
      case 'text':
        return `<section className="py-12 px-4 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">${comp.content.text}</p>
      </section>`
      case 'image':
        return `<section className="py-12 px-4">
        <img src="${comp.content.src}" alt="${comp.content.alt}" className="max-w-full h-auto rounded-lg" />
      </section>`
      case 'button':
        return `<section className="py-8 px-4 text-center">
        <a href="${comp.content.link}" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
          ${comp.content.text}
        </a>
      </section>`
      default:
        return ''
    }
  }

  const renderComponent = (comp) => {
    switch(comp.type) {
      case 'header':
        return (
          <div className="py-20 px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{comp.content.title}</h1>
            <p className="text-xl text-gray-300">{comp.content.subtitle}</p>
          </div>
        )
      case 'text':
        return (
          <section className="py-12 px-4 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">{comp.content.text}</p>
          </section>
        )
      case 'image':
        return (
          <section className="py-12 px-4">
            <img src={comp.content.src} alt={comp.content.alt} className="max-w-full h-auto rounded-lg" />
          </section>
        )
      case 'button':
        return (
          <section className="py-8 px-4 text-center">
            <button className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90">
              {comp.content.text}
            </button>
          </section>
        )
      case 'feature':
        return (
          <section className="py-12 px-4">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{comp.content.title}</h3>
              <p className="text-gray-400">{comp.content.description}</p>
            </div>
          </section>
        )
      default:
        return null
    }
  }

  const selectedComp = components.find(c => c.id === selectedComponent)

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Left Sidebar - Components */}
      <div className="w-64 glass-effect border-r border-white/10 p-4 overflow-y-auto">
        <Link to="/" className="flex items-center text-gray-400 hover:text-white mb-6">
          <ChevronLeft className="h-5 w-5 mr-1" /> Back
        </Link>
        <h3 className="font-semibold mb-4">Components</h3>
        <div className="space-y-2">
          <button 
            onClick={() => addComponent('header')}
            className="w-full glass-effect p-3 rounded-lg flex items-center hover:bg-white/10 transition-colors"
          >
            <Type className="h-5 w-5 mr-2" /> Header
          </button>
          <button 
            onClick={() => addComponent('text')}
            className="w-full glass-effect p-3 rounded-lg flex items-center hover:bg-white/10 transition-colors"
          >
            <Layout className="h-5 w-5 mr-2" /> Text
          </button>
          <button 
            onClick={() => addComponent('image')}
            className="w-full glass-effect p-3 rounded-lg flex items-center hover:bg-white/10 transition-colors"
          >
            <Image className="h-5 w-5 mr-2" /> Image
          </button>
          <button 
            onClick={() => addComponent('button')}
            className="w-full glass-effect p-3 rounded-lg flex items-center hover:bg-white/10 transition-colors"
          >
            <Code className="h-5 w-5 mr-2" /> Button
          </button>
          <button 
            onClick={() => addComponent('feature')}
            className="w-full glass-effect p-3 rounded-lg flex items-center hover:bg-white/10 transition-colors"
          >
            <Layout className="h-5 w-5 mr-2" /> Feature
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 glass-effect p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-primary' : 'hover:bg-white/10'}`}
              >
                <Monitor className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setPreviewMode('tablet')}
                className={`p-2 rounded ${previewMode === 'tablet' ? 'bg-primary' : 'hover:bg-white/10'}`}
              >
                <Tablet className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-primary' : 'hover:bg-white/10'}`}
              >
                <Smartphone className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowCode(!showCode)}
                className="glass-effect px-4 py-2 rounded flex items-center hover:bg-white/10"
              >
                <Code className="h-5 w-5 mr-2" /> {showCode ? 'Hide Code' : 'View Code'}
              </button>
              <button className="gradient-bg px-4 py-2 rounded flex items-center hover:opacity-90">
                <Save className="h-5 w-5 mr-2" /> Save
              </button>
              <button className="glass-effect px-4 py-2 rounded flex items-center hover:bg-white/10">
                <Download className="h-5 w-5 mr-2" /> Export
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div 
            className={`glass-effect rounded-lg transition-all duration-300 ${
              previewMode === 'mobile' ? 'max-w-sm mx-auto' : 
              previewMode === 'tablet' ? 'max-w-2xl mx-auto' : 'max-w-5xl'
            }`}
          >
            {components.length === 0 ? (
              <div className="py-20 text-center text-gray-400">
                <Layout className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Add components from the left sidebar</p>
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {components.map((comp) => (
                  <div 
                    key={comp.id}
                    onClick={() => setSelectedComponent(comp.id)}
                    className={`relative group cursor-pointer transition-all ${
                      selectedComponent === comp.id ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-white/50'
                    }`}
                  >
                    {renderComponent(comp)}
                    
                    {selectedComponent === comp.id && (
                      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => { e.stopPropagation(); moveComponent(comp.id, 'up'); }}
                          className="glass-effect p-2 rounded hover:bg-white/20"
                        >
                          <MoveUp className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); moveComponent(comp.id, 'down'); }}
                          className="glass-effect p-2 rounded hover:bg-white/20"
                        >
                          <MoveDown className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); deleteComponent(comp.id); }}
                          className="glass-effect p-2 rounded hover:bg-red-500/50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Properties */}
      {selectedComp && (
        <div className="w-80 glass-effect border-l border-white/10 p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4">Properties</h3>
          
          {selectedComp.type === 'header' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Title</label>
                <input 
                  type="text"
                  value={selectedComp.content.title}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, title: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subtitle</label>
                <textarea 
                  value={selectedComp.content.subtitle}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, subtitle: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                  rows={3}
                />
              </div>
            </div>
          )}

          {selectedComp.type === 'text' && (
            <div>
              <label className="block text-sm text-gray-400 mb-2">Text Content</label>
              <textarea 
                value={selectedComp.content.text}
                onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, text: e.target.value })}
                className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                rows={6}
              />
            </div>
          )}

          {selectedComp.type === 'image' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Image URL</label>
                <input 
                  type="text"
                  value={selectedComp.content.src}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, src: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Alt Text</label>
                <input 
                  type="text"
                  value={selectedComp.content.alt}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, alt: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                />
              </div>
            </div>
          )}

          {selectedComp.type === 'button' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Button Text</label>
                <input 
                  type="text"
                  value={selectedComp.content.text}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, text: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Link URL</label>
                <input 
                  type="text"
                  value={selectedComp.content.link}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, link: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                />
              </div>
            </div>
          )}

          {selectedComp.type === 'feature' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Title</label>
                <input 
                  type="text"
                  value={selectedComp.content.title}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, title: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Description</label>
                <textarea 
                  value={selectedComp.content.description}
                  onChange={(e) => updateComponent(selectedComp.id, { ...selectedComp.content, description: e.target.value })}
                  className="w-full glass-effect px-3 py-2 rounded border border-white/10 focus:border-primary outline-none"
                  rows={4}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Code Modal */}
      {showCode && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="glass-effect rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-semibold">Generated Code</h3>
              <button onClick={() => setShowCode(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <pre className="p-4 overflow-auto text-sm bg-dark/50">
              <code>{generateCode()}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default Editor
