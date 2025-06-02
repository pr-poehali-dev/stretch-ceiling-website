import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Натяжные потолки
              <span className="text-blue-600"> за 1 день</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональная установка натяжных потолков с гарантией 10 лет.
              Более 5000 довольных клиентов в Москве и области.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
              >
                <Icon name="Calculator" size={20} />
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Play" size={20} />
                Смотреть работы
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  1 день
                </div>
                <div className="text-sm text-gray-500">Быстрая установка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  10 лет
                </div>
                <div className="text-sm text-gray-500">Гарантия качества</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  5000+
                </div>
                <div className="text-sm text-gray-500">Довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop"
                alt="Красивый натяжной потолок"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Без пыли и грязи
                  </p>
                  <p className="text-sm text-gray-500">Чистый монтаж</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
