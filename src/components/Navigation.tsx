import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 " ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-8 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`text-3xl font-heading font-semibold tracking-wide transition-colors ${
            isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"
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
                    : `after:w-0 ${isScrolled ? "text-black" : "text-white"}`
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
  );
};

export default Navigation;