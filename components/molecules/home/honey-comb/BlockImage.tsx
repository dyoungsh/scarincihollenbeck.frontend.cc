import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface Props {
  alt: string
  url: string
  position: string
}

const BlockImage: React.FC<Props> = ({ url, alt, position }: Props) => {
  return (
    <ImageContainer position={position}>
      <Image src={url} alt={alt} width={500} height={500} layout="intrinsic" />
    </ImageContainer>
  )
}

interface ImageProps {
  position: string
}
const ImageContainer = styled.div<Pick<ImageProps, 'position'>>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 50%;
    justify-content: ${({ position }) => (position === 'left' ? 'flex-start' : 'flex-end')};
  }
`

export default BlockImage
