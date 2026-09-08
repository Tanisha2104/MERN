import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";

function App() {
  const coffees = [
    {
      name: "MIDNIGHT ROAST",
      description: "Bold. Rich. Unforgettable.",
      price: "₹699",
      badge: "Bestseller",
      image: "/midnightroast.png",
    },
    {
      name: "GOLDEN HOUR",
      description: "Smooth. Warm. Balanced.",
      price: "₹749",
      badge: "Popular",
      image: "/goldenhour.png",
    },
    {
      name: "SUNDAY MORNING",
      description: "Light. Creamy. Comforting.",
      price: "₹649",
      badge: "New",
      image: "/sunday.png",
    },
  ];
  const faqs = [
    {
      question: "How fresh is NOIR coffee?",
      answer:
        "We roast our coffee in small batches to ensure every cup delivers maximum freshness and flavour.",
    },
    {
      question: "What roast options do you offer?",
      answer:
        "Our collection includes dark, medium, and lighter roasts designed for different moods and moments.",
    },
    {
      question: "Do you offer subscriptions?",
      answer:
        "Yes! You can set up regular coffee deliveries so your favourite roast is always within reach.",
    },
  ];
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-5 bg-[#f6f1e8] border-b text-[#2b2118]">
        <div className="text-2xl font-bold tracking-[0.2em]">N O I R .</div>
        <div className="hidden gap-10 md:flex">
          <a href="#home" className="text-sm hover:opacity-70">
            Home
          </a>
          <a href="#shop" className="text-sm hover:opacity-70">
            Shop
          </a>
          <a href="#faq" className="text-sm hover:opacity-70">
            FAQ
          </a>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="bg-[#f6f1e8] rounded-2xl border-gray-300"
          >
            <ShoppingCart />
          </Button>
          <Button className="bg-[#2e2722] rounded-2xl p-3">SIGN IN </Button>
        </div>
      </nav>
      {/* hero-section */}
      <section
        id="home"
        className="mx-auto flex flex-col items-center text-center relative min-h-162.5 overflow-hidden justify-center"
      >
        <img
          src="/coffee.png"
          alt="coffee"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#f6f1e8]/80 via-[#f6f1e8]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#f6f1e8]"></div>
        <div className="relative z-10">
          <Badge className="mb-6 bg-[#2e2722] p-3">Freshly Roasted</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#4a3b32]">
            COFFEE, REFINED
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#645143]">
            Carefully sourced beans. Thoughtfully roasted.
            <br />
            Made for moments worth slowing down for.
          </p>
          <div className="mt-8 flex justify-center gap-4 ">
            <Button size="lg" className="bg-[#2e2722]">
              Shop Coffee
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/70 backdrop-blur-sm"
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>
      {/* shop  */}
      <section id="shop" className="py-10 px-8">
        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="rounded-full bg-[#2e2722] px-4 py-2 text-xs tracking-widest text-[#f6f1e8]">
            OUR COLLECTION
          </Badge>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#2e2722] md:text-5xl">
            BREW YOUR MOOD.
          </h2>
          <p className="mt-4 text-lg text-[#6b5d52]">
            Find a roast made for your moment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {coffees.map((coffee) => (
            <Card
              className="overflow-hidden rounded-3xl border border-[#ded6cb] bg-[#fffdf9] shadow-sm p-4"
              key={coffee.name}
            >
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover mt-0"
                />
                <Badge className="absolute top-5 left-5 z-10 bg-[#d6b48a] text-white rounded-full px-5 py-2">
                  {coffee.badge}
                </Badge>
              </div>
              <CardHeader className="px-0 pt-3">
                <CardTitle>{coffee.name}</CardTitle>
                <CardDescription>{coffee.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-2xl font-semibold text-[#2e2722]">
                  {coffee.price}
                </p>
              </CardContent>
              <CardFooter className="px-0 pt-2">
                <Button className="w-full py-2 gap-2 bg-[#2e2722]">
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <hr className="mx-auto max-w-6xl border-[#ded6cb]" />
      <section id="faq" className="px-8 py-16">
        <div className="mb-12 flex flex-col items-center text-center">
          <Badge className="bg-[#2e2722] px-8 py-4 text-xl tracking-widest text-[#f6f1e8]">
            FAQ
          </Badge>
          <h2 className="mt-5 text-3xl font-bold text-[#2e2722] md:text-4xl">
            QUESTIONS?
          </h2>
          <p className="mt-4 text-lg text-[#6b5d52]">
            Everything you need to know about NOIR coffee.
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <hr className="mx-auto max-w-6xl border-[#ded6cb]" />
      <section className="px-8 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#2e2722] px-8 py-16 text-center">
          <Badge className="bg-[#d6b48a] text-[#2e2722]">
            STAY IN THE LOOP
          </Badge>
          <h2 className="mt-5 text-4xl font-bold text-[#f6f1e8] md:text-5xl">
            COFFEE WORTH WAITING FOR.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#c9bdb2]">
            Get updates about new roasts, special releases, and everything
            brewing at NOIR.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white"
            />
            <Button className="bg-[#d6b48a] text-[#2e2722] hover:bg-[#c5a278]">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      <hr className="border-[#ffffff]/10" />
      <footer className="bg-[#2e2722] text-[#f6f1e8] px-8 md:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-center px-20 py-5">
          <div>
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-2">
              N O I R .
            </h3>
            <p>Carefully crafted coffee for slower moments.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>EXPLORE</h3>
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
            <a href="#shop" className="hover:opacity-70">
              Shop
            </a>
            <a href="#faq" className="hover:opacity-70">
              FAQ
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3>FOLLOW</h3>
            <a href="" className="hover:opacity-70">
              Instagram
            </a>
            <a href="" className="hover:opacity-70">
              Twitter
            </a>
          </div>
        </div>
        <hr className="border-[#ffffff]/10" />
        <div className="flex flex-col md:flex-row justify-between px-20 py-5">
          <h3>© 2026 NOIR COFFEE </h3>
          <h3>Made with ☕</h3>
        </div>
      </footer>
    </>
  );
}

export default App;
