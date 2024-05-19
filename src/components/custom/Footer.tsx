import logo from '@/assets/logo.webp'
import Image from 'next/image'

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer p-4 bg-neutral text-neutral-content">
      <aside>
        <Image src={logo} alt="logo" width={60} height={60} />

        <p>
          Previous Papers.
          <br />
          Providing old question papers and helping students
          <br />© {date.getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  )
}
