import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface Props {
  image: string
  alt: string
}
const ProfileImage: React.FC<Props> = ({ image, alt }: Props) => {
  return (
    <ImageContainer>
      <Image
        src={image}
        alt={alt}
        width={320}
        height={342}
        layout="fixed"
        quality={100}
        className="animate__animated animate__fadeInUp animate__fast my-5"
        priority
        loading="eager"
      />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  span {
    img {
      border: 10.5px solid hsla(0, 0%, 100%, 0.5) !important;
      background-origin: border-box;
      margin-top: 1px !important;
    }
  }
`
export default ProfileImage
