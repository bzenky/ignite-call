import Image from 'next/image'
import { Heading, Text } from '@ignite-ui/react'
import { ClaimUserNameForm } from './components/ClaimUsernameForm'
import previewImage from '../../assets/app-preview.png'
import { Container, Hero, Preview } from './styles'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>

          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUserNameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            alt="Calendário simbolizando aplicação em funcionamento"
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
