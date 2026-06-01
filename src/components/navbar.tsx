import { Link } from '@tanstack/react-router'
import { buttonVariants } from "@heroui/react"
import { ThemeSwitcher } from '@/components/theme-switcher'

const pages = [
  { label: "Form", link: "/" },
  { label: "Login", link: "/login" },
]

export function NavBar() {
  return (
    <div className='flex justify-between'>
      <div>
        {pages.map(({ label, link }) => {
          return <Link
            key={label.toLowerCase()}
            className={`
              ${buttonVariants({ size: "lg", variant: "ghost" })}
            `}
            activeProps={{ className: buttonVariants({ size: "lg", variant: "outline" }) }}
            to={link}
          >
            {label}
          </Link>
        })}
      </div>
      <ThemeSwitcher />
    </div>
  )
}