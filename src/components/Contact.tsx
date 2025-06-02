import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Заказать бесплатный замер
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Опишите ваш проект (площадь, тип потолка, пожелания)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3">
                <Icon name="Calendar" size={20} />
                Записаться на замер
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      +7 (495) 123-45-67
                    </p>
                    <p className="text-gray-600">
                      Звонки принимаем с 9:00 до 21:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      info@potolokpro.ru
                    </p>
                    <p className="text-gray-600">Отвечаем в течение 30 минут</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Москва и Московская область
                    </p>
                    <p className="text-gray-600">Работаем во всех районах</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                🎁 Акция этого месяца
              </h4>
              <p className="text-gray-700 mb-4">
                При заказе натяжного потолка площадью от 20 м² — светодиодная
                подсветка в подарок!
              </p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Узнать подробности
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
