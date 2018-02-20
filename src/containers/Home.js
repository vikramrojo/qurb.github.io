import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import { space, fontSize, fontWeight, color, lineHeight, fontFamily, display} from 'styled-system'
import system from 'system-components'
import { Grid, Cell } from 'styled-css-grid'

import logoImg from '../logo.svg'

const Wordmark = system ({
  lineHeight: 3,
  pt: 0,
  fontSize: 5,
  fontWeight: 'xbold',
  color: 'blue',
  display: 'block',
  fontFamily: 'Muli'
})

const Headline = system ({
  pt: 4,
  lineHeight: 3,
  color: 'purple',
  fontSize: 4,
  is: 'div',
  fontFamily: 'Muli',
  fontWeight: 'xbold',
  textAlign: 'left'
})

const SubHeadline = system ({
  lineHeight: 1,
  color: 'purple',
  fontSize: 2,
  is: 'div',
  fontFamily: 'Muli',
  fontWeight: 'xbold',
  m: 0
})

const SubHeadlineLink = system ({
  color: 'blue',
  is: 'a',
  lineHeight: 1,
  fontSize: 2,
  fontFamily: 'Muli',
  fontWeight: 'xbold',
  hover: {
    textDecoration: 'underline',
    color: 'red'
  },
})

const Body = system ({
  mt: 4,
  lineHeight: 1,
  is: 'div',
  fontSize: 1
})

const Label = system ({
  lineHeight: 0,
  is: 'div',
  fontSize: 0,
  color: 'blue',
  mt: 3,
  mb: 3,
  fontFamily: 'Muli',
  fontWeight: 'xbold',
  textAlign: 'right',
  display: 'block'
})

const Badge = system ({
  lineHeight: 0,
  is: 'div',
  fontSize: 0,
  display: 'inline-block',
  bg: 'gray.3',
  p: 3,
  borderRadius: 2,
  mr: 4
})

const Box = system ({
  textAlign: 'right',
})

const Image = system ({
  is: 'img',
  p: 0,
  display: 'inline-block'
})

export default withSiteData(() => (
  <div>
    <Grid columns={8} gap="32px">
      <Cell>
        <Box>
          <Image src={logoImg}/>
        </Box>
      </Cell>
      <Cell width={6}>
        <Wordmark display='inline-block' lineHeight={3} pt={0} color='blue' fontWeight='xbold' fontSize={4}>qurb</Wordmark>
        <Label pt={4} textAlign='left'>Spend Smart, Save Tomorrow</Label>
      </Cell>
      <Cell top={2}>
        <Label>INTRO</Label>
      </Cell>
      <Cell left={2} width={6}>
        <Body fontSize={2} lineHeight={2} mt={0}>A repository of publicly available financial resources <br/> to get you started on the road to financial awareness.</Body>
      </Cell>
      <Cell top={3}>
        <Label>02.19.18</Label>
        <Headline textAlign='right' pt={0} color='gray.3'>§1</Headline>
      </Cell>
      <Cell width={5}>
        <SubHeadlineLink href='http://medium.com' fontSize={3} lineHeight={2}>Why being a woman founder is like being dirt poor</SubHeadlineLink>
        <Body mb={4}>If you’ve ever been to the home of someone who is struggling financially…</Body>
        <Badge>Work</Badge>
        <Badge>Opinion</Badge>
        <Label m={3} display='inline-block' textAlign='left'>medium.com</Label>
      </Cell>
      <Cell width={2}>
        <img/>
      </Cell>
      <Cell top={4}>
        <Label>QURBED</Label>
      </Cell>
      <Cell width={3}>
        <SubHeadline>Happiness is Irrational</SubHeadline>
        <Body>You are already designed to be unhappy.</Body>
        <Label textAlign='left'>medium.com</Label>
        <SubHeadline mt={6}>Happiness is Irrational</SubHeadline>
        <Body>You are already designed to be unhappy.</Body>
        <Label textAlign='left'>medium.com</Label>
      </Cell>
      <Cell>
        <Label>CONSUMERISM</Label>
      </Cell>
      <Cell width={3}>
        <SubHeadline>Your Lifestyle Has Already Been Designed</SubHeadline>
        <Body>We've been led into a culture that has been engineered to leave us tired, hungry for indulgence.</Body>
        <Label textAlign='left'>raptitude.com</Label>
      </Cell>
      <Cell top={5}>
        <Label>ENDLESS</Label>
      </Cell>
      <Cell width={3}>
        <SubHeadline>Happiness is Irrational</SubHeadline>
        <Body>You are already designed to be unhappy.</Body>
        <Label textAlign='left'>medium.com</Label>
      </Cell>
    </Grid>
  </div>
))
