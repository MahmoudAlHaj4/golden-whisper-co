import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const navLinks = [
      { name: "Home", path: "/" },
      { name: "Collection", path: "/shop" },
      { name: "About", path: "/about" },
      // { name: "FAQ", path: "/faq" },
      { name: "Contact", path: "/contact" },
    ];

  const product = {
    id: 1,
    name: "Diamond Pendant Necklace",
    price: 1299,
    description:
      "An exquisite pendant necklace featuring a brilliant-cut diamond set in 18k gold. This timeless piece combines elegant design with superior craftsmanship.",
    category: "Necklaces",
    metal: "18K Gold",
    stone: "Diamond (0.5 carat)",
    chain: "16-18 inches adjustable",
    images: [product1, product1, product1, product1],
  };

  const relatedProducts = [
    { id: 2, name: "Emerald Ring", price: 1899, image: product2 },
    { id: 3, name: "Gold Hoop Earrings", price: 799, image: product3 },
    { id: 4, name: "Chain Bracelet", price: 649, image: product4 },
  ];

  return (
    <div className="min-h-screen pt-24">
       <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 " ${
              isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
          >
            <nav className="container mx-auto px-8 py-4 ">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className={`text-3xl font-heading font-semibold tracking-wide transition-colors ${
                  isScrolled ? "text-black hover:text-primary" : "text-black hover:text-primary"
                }`}>
                  Lumière
                </Link>
      
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-lg font-medium font-heading tracking-wide transition-all relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-current after:transition-all after:duration-300 ${
                        location.pathname === link.path 
                          ? `after:w-full ${isScrolled ? "text-primary" : "text-white"}` 
                          : `after:w-0 ${isScrolled ? "text-black" : "black-white"}`
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
      
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link to="/book-appointment">
                    <Button className="hidden md:flex bg-gold hover:bg-gold-dark text-white font-heading">
                      Book Appointment
                    </Button>
                  </Link>
      
                  {/* Mobile Menu */}
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                      <Button variant="ghost" size="icon" className={isScrolled ? "text-black" : "text-white"}>
                        <Menu className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px]">
                      <div className="flex flex-col gap-6 mt-8">
                        {navLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-medium transition-colors hover:text-primary ${
                              location.pathname === link.path ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {link.name}
                          </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t">
                          <Link to="/book-appointment" className="w-full" onClick={() => setIsOpen(false)}>
                            <Button className="bg-gold hover:bg-gold-dark text-white w-full">
                              Book Appointment
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </nav>
          </header>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 flex gap-2">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-secondary/30">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-4xl font-heading font-light mb-4">{product.name}</h1>
            <p className="text-3xl text-primary font-semibold mb-6">${product.price}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Product Specifications */}
            <div className="bg-secondary/30 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Specifications</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Metal:</span>
                  <span className="font-medium">{product.metal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stone:</span>
                  <span className="font-medium">{product.stone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chain Length:</span>
                  <span className="font-medium">{product.chain}</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            {/* <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-6 py-2">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1">
                Book an Appointment
              </Button>
              
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            {/* <div className="grid grid-cols-3 gap-4 py-6 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Secure Payment</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">30-Day Returns</p>
              </div>
            </div> */}

            {/* Accordion Details */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Full Description</AccordionTrigger>
                <AccordionContent>
                  This stunning pendant necklace showcases exceptional craftsmanship and timeless elegance. Each piece
                  is carefully crafted by skilled artisans who ensure every detail meets our highest standards of
                  quality and beauty.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping Information</AccordionTrigger>
                <AccordionContent>
                  We offer free standard shipping on all orders. Express shipping is available at checkout. Orders are
                  typically processed within 1-2 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger>Care Instructions</AccordionTrigger>
                <AccordionContent>
                  To maintain the beauty of your jewelry, avoid contact with chemicals, perfumes, and water. Store in a
                  soft pouch when not wearing. Clean gently with a soft cloth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-heading font-light mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <Card className="group overflow-hidden hover-lift cursor-pointer border-none shadow-elegant">
                  <div className="aspect-square overflow-hidden bg-secondary/30">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-primary font-semibold">${relatedProduct.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
