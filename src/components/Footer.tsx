import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Home" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">ПотолокПро</h3>
                <p className="text-sm text-gray-400">Натяжные потолки</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональная установка натяжных потолков в Москве и области.
              Гарантия качества и лучшие цены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Глянцевые потолки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Матовые потолки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сатиновые потолки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Многоуровневые потолки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Icon name="Mail" size={16} />
                <span>info@potolokpro.ru</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Icon name="Clock" size={16} />
                <span>Пн-Вс: 9:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 ПотолокПро. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
