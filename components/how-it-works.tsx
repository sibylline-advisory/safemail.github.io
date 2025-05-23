import { Mail, Search, FileText } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Forward the Email",
      description: "Simply forward any suspicious email to agent@inbound.safemail.ai",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Automated Analysis",
      description: "Our secure environment processes the email without risking your systems",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Detailed Report",
      description: "Receive a comprehensive threat assessment with security recommendations",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3 relative">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">
          <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mb-6">
            {step.icon}
          </div>
          <h3 className="text-xl font-medium mb-3 text-slate-900">{step.title}</h3>
          <p className="text-slate-600">{step.description}</p>

          {index < steps.length - 1 && (
            <div className="hidden md:block absolute left-full top-8 -ml-2">
              <div className="w-[calc(100%+1rem)] flex justify-center">
                <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M63.0607 13.0607C63.6464 12.4749 63.6464 11.5251 63.0607 10.9393L53.5147 1.3934C52.9289 0.807611 51.9792 0.807611 51.3934 1.3934C50.8076 1.97919 50.8076 2.92893 51.3934 3.51472L59.8787 12L51.3934 20.4853C50.8076 21.0711 50.8076 22.0208 51.3934 22.6066C51.9792 23.1924 52.9289 23.1924 53.5147 22.6066L63.0607 13.0607ZM0 13.5H62V10.5H0V13.5Z"
                    fill="#E2E8F0"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
