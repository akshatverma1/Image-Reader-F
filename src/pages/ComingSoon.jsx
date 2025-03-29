import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Clock } from "lucide-react"

export default function ComingSoon({
  title = "This Feature is Coming Soon",
  description = "We're working hard to bring you this feature. Please check back later.",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-16 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Clock className="h-10 w-10 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-4">{title}</h1>

        <p className="text-muted-foreground mb-8">{description}</p>

        <Button asChild size="lg">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}

