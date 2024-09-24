import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Logo/IMG_6345.PNG'

function Navbar() {

  const [barOpen, setBarOpen] = useState(false)

  const khushi = [
    { name: 'Roadmaps', href: '/Roadmaps' },
    { name: 'Courses', href: '/Courses' },
    { name: 'Certificate', href: '/Certificate' },
    { name: 'Training', href: '/Training' },
    { name: 'Hire', href: '/Hire' },
  ]

  const [menu, setMenu] = useState(false)

  const HandlleMenu = () => {
    setMenu(!menu)
  }
  return (
    <div>

      {<nav className='fixed w-full flex pt-0 bg-white drop-shadow-md text-[#333333] md:px-32 justify-between items-center fixed top-0 left-0 w-full'>

        <div className='flex items-center'>
          <Link to='/'><img className='h-[60px]' src={logo} alt="logo" /></Link>
        </div>



        <div className='pl-[100px]'>
        <ul className='hidden md:flex gap-[50px] sevillana-regular text-xl playwrite-de-grund'>
          {
            khushi.map((a) => (
             <li className='font-bold'><Link to={a.href}>{a.name}</Link></li>
            ))
          }
        </ul>

        </div>


        <div onClick={() => setBarOpen(!barOpen)} className=''>
          {
            menu ? (<i onClick={HandlleMenu} class="fa-solid fa-xmark  text-3xl md:hidden mr-2" />)
              :
              (<i onClick={HandlleMenu} class="fa-solid fa-bars text-3xl md:hidden mr-2" />)
          }
        </div>

        <div className={`playwrite-de-grund absolute md:hidden top-[50px] bg-white right-0 flex flex-col px-[100px] justify-center items-center ${barOpen ? "opacity-100" : "opacity-0"}`}>
          {
            khushi.map((a) => (
              <div className='font-semibold hover:bg-[#151523] hover:text-white py-[16px] px-2 rounded-xl'><Link to={a.href}>{a.name}</Link></div>


            ))
          }

        </div>

        <button className='hidden md:flex bg-blue-400 px-10 py-2  rounded-md font-semibold uppercase overflow-hidden position relative display end-8'>Enroll Now</button>
      </nav>}
    </div>
  )
}
export default Navbar






