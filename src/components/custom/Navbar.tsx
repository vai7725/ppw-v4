import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.webp'

import { HiBars3BottomRight } from 'react-icons/hi2'
import Container from './Container'

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
    <header className="bg-primary text-secondary">
      <Container className="py-1">
        <nav className="navbar grid grid-cols-12 p-0">
          <div className="col-span-3 ">
            <Link href={'/'} className="h-full">
              <Image src={logo} alt="logo" width={60} height={60} />
            </Link>
          </div>
          <ul className="menu menu-horizontal bg-primary items-center justify-center rounded-box col-span-6 hidden sm:flex font-semibold text-base w-full ">
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

          <div className="col-span-9 sm:col-span-3 flex itemce justify-end ">
            {/* <Link href={'/login'} className="btn btn-secondary btn-sm mr-2">
              Login
            </Link> */}
            <div className="dropdown dropdown-bottom dropdown-end  flex items-center justify-end w-fit h-full sm:hidden">
              <div>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-sm btn-primary "
                >
                  <HiBars3BottomRight className="text-secondary" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-secondary text-primary rounded-box w-52"
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
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
