import Image from "next/image"
import Link from "next/link"

export default function TrustedBy() {
  const companies = [
    { name: "Seshat Bank", logo: "/logos/seshat-bank.png", href: null },
    { name: "Sibylline", logo: "/logos/sibylline.png", href: "https://www.sibylline.xyz/" },
    { name: "rise", logo: "/logos/rise.png", href: "https://www.riseworks.io/" },
    { name: "Harvest", logo: "/logos/acme.png", href: "https://joinharvest.xyz/" },
    { name: "Simplicity Group", logo: "/logos/global-cs.png", href: "https://www.simplicitygroup.xyz/" },
  ]

  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-wider text-slate-400 mb-8">Trusted by teams at</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
        {companies.map((company, index) => {
          const LogoImage = (
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          )

          return (
            <div
              key={index}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {company.href ? (
                <Link
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${company.name}`}
                >
                  {LogoImage}
                </Link>
              ) : (
                LogoImage
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
