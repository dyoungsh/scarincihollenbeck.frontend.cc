import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Award } from 'types/Home'

interface Props {
  award: Award
}
const Accolade: React.FC<Props> = ({ award }: Props) => {
  const { url, alt, width, height } = award
  return (
    <AccoladeContainer>
      <Image src={url} alt={alt} width={width} height={height} />
    </AccoladeContainer>
  )
}

const AccoladeContainer = styled.div`
  margin 0 auto;
  text-align: center;
  position: relative;
  right: 0;
`

export default Accolade
