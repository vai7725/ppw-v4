import Container from '@/components/custom/Container'
import ContactForm from './components/Form'

export default function Contact() {
  return (
    <div>
      <Container className="max-w-[48rem] space-y-4">
        <h1 className="text-3xl font-bold text-center">Reach out to us</h1>
        <ContactForm />
      </Container>
    </div>
  )
}
