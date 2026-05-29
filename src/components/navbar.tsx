import { Link } from '@tanstack/react-router'

export const NavBar = () => {
  return (
    <div>
      <Link to="/" className="[&.active]:font-bold">
        Form
      </Link>
      <Link to="/login" className="[&.active]:font-bold">
        Login
      </Link>
    </div>
  )
}