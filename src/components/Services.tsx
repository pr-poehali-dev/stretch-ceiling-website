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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Виды натяжных потолков
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаем широкий выбор натяжных потолков для любого интерьера и
            бюджета
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {service.price}
                  </div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Calculator" size={16} />
                  Рассчитать стоимость
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
