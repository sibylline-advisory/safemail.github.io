import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollLink from "@/components/scroll-link"

export default function PricingTable() {
  const plans = [
    {
      name: "Safemail AI Basic",
      description: "For individuals who want to try Safemail AI",
      price: "$6",
      period: "per month",
      features: [
        "10 email analyses per month",
        "Basic phishing detection",
        "Email report within 30 minutes",
        "Web dashboard access",
        "7-day free trial",
      ],
      cta: "Start Free Trial",
      href: "https://buy.stripe.com/eVa7sJ1Oae6ch2M9AC",
      highlight: false,
    },
    {
      name: "Safemail AI Premium",
      description: "For professionals who need reliable email security",
      price: "$30",
      period: "per month",
      features: [
        "200 email analyses per month",
        "Advanced phishing detection",
        "File attachment analysis",
        "Email report within 5 minutes",
        "Web dashboard with detailed reports",
        "Email notifications",
        "14-day free trial",
      ],
      cta: "Start Free Trial",
      href: "https://buy.stripe.com/6oE4gx3WibY4cMw9AD",
      highlight: true,
    },
    {
      name: "Safemail AI Pro",
      description: "For teams that need comprehensive protection",
      price: "Custom",
      period: "",
      features: [
        "Unlimited email analyses",
        "Advanced phishing detection",
        "File attachment analysis",
        "Instant email reports",
        "Team dashboard with analytics",
        "API access",
        "Dedicated support",
        "Personalized onboarding",
      ],
      cta: "Schedule a Time",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HBhiG8Q25q5flYb8ny3kvniM2sasMbRSVEu_7vdPAPeR0xfIahNjzuLW6RovfBXzF2bnM8nhr",
      highlight: false,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Responsive pricing grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col p-8 rounded-2xl ${
              plan.highlight ? "bg-gradient-brand text-white border-none shadow-xl relative" : "bg-white border border-slate-100 shadow-sm"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-medium px-3 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3 className={`text-xl font-medium mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
              <p className={`text-sm ${plan.highlight ? "text-white/80" : "text-slate-500"}`}>{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className={`text-3xl font-medium ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
              {plan.period && <span className={`ml-1 ${plan.highlight ? "text-white/80" : "text-slate-500"}`}>{plan.period}</span>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-primary"}`} />
                  <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-slate-600"}`}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`rounded-full ${
                plan.highlight
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50"
              }`}
              asChild
            >
              <a href={plan.href} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
