import React from 'react'
import styled from 'styled-components'
import BlockImage from 'components/molecules/home/honey-comb/BlockImage'
import BlockContent from 'components/molecules/home/honey-comb/BlockContent'

interface Props {
  content: {
    image: {
      url: string
      alt: string
    }
    position: string
    content: {
      title: string
      description: string
      url: {
        label: string
        slug: string
      }
    }
  }[]
}

const HoneyComb: React.FC<Props> = ({ content }: Props) => {
  return (
    <HoneyCombContainer>
      {content.map((comb) =>
        comb.position == 'left' ? (
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
