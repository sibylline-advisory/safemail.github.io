import { Mail, Search, FileText } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Mail className="h-10 w-10 text-white" />,
      title: "Forward the Email",
      description: "Simply forward any suspicious email to agent@inbound.safemail.ai",
    },
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Automated Analysis",
      description: "Our secure environment processes the email without risking your systems",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Detailed Report",
      description: "Receive a comprehensive threat assessment with security recommendations",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3 relative">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center relative p-6 bg-white rounded-xl shadow-sm">
          <div className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center mb-8 shadow-md">
            {step.icon}
          </div>
          <h3 className="text-2xl font-medium mb-4 text-slate-900">{step.title}</h3>
          <p className="text-slate-600 text-lg">{step.description}</p>
          
          <div className="mt-4 text-center">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-primary font-medium">
              {index + 1}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div className="hidden md:block absolute left-[95%] top-20 transform translate-x-1/2 z-10">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M79.0607 21.0607C79.6464 20.4749 79.6464 19.5251 79.0607 18.9393L69.5147 9.3934C68.9289 8.80761 67.9792 8.80761 67.3934 9.3934C66.8076 9.97919 66.8076 10.9289 67.3934 11.5147L75.8787 20L67.3934 28.4853C66.8076 29.0711 66.8076 30.0208 67.3934 30.6066C67.9792 31.1924 68.9289 31.1924 69.5147 30.6066L79.0607 21.0607ZM0 21.5H78V18.5H0V21.5Z" 
                  fill="#94A3B8"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
