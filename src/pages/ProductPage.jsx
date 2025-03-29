import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Check } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Unlock the Power of Image Analysis</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Image Reader uses advanced AI to help you extract insights, identify objects, and understand context
                from any image with just a simple prompt.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              {/* <img
                src="/placeholder.svg?height=400&width=600"
                alt="Image Reader Product"
                className="object-cover w-full h-full"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Key Features</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Image Reader the leading platform for image analysis
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Advanced Object Recognition</h3>
              <p className="mt-2 text-muted-foreground">
                Identify and categorize objects within images with exceptional accuracy
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Natural Language Processing</h3>
              <p className="mt-2 text-muted-foreground">
                Interact with images using simple prompts in everyday language
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" x2="12" y1="22" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Contextual Understanding</h3>
              <p className="mt-2 text-muted-foreground">
                Extract meaning and relationships between elements in your images
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Image Reader makes image analysis simple and intuitive
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium">Upload Your Image</h3>
              <p className="mt-2 text-muted-foreground">
                Simply drag and drop or browse to upload any image you want to analyze
              </p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium">Write a Prompt</h3>
              <p className="mt-2 text-muted-foreground">
                Tell us what you want to know about the image in plain language
              </p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium">Get Insights</h3>
              <p className="mt-2 text-muted-foreground">
                Receive detailed analysis and insights about your image in seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold">Free</h3>
              <div className="mt-4 text-4xl font-bold">
                $0<span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-muted-foreground">Perfect for trying out Image Reader</p>

              <ul className="mt-6 space-y-3">
                {["10 image analyses per month", "Basic object recognition", "Standard response time"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>

              <Button className="mt-8 w-full" variant="outline" asChild>
                <Link to="/">Get Started</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 text-4xl font-bold">
                $29<span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-muted-foreground">For professionals and small teams</p>

              <ul className="mt-6 space-y-3">
                {[
                  "100 image analyses per month",
                  "Advanced object recognition",
                  "Priority response time",
                  "API access",
                  "Export capabilities",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full" asChild>
                <Link to="/">Get Started</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="mt-4 text-4xl font-bold">Custom</div>
              <p className="mt-2 text-muted-foreground">For large organizations with specific needs</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited image analyses",
                  "Custom AI model training",
                  "Dedicated support",
                  "Advanced security features",
                  "Custom integrations",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full" variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

