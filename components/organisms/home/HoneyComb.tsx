import BlockContent from 'components/molecules/home/honey-comb/BlockContent'
import BlockImage from 'components/molecules/home/honey-comb/BlockImage'
import React from 'react'
import styled from 'styled-components'

const HONEY_COMBS = [
  {
    image: {
      url: '/images/goalssh-400x400.png',
      alt: 'meet our attorneys',
    },
    position: 'left',
    content: {
      title: 'MEET OUR TEAM',
      description: `Our attorneys collaborate across the firm’s practice areas to achieve the best
      combination of knowledge, experience, and efficiency. We are dedicated to delivering
      outstanding client service.`,
      url: {
        label: 'Meet our attorneys',
        slug: '/attorneys',
      },
    },
  },
  {
    image: {
      url: '/images/colabsh2-400x400.png',
      alt: 'our legal services',
    },
    position: 'right',
    content: {
      title: 'OUR SERVICES',
      description: `We help our clients achieve their goals by providing tailored services with the
      focused experience of a boutique firm by drawing upon the resources of the firm’s
      core practice areas.`,
      url: {
        label: 'See what we do',
        slug: '/practices',
      },
    },
  },
]

const HoneyComb = () => {
  return (
    <HoneyCombContainer>
      {HONEY_COMBS.map((comb) =>
        comb.position === 'left' ? (
          <Comb key={comb.content.title}>
            <BlockImage url={comb.image.url} alt={comb.image.alt} position={comb.position} />
            <BlockContent {...comb.content} />
          </Comb>
        ) : (
          <Comb key={comb.content.title}>
            <BlockContent {...comb.content} />
            <BlockImage url={comb.image.url} alt={comb.image.alt} position={comb.position} />
          </Comb>
        )
      )}
    </HoneyCombContainer>
  )
}

const HoneyCombContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 124px;
`

const Comb = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 92px;
  }
`

export default HoneyComb
