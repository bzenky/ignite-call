import { Box, Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  padding: '0 $4',
  margin: '$20 auto $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$6',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})
