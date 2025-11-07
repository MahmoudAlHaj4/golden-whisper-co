import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactImage from '@/assets/contact-hero.jpg'
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={ContactImage}
          alt="Jewelry showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-4 tracking-wide">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Our team is here to answer your questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 border-none shadow-elegant">
              <MapPin className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-heading text-lg mb-2">Visit Our Showroom</h3>
              <p className="text-sm text-muted-foreground">
                123 Elegant Avenue
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </Card>

            <Card className="p-6 border-none shadow-elegant">
              <Phone className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-heading text-lg mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                +1 (555) 123-4567
                <br />
                Mon–Sat: 10:00 AM – 7:00 PM
              </p>
            </Card>

            <Card className="p-6 border-none shadow-elegant">
              <Mail className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-heading text-lg mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                info@lumierejewelry.com
                <br />
                support@lumierejewelry.com
              </p>
            </Card>

            <Card className="p-6 border-none shadow-elegant">
              <Clock className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-heading text-lg mb-2">Business Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday – Friday: 10:00 AM – 7:00 PM</p>
                <p>Saturday: 11:00 AM – 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-none shadow-elegant">
              <h2 className="text-3xl font-heading font-light mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-2" required />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to the privacy policy and consent to being contacted regarding my inquiry.
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-[400px] bg-secondary/30 flex items-center justify-center ">
        <div className="text-center">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Map integration would appear here</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
