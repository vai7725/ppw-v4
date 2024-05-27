import Container from '@/components/custom/Container'
import ContactForm from './components/Form'
import { Metadata } from 'next'
import { PROJECT_TITLE } from '@/utils/constants'

export const metadata: Metadata = {
  title: `Contact Us - Get in Touch with ${PROJECT_TITLE} Team`,
  description: `Need assistance or have questions? Contact the Previous Year Papers team today. We're here to help you with any inquiries regarding accessing past exam papers, technical support, or partnership opportunities. Reach out to us and let's connect!`,
}

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
