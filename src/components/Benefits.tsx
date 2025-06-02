import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Быстрая установка",
      description: "Монтаж потолка любой сложности за 1 день без пыли и грязи",
    },
    {
      icon: "Shield",
      title: "Гарантия 10 лет",
      description: "Даем расширенную гарантию на все виды работ и материалы",
    },
    {
      icon: "Award",
      title: "Опытные мастера",
      description:
        "Команда сертифицированных специалистов с опытом более 8 лет",
    },
    {
      icon: "Truck",
      title: "Бесплатный замер",
      description:
        "Выезжаем на объект, делаем точные измерения и расчет стоимости",
    },
    {
      icon: "CreditCard",
      title: "Гибкая оплата",
      description: "Рассрочка 0%, оплата наличными или картой, оплата по факту",
    },
    {
      icon: "Phone",
      title: "Сервис 24/7",
      description: "Круглосуточная поддержка клиентов и срочный выезд мастера",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем не просто услугу, а комплексное решение с гарантией
            качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon as any}
                    className="text-blue-600"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
