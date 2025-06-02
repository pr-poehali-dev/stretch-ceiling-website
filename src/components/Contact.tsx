import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-gray-800/50 border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Заказать бесплатный замер
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Опишите ваш проект (площадь, тип потолка, пожелания)"
                className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 outline-none resize-none text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border-0 text-white text-lg py-3 font-medium">
                <Icon name="Calendar" size={20} />
                Записаться на замер
              </Button>
              <p className="text-sm text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gray-800/30 border border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Телефон</h3>
                    <p className="text-cyan-400 text-lg font-medium">
                      +7 (495) 123-45-67
                    </p>
                    <p className="text-gray-400 text-sm">
                      Ежедневно с 8:00 до 22:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Email</h3>
                    <p className="text-purple-400 text-lg font-medium">
                      info@potolokpro.ru
                    </p>
                    <p className="text-gray-400 text-sm">
                      Ответим в течение часа
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Адрес</h3>
                    <p className="text-green-400 text-lg font-medium">
                      Москва, ул. Примерная, 123
                    </p>
                    <p className="text-gray-400 text-sm">
                      Офис и склад материалов
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
