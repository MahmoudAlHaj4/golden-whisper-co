import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Truck, Shield, Gem, Hammer, Leaf, Sparkles } from "lucide-react";
import heroHome from "@/assets/hero-jewelry.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const collections = [
    { name: "Rings", image: product1, count: "24 Designs" },
    { name: "Necklaces", image: product2, count: "32 Designs" },
    { name: "Earrings", image: product3, count: "28 Designs" },
    { name: "Bracelets", image: product4, count: "18 Designs" },
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
    {
      name: "Michael Chen",
      text: "I purchased an engagement ring from Lumière and it was perfect. The attention to detail and customer service were exceptional.",
      rating: 5,
    },
  ];

  const features = [
    { 
      title: "Free Delivery", 
      desc: "Complimentary delivery on all orders worldwide",
      icon: Truck
    },
    { 
      title: "Lifetime Warranty", 
      desc: "Every piece comes with our lifetime craftsmanship guarantee",
      icon: Shield
    },
    { 
      title: "Certified Diamonds", 
      desc: "GIA certified diamonds with full documentation",
      icon: Gem
    },
    { 
      title: "Expert Craftsmanship", 
      desc: "Handcrafted by master artisans with 20+ years experience",
      icon: Hammer
    },
    { 
      title: "Ethically Sourced", 
      desc: "Responsibly sourced materials from verified suppliers",
      icon: Leaf
    },
    { 
      title: "Custom Design", 
      desc: "Bespoke jewelry design service tailored to your vision",
      icon: Sparkles
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Navigation />
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-4">Featured Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our signature collections, each piece a masterpiece of artistry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link key={index} to="/shop">
              <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-heading mb-1">{collection.name}</h3>
                  <p className="text-sm text-white/90 mb-3">{collection.count}</p>
                  <span className="inline-block text-sm font-medium text-gold border-b border-gold pb-1 group-hover:border-gold-light transition-colors">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={product1}
                alt="Craftsmanship"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-light mb-6">Our Craft, Your Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                For over two decades, Lumière has been synonymous with exceptional craftsmanship and timeless design. 
                Each piece in our collection is meticulously handcrafted by master artisans who bring decades of expertise 
                to every detail.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that jewelry is more than an accessory—it's a celebration of life's most precious moments, 
                a reflection of your unique journey. From ethically sourced materials to certified gemstones, every element 
                is chosen with care and integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-heading text-xl">20+</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Years of Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-heading text-xl">5K+</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-4">Best Sellers</h2>
          <p className="text-muted-foreground">Discover our most loved pieces</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[product1, product2, product3, product4, product5, product6, product1, product2].slice(0, 8).map((product, index) => (
            <Link key={index} to={`/product/${index + 1}`}>
              <Card className="group overflow-hidden hover-lift cursor-pointer border-none shadow-elegant">
                <div className="aspect-square overflow-hidden bg-secondary/10">
                  <img
                    src={product}
                    alt={`Best Seller ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg mb-1">Elegant {["Ring", "Necklace", "Earrings", "Bracelet"][index % 4]}</h3>
                  <p className="text-sm text-muted-foreground mb-2">18K Gold Collection</p>
                  <p className="text-lg font-semibold text-gold">${(299 + index * 50).toFixed(2)}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-4">Why Choose Lumière</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 text-center border-none shadow-elegant hover-lift">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Occasions */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-4">For Every Occasion</h2>
          <p className="text-muted-foreground">Celebrate life's precious moments</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Engagement Rings", image: product1 },
            { name: "Wedding Bands", image: product2 },
            { name: "Anniversary Gifts", image: product3 },
            { name: "Birthday Gifts", image: product4 },
          ].map((occasion, index) => (
            <Link key={index} to="/shop">
              <Card className="group overflow-hidden hover-lift cursor-pointer border-none shadow-elegant bg-secondary/5">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-heading mb-2">{occasion.name}</h3>
                  <span className="text-sm text-gold font-medium group-hover:text-gold-dark transition-colors">
                    Shop Now →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-light mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">Hear from those who've experienced Lumière elegance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <Footer />
    </div>
  );
};

export default Home;