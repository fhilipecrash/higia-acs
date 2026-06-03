import { Link } from '@tanstack/react-router'
import { Button, buttonVariants } from "@heroui/react"
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useNotification } from '@/hooks/useNotification';
import { toast } from '@heroui/react';

const pages = [
  { label: "Form", link: "/" },
  { label: "Login", link: "/login" },
]

export function NavBar() {
  const { notify } = useNotification();

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
      <div>
        <Button onClick={() => {
          toast("Toast de teste", {
            description: "Teste",
            timeout: 5000,
          })
        }}>
          Enviar toast
        </Button>
        <Button onClick={() => {
          notify("Pedido confirmado! 🎉", {
            body: "Seu pedido #1234 foi aprovado.",
            icon: "/logo.png"
          });
        }}>
          Enviar notificação
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  )
}