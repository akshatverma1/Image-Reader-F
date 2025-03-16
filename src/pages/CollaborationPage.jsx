import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Check, Users } from "lucide-react"

export default function CollaborationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Collaborate on Image Analysis</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Work together with your team to analyze images, share insights, and make better decisions faster.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/signup">Start Collaborating</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Team Collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Collaboration Features</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for teams to work together seamlessly
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Shared Workspaces</h3>
              <p className="mt-2 text-muted-foreground">
                Create dedicated spaces for different projects and teams to organize your image analysis work
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Real-time Annotations</h3>
              <p className="mt-2 text-muted-foreground">
                Highlight, comment, and annotate images in real-time with your team members
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
                  className="h-6 w-6 text-primary"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Version History</h3>
              <p className="mt-2 text-muted-foreground">
                Track changes and review previous versions of your image analyses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold">How Team Collaboration Works</h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Invite Team Members</h3>
                    <p className="mt-1 text-muted-foreground">
                      Add colleagues to your workspace with just their email address
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Upload and Analyze Images</h3>
                    <p className="mt-1 text-muted-foreground">
                      Share images with your team and use AI to extract insights
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Collaborate in Real-time</h3>
                    <p className="mt-1 text-muted-foreground">
                      Work together on the same images simultaneously with live updates
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Export and Share Results</h3>
                    <p className="mt-1 text-muted-foreground">
                      Export your findings in multiple formats or share directly with stakeholders
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Collaboration Workflow"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Collaboration Plans</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Choose the right plan for your team
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold">Starter Team</h3>
              <div className="mt-4 text-4xl font-bold">
                $49<span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-muted-foreground">For small teams just getting started</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Up to 5 team members",
                  "200 image analyses per month",
                  "Basic collaboration features",
                  "7-day version history",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full" variant="outline" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold">Business Team</h3>
              <div className="mt-4 text-4xl font-bold">
                $99<span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-muted-foreground">For growing teams with advanced needs</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Up to 15 team members",
                  "500 image analyses per month",
                  "Advanced collaboration features",
                  "30-day version history",
                  "Priority support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold">Enterprise Team</h3>
              <div className="mt-4 text-4xl font-bold">Custom</div>
              <p className="mt-2 text-muted-foreground">For large organizations with specific requirements</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited team members",
                  "Unlimited image analyses",
                  "Custom collaboration workflows",
                  "Unlimited version history",
                  "Dedicated account manager",
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

