export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer footer-center p-4 bg-primary text-secondary">
      <aside>
        <p>
          Copyright © {date.getFullYear()} - All right reserved Previous Papers
        </p>
      </aside>
    </footer>
  )
}
