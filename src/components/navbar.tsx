import { Link } from '@tanstack/react-router'
import { buttonVariants } from "@heroui/react"

const pages = [
  { label: "Form", link: "/" },
  { label: "Login", link: "/login" },
]

export const NavBar = () => {
  return (
    <div>
      {pages.map(({ label, link }) => {
        return <Link
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
  )
}