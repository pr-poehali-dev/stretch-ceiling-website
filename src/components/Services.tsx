import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Глянцевые потолки",
      description: "Визуально увеличивают пространство, создают эффект зеркала",
      price: "от 350 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: ["Влагостойкие", "Легко моются", "Долговечные"],
    },
    {
      title: "Матовые потолки",
      description: "Классический вариант, подходит для любого интерьера",
      price: "от 280 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      features: ["Не бликуют", "Скрывают неровности", "Универсальные"],
    },
    {
      title: "Сатиновые потолки",
      description: "Благородная текстура с легким перламутровым блеском",
      price: "от 320 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop",
      features: ["Элегантные", "Износостойкие", "Не выгорают"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Виды натяжных потолков
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Предлагаем широкий выбор натяжных потолков для любого интерьера и
            бюджета
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border border-purple-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {service.price}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-4">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Icon name="Check" size={16} className="text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border-0 text-white font-medium">
                  Заказать расчет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
