import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Image Reader</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We're on a mission to make image analysis accessible to everyone. Our AI-powered platform helps you
                extract insights from any image with just a simple prompt.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/product">Explore Our Product</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="About Image Reader"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Story</h2>
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Image Reader was founded in 2023 with a simple idea: make advanced image analysis accessible to everyone.
              We noticed that while AI was making tremendous strides in understanding visual content, the tools
              available to everyday users were either too complex or too limited.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              Our team of AI researchers and UX designers came together to build a platform that combines cutting-edge
              computer vision technology with an intuitive interface. The result is Image Reader - a tool that allows
              anyone to extract meaningful insights from images with just a simple prompt.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              Today, Image Reader is used by thousands of professionals across various industries - from marketing teams
              analyzing campaign visuals to researchers processing scientific imagery. Our mission remains the same:
              democratizing image analysis for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Meet Our Team</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind Image Reader
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={`/placeholder.svg?height=128&width=128&text=Team Member ${i}`}
                    alt={`Team Member ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-medium">Team Member {i}</h3>
                <p className="text-sm text-muted-foreground">
                  Co-Founder & {i === 1 ? "CEO" : i === 2 ? "CTO" : "CPO"}
                </p>
                <p className="mt-4 text-muted-foreground">
                  Passionate about{" "}
                  {i === 1
                    ? "building products that make a difference"
                    : i === 2
                      ? "cutting-edge AI technology"
                      : "creating intuitive user experiences"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Values</h2>

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
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                  <path d="M12 13v8" />
                  <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Accessibility</h3>
              <p className="mt-2 text-muted-foreground">
                We believe advanced technology should be accessible to everyone, regardless of technical expertise
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
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Transparency</h3>
              <p className="mt-2 text-muted-foreground">
                We're committed to being open about how our technology works and how we handle your data
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Privacy</h3>
              <p className="mt-2 text-muted-foreground">
                Your images and data are yours - we prioritize security and privacy in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

