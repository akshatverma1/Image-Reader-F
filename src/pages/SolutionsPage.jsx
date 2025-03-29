import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Solutions for Every Need</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Image Reader can transform your workflow across different platforms and use cases
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-48 relative rounded-lg overflow-hidden mb-6">
                <img
                  src="https://lh3.googleusercontent.com/ZqBz-wfpqRAu1wH1QgFLVA6LxEmG838nyhgbVpw-P-AA_yyOvE1yor9z92YQnXusQ5-w2jqGRKQyi6EHP6Ve-ZL4v-HiCOV_yIQ_=e365-pa-nu-w1440-rw"
                  alt="Google Photos Integration"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">Google Photos Integration</h3>
              <p className="mt-2 text-muted-foreground">
                Connect Image Reader directly to your Google Photos library for seamless analysis of your personal image
                collection
              </p>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link to="/comingsoon" className="flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-48 relative rounded-lg overflow-hidden mb-6">
                <img
                  src="https://1000logos.net/wp-content/uploads/2023/01/Godaddy-logo.png"
                  alt="GoDaddy Website Analysis"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">GoDaddy Website Analysis</h3>
              <p className="mt-2 text-muted-foreground">
                Optimize images on your GoDaddy-hosted website for better performance and SEO with our specialized tools
              </p>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link to="/comingsoon" className="flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-48 relative rounded-lg overflow-hidden mb-6">
                <img
                  src="https://logowik.com/content/uploads/images/vercel1868.jpg"
                  alt="Vercel Deployment"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">Vercel Deployment</h3>
              <p className="mt-2 text-muted-foreground">
                Integrate Image Reader's API into your Vercel-hosted applications for powerful image analysis
                capabilities
              </p>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link to="/comingsoon" className="flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Popular Use Cases</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            See how different industries are leveraging Image Reader
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {["E-commerce", "Healthcare", "Education", "Real Estate"].map((industry) => (
              <div key={industry} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium">{industry}</h3>
                <p className="mt-2 text-muted-foreground">
                  {industry === "E-commerce" && "Optimize product images and improve visual search capabilities"}
                  {industry === "Healthcare" && "Analyze medical imagery for preliminary assessments"}
                  {industry === "Education" && "Create interactive learning experiences with image recognition"}
                  {industry === "Real Estate" && "Enhance property listings with detailed image analysis"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your image workflow?</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of users who are already using Image Reader to extract valuable insights from their images
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

