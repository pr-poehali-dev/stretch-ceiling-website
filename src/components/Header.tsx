import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-purple-500/30 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center border border-purple-400/50">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
                NEON.DEV
              </h1>
              <p className="text-xs text-gray-400 font-mono">// future_tech</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              ./about
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              ./projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-pink-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              ./skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              ./contact
            </a>
          </nav>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border border-purple-400/50 font-mono uppercase tracking-wider">
            <Icon name="Terminal" size={16} />
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
