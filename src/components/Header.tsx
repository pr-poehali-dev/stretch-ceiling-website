import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Icon name="Home" className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ПотолокПро</h1>
            <p className="text-sm text-gray-500">Натяжные потолки</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#portfolio"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Работы
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Преимущества
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-gray-900">
              +7 (495) 123-45-67
            </p>
            <p className="text-xs text-gray-500">Звонок бесплатный</p>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Phone" size={16} />
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
