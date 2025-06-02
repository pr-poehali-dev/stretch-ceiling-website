import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "Глянцевый потолок в гостиной",
      location: "ЖК Сколково Парк",
      area: "25 м²",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      title: "Многоуровневый потолок в спальне",
      location: "ЖК Династия",
      area: "18 м²",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    },
    {
      title: "Потолок с подсветкой на кухне",
      location: "ЖК Новые Ватутинки",
      area: "12 м²",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    },
    {
      title: "Черный глянец в ванной",
      location: "ЖК Садовые Кварталы",
      area: "8 м²",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    },
    {
      title: "Белый матовый в детской",
      location: "ЖК Мосфильмовский",
      area: "16 м²",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      title: "Потолок с фотопечатью",
      location: "Частный дом",
      area: "35 м²",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Портфолио работ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Примеры наших лучших проектов с натяжными потолками
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/30 border border-pink-500/30 backdrop-blur-sm overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-300">
                      <Icon name="MapPin" size={14} className="text-pink-400" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 font-medium">
                      <Icon name="Square" size={14} />
                      {project.area}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 border-0 text-white font-medium px-8 py-3">
            <Icon name="Eye" size={20} />
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
