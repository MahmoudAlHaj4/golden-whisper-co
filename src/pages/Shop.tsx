import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import heroShop from "@/assets/collections-hero.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const products = [
    { id: 1, name: "Diamond Pendant", price: 1299, image: product1, category: "Necklaces" },
    { id: 2, name: "Emerald Ring", price: 1899, image: product2, category: "Rings" },
    { id: 3, name: "Gold Hoop Earrings", price: 799, image: product3, category: "Earrings" },
    { id: 4, name: "Chain Bracelet", price: 649, image: product4, category: "Bracelets" },
    { id: 5, name: "Layered Necklaces", price: 1499, image: product5, category: "Necklaces" },
    { id: 6, name: "Pearl Studs", price: 899, image: product6, category: "Earrings" },
  ];

  const categories = ["Necklaces", "Rings", "Earrings", "Bracelets"];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroShop})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-4 tracking-wide">
            Our Collections
          </h1>
          <p className="text-lg font-light">Discover timeless pieces crafted with passion</p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-heading font-semibold mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Category</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox id={category} />
                      <Label htmlFor={category} className="ml-2 text-sm cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  step={100}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Metal Type */}
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Metal Type</h4>
                <div className="space-y-3">
                  {["Gold", "Silver", "Platinum", "Rose Gold"].map((metal) => (
                    <div key={metal} className="flex items-center">
                      <Checkbox id={metal} />
                      <Label htmlFor={metal} className="ml-2 text-sm cursor-pointer">
                        {metal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">{products.length} products</p>
              <select className="text-sm border rounded-md px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="group overflow-hidden hover-lift cursor-pointer border-none shadow-elegant">
                    <div className="aspect-square overflow-hidden bg-secondary/30">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                      <h3 className="font-heading text-lg mb-2">{product.name}</h3>
                      <p className="text-primary font-semibold">${product.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
