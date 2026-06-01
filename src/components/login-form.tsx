import { Input, Button } from "@heroui/react"

export function LoginForm() {
  return (
    <form>
      <Input placeholder="Login" />
      <Input placeholder="Senha" />
      <Button>Login</Button>
    </form>
  )
}