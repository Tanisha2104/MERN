import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

function App() {
  const coffees = [
    {
      name: "Midnight Roast",
      type: "Dark Roast",
      description: "Bold, rich and deeply satisfying.",
      price: "₹499",
    },
    {
      name: "Golden Hour",
      type: "Medium Roast",
      description: "Smooth notes of caramel and chocolate.",
      price: "₹549",
    },
    {
      name: "Sunday Morning",
      type: "Light Roast",
      description: "Bright, floral and perfectly balanced.",
      price: "₹599",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#2b2118]">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between border-b border-[#d8cfc2] px-8 py-5">
        <h1 className="text-2xl font-bold tracking-[0.2em]">
          NOIR.
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#coffee" className="text-sm hover:opacity-60">
            Coffee
          </a>
          <a href="#about" className="text-sm hover:opacity-60">
            About
          </a>
          <a href="#faq" className="text-sm hover:opacity-60">
            FAQ
          </a>
        </div>

        <Button>Shop Now</Button>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        
        <Badge className="mb-6">
          Freshly Roasted
        </Badge>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Coffee, Refined.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6b5d52]">
          Carefully sourced beans, thoughtfully roasted, and made for
          moments worth slowing down for.
        </p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">
            Shop Coffee
          </Button>

          <Button variant="outline" size="lg">
            Our Story
          </Button>
        </div>

        <div className="mt-16 text-7xl">
          ☕
        </div>
      </section>

      {/* COFFEE CARDS */}
      <section
        id="coffee"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-12 text-center">
          <Badge variant="outline">
            Our Collection
          </Badge>

          <h2 className="mt-4 text-4xl font-bold">
            Brew Your Mood
          </h2>

          <p className="mt-3 text-[#6b5d52]">
            Find a roast made for your moment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {coffees.map((coffee) => (
            <Card
              key={coffee.name}
              className="border-[#ded5c8] bg-white"
            >
              <CardHeader>
                <Badge className="w-fit">
                  {coffee.type}
                </Badge>

                <CardTitle className="mt-4">
                  {coffee.name}
                </CardTitle>

                <CardDescription>
                  {coffee.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-5xl">☕</div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <span className="font-semibold">
                  {coffee.price}
                </span>

                <Button size="sm">
                  Add
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-4xl px-6 py-20 text-center"
      >
        <Badge variant="outline">
          The NOIR Way
        </Badge>

        <h2 className="mt-4 text-4xl font-bold">
          Good coffee deserves time.
        </h2>

        <p className="mt-6 leading-relaxed text-[#6b5d52]">
          From carefully selected beans to thoughtful roasting, every cup
          is made to turn an everyday routine into a small ritual.
        </p>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-3xl px-6 py-20"
      >
        <div className="mb-10 text-center">
          <Badge variant="outline">
            FAQ
          </Badge>

          <h2 className="mt-4 text-4xl font-bold">
            Questions, answered.
          </h2>
        </div>

        <Accordion type="single" collapsible>
          
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Where do you source your coffee?
            </AccordionTrigger>

            <AccordionContent>
              We carefully select high-quality beans from trusted coffee
              growing regions around the world.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How fresh is the coffee?
            </AccordionTrigger>

            <AccordionContent>
              Our coffee is roasted in small batches to ensure freshness
              and flavour.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Which roast should I choose?
            </AccordionTrigger>

            <AccordionContent>
              Choose light for bright flavours, medium for balance, and
              dark for bold and intense coffee.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-[#d8cfc2] bg-[#2b2118] px-6 py-16 text-[#f6f1e8]">
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="text-3xl font-bold">
            Stay close to the coffee.
          </h2>

          <p className="mt-3 text-[#cfc3b4]">
            New roasts, coffee notes and good things in your inbox.
          </p>

          <div className="mx-auto mt-8 flex max-w-md gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black"
            />

            <Button>
              Subscribe
            </Button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1c1510] px-8 py-8 text-center text-sm text-[#cfc3b4]">
        © 2026 NOIR Coffee. Made for better mornings.
      </footer>

    </main>
  )
}

export default App