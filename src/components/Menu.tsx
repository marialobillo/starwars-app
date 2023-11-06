import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="flex w-full flex-row gap-3 pl-2 py-3 mb-4 bg-cyan-600 text-white">
      <li className="hover:text-slate-800"><Link to="/">Home</Link></li>
      <li className="hover:text-slate-800"><Link to="/profile">Profile</Link></li>
    </ul>
  )
}

export default Menu