import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Leaf, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Quality",
      description: "Each piece is crafted with meticulous attention to detail and the finest materials.",
    },
    {
      icon: Heart,
      title: "Craftsmanship",
      description: "Our skilled artisans pour their passion into every creation, honoring time-tested techniques.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to ethical sourcing and environmentally responsible practices.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in design, quality, and customer experience.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-4 tracking-wide">Our Story</h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Crafting timeless elegance for over two decades
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-light mb-8 text-center">A Legacy of Elegance</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2004, Lumière began with a simple vision: to create jewelry that transcends trends and becomes
              a cherished part of your life story. What started as a small atelier has grown into a celebration of
              artisanal craftsmanship and timeless design.
            </p>
            <p>
              Every piece in our collection is meticulously crafted by skilled artisans who have dedicated years to
              perfecting their craft. We believe that jewelry is more than adornment—it's a personal expression, a
              connection to precious moments, and an heirloom for generations to come.
            </p>
            <p>
              Our commitment to excellence extends beyond aesthetics. We carefully source only the finest materials,
              working directly with ethical suppliers who share our values of sustainability and responsible practices.
              Each gemstone, each precious metal, tells a story of integrity and care.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-light mb-4 text-center">Our Values</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The principles that guide everything we create
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-none shadow-elegant hover-lift">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-heading mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-heading font-light mb-12 text-center">Our Journey</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6">
            <div className="text-2xl font-heading text-primary shrink-0 w-20">2004</div>
            <div>
              <h3 className="text-xl font-heading mb-2">The Beginning</h3>
              <p className="text-muted-foreground">
                Lumière was founded with a passion for creating timeless jewelry pieces that celebrate life's precious
                moments.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-2xl font-heading text-primary shrink-0 w-20">2010</div>
            <div>
              <h3 className="text-xl font-heading mb-2">Expansion</h3>
              <p className="text-muted-foreground">
                Opened our first flagship boutique and expanded our collection to include bespoke custom designs.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-2xl font-heading text-primary shrink-0 w-20">2018</div>
            <div>
              <h3 className="text-xl font-heading mb-2">Sustainability Commitment</h3>
              <p className="text-muted-foreground">
                Launched our ethical sourcing initiative, ensuring every piece meets the highest standards of
                sustainability.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-2xl font-heading text-primary shrink-0 w-20">2024</div>
            <div>
              <h3 className="text-xl font-heading mb-2">Today</h3>
              <p className="text-muted-foreground">
                Continuing our legacy of excellence with new collections that honor tradition while embracing modern
                design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
