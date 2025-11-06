import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Home = () => {
  const collections = [
    { name: "Necklaces", image: product1, count: "24 pieces" },
    { name: "Rings", image: product2, count: "18 pieces" },
    { name: "Earrings", image: product3, count: "32 pieces" },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The craftsmanship is extraordinary. Each piece tells a story of elegance and timeless beauty.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      text: "Absolutely stunning jewelry. The quality exceeds all expectations. My new favorite collection.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-light mb-6 tracking-wide">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            Discover handcrafted jewelry pieces that celebrate your unique story
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-light mb-4">Featured Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of exquisite jewelry pieces, each crafted with precision and passion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link key={index} to="/shop">
              <Card className="group overflow-hidden hover-lift cursor-pointer border-none shadow-elegant">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-heading mb-2">{collection.name}</h3>
                  <p className="text-sm text-muted-foreground">{collection.count}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-light mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              For over two decades, Lumière has been creating jewelry that transcends time. Each piece is meticulously
              crafted by skilled artisans who pour their passion into every detail.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe jewelry is more than adornment—it's an expression of your unique journey, a celebration of
              life's precious moments.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-light mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">Hear from those who've experienced Lumière elegance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-elegant border-none">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-light mb-4">Stay Connected</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, style inspiration, and early access to new collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground"
            />
            <Button variant="secondary" size="lg" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
