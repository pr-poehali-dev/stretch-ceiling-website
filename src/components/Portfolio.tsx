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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши работы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите на результаты нашей работы — более 5000 установленных
            потолков
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                  {project.area}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Icon name="MapPin" size={14} />
                  {project.location}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            <Icon name="Eye" size={20} />
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
