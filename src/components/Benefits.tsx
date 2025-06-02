import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Быстрая установка",
      description: "Монтаж потолка любой сложности за 1 день без пыли и грязи",
      color: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400",
    },
    {
      icon: "Shield",
      title: "Гарантия 10 лет",
      description: "Даем расширенную гарантию на все виды работ и материалы",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
    },
    {
      icon: "Award",
      title: "Опытные мастера",
      description:
        "Команда сертифицированных специалистов с опытом более 8 лет",
      color: "from-pink-500 to-red-500",
      iconColor: "text-pink-400",
    },
    {
      icon: "Truck",
      title: "Бесплатный замер",
      description:
        "Выезжаем на объект, делаем точные измерения и расчет стоимости",
      color: "from-green-500 to-cyan-500",
      iconColor: "text-green-400",
    },
    {
      icon: "CreditCard",
      title: "Гибкая оплата",
      description: "Рассрочка 0%, оплата наличными или картой, оплата по факту",
      color: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-400",
    },
    {
      icon: "Phone",
      title: "Сервис 24/7",
      description: "Круглосуточная поддержка клиентов и срочный выезд мастера",
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мы предлагаем не просто услугу, а комплексное решение с гарантией
            качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border border-purple-500/30 backdrop-blur-sm group hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={benefit.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
