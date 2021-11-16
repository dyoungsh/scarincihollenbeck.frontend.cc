import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SHLogo from '../../../public/images/sh-logo-diamond.svg'

interface Props {
  scrollTop: boolean
}

const SiteLogo: React.FC<Props> = ({ scrollTop }: Props) => {
  if (!scrollTop) {
    return (
      <div>
        <Link href="/">
          <a>
            <Image
              alt="Scarinci Hollenbeck, LLC"
              width={360}
              height={65}
              layout="intrinsic"
              src={SHLogo}
            />
          </a>
        </Link>
      </div>
    )
  }
  return <></>
}

export default SiteLogo
