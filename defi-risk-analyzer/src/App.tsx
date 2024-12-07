import { useState, lazy, Suspense } from 'react';
import { Activity, ArrowRight, Shield, Zap, ChartBar } from 'lucide-react';

const Chart = lazy(() => import('./components/Chart'));

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/90 backdrop-blur-sm z-50 border-b border-[#ffffff1a]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Activity className="text-[#646cff]" size={24} />
              <span className="text-xl font-bold">DeFi Analytics</span>
            </div>
            <button className="purple-gradient-btn px-6 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32">
        <div className="min-h-[80vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div>
              <div className="inline-flex mb-4 px-3 py-1 rounded-full border border-[#ffffff1a] bg-[#ffffff0a]">
                <span className="text-sm">ViteConf 2024 Talks</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">DeFi Analytics</span>
                <br />
                <span className="text-4xl md:text-5xl text-[#8b8b8b]">for Web3</span>
              </h1>
              <p className="text-[#8b8b8b] text-lg mb-8">
                Real-time gas analytics, risk assessment, and portfolio tracking for optimal DeFi performance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  className="purple-gradient-btn px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:opacity-80 transition-opacity"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Get Started</span>
                  <ArrowRight 
                    className={`transition-transform ${isHovered ? 'translate-x-1' : ''}`}
                    size={20}
                  />
                </button>
                <button className="px-8 py-3 rounded-full border border-[#ffffff1a] hover:bg-[#ffffff0a] transition-colors">
                  GitHub
                </button>
              </div>
            </div>
            <Suspense fallback={<div className="h-[300px] bg-[#1a1a1a] rounded-xl animate-pulse" />}>
              <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#ffffff1a]">
                <Chart />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1a1a1a]/50">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBar className="text-[#646cff]" size={32} />,
                title: "Real-time Gas Analytics",
                description: "Track gas prices and optimize your transaction timing with our advanced analytics."
              },
              {
                icon: <Shield className="text-[#646cff]" size={32} />,
                title: "Risk Assessment",
                description: "Comprehensive risk scoring across multiple DeFi protocols and positions."
              },
              {
                icon: <Zap className="text-[#646cff]" size={32} />,
                title: "Performance Tracking",
                description: "Monitor your portfolio performance and get insights for optimization."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-[#ffffff1a] hover:border-[#646cff] transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#8b8b8b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500K+", label: "Transactions Analyzed" },
            { value: "50+", label: "Protocols Monitored" },
            { value: "$100M+", label: "Assets Tracked" },
            { value: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#ffffff1a]">
              <div className="text-3xl font-bold text-[#646cff] mb-2">{stat.value}</div>
              <div className="text-[#8b8b8b]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a]">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Activity className="text-[#646cff]" size={24} />
              <span className="text-xl font-bold">DeFi Analytics</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-[#8b8b8b]">
              <a href="#" className="hover:text-[#646cff] transition-colors">About</a>
              <a href="#" className="hover:text-[#646cff] transition-colors">Features</a>
              <a href="#" className="hover:text-[#646cff] transition-colors">Documentation</a>
              <a href="#" className="hover:text-[#646cff] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;