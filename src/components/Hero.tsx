
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="text-green-400 font-mono text-sm mb-2 animate-fade-in">
              $ whoami
            </div>
            <h1 className="text-7xl lg:text-8xl font-black text-white mb-4 leading-none animate-fade-in">
              CYBER
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text animate-pulse">
                ARCHITECT
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-mono">
                <span className="text-green-400">></span> Building the future with code and creativity
                <br />
                <span className="text-purple-400">></span> Crafting digital experiences that matter
                <br />
                <span className="text-cyan-400">></span> Where innovation meets imagination
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border border-purple-400/50 font-mono uppercase tracking-wider">
                  <Icon name="Rocket" size={20} />
                  Launch Project
                </Button>
                <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono uppercase tracking-wider">
                  <Icon name="Code" size={20} />
                  View Code
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-400 font-mono text-sm">System Status</span>
                </div>
                <div className="text-green-400 font-mono text-lg">ONLINE</div>
              </div>

              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-400 font-mono text-sm">Active Projects</span>
                </div>
                <div className="text-cyan-400 font-mono text-lg">127</div>
              </div>

              <div className="bg-black/50 border border-pink-500/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                  <span className="text-gray-400 font-mono text-sm">Coffee Level</span>
                </div>
                <div className="text-pink-400 font-mono text-lg">MAX</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1 font-mono">
                5+
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1 font-mono">
                100+
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1 font-mono">
                24/7
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1 font-mono">
                ∞
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase">Ideas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
