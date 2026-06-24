import React from 'react'
import { Home,ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
  <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900'>
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to="/">
     <div className="flex item-center space-x-3 cursor-pointer">  
      <Home className="h-8 w-8 text-orange-400 drop-shadow-lg"/>
      <h1 className="text-4xl font-extrabold tracking-widest uppercase">Sports <span className="text-orange-400">Hub</span></h1>

     </div>
</Link>
    <nav className="flex items-center space-x-6">
      <Link to={'/cart'} className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration-200 
      border border-orange-500/20 hover:border-orange-500/50
      shadow-lg cursor-pointer">
        <ShoppingCart className="h-6 w-6 text-orange-400"/>
        </Link>
      </nav>
  </div>
  </header>
   </>
  )
}

export default Navbar
