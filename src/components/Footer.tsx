import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/30 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Icon name="Home" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ПотолокПро
                </h3>
                <p className="text-sm text-gray-400">Натяжные потолки</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональная установка натяжных потолков в Москве и области.
              Гарантия качества и лучшие цены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Глянцевые потолки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Матовые потолки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Сатиновые потолки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Многоуровневые потолки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-cyan-400" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-purple-400" />
                info@potolokpro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-pink-400" />
                Москва, ул. Примерная, 123
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-pink-400">
              Социальные сети
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Icon
                  name="Phone"
                  size={18}
                  className="text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Icon
                  name="Mail"
                  size={18}
                  className="text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Icon
                  name="MessageCircle"
                  size={18}
                  className="text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ПотолокПро. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
