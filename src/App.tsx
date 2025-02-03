import React from 'react';
import { TrendingUp, Shield, Globe2, ArrowRight, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-gray-900/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/PHILOCOIN/PHILOCOIN_website/refs/heads/main/PHILO_Coin%20website%20icon.png" 
                alt="PHILO Coin Logo" 
                className="h-14 w-14"
              />
              <span className="ml-2 text-xl font-bold text-amber-300">PHILO Coin</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-amber-300 transition-colors">Features</a>
              <a href="#" className="hover:text-amber-300 transition-colors">Markets</a>
              <a href="#" className="hover:text-amber-300 transition-colors">About</a>
              <a href="#" className="hover:text-amber-300 transition-colors">Contact</a>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-lg transition-colors text-gray-900 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Trade PHILO with <span className="text-amber-300">Confidence</span>
              </h1>
              <p className="text-gray-400 text-xl mb-8">
                Join millions of users worldwide in the future of digital finance. Trade, invest, and grow your portfolio with our secure platform.
              </p>
              <div className="flex space-x-4">
                <button className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-lg flex items-center transition-colors text-gray-900 font-semibold">
                  Start Trading <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-amber-500 hover:border-amber-400 px-8 py-3 rounded-lg flex items-center transition-colors text-amber-300">
                  Learn More <ChevronDown className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80"
                alt="PHILO Coin visualization"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose <span className="text-amber-300">PHILO Coin</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Trading</h3>
                <p className="text-gray-400">Professional-grade tools and real-time market data for serious traders.</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure Storage</h3>
                <p className="text-gray-400">Industry-leading security measures to protect your digital assets.</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe2 className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Access</h3>
                <p className="text-gray-400">Trade anywhere, anytime with our global network of exchanges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who have already chosen PHILO Coin as their trusted platform.
            </p>
            <button className="bg-gray-900 text-amber-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Create Free Account
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src="https://raw.githubusercontent.com/PHILOCOIN/PHILOCOIN_website/refs/heads/main/PHILO_Coin%20website%20icon.png" 
                alt="PHILO Coin Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold text-amber-300">PHILO Coin</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 PHILO Coin. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;