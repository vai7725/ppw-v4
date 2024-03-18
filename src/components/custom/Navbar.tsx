import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.webp'

import { HiBars3BottomRight } from 'react-icons/hi2'

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  return (
    <nav className="navbar bg-primary text-secondary grid grid-cols-12">
      <div className="col-span-3 ">
        <Link href={'/'} className="h-full">
          <Image src={logo} alt="logo" width={60} height={60} />
        </Link>
      </div>
      <ul className="menu menu-horizontal bg-primary w-fit rounded-box col-span-9 hidden sm:flex font-semibold text-base">
        {navLinks.map((l) => (
          <li key={l.title}>
            <Link
              href={l.href}
              className="hover:bg-secondary hover:text-primary"
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="dropdown dropdown-bottom dropdown-end col-span-9 flex items-center justify-end sm:hidden">
        <div tabIndex={0} role="button" className="btn btn-sm btn-primary ">
          <HiBars3BottomRight className="text-secondary" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-primary rounded-box w-52"
        >
          {navLinks.map((l) => (
            <li key={l.title}>
              <Link
                href={l.href}
                className="hover:bg-secondary hover:text-primary"
              >
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
