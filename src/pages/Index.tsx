import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularProducts = [
    {
      id: 1,
      name: "Букет 'Розовая мечта'",
      price: "2990",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop",
      description: "Нежный букет из розовых роз и эвкалипта",
    },
    {
      id: 2,
      name: "Композиция 'Весенний сад'",
      price: "3490",
      image:
        "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=400&fit=crop",
      description: "Яркая композиция из тюльпанов и нарциссов",
    },
    {
      id: 3,
      name: "Букет 'Классический'",
      price: "2590",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
      description: "Элегантные белые розы с зеленью",
    },
    {
      id: 4,
      name: "Композиция 'Радуга'",
      price: "3990",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
      description: "Разноцветные герберы в стильной упаковке",
    },
  ];

  const advantages = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим свежие цветы в течение 2 часов",
    },
    {
      icon: "Flower",
      title: "Свежие цветы",
      description: "Только самые свежие цветы от проверенных поставщиков",
    },
    {
      icon: "Heart",
      title: "С любовью",
      description: "Каждый букет создан с особой заботой и вниманием",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Flower2" size={32} className="text-pink-500" />
              <span className="text-2xl font-bold text-gray-900">
                FlowerShop
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Свежие цветы для
                <span className="text-pink-500"> особых</span> моментов
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Создаем незабываемые букеты и композиции для ваших самых важных
                событий. Доставка по всему городу в течение 2 часов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать букет
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Красивый букет цветов"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white p-4 rounded-full shadow-lg">
                <Icon name="Heart" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Популярные букеты
            </h2>
            <p className="text-xl text-gray-600">
              Самые любимые композиции наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500">
                      {product.price} ₽
                    </span>
                    <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                      <Icon name="Plus" size={16} className="mr-1" />В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About/Advantages */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Мы знаем, как сделать ваш день особенным
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-pink-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                  <Icon
                    name={advantage.icon}
                    size={32}
                    className="text-pink-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contacts"
        className="py-20 bg-gradient-to-br from-pink-500 to-pink-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Готовы оформить заказ?
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                Свяжитесь с нами любым удобным способом, и мы поможем выбрать
                идеальный букет
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} />
                  <span className="text-lg">info@flowershop.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} />
                  <span className="text-lg">
                    г. Москва, ул. Цветочная, д. 1
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Быстрый заказ</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-pink-100 text-white"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-pink-100 text-white"
                />
                <textarea
                  placeholder="Комментарий к заказу"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-pink-100 text-white resize-none"
                />
                <Button className="w-full bg-white text-pink-500 hover:bg-pink-50 py-3">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower2" size={32} className="text-pink-500" />
                <span className="text-2xl font-bold">FlowerShop</span>
              </div>
              <p className="text-gray-400">
                Свежие цветы для особых моментов. Доставка по всему городу.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Букеты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Композиции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Растения
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Подарки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Оплата
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
              <h4 className="text-lg font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlowerShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
