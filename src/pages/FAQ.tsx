import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "We offer free standard shipping on all orders, which typically takes 3-5 business days within the continental US. Expedited shipping options are available at checkout for 1-2 day delivery.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to most countries worldwide. International shipping times vary by destination, typically 7-14 business days. Customs duties and taxes may apply based on your country's regulations.",
        },
        {
          q: "Can I track my order?",
          a: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this to monitor your shipment's progress in real-time.",
        },
        {
          q: "What if my item arrives damaged?",
          a: "We take great care in packaging, but if your item arrives damaged, please contact us within 48 hours with photos. We'll arrange for a replacement or full refund immediately.",
        },
      ],
    },
    {
      category: "Products & Quality",
      questions: [
        {
          q: "Are your diamonds certified?",
          a: "Yes, all our diamonds are certified by GIA (Gemological Institute of America). Each piece comes with complete certification documentation detailing the diamond's characteristics.",
        },
        {
          q: "What materials do you use?",
          a: "We work exclusively with 14K and 18K gold (yellow, white, and rose), platinum, and ethically sourced gemstones. All materials are certified and come with documentation.",
        },
        {
          q: "Do you offer custom designs?",
          a: "Yes! We have an expert team of designers who can bring your vision to life. Book a consultation to discuss your custom jewelry project.",
        },
        {
          q: "What is your lifetime warranty?",
          a: "Our lifetime warranty covers manufacturing defects and craftsmanship issues. This includes prong retipping, rhodium plating, and minor repairs at no additional cost.",
        },
      ],
    },
    {
      category: "Sizing & Fit",
      questions: [
        {
          q: "How do I find my ring size?",
          a: "We offer a free ring sizer that we can mail to you. Alternatively, you can visit any jeweler for professional sizing, or use our downloadable ring sizing guide on our website.",
        },
        {
          q: "Can I resize my ring later?",
          a: "Most rings can be resized. We offer one free resizing within 60 days of purchase. Additional resizing may incur a fee depending on the complexity.",
        },
        {
          q: "What if I order the wrong size?",
          a: "No problem! You can exchange for a different size within 30 days. Simply contact us to arrange the exchange - we'll cover return shipping.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for most items. The jewelry must be in original condition with all tags and documentation. Custom pieces are final sale.",
        },
        {
          q: "How do I return an item?",
          a: "Contact our customer service team to initiate a return. We'll provide a prepaid return label. Once we receive and inspect the item, your refund will be processed within 5-7 business days.",
        },
        {
          q: "Can I exchange my jewelry?",
          a: "Yes! Exchanges are available within 30 days. You can exchange for a different size, style, or receive store credit for the full purchase amount.",
        },
      ],
    },
    {
      category: "Care & Maintenance",
      questions: [
        {
          q: "How should I care for my jewelry?",
          a: "Store pieces separately in soft pouches, remove before swimming or exercising, and clean regularly with mild soap and warm water. Avoid harsh chemicals and extreme temperatures.",
        },
        {
          q: "Do you offer cleaning services?",
          a: "Yes! Bring your Lumière jewelry to any of our locations for complimentary professional cleaning and inspection.",
        },
        {
          q: "How often should I have my jewelry inspected?",
          a: "We recommend professional inspection every 6 months to check prongs, clasps, and overall condition. This helps prevent stone loss and ensures longevity.",
        },
      ],
    },
    {
      category: "Payment & Security",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer financing options through Affirm.",
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use industry-standard SSL encryption to protect your data. We never store your full credit card information on our servers.",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! Through our partnership with Affirm, you can choose flexible payment plans with rates as low as 0% APR for qualified purchases.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our jewelry, services, and policies
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl md:text-3xl font-heading font-light mb-6 text-gold">
                {category.category}
              </h2>
              <Card className="border-none shadow-elegant overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${idx}-${index}`}
                      className="border-b last:border-b-0"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/10 transition-colors">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center border-none shadow-elegant bg-gradient-to-b from-gold/5 to-transparent">
          <h2 className="text-3xl font-heading font-light mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-white">
                Contact Us
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button size="lg" variant="outline">
                Book Consultation
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default FAQ;
