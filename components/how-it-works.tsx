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
    <div className="grid gap-6 md:grid-cols-3 relative">
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
            <div className="hidden md:block absolute left-[100%] top-1/4 transform translate-x-[-10px] z-10">
              <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807611 37.9792 0.807611 37.3934 1.3934C36.8076 1.97919 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM0 13.5H48V10.5H0V13.5Z" 
                  fill="#94A3B8"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
