import { Link } from "react-router-dom"


function Header() {
  return (
    <>
    <nav className="flex justify-center items-center gap-4 bg-slate-800 p-4">
  <Link
    to="/"
    className="px-4 py-2 text-white rounded-md hover:bg-slate-700"
  >
    Home
  </Link>

  <Link
    to="/users"
    className="px-4 py-2 text-white rounded-md hover:bg-slate-700"
  >
    Users
  </Link>
</nav>

    </>
  )
}

export default Header